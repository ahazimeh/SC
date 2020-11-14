import React from "react";
import './Brands.css';
  class Brands extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        input: "",
        value: 0,
      };
    this.handleChange = this.handleChange.bind(this);

    }
  handleChange(event) {

    this.setState({
      value:event.target.value,
    });
  }
  componentDidMount(){
    // this.setState({
    //   value:0,
    // });
  }
  render() {
    var left = 0;
    var slider = document.getElementById("myRange");
    var img = document.getElementById("myImage");
    let w = window.innerWidth;
    let dif;
    
    // dif = 6*40 + 300*6-w+40;
    dif = 300*6-w+40;

    var a= dif /100;
    
    if(dif>0){
      left =this.state.value*-a;
    }


    return (
      <div>
      <div class="wrap CBrand">
    <img style={{marginLeft:left}} class="brand" id="myImage" width="300px;" src="./brands/omega.png" src={require('../img/brands/omega.png')} />
    <img class="brand" id="myImage" width="300px;" src="./brands/omega.png" src={require('../img/brands/Patek_Philippe.png')} />
    <img class="brand" id="myImage" width="300px;" src="./brands/omega.png" src={require('../img/brands/Rolex_logo.svg')} />
    <img class="brand" id="myImage" width="300px;" src="./brands/omega.png" src={require('../img/brands/omega.png')} />
    <img class="brand" id="myImage" width="300px;" src="./brands/omega.png" src={require('../img/brands/Patek_Philippe.png')} />
    <img class="brand" id="myImage" width="300px;" src="./brands/omega.png" src={require('../img/brands/Rolex_logo.svg')} />
</div>
    <div className="slidecontainer">
        <input type="range" min="0" max="100" value={this.state.value} className="slider" id="myRange" onChange={this.handleChange}/>
      </div>
          </div>
    );
  }
}
export default Brands;
 
