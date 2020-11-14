import React from "react";
import './MainImages.css'
var slideIndex = 0;
  class MainImages extends React.Component {
  state = {
    input: ""
  };
  showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(() => {
      this.showSlides();
    }, 2000);// Change image every 2 seconds
  }
  componentDidMount(){
    this.showSlides();
  }

  render() {
    let w = window.innerWidth;
    let h = window.innerHeight;
  
  
    return (
      <div>
        
        <div className="slideshow-container">

<div className="MainImagesCover mySlides fade">
  <div className="numbertext">1 / 3</div>
  <img alt="Los Angeles"width={w} height = {h} src={require('../img/MainImages/Rolex-Daytona-116508-yellow-gold-green-watch-12.jpg')} />
  <div className="text">Caption Text</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">2 / 3</div>
  
  <img alt="Chicago"width={w} height = {h} src={require('../img/MainImages/best-luxury-watch-brands-rolex-luxe-digital.jpg')} />
  <div className="text">Caption Two</div>
</div>

<div className="mySlides fade">
  <div className="numbertext">3 / 3</div>
  <img alt="New york"width={w} height = {h} src={require('../img/MainImages/Luxurious watches - Rolex main.jpg')} />
  <div className="text">Caption Three</div>
</div>

</div>
<br/>

<div className="dCenter">
  <span className="dot"></span> 
  <span className="dot"></span> 
  <span className="dot"></span> 
</div>
      
      
          </div>
    );
  }
}
export default MainImages;
 
