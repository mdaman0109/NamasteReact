

import React from "react";
import ReactDOM from "react-dom/client"; 

const newelement = <h1 id="heading">Hello from JSX</h1>
const Newcomponent =() => (<h1>Hey from react component</h1>)
const Secondcomponent =() => {return (<div>
    <Newcomponent/>
    {newelement}
    <h1>Hey from second component</h1>
</div>)}


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); 
root.render(<Secondcomponent/>);

