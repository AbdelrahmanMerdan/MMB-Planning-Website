import Header from "./Components/Header";
import Banner from "./Components/ServicesComponents/banner";
import Servicedisplay from "./Components/ServicesComponents/servicedisplay";
import ContactUs from "./Components/HomeComponents/ContactUs";
import Bottomend from "./Components/bottom";

function ServicePage(){
    return (
  
  
  <div >
        <div className="divider">
        <Header/>
        <Banner />
        <Servicedisplay />
        <ContactUs />
        <Bottomend />
        </div>
        
        
        
  </div>
    
    )
  }
  
  export default ServicePage;