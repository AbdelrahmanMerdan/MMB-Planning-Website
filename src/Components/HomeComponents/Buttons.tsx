

function Buttons(){
        let aboutus = <div className="dropup">
        <button className="dropbtn">ABOUT US</button>
            <div className="dropup-content">
                <a href="#">Link 2</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>

let services = <div className="dropup">
        <button className="dropbtn">SERVICES</button>
            <div className="dropup-content">
                <a href="#">Home Renovation</a>
                <a href="#">Interior Design</a>
                <a href="#">Commercial Buildings</a>
                
            </div>
        </div>

let projects = <div className="dropup">
        <button className="dropbtn">PROJECTS</button>
            <div className="dropup-content">
                <a href="#">All</a>
                <a href="#">Commercial</a>
                <a href="#">Residential</a>
            </div>
        </div>

let contacts = <div className="dropup">
        <button className="dropbtn">CONTACT</button>
            <div className="dropup-content">
                <a href="#">Link 11</a>
                <a href="#">Link 22</a>
                <a href="#">Link 33</a>
            </div>
        </div>


    return (
        <div className="buttonbox">
    
    {aboutus}
    {services}
    {projects}
    {contacts}

    </div>
  
  
  )
}

export default Buttons