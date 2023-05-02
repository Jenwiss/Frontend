import React from "react"
import Input from "../individuals/Input"
import Button from "../individuals/Button"
import { Link, useNavigate } from "react-router-dom"

const SignIn = () => {
    const navigate = useNavigate();
    
    return(
        <section className="signin-container">
            <header>
            <button type="click" className="backbutton">
            <i class="fa-light fa-chevron-left"></i></button>
            <p className="signinText">Sign in</p>
            </header>    

            <div className="breadtext">
                <p className="line">|</p> 
                <p className="welcomeText">Welcome back!</p>
                <p className="signinToContinue">Sign in to continue</p>
            </div>
            <div className="breadtext">
                <Input></Input>
                <Input></Input>
            </div>
            <div className="radiobutton-section">
                <label>
                <input type="radio" value="rememberMe" checked={true}/>
                Remember me
                </label>
                <button type="text" onClick={() => navigate("/ForgotPassword")} className="forgotPasswordBtn">Forgot password?</button>
            </div>
            <div className="buttons">
                <button type="text" onClick={() => navigate("/Signup")} className="textbutton">Dont't have an account? Sign up</button>

            </div>


        </section>
    )
}
export default SignIn  