import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import "./Login.css";

export default function Login() {
  const [users, setusers] = useState({});
  const navigate = useNavigate();
 
  const handleLogin = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/login/", {
        method: "POST",
        body: JSON.stringify(users),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!data.access_token) {
        alert("Login Failed");
      } else {
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("refresh", data.refresh_token);
        navigate("/");
      }
    } catch (error) {
      console.error('Error logging in',error);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <div className="form">
        <div className="mb-3">
          <div className="form-group">
            {" "}
            <label htmlFor="username" className="form-label">
              username
            </label>
            <input
              type="username"
              id="username"
              className="form-control"
              onInput={(e) => {
                setusers({ ...users, username: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              id="password"
              className="form-control"
              onInput={(e) => {
                setusers({ ...users, password: e.target.value });
              }}
            />
          </div>
        </div>
        <button className="btn btn-primary" type="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
