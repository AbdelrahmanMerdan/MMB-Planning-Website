import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function ProjectsMultislider() {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    let isSlideStart = false, prevPageX: number, prevScrollLeft: number;

    useEffect(() => {
        const carousel = carouselRef.current;

        const slideStart = (e: MouseEvent) => {
            isSlideStart = true;
            prevPageX = e.pageX;
            prevScrollLeft = carousel!.scrollLeft;
        }

        const Slide = (e: MouseEvent) => {
            if (!isSlideStart) return;
            e.preventDefault();
            let positionDiff = e.pageX - prevPageX;
            carousel!.scrollLeft = prevScrollLeft - positionDiff;
        }

        const slideStop = () => {
            isSlideStart = false;
        }

        if (carousel) {
            carousel.addEventListener("mousemove", Slide);
            carousel.addEventListener("mousedown", slideStart);
            carousel.addEventListener("mouseup", slideStop);
        }

        return () => {
            if (carousel) {
                carousel.removeEventListener("mousemove", Slide);
                carousel.removeEventListener("mousedown", slideStart);
                carousel.removeEventListener("mouseup", slideStop);
            }
        }
    }, []);

    let firstImgWidth: number;

    useEffect(() => {
        const firstImg = carouselRef.current?.querySelectorAll("img")[0];
    
        if (firstImg) {
            firstImgWidth = firstImg.clientWidth; 
        }
    }, []);

    const Next = (txt: string) => {
        if(carouselRef.current){
            if(txt === "left"){
                carouselRef.current.scrollLeft -= firstImgWidth;
            }
            else{
                carouselRef.current.scrollLeft += firstImgWidth;
            }
        }
    }

    return(
    <>
    
    <div className="Mbody-Proj">
    <h1 className="servicesh1">OUR PROJECTS</h1>
        <div className="wrapper-Proj">
        <div className="wrapper">
            <div className="leftarrowM" id="arrow" onClick= {() => Next("left")}> &#8249; </div>
            <div ref={carouselRef} className="carousel-proj">
                
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
