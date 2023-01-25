import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";


const element=ReactDom.createRoot(document.getElementById("root"));

element.render(
    <App/>
)