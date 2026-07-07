import React, { useState } from "react";
import type { LoginData } from "../../types/auth.types";
import { loginUser } from "../../api/auth.api";
import loginStyle from "../LogIn/login.module.css";
import "./login-responsive.css";
import lifePilotLogo from "../../assets/lifepilotlogo.png";
import sampleUser from "../../assets/sampleuser.jpg";
import GoogleIcon from "../../assets/googleicon.png";
import FacebookIcon from "../../assets/facebookicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import { Sparkles } from "lucide-react";
import ButtonComponent from "../../components/Button/button";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<LoginData>({ email: "", password: "" });
    const [error, setError] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await loginUser(formData);
            console.log("Logged in:", response);
            navigate('/home');
        } catch (err: any) {
            setError(err.message || "Login Failed");
        }
    }


    return (
        <div className={loginStyle.container}>


            {/* left Container Start */}
            <div className={loginStyle.leftContainer}>

                {/* Decoration Circle */}
                <div className={loginStyle.circleTopRight} />
                <div className={loginStyle.circleBottomLeft} />
                <div className={loginStyle.circleCenter} />

                {/* logo and header */}
                <div className={loginStyle.logoContainer}>

                    <img src={lifePilotLogo} alt='Logo' className={loginStyle.loginLogo} />

                    <span className="text-white fs-5 fw-semibold">LifePilot AI</span>
                </div>
                {/* logo and header end */}



                <div className={loginStyle.loginSparkContainer}>

                    <div className={loginStyle.loginSpark}>
                        <Sparkles size={17} className="text-white" />
                        <span className={loginStyle.sparkLabel}>AI-Powered Decision Engine</span>
                    </div>
                </div>

                <span className="text-white" style={{ maxWidth: "100%", fontWeight: "bold", fontSize: "2.2rem", marginTop: "25px", display: "block" }}>Welcome back,<br />Pilot. 👋</span>
                <p className={loginStyle.miniLabel}>Your action plans, progress tracking, and AI decisions are all waiting for you. Let's keep moving forward.</p>

                <div className={loginStyle.feedBackContainer}>
                    <p>"LifePilot AI completely transformed how I manage my finances and career goals. The AI plans are incredibly accurate!"</p>

                    <div className={loginStyle.user}>
                        <div className={loginStyle.userProfile}>
                            <img src={sampleUser} alt='User' className={loginStyle.userImage} />
                        </div>

                        <div className={loginStyle.userInfo}>
                            <span className={loginStyle.userName}>Jordan Mitchell</span>
                            <span className={loginStyle.userRole}>Freelance Designer</span>
                        </div>

                    </div>
                </div>



                <div className={loginStyle.LoginRate}>

                    <div className={loginStyle.loginRateItem}>
                        <div className={loginStyle.LoginMainLabel}><strong>10k+</strong> </div>
                        <div className={loginStyle.LoginSubLabel}>Active Users</div>
                    </div>


                    <div className={loginStyle.loginRateItem}>
                        <div className={loginStyle.LoginMainLabel}><strong>50k+</strong></div>
                        <div className={loginStyle.LoginSubLabel}>Plans Created</div>
                    </div>


                    <div className={loginStyle.loginRateItem}>
                        <div className={loginStyle.LoginMainLabel}><strong>95%</strong></div>
                        <div className={loginStyle.LoginSubLabel}>Success Rate</div>
                    </div>


                </div>


            </div>



            {/* left Container End */}

            {/* Right Container Start */}
            <div className={loginStyle.parentContainerRight}>
                <div id="right-container" className={loginStyle.rightContainer}>
                    <div className={loginStyle.signInContainer}>
                        <h1 className="fs-2 fw-bold">Sign in to your account
                        </h1>
                        <div className={loginStyle.noAccount}>
                            <span style={{ color: 'var(--color-text-secondary)' }}>Don't have an account?{" "}</span>
                            <ButtonComponent variant='Secondary' className={loginStyle.buttonJourney} onClick={() => navigate('/signup')}>

                                Sign up for free
                            </ButtonComponent>
                        </div>

                        <div className={loginStyle.socialLogin}>

                            <ButtonComponent className={loginStyle.googleLogin}>
                                <img src={GoogleIcon} />
                                <span>Google</span>
                            </ButtonComponent>

                            <ButtonComponent className={loginStyle.facebookLogin}>
                                <img src={FacebookIcon} />
                                <span>Facebook</span>

                            </ButtonComponent>
                        </div>

                        <div className={loginStyle.dividerLogin}>
                            <span>or continue with email</span>
                        </div>

                        <form onSubmit={handleSubmit} className={loginStyle.form}>
                            {error && (
                                <div className={loginStyle.errorMessage}>{error}</div>
                            )}
                            <div className={loginStyle.formGroup}>
                                <label className={loginStyle.label}>Email address</label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={loginStyle.input}
                                />
                            </div>

                            <div className={loginStyle.formGroup}>
                                <div className={loginStyle.passwordHeader}>
                                    <label className={loginStyle.label}>Password</label>
                                    <button type="button" className={loginStyle.forgot}>
                                        Forgot password?
                                    </button>
                                </div>

                                <div className={loginStyle.passwordWrapper}>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="••••••••"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={loginStyle.input}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className={loginStyle.eyeBtn}
                                    >
                                        👁
                                    </button>
                                </div>
                            </div>

                            <div className={loginStyle.remember}>
                                <input type="checkbox" />
                                <span>Remember me for 30 days</span>
                            </div>

                            <ButtonComponent variant='Primary' className={loginStyle.submitBtn} icon={<FontAwesomeIcon icon={faArrowRight} />} iconPosition='Right'>
                                Sign In
                            </ButtonComponent>

                        </form>

                        <p className="mt-5 text-center" style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                            By signing in, you agree to our{" "}
                            <a href="#" className={loginStyle.termsLink}>
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="#" className={loginStyle.termsLink}>
                                Privacy Policy
                            </a>
                            .
                        </p>



                    </div>

                </div>
            </div>
            {/* Right Container End */}
        </div>

    );
}

