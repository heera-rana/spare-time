import React from 'react'

function SlideShow() {
    // let slideIndex = 0;
    
    // function showSlides() {
    //   let i;
    //   let slides = document.getElementsByClassName("mySlides");
    //   let dots = document.getElementsByClassName("dot");
    //   for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";  
    //   }
    //   slideIndex++;
    //   if (slideIndex > slides.length) {slideIndex = 1}    
    //   for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    //   }
    //   slides[slideIndex-1].style.display = "block";  
    //   dots[slideIndex-1].className += " active";
    //   setTimeout(showSlides, 2000); // Change image every 2 seconds
    // }


  return (
    <div>
      <div className="slideshow-container">

<div className="mySlides fade">
  <img src="eventImages/Childrens Events.jpg" alt='childrens events' style={{width:'100%'}}/>
  <div className="text">Child friendly </div>
</div>

<div className="mySlides fade">
  <img src="eventImages/Classes and Workshops.jpg" alt='classes and workshops' style={{width:'100%'}}/>
  <div className="text">Classes and Workshops</div>
</div>

<div className="mySlides fade">
  <img src="eventImages/Evening Events.jpg" alt='evening events' style={{width:'100%'}}/>
  <div className="text">Evening events</div>
</div>

<div className="mySlides fade">
  <img src="eventImages/Misc.jpg" alt='misc' style={{width:'100%'}}/>
  <div className="text">Miscellanious</div>
</div>

<div className="mySlides fade">
  <img src="eventImages/Music Events.jpg" alt='music events' style={{width:'100%'}}/>
  <div className="text">Music</div>
</div>

<div className="mySlides fade">
  <img src="eventImages/Sports and Fitness.jpg" alt='sports and fitness' style={{width:'100%'}}/>
  <div className="text">Sports and Fitness</div>
</div>

</div>
<br/>

<div style={{textAlign: 'center'}}>
  <span className="dot"></span> 
  <span className="dot"></span> 
  <span className="dot"></span> 
  <span className="dot"></span> 
  <span className="dot"></span> 
  <span className="dot"></span> 
</div>
    </div>
  )
}

export default SlideShow







