import React from "react";
import './ProductDetails.css';
import $ from 'jquery';
var total = 0;
  class ProductDetails extends React.Component {
  state = {
    input: ""
  };
  
  handleScroll(){
    //   alert("hi");
            // (function ($) {
  $(document).ready(function() {
    $(window).scroll(function(){
        var detailsHeight = document.getElementById("details").clientHeight;
        var x;
        x = document.getElementById("images").clientHeight;
        x = x+ $('#details').offset().top;
        x -=total;
      if ($(window).scrollTop() > $('#details').offset().top) {
          
          if ($(window).scrollTop() <x){
              $('#scroller').css({"position":"fixed", "top":"0px", "bottom":"auto"});
              
          } else {
            $('#scroller').css({"position":"absolute", "top":x+"px", "bottom":"50px"});
          }
      } else {
        $('#scroller').css({"position":"relative", "top":"auto", "bottom":"0px"});
      }

    });
  });
// })(jQuery);

  }
  Scroll(){
    //   window.addEventListener('scroll',this.handleScroll);
  }
  componentDidMount(){
    var detailsHeight = document.getElementById("details").clientHeight;
    total = detailsHeight;
    window.addEventListener('scroll',this.handleScroll);
  }
  render() {
    return (
      <div>
        <div id="images" className="images">
        <img src={require('./910D0vQR2HL._UY445_.jpg')} />
        <img src={require('./910D0vQR2HL._UY445_.jpg')} />
        <img src={require('./910D0vQR2HL._UY445_.jpg')} />
        
        </div>
        <div id="details" className="details">
            
            <div id="scroller" className="scroller" >
            <h2>Gold-Tone Rectangular Analog Watch</h2>
            <p>price</p>
            <div className="itemDetails">
                <p>Add to bag</p>
            </div>
            <p className="description">Description</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium placeat sapiente labore optio maxime doloribus culpa molestiae consequuntur repudiandae nemo, qui ipsum perspiciatis magnam. Dignissimos natus facilis veritatis expedita reiciendis!</p>
        </div>
        
        </div>
        <div className="clear1">
            <p>asdas</p>
            <p>asdas</p>
            <p>asdas</p>
            <p>asdas</p>
            <p>asdas</p>
            <p>asdas</p>
            <p>asdas</p>
            <p>asdas</p>
            <p>asdas</p>
            <p>asdas</p>
            <p>asdas</p>
            <p>asdas</p>
            <p>asdas</p>
            <p>asdas</p>
            <p>asdas</p>
            <p>asdas</p>
            <p>asdas</p>
            <p>asdas</p>
            <p>asdas</p>
        </div>
          </div>
    );
    var total = 0,flag = 0;
            // (function ($) {
  $(document).ready(function() {
    $(window).scroll(function(){
        var detailsHeight = document.getElementById("details").clientHeight;
        if(flag==0){
            total = detailsHeight;
            flag = 1;
        }
        var x;
        x = document.getElementById("images").clientHeight;
        x = x+ $('#details').offset().top;
        x -=total;
      if ($(window).scrollTop() > $('#details').offset().top) {
          
          if ($(window).scrollTop() <x){
              $('#scroller').css({"position":"fixed", "top":"0px", "bottom":"auto"});
              
          } else {
            $('#scroller').css({"position":"absolute", "top":x+"px", "bottom":"50px"});
          }
      } else {
        $('#scroller').css({"position":"relative", "top":"auto", "bottom":"0px"});
      }

    });
  });
// })(jQuery);

  }
}
export default ProductDetails;
 
