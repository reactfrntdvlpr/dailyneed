import React, { useEffect } from "react";
import HeroSection from "./Component/HeroSection";
import { useGLobalContext } from "./Context";

const Home = () =>{
    // const data = {
    //     name : "Tauseef ur Rahman",
    //     image : "./images/hero.svg",
    // };

    const {updateHomepage} = useGLobalContext();

    useEffect(() => updateHomepage(), []);
    

    return  <HeroSection />;
       
        

};

export default Home;