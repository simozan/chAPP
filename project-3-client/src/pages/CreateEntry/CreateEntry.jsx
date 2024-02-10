import "./CreateEntry.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react"
import { AuthContext } from "../../context/auth.context";
import { useEffect } from "react";

function CreateEntry() {
    const { user } = useContext(AuthContext);
    const [entryClient, setEntryClient] = useState("");
    const [entryQuantity, setEntryQuantity] = useState("");
    const [entryDate, setEntryDate] = useState("");
    const handleEntryClient = (e) => setEntryClient(e.target.value);
    const handleEntryQuantity = (e) => setEntryQuantity(e.target.value);
    const handleEntryDate = (e) => setEntryDate(e.target.value);
    const navigate = useNavigate();
    
    const handleEntrySubmit = async (e) => {
        e.preventDefault()
        try {
            const entry = await fetch(`${import.meta.env.VITE_SERVER_URL}/entry`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ entryClient: entryClient, entryQuantity: entryQuantity, entryDate: entryDate, entryOwner: user._id })
            })

            setEntryClient("");
            setEntryQuantity("");
            setEntryDate("");
            navigate('/')
        }
        catch (error) { console.log(error) }
    }
    return (
        <div className="Entry">
            <h1>New Entry</h1>
            <form onSubmit={handleEntrySubmit}>
                <p>Client</p>
                <input name="entryClient" required onChange={handleEntryClient}>
                </input>
                <p>Quantity (€)</p>
                <input type="number" name="entryQuantity" required onChange={handleEntryQuantity}>
                </input>
                <p>Date</p>
                <input type="date" name="entryDate" required onChange={handleEntryDate}>
                </input>
                <br />
                <br />
                <button type="submit"> create entry </button>
            </form>
        </div>)
}

export default CreateEntry;