import React from "react";
import './CategoryFilters.css';

class CategoryFilters extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: "",
      display:"none"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.res("block");
    }
  
    render() {
    
    
      return (
        <div>
          <div className="filterFlex" >
  <div className="filterItem" >
<img  className="circle-icon" src={require('../img/categoryFilters/download.jpeg')} alt="Avatar"/>
<div className="textAlign">Men</div>
</div>
<div className="filterItem" >
  <img  className="circle-icon" src={require('../img/categoryFilters/download.jpeg')} alt="Avatar"/>
  <div  className="textAlign">Women</div>
  </div>
  <div className="filterItem" >
    <img  className="circle-icon" src={require('../img/categoryFilters/download.jpeg')} alt="Avatar"/>
    <div  className="textAlign">ads</div>
    </div>
    <div className="filterItem">
    <div onClick={this.handleClick} className="icon" id="plus"></div>
    <div  className="textAlign">All filters</div>
  </div>
</div>
          </div>
      );
    }
  }
  export default CategoryFilters;