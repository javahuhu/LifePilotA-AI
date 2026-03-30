import React, { useState } from 'react';
import landingStyle from "./landing.module.css";
import lifePilotLogo from "../../assets/lifepilotlogo.png";
import { Sparkles } from "lucide-react";



const Landing: React.FC = () => {


    return (
        <div className={landingStyle.parentContainer}>

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
        </div>


    );

}

export default Landing;