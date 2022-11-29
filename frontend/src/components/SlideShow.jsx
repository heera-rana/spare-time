import { useState } from "react";

const sliderStyles ={
    padding: '5px',
    background: '#004643'
}
const slideStyles={
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'left',
    backgroundSize: 'cover',
    padding: '50px',
    transition: 'ease 1000ms',

}
const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
};
  
const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
}

// SlideShow is a slideshow of dynamic css in the header
const SlideShow = ({slides})=>{
    const [currentIndex, setCurrentIndex] = useState(0)
    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
    
    setTimeout(() => {
        goToNext()
      }, 3000)

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

export default SlideShow
