import { Link } from 'react-router-dom';
function Projectsdisplay(){
    return(
        <div className="Projectsdisdiv">
            <div className="projecttxt">
                
                <hr  className="projectshr"/>
                MMB offers a diverse range of services catering to your architectural needs.
                 From transforming your home through exquisite renovation projects to 
                 meticulous city planning services, we provide a comprehensive approach to 
                 enhancing your living spaces. Additionally, our expertise extends to 
                 crafting exceptional commercial buildings that align with your business 
                 objectives. At MMB, we blend creativity, precision, and dedication to bring
                  your architectural visions to life, whether it's rejuvenating your home, 
                  planning urban spaces, or creating dynamic commercial environments. Your
                   architectural dreams are our passion.

                <br />
                <br />
                
                </div>

                <div className="projectsimages">
                <Link to ='/projectsHome'> <img className="pimg" src="https://i.imgur.com/g8XphJ5.png" alt="" /> </Link>
                <Link to ='/projectsPlanning'> <img className="pimg" src="https://i.imgur.com/kUuLpOa.png" alt="" /> </Link>
                <Link to ='/projectsCommercial'> <img className="pimg" src="https://i.imgur.com/sS2buef.png" alt="" /> </Link>
                

                </div>
        </div>
    )
}

export default Projectsdisplay