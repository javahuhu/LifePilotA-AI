import React, { useState } from "react";
import type { LoginData } from "../../types/auth.types";
import { loginUser } from "../../api/auth.api";
import loginStyle from "../LogIn/login.module.css";
import GoogleIcon from "../../assets/googleicon.png";
import FacebookIcon from "../../assets/facebookicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Login: React.FC = () => {
    const [formData, setFormData] = useState<LoginData>({ email: "", password: "" });
    const [error, setError] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await loginUser(formData);
            console.log("Logged in:", response);

        } catch (err: any) {
            setError(err.message || "Login Failed");
        }
    }


    return (
        <div className={loginStyle.loginContainer}>
            <h2 className={loginStyle.welcomeTXT}>Welcome to LifePilot AI</h2>
            <p className={loginStyle.p}>Your personal AI decision engine + life tracker</p>


            <div className={loginStyle.socialContainer}>
                <button className={loginStyle.googleBTN}>
                    <img src={GoogleIcon} alt="Google Logo" width={20} />
                    Sign In With Google
                </button>



                <button className={loginStyle.facebookBTN}>
                    <img src={FacebookIcon} alt="Facebook Logo" width={20} />
                    Sign In With Facebook
                </button>

            </div>

            <div className={loginStyle.divider}>
                <span>OR</span>
            </div>

            <form onSubmit={handleSubmit} className={loginStyle.loginForm}>
                <div className={loginStyle.inputContainer}>
                    <FontAwesomeIcon icon={faEnvelope} className={loginStyle.inputIcon} />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={loginStyle.inputContainer}>
                    <FontAwesomeIcon icon={faLock} className={loginStyle.inputIcon} />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={loginStyle.loginBTN}>
                    <button type="submit">Log In</button>
                </div>
                {error && <p>{error}</p>}


            </form>


        </div>
    );
}

export default Login;


