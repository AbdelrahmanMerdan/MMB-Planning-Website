import Header from "./Components/Header";
import Banner from "./Components/ProjectsComponents/banner";
import ProjectsdisplayHome from "./Components/ProjectsComponents/projectsdisplayhome";
import ContactUs from "./Components/HomeComponents/ContactUs";
import Bottomend from "./Components/bottom";

function ProjectsPageHome(){
    return (
  
  
  <div >
        <div className="divider">
        <Header/>
        <Banner />
        <ProjectsdisplayHome />
        <ContactUs />
        <Bottomend />
        </div>
        
        
        
  </div>
    
    )
  }
  
  export default ProjectsPageHome;