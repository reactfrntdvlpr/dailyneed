import React, { useEffect } from "react";
import HeroSection from "./Component/HeroSection";
import { useGLobalContext } from "./Context";
import Services from "./Services";
import Contact from "./Contact";

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

        </>



    )
};

export default Home;