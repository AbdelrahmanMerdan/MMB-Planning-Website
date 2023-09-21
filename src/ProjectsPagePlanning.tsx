import Header from "./Components/Header";
import Banner from "./Components/ProjectsComponents/banner";
import ProjectsdisplayPlanning from "./Components/ProjectsComponents/projectsdisplayplanning";
import ContactUs from "./Components/HomeComponents/ContactUs";
import Bottomend from "./Components/bottom";

function ProjectsPagePlanning(){
    return (
  
  
  <div >
        <div className="divider">
        <Header/>
        <Banner />
        <ProjectsdisplayPlanning />
        <ContactUs />
        <Bottomend />
        </div>
        
        
        
  </div>
    
    )
  }
  
  export default ProjectsPagePlanning;