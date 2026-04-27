import { Link, useNavigate } from "react-router-dom";
import { isAuth } from "./auth";

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/books">Books</Link> |

      {isAuth() ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Header;