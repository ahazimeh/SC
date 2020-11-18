import React from "react";
import './Categories.css';
  class Categories extends React.Component {
  state = {
    input: ""
  };

  render() {
  
  
    return (
      <div>
      <div className="CategoryDiv">
        <div className="CategoryImg">
            <img height="100%" width="100%" src={require('../img/categories/men.jpg')}/>
            <div>sadasd</div>
        </div>
        <div className="CategoryImg">
        <img height="100%" width="100%" src={require('../img/categories/women.jpg')}/>
            <div>sadasd</div>
        </div>
        <div className="CategoryImg">
        <img height="100%" width="100%" src={require('../img/categories/steel.jpeg')}/>
            <div>sadasd</div>
        </div>
    </div>
    <br/>
    <br/>
    <div className="CategoryDiv">
        <div className="CategoryImg">
        <img height="100%" width="100%" src={require('../img/categories/steelandgold.jpg')}/>
            <div>sadasd</div>
        </div>
        <div className="CategoryImg">
        <img height="100%" width="100%" src={require('../img/categories/gold.jpg')}/>
            <div>sadasd</div>
        </div>
        <div className="CategoryImg">
        <img height="100%" width="100%" src={require('../img/categories/gem.jpeg')}/>
            <div>sadasd</div>
        </div>
    </div>
          </div>
    );
  }
}
export default Categories;
 
