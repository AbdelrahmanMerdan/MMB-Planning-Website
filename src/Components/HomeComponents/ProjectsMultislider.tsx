import { Link } from 'react-router-dom';
function ProjectsMultislider(){

    const carousel = document.querySelector(".carousel-proj")

    let isSlideStart = false, prevPageX:number, prevScrollLeft:number;

    const slideStart = (e: Event) =>{
        isSlideStart = true;
        prevPageX = (e as MouseEvent).pageX;
        if (carousel) {
        prevScrollLeft = carousel.scrollLeft;
        }

    }

    const Slide = (e: Event) =>{
        if(!isSlideStart) return;
        e.preventDefault();
        let positionDiff = (e as MouseEvent).pageX - prevPageX
        
        if (carousel) {
            carousel.classList.add('dragging')
            carousel.scrollLeft = prevScrollLeft - positionDiff;
        
    }
    }

    const slideStop = () =>{
        isSlideStart = false;
        if(carousel){
            carousel.classList.remove('dragging')
        }
    }


    if (carousel) {
    carousel.addEventListener("mousemove", Slide)
    carousel.addEventListener("mousedown", slideStart)
    carousel.addEventListener("mouseup", slideStop)
    }

    let firstImg = carousel?.querySelectorAll("img")[0];
    let firstImgWidth: number;
    
    if (firstImg) {
        firstImgWidth = firstImg.clientWidth ; 
    }

    const Next = (txt:string) => {
        if(carousel){
            if(txt == "left"){
                carousel.scrollLeft -= firstImgWidth;
            }
            else{
                carousel.scrollLeft += firstImgWidth;
            }
            // showHideIcons();
        }
        
    }



    return(
    <>
    
    <div className="Mbody-Proj">
    <h1 className="servicesh1">OUR PROJECTS</h1>
        <div className="wrapper-Proj">
        <div className="wrapper">
            <div className="leftarrowM" id="arrow" onClick= {() => Next("left")}> &#8249; </div>
            <div  className="carousel-proj">
                
                <img src="https://i.imgur.com/wQdIp4J.jpg" alt="" />
                <img src="https://i.imgur.com/VmPf0Og.jpg" alt="" />
                <img src="https://i.imgur.com/azBm1li.jpg" alt="" />
                <img src="https://i.imgur.com/HOooaWE.jpg" alt="" />
                <img src="https://i.imgur.com/NXzLDiT.jpg" alt="" />
                
                
            </div>
            <div className="rightarrowM" id="arrow" onClick={() => Next("right")}>&#8250;</div>
        </div>
        </div>
        <p className="servicesinfo"> Our Projects include much more. Contact us today if you have something unique in mind</p>
        
        <Link to ='/projects'> <button className="buttonServiceProject"> More</button> </Link>
    </div>


    </>
    )

}

export default ProjectsMultislider