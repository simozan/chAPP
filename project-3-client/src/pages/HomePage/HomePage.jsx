import "./HomePage.css";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import { Link } from "react-router-dom";
function HomePage() {
  const { user} = useContext(AuthContext);
  return (
    <div>
      <h1>Hello {user.name.charAt(0).toUpperCase() + user.name.slice(1)}</h1>
      <Link to="/entry">
        <button>Create entry</button>
      </Link>
    </div>
  );
}

export default HomePage;
