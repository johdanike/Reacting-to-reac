import React, { useState } from "react";
import style from "../styles/signup.module.css";
import CustomButton from "../reusables/CustomButton";
import {Link, useNavigate} from "react-router-dom"
const SignUp = () => {

  const navigate = useNavigate();

    const userDetails = {
        username: "",
        email: "",
        password: "",
    }

    const [data, setData] = useState(userDetails)

  function handleChange(event) {
    const {name, value}  = event.target
    // setData((previous) => ({...prevData, [name]: value}));
    setData((prevData)=>{
      return {...prevData, [name]: value}
    });
  };

  const handleSubmit = ()=>{
    console.log("Submitted...")
    // setTimeout(()=>{
        navigate('/login')
    // }, 2000)
  }

  console.log(data)

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <div>
          <input
            type="text"
            name="username"
            className={style.input}
            placeholder="Enter username"
            onChange={handleChange}
            
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            className={style.input}
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            className="input"
            placeholder="Enter password"
            required
          />
        </div>

        <CustomButton style={style.btn} type="submit" textContent = "submit"/>

      </form>
      
      <div>
        <span>Already have an account?</span>
        <span><Link to={'/login'}>Login</Link></span>
      </div>

    </div>
  );
};
export default SignUp;
