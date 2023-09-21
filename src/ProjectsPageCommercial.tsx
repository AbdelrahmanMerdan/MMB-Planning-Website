import Header from "./Components/Header";
import Banner from "./Components/ProjectsComponents/banner";
import ProjectsdisplayCommercial from "./Components/ProjectsComponents/projectsdisplaycommercial";
import ContactUs from "./Components/HomeComponents/ContactUs";
import Bottomend from "./Components/bottom";

function ProjectsPageCommercial(){
    return (
  
  
  <div >
        <div className="divider">
        <Header/>
        <Banner />
        <ProjectsdisplayCommercial />
        <ContactUs />
        <Bottomend />
        </div>
        
        
        
  </div>
    
    )
  }
  
  export default ProjectsPageCommercial;