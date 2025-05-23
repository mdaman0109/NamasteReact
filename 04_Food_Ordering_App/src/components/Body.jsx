import resList from "../utlis/mockdata";
import Rescard from "./Rescard";
import { useState } from "react";
const Body=()=>
{

   const [listOfRes,setlistOfRes]=useState(resList)

   return( 
   <>


   <div className="body">
   <div className="filter"><button className="filterbtn"
   onClick={()=>
   {
      const filteredList=resList.filter(
         (res)=> res.info.avgRating > 4);
      setlistOfRes(filteredList);
      console.log(filteredList)
   }
   }
   
   
   >Click to Get Top Rated Restrurants</button></div>
   <div className="res-container">
    {
        listOfRes.map((res)=>(
           <Rescard key={res.info.id}
           resData={res}

           />
        ))
           
    }    
       </div> </div></>

   )
}

export default Body;