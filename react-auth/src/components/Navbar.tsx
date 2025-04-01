import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { RootState } from "../store/store";

const Navbar: React.FC = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav>
      <Link to="/">Home</Link>
      {token ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
