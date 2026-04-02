import React, { useState } from 'react';
import landingStyle from "./landing.module.css";
import "./landing-responsive.css";
import lifePilotLogo from "../../assets/lifepilotlogo.png";
import { Sparkles } from "lucide-react";
import ButtonComponent from '../../components/Button/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faBrain, faChartLine, faFlask } from '@fortawesome/free-solid-svg-icons';
import CardComponent from '../../components/Card/card';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';




const Landing: React.FC = () => {

    const containerData = [
        { icon: <FontAwesomeIcon icon={faBrain} />, title: "Smart Decision Engine", description: "Get personalized, actionable plans with step-by-step guidance. AI analyzes your situation and creates tailored strategies." },
        { icon: <FontAwesomeIcon icon={faChartLine} />, title: "Progress Tracking", description: "Monitor your journey with beautiful dashboards, analytics, and insights. See exactly how far you've come." },
        { icon: <FontAwesomeIcon icon={faFlask} />, title: "What-If Simulator", description: "Test different scenarios and see predicted outcomes. Make informed decisions with confidence." },
    ]

    const stepsData = [
        { index: '1', title: 'Describe Your Situation', description: 'Tell us about your problem, goal, or decision in plain language. No technical jargon needed.' },
        { index: '2', title: 'Get Your Plan', description: 'AI generates a structured, step-by-step action plan with timelines, risks, and alternatives.' },
        { index: '3', title: 'Track Progress', description: 'Monitor your journey, adjust your plan, and celebrate milestones as you move forward.' },
    ]

    const decisionList = [
        { icon: <FontAwesomeIcon icon={faCircleCheck} fontSize={30} />, title: 'Finance', description: 'Budget planning, savings goals, investment strategies' },
        { icon: <FontAwesomeIcon icon={faCircleCheck} fontSize={30} />, title: 'Career', description: 'Job transitions, skill development, salary negotiations' },
        { icon: <FontAwesomeIcon icon={faCircleCheck} fontSize={30} />, title: 'Health', description: 'Fitness routines, diet plans, wellness tracking' },
        { icon: <FontAwesomeIcon icon={faCircleCheck} fontSize={30} />, title: 'Productivity', description: 'Time management, habit building, goal setting.' },
    ]


    return (
        <div className={landingStyle.parentContainer}>
            {/* parent container start*/}

            {/* nav bar */}

            <nav className={landingStyle.navContainer}>
                <div className={landingStyle.logo}>
                    <img src={lifePilotLogo} alt="logo" />
                    <span>LifePilot</span> </div>

                <div className={landingStyle.links} >
                    <a href='#'>Features</a>
                    <a href='#'>How It Works</a>
                    <a href='#'>Pricing</a>
                </div>

                <button className={landingStyle.getStartedBtn}>Get Started</button>
            </nav>

            {/* spark icon */}

            <div className={landingStyle.sparkContainer}>
                <div className={landingStyle.spark}>
                    <Sparkles size={17} color='var(--color-primary)' />
                    <span>AI-Powered Decision Engine</span>
                </div>
            </div>

            {/* highlight text */}

            <div className={landingStyle.highlightTxt}>
                <span>
                    Turn Problems into <span style={{ color: 'var(--color-primary)' }}>Actionable</span>
                </span>
                <span style={{ color: 'var(--color-primary)' }}>
                    Plans
                </span>
            </div>

            {/* sub hightlight text */}

            <div className={landingStyle.subhighlightTxt}>
                <span>Stop getting just answers. Get structured decisions, step-by-step guidance,</span>
                <span>and track your progress—all powered by AI.</span>
            </div>

            <div className={landingStyle.btnContainer}>
                <ButtonComponent variant='Primary' className={landingStyle.buttonJourney} icon={<FontAwesomeIcon icon={faArrowRight} />} iconPosition='Right'>

                    Start Your Journey
                </ButtonComponent>

                <ButtonComponent className={landingStyle.buttonHow}>
                    See How It Works
                </ButtonComponent>
            </div>

            <div className={landingStyle.rate}>

                <div className={landingStyle.rateItem}>
                    <div className={landingStyle.mainLabel}><strong>10k+</strong> </div>
                    <div className={landingStyle.subLabel}>Active Users</div>
                </div>


                <div className={landingStyle.rateItem}>
                    <div className={landingStyle.mainLabel}><strong>50k+</strong></div>
                    <div className={landingStyle.subLabel}>Plans Created</div>
                </div>


                <div className={landingStyle.rateItem}>
                    <div className={landingStyle.mainLabel}><strong>95%</strong></div>
                    <div className={landingStyle.subLabel}>Success Rate</div>
                </div>


            </div>


            <div className={landingStyle.toSucceed}>
                <div className={landingStyle.mainTxtSucceed}>
                    <p className='fs-1 fw-bold' style={{ color: 'var(--color-text-primary)' }}>Everything You Need to Succeed</p>
                </div>
                <div className={landingStyle.subTxtSucceed}>
                    <p className='fs-5' style={{ color: 'var(--color-text-secondary)' }}>
                        Not just another chatbot. A complete decision-making platform designed to help you achieve your goals.
                    </p>

                </div>

                <div className={landingStyle.succeedThreeContainers}>
                    {containerData.map((item, index) => (
                        <CardComponent
                            key={index}
                            icon={item.icon}
                            iconBg='var(--color-bg-surface)'
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>


            </div>

            <div className={landingStyle.steps}>
                <p className='fs-1 fw-bold' style={{ color: 'var(--color-text-primary)' }}>
                    Simple, Yet Powerful
                </p>

                <p className='fs-5' style={{ color: 'var(--color-text-secondary)' }}>
                    From problem to solution in three easy steps
                </p>

                <div className={landingStyle.listSteps}>
                    {
                        stepsData.map((steps, index) => (
                            <div className={landingStyle.stepsContainer}>
                                <div key={index} className={landingStyle.circularIndex}>
                                    <p className='fw-bold'>{steps.index}</p>


                                </div>


                                <p className={landingStyle.stepsTitle}>{steps.title}</p>

                                <p className={landingStyle.stepsDescription}>{steps.description}</p>


                            </div>
                        ))
                    }

                </div>


            </div>


            <div className={landingStyle.decision}>
                <p className='fs-1 fw-bold' style={{ color: 'var(--color-text-primary)' }}>Perfect For Every Life Decision </p>

                <div className={landingStyle.decisionList}>
                    {
                        decisionList.map((decision, index) => (
                            <CardComponent
                                key={index}
                                icon={decision.icon}
                                title={decision.title}
                                description={decision.description}
                                size='Medium'
                            >
                            </CardComponent>
                        ))
                    }
                </div>
            </div>

            <div className={landingStyle.gradientWrapper}>
                <div className={landingStyle.gradientContainer}>
                    <span className='text-white fs-2 fw-bold'>Ready To Take Control?</span>
                    <span className='opacity-90 text-white mb-4'>Join thousands of people making smarter decisions every day</span>

                    <ButtonComponent className={landingStyle.gradientBtnStarted} icon={<FontAwesomeIcon icon={faArrowRight} />} iconPosition='Right'>
                        Get Started Now
                    </ButtonComponent>
                </div>
            </div>

            <footer className={landingStyle.footer}>
                <div className={landingStyle.footerContainer}>

                    {/* Brand */}
                    <div className={landingStyle.footerBrand}>
                        <div className={landingStyle.footerLogo}>
                        <img src={lifePilotLogo} alt="logo" draggable={false} />
                        <span>LifePilot</span>
                        </div>
                        <p>AI-powered decision making for everyone.</p>
                    </div>

                    {/* Links */}
                    <div className={landingStyle.footerLinks}>
                        <span className="fw-bold">Product</span>
                        <a href="#">Features</a>
                        <a href="#">How It Works</a>
                        <a href="#">Pricing</a>
                    </div>

                    <div className={landingStyle.footerLinks}>
                        <span className="fw-bold">Company</span>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Careers</a>
                    </div>

                    <div className={landingStyle.footerLinks}>
                        <span className="fw-bold">Support</span>
                        <a href="#">Help Center</a>
                        <a href="#">Contact</a>
                        <a href="#">Privacy Policy</a>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className={landingStyle.footerBottom}>
                    <span>© 2024 LifePilot. All rights reserved.</span>
                </div>
            </footer>





            {/* parent container end */}
        </div>


    );

}

export default Landing;