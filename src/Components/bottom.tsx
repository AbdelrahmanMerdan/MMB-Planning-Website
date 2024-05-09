import { Link } from 'react-router-dom';
function Bottomend(){
    return(
    <div className= "boxes">
    
     
    <div className = "leftbox">
    <br></br>
        {/* <img className="LogoEnd" src="src\assets\mmb logo bw-24.png" alt="React" /> */}
        <p>
        <br></br>
        MMB Planning is a full service architectural firm that specializes in Planning Services.
        <br></br><br></br><br></br>
        ©Copyright 2023. All Content on This Website Belong to MMBPlanning.ca Inc.
        </p>
    </div>
     
    <div className = "middlebox">
    <br></br><br></br>
        <Link className="bottombtnLink" to= '/'>HOME</Link> <br></br><br></br>
        <Link className="bottombtnLink" to ='/services'> SERVICES</Link> <br></br><br></br>
        <Link className="bottombtnLink" to ='/projects'> PROJECTS</Link><br></br><br></br>
        <Link className="bottombtnLink" to ='/projects'> CONTACT</Link>
    </div>
     
    <div className = "rightbox">
        <br></br>
        <b>Phone:</b><br></br><br></br>
        &#40;647&#41; - 700 - 0000<br></br><br></br>
        <b>Email:</b><br></br><br></br>
        MMBPlanning@gmail.com
    </div>
</div>

)
    }
export default Bottomend;
