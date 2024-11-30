import React from "react";
import HeroSection from "./Component/HeroSection";

const About = () =>{
    const data = {
        name : " Tauseef Ansari",
        image : "./images/about1.svg",
    };

    return(
        <HeroSection  {...data} />
    )
};

export default About;