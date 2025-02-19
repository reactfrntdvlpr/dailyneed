import React from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Services from "./Services";
import { ThemeProvider } from "styled-components";
import { tab } from "@testing-library/user-event/dist/tab";
import { GLobalSyle } from "./GlobalStyle";
import Contact from "./Contact.jsx";
import Error from "./Error.jsx";

const App = () => {
    const theme = {
        color : {
        heading : "rgb(24 24 29)",
        text : "rgb(24 24 29)",
        white : "#fff",
        black : "#212529",
        helper : "#8490ff",
        bg : "rgb(249 249 255)",
        footer_bg : "#0a1435",
        btn : "rgb(98 84 243)",
        border : "rgba(98, 84, 243, 0.5)",
        hr : "#ffffff",
        gradient : "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
        shadow : "rgba(0, 0,0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px, 0px, 0px, 1px",
        shadowSupport : "rgba(0, 0,0, 0.16) 0px 1px 4px",
    },
    media : { mobile : "768px", tab : "998px" },
        
    };

    return (
        <>
        <ThemeProvider theme={ theme }>
        <GLobalSyle />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />

                </Routes>
                <Footer />
            </BrowserRouter>
            </ThemeProvider>
        </>
    )
}

export default App;


// var prm = new Promise((resolve, reject) => {
//     var n = Math.floor(Math.random() * 10)

//     if(n<5){
//         return resolve();
//     }
//     else{
//         return reject();
//     }
// })

// prm.then(function(){
//     console.log("resolve hogya task")
// })
// .catch(function(){
//     console.log("reject hogaya")
// })