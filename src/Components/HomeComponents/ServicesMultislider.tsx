import { Link } from 'react-router-dom';
function ServicesMultislider(){

    const carousel = document.querySelector(".carousel")

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
        firstImgWidth = firstImg.clientWidth + 14; 
    }
    
    // const showHideIcons = () => {
    //     if(carousel){
    //         const leftarr = document.querySelector("#leftarrowM")
    //         if(carousel.scrollLeft == 0){
    //             if(leftarr)(
    //                 leftarr.setAttribute("style", "display: none;")
    //             )
    //         }
    //         else{
    //             if(leftarr)(
    //                 leftarr.setAttribute("style", "display: block;")
    //             )
    //         }
    //     }
    // }

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
    
    <div className="Mbody">
    <h1 className="servicesh1">Our Services</h1>
        <div className="wrapper">
            <div className="leftarrowM" id="arrow" onClick= {() => Next("left")}> &#8249; </div>
            <div  className="carousel">
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