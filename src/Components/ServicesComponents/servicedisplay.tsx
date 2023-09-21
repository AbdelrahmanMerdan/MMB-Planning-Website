import { Link } from 'react-router-dom';
function Servicedisplay(){
    return(
        <div className="Servicedisdiv">
            <div className="servtxt">
                
                <hr  className="servicehr"/>
                
            MMB offers a diverse range of services catering to your architectural needs. 
            From transforming your home through exquisite renovation projects to meticulous
             city planning services, we provide a comprehensive approach to enhancing your 
             living spaces. Additionally, our expertise extends to crafting exceptional 
             commercial buildings that align with your business objectives. At MMB, we blend 
             creativity, precision, and dedication to bring your architectural visions to 
             life, whether it's rejuvenating your home, planning urban spaces, or creating 
             dynamic commercial environments. Your architectural dreams are our passion.
                <br />
                <br />
                
                </div>

                <div className="servimages">
                <Link to ='/servicesHome'> <img className="simg" src="https://i.imgur.com/g8XphJ5.png" alt="" /> </Link>
                <Link to ='/servicesPlanning'> <img className="simg" src="https://i.imgur.com/kUuLpOa.png" alt="" /> </Link>
                <Link to ='/servicesCommercial'> <img className="simg" src="https://i.imgur.com/sS2buef.png" alt="" /> </Link>
                

                </div>
        </div>
    )
}

export default Servicedisplay