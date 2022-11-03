import { useState } from "react";

const sliderStyles ={
    height: '100%',
    position: 'relative',
}
const slideStyles={
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    //transition: 'ease 1000ms',
}
const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
};
  
const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
};
const dotContainerStyles = {
    display: 'flex',
    justifyContent:'center'
}
const dotStyles ={
    margin: '0 3px',
    cursor: 'pointer',
    fontSize: '20px',
}

const SlideShow = ({slides})=>{
    const [currentIndex, setCurrentIndex] = useState(0)
    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
      };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    
    setTimeout(() => {
        goToNext()
      }, 2000);

    return (
        <div style={sliderStyles}>
            <div style={slideStylesWidthBackground}></div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                <div
                style={dotStyle}
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                >
                ●
                </div>
            ))}
            </div>
        </div>
    )
}

// function SlideShow() {
//         let slideIndex = 0;

//         let i;
//         useEffect(()=>{
//             let slides = document.getElementsByClassName("mySlides");
//             let dots = document.getElementsByClassName("dot");
//             if (slides, dots){
//                     for (i = 0; i < slides.length; i++) {
//                             slides[i].style.display = "none";  
//                     }
//                     slideIndex++;
//                     if (slideIndex > slides.length) {slideIndex = 1}    
//                     for (i = 0; i < dots.length; i++) {
//                             dots[i].className = dots[i].className.replace(" active", "");
//                     }                        
//                     slides[slideIndex-1].style.display = "block";  
//                     dots[slideIndex-1].className += " active";
//                     setTimeout(SlideShow, 2000); // Change image every 2 seconds
//                     }
//                 })

//      return(
//        <div>
//         <div className="slideshow-container">

//         <div className="mySlides fade">
//         <img src="eventImages/Childrens Events.jpg" style={{width:100}}/>
//         <div className="text">Child friendly </div>
//         </div>

//         <div className="mySlides fade">
//         <img src="eventImages/Classes and Workshops.jpg" style={{width:100}}/>
//         <div className="text">Classes and Workshops</div>
//         </div>

//         <div className="mySlides fade">
//         <img src="eventImages/Evening Events.jpg" style={{width:100}}/>
//         <div className="text">Evening events</div>
//         </div>

//         <div className="mySlides fade">
//         <img src="eventImages/Misc.jpg" style={{width:100}}/>
//         <div className="text">Miscellanious</div>
//         </div>

//         <div className="mySlides fade">
//         <img src="eventImages/Music Events.jpg" style={{width:100}}/>
//         <div className="text">Music</div>
//         </div>

//         <div className="mySlides fade">
//         <img src="eventImages/Sports and Fitness.jpg" style={{width:100}}/>
//         <div className="text">Sports and Fitness</div>
//         </div>

//         </div>

//         <div style="text-align:center">
//         <span className="dot"></span> 
//         <span className="dot"></span> 
//         <span className="dot"></span> 
//         <span className="dot"></span> 
//         <span className="dot"></span> 
//         <span className="dot"></span> 
//         </div>
//         </div>
//      )
// }

export default SlideShow