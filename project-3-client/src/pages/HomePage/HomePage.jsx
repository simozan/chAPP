import "./HomePage.css";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
function HomePage() {
  const { user} = useContext(AuthContext);
  return (
    <div>
      <h1>Hello!</h1>
      <span>{user && user.email}</span>
    </div>
  );
}

export default HomePage;
