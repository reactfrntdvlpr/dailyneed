import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer"


const AppContext = React.createContext();

const API = "https://jsonplaceholder.typicode.com/users";

const initialState = {
    name : "",
    image : "",
    services : [],
};



const AppProvider = ({children}) => {

    const updateHomepage = () => {
        return dispatch({
            type : "Home_Update",
            payload : {
                name : "Tauseefur Rahman",
                image : "./images/hero.svg",
            },
        });
    };
    const updateAboutpage = () => {
        return dispatch({
            type : "About_Update",
            payload : {
                name : "Tauseef Ansari",
                image : "./images/about1.svg",
            },
        });
    };

// to get an api data

const getServices = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        dispatch({type:"GET_SERVICES", payload: data});
    } catch (error) {
        console.log(error);
        
    }
};

// to call the api

useEffect(() => {
  getServices(API);
}, [])




    const [state, dispatch] = useReducer(reducer, initialState);
    return <AppContext.Provider value={{...state, updateHomepage, updateAboutpage}}>
        {children}
    </AppContext.Provider>;

};
const useGLobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGLobalContext};