import React, { useState } from "react";
import type { SignUpData } from "../../types/auth.types";
import { signupUser } from "../../api/auth.api";
import signupStyle from "../SignUp/signup.module.css";
import lifePilotLogo from "../../assets/lifepilotlogo.png";
import GoogleIcon from "../../assets/googleicon.png";
import FacebookIcon from "../../assets/facebookicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Sparkles } from "lucide-react";
import ButtonComponent from "../../components/Button/button";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from "lucide-react";
export default function SignUpPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<SignUpData>({ firstName: "", middleName: "", lastName: "", email: "", password: "", confirmPassword: "" });
    const [error, setError] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [agreed, setAgreed] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await signupUser(formData);
            console.log("Creating Account:", response);
            navigate('/home');
        } catch (err: any) {
            setError(err.message || "Sign Up Failed");
        }
    }

    const featuresData = [
        { featuresLabel: 'AI-generated step-by-step action plans' },
        { featuresLabel: 'Progress tracking & milestone celebrations' },
        { featuresLabel: 'What-If scenario simulator' },
        { featuresLabel: 'Finance, career, health & productivity modules' },
        { featuresLabel: 'Free forever plan · No credit card required' },
    ]




    return (
        <div className={signupStyle.container}>


            {/* left Container Start */}
            <div className={signupStyle.leftContainer}>

                {/* Decoration Circle */}
                <div className={signupStyle.circleTopRight} />
                <div className={signupStyle.circleBottomLeft} />
                {/* <div className={signupStyle.circleCenter} /> */}

                {/* logo and header */}
                <div className={signupStyle.logoContainer}>

                    <img src={lifePilotLogo} alt='Logo' className={signupStyle.signupLogo} />

                    <span className="text-white fs-5 fw-semibold">LifePilot AI</span>
                </div>
                {/* logo and header end */}



                <div className={signupStyle.signupSparkContainer}>

                    <div className={signupStyle.signupSpark}>
                        <Sparkles size={17} className="text-white" />
                        <span className={signupStyle.sparkLabel}>Start For Free Today</span>
                    </div>
                </div>

                <span className="text-white" style={{ maxWidth: "100%", fontWeight: "bold", fontSize: "2.2rem", marginTop: "25px", display: "block" }}>Your AI co-pilot for
                    <br />every life decision</span>
                <p className={signupStyle.miniLabel}>Join 10,000+ students, professionals, and freelancers building better lives with LifePilot AI.</p>

                <div className={signupStyle.features}>
                    {
                        featuresData.map((features, index) => (
                            <div key={index} className={signupStyle.featuresItems}>
                                <CheckCircle2 size={18} className={signupStyle.featureIcon} />
                                <span className={signupStyle.featuresText}>{features.featuresLabel}</span>

                            </div>
                        ))
                    }
                </div>


                <div className={signupStyle.planCardSignUp}>
                    <div className={signupStyle.planHeaderSignUp}>
                        <span className={signupStyle.planTitleSignUp}>Free Plan</span>

                        <span className={signupStyle.planBadgeSignUp}>
                            No card needed
                        </span>
                    </div>

                    <p className={signupStyle.planDescriptionSignUp}>
                        Start with 5 AI plans per month. Upgrade anytime to go unlimited.
                    </p>
                </div>
            </div>



            {/* left Container End */}

            {/* Right Container Start */}
            <div className={signupStyle.parentContainerRightSignUp}>
                <div className={signupStyle.rightContainer}>
                    <div className={signupStyle.signInContainer}>
                        <h1 className="fs-2 fw-bold">Create your account

                        </h1>
                        <div className={signupStyle.noAccount}>
                            <span style={{ color: 'var(--color-text-secondary)' }}>Already have an account?{" "}</span>
                            <ButtonComponent variant='Secondary' className={signupStyle.buttonJourney} onClick={() => navigate('/login')}>

                                Sign In
                            </ButtonComponent>
                        </div>

                        {error && (
                            <div className={signupStyle.errorMessage}>
                                {error}
                            </div>
                        )}

                        <div className={signupStyle.signupLogin}>

                            <ButtonComponent className={signupStyle.googleSignUp}>
                                <img src={GoogleIcon} />
                                <span>Google</span>
                            </ButtonComponent>

                            <ButtonComponent className={signupStyle.facebookSignUp}>
                                <img src={FacebookIcon} />
                                <span>Facebook</span>

                            </ButtonComponent>
                        </div>

                        <div className={signupStyle.dividerSignUp}>
                            <span>or sign up with email</span>
                        </div>

                        <form onSubmit={handleSubmit} className={signupStyle.form}>


                            <div className={signupStyle.userName} >
                                <div className={signupStyle.formGroup}>
                                    <label className={signupStyle.label}>First Name</label>

                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="Jordan"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={signupStyle.input}
                                    />
                                </div>


                                <div className={signupStyle.formGroup}>
                                    <label className={signupStyle.label}>Middle Name</label>

                                    <input
                                        type="text"
                                        name="middleName"
                                        placeholder="Columbus"
                                        required
                                        value={formData.middleName}
                                        onChange={handleChange}
                                        className={signupStyle.input}
                                    />
                                </div>


                                <div className={signupStyle.formGroup}>
                                    <label className={signupStyle.label}>Last Name</label>

                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Mitchell"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className={signupStyle.input}
                                    />
                                </div>
                            </div>


                            <div className={signupStyle.formGroup}>
                                <label className={signupStyle.label}>Email address</label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={signupStyle.input}
                                />
                            </div>

                            <div className={signupStyle.formGroup}>
                                <div className={signupStyle.passwordHeader}>
                                    <label className={signupStyle.label}>Password</label>

                                </div>

                                <div className={signupStyle.passwordWrapper}>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Min. 8 Characters"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={signupStyle.input}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className={signupStyle.eyeBtn}
                                    >
                                        👁
                                    </button>
                                </div>
                            </div>




                            <div className={signupStyle.formGroup}>
                                <div className={signupStyle.passwordHeader}>
                                    <label className={signupStyle.label}>Confirm Password</label>

                                </div>

                                <div className={signupStyle.passwordWrapper}>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        placeholder="Re-enter your password"
                                        required
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className={signupStyle.input}
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className={signupStyle.eyeBtn}
                                    >
                                        👁
                                    </button>
                                </div>
                            </div>

                            <div className={signupStyle.remember}>
                                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)}/>
                                <span>I agree to the <span style={{ color: 'var(--color-primary)' }}>Temrs of Service</span> and <span style={{ color: 'var(--color-primary)' }}>Privacy Policy</span></span>
                            </div>

                            <ButtonComponent disabled={!agreed} type="submit" variant='Primary' className={signupStyle.submitBtn} icon={<FontAwesomeIcon icon={faArrowRight} />} iconPosition='Right'>
                                Create Free Account
                            </ButtonComponent>
                        

                        </form>

                        <p className="mt-5 text-center" style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>

                            <a href="#" className={signupStyle.termsLink}>
                                Already have an Account?
                            </a>{" "}

                            <a href="#" className={signupStyle.termsLink}>
                                Sign in Here
                            </a>
                            .
                        </p>



                    </div>
                </div>
            </div>
            {/* Right Container End */}
        </div >

    );
}



