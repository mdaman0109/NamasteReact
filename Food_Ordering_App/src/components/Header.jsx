import { LOGO_URL } from "../utlis/Constants";


const Header=()=>
{
    return(
        <div className="header">
            <img className="logo" src= {LOGO_URL}/>
            <div className="nav">
                <ul>
                <li>Homee</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cartt</li>
            </ul>
            </div>
        </div>
        
    )
}

export default Header;