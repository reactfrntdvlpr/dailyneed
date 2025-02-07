import React, {useEffect} from "react";
import HeroSection from "./Component/HeroSection";
import { useGLobalContext } from "./Context";

const About = () =>{
    // const data = {
    //     name : " Tauseef Ansari",
    //     image : "./images/about1.svg",
    // };

const {updateAboutpage} = useGLobalContext();
    useEffect(() => updateAboutpage(), []);
    

    return <HeroSection />;
};

export default About;