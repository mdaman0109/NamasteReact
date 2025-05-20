//Making a Food ordering APP
//ALL THE COMPONENTS
//HEADER,
//      -LOGO
//      -NAV
//      
// BODY,
//      -SEARCH
//      -RESTRURANT CONTAINER
//                   -RESTRURANT CARDS
// FOOTER
//      -COPYRIGHTS
//      -LINKS AND ALL
import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"

const AppLayout = () =>
{
    return(
        <div className = "applayout">
            <Header/>
            <Body/>
        </div>
        
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)



