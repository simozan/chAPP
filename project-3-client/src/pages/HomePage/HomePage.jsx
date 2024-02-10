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
      {entriesdatas.map((eachEntry) => {
        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Date</th>
                  <th>Client</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Row 1</td>
                  <td>Row 1</td>
                  <td>Row 1</td>
                </tr>
                <tr>
                  <td>Row 2</td>
                  <td>Row 2</td>
                </tr>
                <tr>
                  <td>Row 3</td>
                  <td>Row 3</td>
                  <td>Row 3</td>
                </tr>
                <tr>
                  <td>Row 4</td>
                  <td>Row 4</td>
                </tr>
              </tbody>
            </table>
            <Entry
              entryClient={eachEntry.entryClient}
              entryQuantity={eachEntry.entryQuantity}
              entryDate={eachEntry.entryDate}
            />
          </div>
        )
      })}
      <Link to="/CreateEntry">
        <button>Create entry</button>
      </Link>
    </div>
  );
}

export default HomePage;
