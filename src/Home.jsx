import React from "react";
import HeroSection from "./Component/HeroSection";

const Home = () =>{
    const data = {
        name : "Tauseef ur Rahman",
        image : "./images/hero.svg",
    }
    return(
        <>
            <HeroSection  {...data}/>
        </>
    )
};

export default Home;