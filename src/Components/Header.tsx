import { Link } from 'react-router-dom';
function Header(){
let aboutus = <div className="dropup">
    <Link className="dropbtnLink" to= '/'>HOME</Link>
        <div className="dropup-content">
            
        </div>
    </div>

let services = <div className="dropup">
    <Link className="dropbtnLink" to= '/services'>SERVICES</Link>
        <div className="dropup-content">
            <Link to ='/services'> All</Link>
            <Link to ='/servicesHome'> Home Renovation</Link>
            <Link to ='/servicesPlanning'> Planning</Link>
            <Link to ='/servicesCommercial'> Commercial Buildings</Link>
            
            
            
        </div>
    </div>

let projects = <div className="dropup">
    <Link className="dropbtnLink" to= '/projects'>PROJECTS</Link>
        <div className="dropup-content">
            <Link to ='/projects'> All</Link>
            <Link to ='/projectsHome'> Home</Link>
            <Link to ='/projectsPlanning'> Planning</Link>
            <Link to ='/projectsCommercial'> Commercial Buildings</Link>
        </div>
    </div>

let contacts = <div className="dropup">
    <Link className="dropbtnLink" to= '/contact'>CONTACT</Link>
    </div>


    return (
        <>

    <div className="Header">
            <img className="Logo" src="https://i.imgur.com/0likzaa.png" alt="React" />
    </div>
    
    <div className="buttonbox">
    
    {aboutus}
    {services}
    {projects}
    {contacts}

    </div>

         </>  
    )
}

export default Header
