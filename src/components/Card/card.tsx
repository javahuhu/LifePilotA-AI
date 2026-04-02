import React from "react";
import cardStyle from "../Card/card.module.css";

type CardProps = {
    icon?: React.ReactNode;
    title?: string;
    description?: string;
    variant?: "Default" | "Horizontal";
    size?: "Small" | "Medium" | "Large";
    iconBg?: string;
    className?: string;
};

const CardComponent: React.FC<CardProps> = ({
    icon,
    title = "Card Title",
    description = "Card Description",
    variant = "Default",
    size = "Large",
    iconBg,
    className,
}) => {
    return (
        <div className={[cardStyle.card, cardStyle[variant], cardStyle[size], className].join(" ")}>
            {icon && (
                <span className={cardStyle.iconWrapper} style={iconBg ? { backgroundColor: iconBg } : undefined}>
                    {icon}
                </span>
            )}

            <h3 className={cardStyle.title}>
                {title}
            </h3>

            <p className={cardStyle.description}>{description}</p>
        </div>
    )
}

export default CardComponent;