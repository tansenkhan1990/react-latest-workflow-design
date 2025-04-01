import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
       // username and password is given below
        // {
        //     "username": "emilys",
        //     "password": "emilyspass"
        //   }
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: credentials.username,
        password: credentials.password,
      });

      const { token } = response.data;
      dispatch(loginSuccess({ user: { username: credentials.username }, token }));
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials!");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
