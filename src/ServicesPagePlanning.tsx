import Header from "./Components/Header";
import Banner from "./Components/ServicesComponents/banner";
import ServicedisplayPlanning from "./Components/ServicesComponents/servicedisplayplanning";
import ContactUs from "./Components/HomeComponents/ContactUs";
import Bottomend from "./Components/bottom";
function ServicePagePlanning(){
    return (
  
  
  <div >
        <div className="divider">
        <Header/>
        <Banner />
        <ServicedisplayPlanning />
        <ContactUs />
        <Bottomend />
        </div>
        
        
        
  </div>
    
    )
  }
  
  export default ServicePagePlanning;