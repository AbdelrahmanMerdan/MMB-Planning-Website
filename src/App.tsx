import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./HomePage";

import ServicePage from "./ServicesPage";
import ServicePageHome from "./ServicesPageHome";
import ServicePagePlanning from "./ServicesPagePlanning";
import ServicePageCommercial from "./ServicesPageCommercial";

import ProjectsPage from "./ProjectsPage";
import ProjectsPageHome from "./ProjectsPageHome";
import ProjectsPageCommercial from "./ProjectsPageCommercial";
import ProjectsPagePlanning from "./ProjectsPagePlanning";

import ContactPage from "./Contact";

function App(){
    return (
        <>
<Router>
        <Switch>
          
        <Route exact path="/">
            <HomePage />
         </Route>
        
         <Route path="/services" >
            <ServicePage />
        </Route>

         <Route path="/servicesHome" >
            <ServicePageHome />
        </Route>

        <Route path="/servicesPlanning" >
            <ServicePagePlanning />
        </Route>

        <Route path="/servicesCommercial" >
            <ServicePageCommercial />
        </Route>


        <Route path="/projects" >
            <ProjectsPage />
        </Route>

         <Route path="/projectsHome" >
            <ProjectsPageHome />
        </Route>

        <Route path="/projectsPlanning" >
            <ProjectsPagePlanning />
        </Route>

        <Route path="/projectsCommercial" >
            <ProjectsPageCommercial />
        </Route>

        <Route path="/contact" >
            <ContactPage />
        </Route>

        </Switch>
      </Router>
        </>
    )
  }
  
  export default App;