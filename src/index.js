import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { AppProvider } from "./Context.jsx";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <AppProvider>
            <React.StrictMode>
                <App />,
            </React.StrictMode>
        </AppProvider>

    </>
);




