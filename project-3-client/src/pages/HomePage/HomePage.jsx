import "./HomePage.css";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import entriesdatas from "./entries.json"
function HomePage() {
  const { user} = useContext(AuthContext);
  return (
    <div>
      <h1>Hello {user.name.charAt(0).toUpperCase() + user.name.slice(1)}</h1>
      {entriesdatas.map((eachEntry) => {
          return ( <Entry
            entryClient={eachEntry.entryClient}
            entryQuantity={eachEntry.entryQuantity}
            entryDate={eachEntry.entryDate}
          />
          )})}
      <Link to="/Createentry">
        <button>Create entry</button>
      </Link>
    </div>
  );
}

export default HomePage;
