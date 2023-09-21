import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function ServicesMultislider() {
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
            firstImgWidth = firstImg.clientWidth + 14; 
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
    
    <div className="Mbody">
    <h1 className="servicesh1">Our Services</h1>
        <div className="wrapper">
            <div className="leftarrowM" id="arrow" onClick= {() => Next("left")}> &#8249; </div>
            <div ref={carouselRef} className="carousel">
                <img src="https://i.imgur.com/Ud0gPy0.png" alt="" />
                <img src="https://i.imgur.com/StYyOuY.png" alt="" />
                <img src="https://i.imgur.com/ruidpJu.png" alt="" />
                <img src="https://i.imgur.com/jptEupv.png" alt="" />
                <img src="https://i.imgur.com/ScW4wMu.png" alt="" />
                <img src="https://i.imgur.com/1VchNCY.png" alt="" />
                
            </div>
            <div className="rightarrowM" id="arrow" onClick={() => Next("right")}>&#8250;</div>
        </div>
        <p className="servicesinfo"> Our services include much more. Contact us today if you have something unique in mind</p>
        
        <Link to ='/services'> <button className="buttonService"> More</button> </Link>
    </div>


    </>
    )

}

export default ServicesMultislider
