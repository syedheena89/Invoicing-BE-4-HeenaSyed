import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const [users, setusers] = useState({
    name:"",
    email:"",
    password:"",
    username:"",
  });

  const handleSubmit = (e) =>{
    e.preventDefault()
    const apiUrl = "http://localhost:8000/api/user/signup/";

    //Make the api call using fetch

    fetch(apiUrl,{
      method:"POST",
      headers: {
        "content-Type":"application/json",
      },
      body:JSON.stringify(users),
    })
      .then((response)=>{
        if (response.status === 201){
          navigate("/login");
        } else {
          alert("Error signing up");
        }
      })
      .catch((error)=>{
        console.error("Error signing up:",error);
      })
  };
 
  
  return (
    <div className="container">
      <Navbar />
      <form>
        {" "}
        <div className="mb-3">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onInput={(e) => {
                setusers({ ...users, name: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              onInput={(e) => {
                setusers({ ...users, email: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
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
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSubmit}
        >
          SignUp
        </button>
      </form>
    </div>
  );
}
