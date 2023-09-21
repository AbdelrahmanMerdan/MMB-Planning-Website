import Header from "./Components/Header";
import Banner from "./Components/ProjectsComponents/banner";
import Projectsdisplay from "./Components/ProjectsComponents/projectsdisplay";
import ContactUs from "./Components/HomeComponents/ContactUs";
import Bottomend from "./Components/bottom";

function ProjectsPage(){
    return (
  
  
  <div >
        <div className="divider">
        <Header/>
        <Banner />
        <Projectsdisplay />
        <ContactUs />
        <Bottomend />
        </div>
        
        
        
  </div>
    
    )
  }
  
  export default ProjectsPage;