import React from 'react';
import buttonStyle from "./button.module.css";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "Primary" | "Secondary";
    size?: "Small" | "Medium" | "Large";
    className?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    iconPosition?: "Left" | "Right";
}

const ButtonComponent: React.FC<ButtonProps> = ({
    children,
    variant = "",
    size = "Medium",
    className = "",
    onClick,
    icon,
    iconPosition = "Right",
}) => {
    return (
        <button onClick={onClick} className={[buttonStyle.button, buttonStyle[variant], buttonStyle[size], className].join(" ")}>
            {icon && iconPosition === "Left" && (
                <span className={buttonStyle.iconLeft}>{icon}</span>
            )}
            {children}

            {icon && iconPosition === "Right" && (
                <span className={buttonStyle.iconRight}>{icon}</span>
            )}
        </button>
    )
}


export default ButtonComponent;