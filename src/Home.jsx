import React, { useEffect } from "react";
import HeroSection from "./Component/HeroSection";
import { useGLobalContext } from "./Context";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";

const Home = () => {
    // const data = {
    //     name : "Tauseef ur Rahman",
    //     image : "./images/hero.svg",
    // };

    const { updateHomepage } = useGLobalContext();

    useEffect(() => updateHomepage(), []);


    return (
        <>
            <HeroSection />
            <Services />
            <Contact />
            <About />
        </>



    )
};

export default Home;