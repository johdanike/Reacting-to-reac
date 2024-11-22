import React, { useState } from "react";
import { Link } from "react-router-dom"
import CustomButton from "../reusables/CustomButton"
import style from "../styles/signup.module.css";

const Login = () =>{

        const userLoginDetails = {
            email: "",
            password: "",
        }
    
        const [data, setLoginData] = useState(userLoginDetails)
    
      function handleChange(event) {
        const {name, value}  = event.target
        // setData((previous) => ({...prevData, [name]: value}));
        setData((prevData)=>{
          return {...prevData, [name]: value}
        });
      }
    
      console.log(data)



    return (
        <div>
            <form action="">
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
                        className={style.input}
                        placeholder="Enter password"
                        onChange={handleChange}
                        required
                    />
                </div>
            
            <CustomButton style={style.btn} type="submit" textContent = "login"/>

            </form>
            <div>
                <span>Already have an account?</span>
                <span><Link to={'/login'}>Login</Link></span>
            </div>
        </div>
    )
}
export default Login;