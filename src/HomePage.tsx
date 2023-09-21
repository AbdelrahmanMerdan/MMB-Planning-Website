import Header from "./Components/Header";
// import Buttons from "./Components/HomeComponents/Buttons";
import Slider from "./Components/HomeComponents/Slider";
import ContactUs from "./Components/HomeComponents/ContactUs";
import ServicesMultislider from "./Components/HomeComponents/ServicesMultislider";
import Aboutus from "./Components/HomeComponents/aboutus";
import ProjectsMultislider from "./Components/HomeComponents/ProjectsMultislider";
import Bottomend from "./Components/bottom";



function HomePage(){
  return (


<div >
      <div className="divider">
      <Header/>
      
      <Slider/>
      <Aboutus/>
      <ServicesMultislider/>
      <ProjectsMultislider/>
      <ContactUs/>
      <Bottomend />
      
      </div>
      
      
      
</div>
  
  )
}

export default HomePage;