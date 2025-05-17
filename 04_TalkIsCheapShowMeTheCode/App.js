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


const Header=()=>
{
    return(
        <div className="header">
            <img className="logo" src="https://img.freepik.com/premium-vector/premium-logo-template-2025_1271687-73.jpg?semt=ais_hybrid&w=740"/>
            <div className="nav">
                <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
        
    )
}


const Body=()=>
{
   return( 
   <>
   
   <div className="search">search</div>
   <div className="res-container">
           <Rescard
           resName="abcd"
            cuisine = "Biryani,Pure Veg,Chinese"
            rating ="4.3 star"
            eta ="30 minutes"

           /><Rescard/>
       </div>
       
       
       </>

   )
}

const Rescard =(props)=>
{
return(

    <div className="res-card">
        <img className="foodlogo" src="https://images.squarespace-cdn.com/content/v1/5b55b377b27e39707a59aed1/1574268966127-67S799YL3E5C9O835IJ4/Untitled-4.png?format=1500w"/>
        <h3>{props.resName}</h3>
        <h4>Biryani,Pure Veg,Chinese</h4>
        <h4>4.3 star</h4>
        <h4>30 minutes</h4>
    </div>
)
}





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



