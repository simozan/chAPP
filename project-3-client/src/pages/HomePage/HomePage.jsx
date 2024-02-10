import "./HomePage.css";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import entriesdatas from "./entries.json"
import Entry from "../../components/Entry/Entry";
function HomePage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Hello {user.name.charAt(0).toUpperCase() + user.name.slice(1)}</h1>
      <div>
        <div className="TableLine">
          <p className="Dimensions">Date</p>
          <p className="Dimensions">Client</p>
          <p className="Dimensions">€/h</p>
          <p className="Dimensions">Hours</p>
          <p className="Dimensions">Total</p>
        </div>
        {entriesdatas.map((eachEntry) => {
          return (
            <Entry
              entryClient={eachEntry.entryClient}
              entryHour={eachEntry.entryHour}
              entryEurosHour={eachEntry.entryEurosHour}
              entryDate={eachEntry.entryDate}
            />
          )
        })}
      </div>
      <Link to="/CreateEntry">
        <button>Create entry</button>
      </Link>
    </div>
  );
}

export default HomePage;
