import React from "react";
import './ProductDetails.css';
import $ from 'jquery';
var total = 0;
  class ProductDetails extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      input: "",
      apiResponse:""
    };
    this.handleResize = this.handleResize.bind(this);
  }
  ProductDetail() {
    fetch("http://localhost:9000/testAPI/ViewWatch?gender=0,1")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: JSON.parse(res) }));
  }
  handleResize(){
    this.setState({
      input:""
    })
  }
  handleScroll(){
            // (function ($) {
  $(document).ready(function() {
    $(window).scroll(function(){
        var detailsHeight = document.getElementById("details").clientHeight;
        var x;
        x = document.getElementById("images").clientHeight;
        x = x+ $('#details').offset().top;
        x -=total;
        if(window.innerWidth>=600)
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
    window.addEventListener('resize',this.handleResize);
  }
  render() {
    // width of both elements is 600px
    let margin = (window.innerWidth-600)/3;
    if(margin<0){
      margin = 0;
    }
    return (
      <div>
        <div style={{marginLeft:margin}} id="images" className="images">
          <div><img src={require('./910D0vQR2HL._UY445_.jpg')} /></div>
          <div><img src={require('./910D0vQR2HL._UY445_.jpg')} /></div>
          <div><img src={require('./910D0vQR2HL._UY445_.jpg')} /></div>
        
        </div>
        <div style={{marginLeft:margin}} id="details" className="details">
            
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

  }
}
export default ProductDetails;
 
