import React from "react";
import '../styles/IntroCards.css'

export const IntroCards = ({icon, title, desc}) =>{
    return(
        <div className="intro-Card"  data-aos="flip-right" data-aos-delay="300">
            <div className="intro-card-icon">
                {icon}
            </div>
            <p className="intro-card-title">
                {title}
            </p>
            <div className="intro-card-desc">
                {desc}
            </div>
        </div>
    )
}