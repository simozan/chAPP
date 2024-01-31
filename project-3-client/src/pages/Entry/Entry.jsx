import "./Entry.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react"
import { AuthContext } from "../../context/auth.context";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";

function Entry() {
    const { user, setEntry } = useContext(AuthContext);
    const [entryClient, setEntryClient] = useState("");
    const [entryQuantity, setEntryQuantity] = useState("");
    const [entryDate, setEntryDate] = useState("");

    //const handleEntryClient = (e) => setEntryClient(e.target.value);
    //const handleEntryQuantity = (e) => setEntryQuantity(e.target.value);
    // const handleEntryDate = (e) => setEntryDate(e.target.value);

    const navigate = useNavigate();

    // devo importare user id para attribuirlo al entry
    // const getFamilyId = async (event) => {
    //   try {
    //     const familyMembersResponse = await fetch(`${import.meta.env.VITE_SERVER_URL}/entry/${user._id}`)
    //     const familyMembers = await familyMembersResponse.json()
    //     console.log(familyMembers);
    //       setfamilyMember(familyMembers)
    //   } catch (error) { console.log(error); }
    // }
    //  useEffect(() => {
    //      getFamilyId()
    //  }, [])

    const handleEntrySubmit = async (e) => {
        e.preventDefault()
        try {
            const entry = await fetch(`${import.meta.env.VITE_SERVER_URL}/entry/create`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ entryClient: entryClient, entryQuantity: entryQuantity, entryDate: entryDate, entryOwner: user._id })
            })
            const jsonEntry = await entry.json
            setEntry(jsonEntry)

            //setEntryClient("");
            //  setEntryQuantity("");
            // setEntryDate("");
            navigate('/')
        }
        catch (error) { console.log(error) }
    }
    return (
        <div className="Entry">
            <Navbar />
            <h1>New Entry</h1>
            <form onSubmit={handleEntrySubmit}>

                <label>Client:</label>
                <input type="text" name="entryClient" value={name} onChange={handleEmail} />

                <label for="expiringDate">Date:</label>
                <input type="date" id="expiring-date" name="expiringDate" required />

                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={handleName} />

                <button type="submit">Create Entry</button>
            </form>
        </div>)
}

export default Entry;