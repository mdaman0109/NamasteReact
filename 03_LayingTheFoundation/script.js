

import React from "react";
import ReactDOM from "react-dom/client"; 

const newelement = <h1 id="heading">Hello from JSX</h1>

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); 
root.render(newelement);
