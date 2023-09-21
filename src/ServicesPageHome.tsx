import Header from "./Components/Header";
import Banner from "./Components/ServicesComponents/banner";
import ServicedisplayHome from "./Components/ServicesComponents/servicedisplayhome";
import ContactUs from "./Components/HomeComponents/ContactUs";
import Bottomend from "./Components/bottom";

function ServicePageHome(){
    return (
  
  
  <div >
        <div className="divider">
        <Header/>
        <Banner />
        <ServicedisplayHome />
        <ContactUs />
        <Bottomend />
        
        </div>
        
        
        
  </div>
    
    )
  }
  
  export default ServicePageHome;