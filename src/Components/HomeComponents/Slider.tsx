import { useState } from "react";

function Slider(){

    const slides = [
    
        {url: "https://www.bdcnetwork.com/sites/default/files/Top%20180%20Architecture%20Firms%20for%202022%20AO%20.jpg"}
    ,
        {url: "https://assets-global.website-files.com/5d7fff8397d2f23915c02cc1/6036a92d3bf208f29ed86e48_architecture-business-skills.jpg"}
    ,
        {url: "https://iconiclife.com/wp-content/uploads/2020/08/Musee-Atelier-Audemars-Piguet-by-BIG-design-firm.jpg"}

]

const txtiltle = [
    'MMB Planning and Architecture \n' ,
    'MMB Planning and Architecture ' ,
    'MMB Planning and Architecture ' 
]

const texts = [

    "MMB Planning: Shaping Cities for a Brighter Tomorrow – Your Trusted Partner in Comprehensive Planning and Architectural Services.",
    "We customize homes that exceed expectations and reflect our clients’ personal styles" ,
    "We believe that design is an amalgamation of qualities of individuals, spaces and volumes, together with the environment in which they co-exist."

    
]
    

    const [currentIndex, setCurrentIndex] =  useState(0);

    const [textimg, setTextImg] = useState(texts[0])

    const [textTitle, settextTitle] = useState(txtiltle[0])

    const [opac, setOpac] = useState(0)
    

    const goBack = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length-1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        settextTitle(txtiltle[newIndex])
        setTextImg(texts[newIndex]);
        setOpac(0);
        setTimeout(() => setOpac(1), 50);
    }

    const goNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        settextTitle(txtiltle[newIndex])
        setTextImg(texts[newIndex]);
        setOpac(0);
        setTimeout(() => setOpac(1), 50);

        
    }

    const slideStyle = {
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const goToSlide = (slideindex: number) =>{
        setCurrentIndex(slideindex);
        settextTitle(txtiltle[slideindex])
        setTextImg(texts[slideindex]);
        setOpac(0);
        setTimeout(() => setOpac(1), 50);

    }

    return(
        <>
        <div  className="SliderStyles">
            <div className="leftarrow" onClick={goBack}> &#8249; </div>
            <div className="rightarrow" onClick={goNext}>&#8250;</div>
            <div style = {slideStyle} className="SlideStyles">
                <p className={`textimg ${opac === 1 ? 'fade-in' : ''}`}>
                <h1>
                {textTitle}
                </h1>
                <br></br>
                {textimg}
                
                </p>

            </div>
            
            

        </div>

        <div className="dotsContainer">
                {slides.map((slide, slideindex) => (
                    <div key={slideindex} className="dots"
                    onClick={() => goToSlide(slideindex)}
                    > &#8226; </div>
                ))}
            </div>
        </>
    )

}

export default Slider;
