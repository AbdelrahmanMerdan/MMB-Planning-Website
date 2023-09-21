import Header from "./Components/Header";
import Banner from "./Components/ServicesComponents/banner";
import ServicedisplayCommercial from "./Components/ServicesComponents/servicedisplaycommercial";
import ContactUs from "./Components/HomeComponents/ContactUs";
import Bottomend from "./Components/bottom";
function ServicePageCommercial(){
    return (
  
  
  <div >
        <div className="divider">
        <Header/>
        <Banner />
        <ServicedisplayCommercial />
        <ContactUs />
        <Bottomend />
        </div>
        
        
        
  </div>
    
    )
  }
  
  export default ServicePageCommercial;