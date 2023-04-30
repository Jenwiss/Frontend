import React from "react";
import Input from "../individuals/Input";

const ForgotPassword = () => {
    return(
        <section className="forgotPassword-container">
            <header>
            <button type="back" className="backbutton">
            <i class="fa-light fa-chevron-left"></i></button>
            
            <p>Forgot password</p>
            </header>
            <div>
                <p className="breadText">
                    Please enter your email adress. You will receive a link to create a new password via email.
                </p>
            </div>
            <div>

            <label><Input/></label>
            </div>
        </section>
    )
}
export default ForgotPassword  
