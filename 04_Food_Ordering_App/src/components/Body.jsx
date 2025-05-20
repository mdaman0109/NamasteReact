import resList from "../utlis/mockdata";

import Rescard from "./Rescard";
const Body=()=>
{
   return( 
   <>
   
   <div className="search">search</div>
   <div className="res-container">
    {
        resList.map((res)=>(
           <Rescard key={res.info.id}
           resData={res}

           />
        ))
           
    }    
       </div> </>

   )
}

export default Body;