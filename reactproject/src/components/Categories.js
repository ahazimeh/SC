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
            <img height="100%" width="100%" src={require('../img/categories/hub-watches-skydweller_m326934-0003_17tl_316_portrait.jpg')}/>
            <div>sadasd</div>
        </div>
        <div className="CategoryImg">
        <img height="100%" width="100%" src={require('../img/categories/womens-watches_pearlmaster_39.jpg')}/>
            <div>sadasd</div>
        </div>
        <div className="CategoryImg">
        <img height="100%" width="100%" src={require('../img/categories/download.jpeg')}/>
            <div>sadasd</div>
        </div>
    </div>
    <br/>
    <br/>
    <div className="CategoryDiv">
        <div className="CategoryImg">
        <img height="100%" width="100%" src={require('../img/categories/hub-watches-steel-gold_mat-steel_0001_plo_fonte_appretage_10jdm_069.jpg')}/>
            <div>sadasd</div>
        </div>
        <div className="CategoryImg">
        <img height="100%" width="100%" src={require('../img/categories/hub-watches-gold-watches_plo_fonte_appretage_10jdm_069.jpg')}/>
            <div>sadasd</div>
        </div>
        <div className="CategoryImg">
        <img height="100%" width="100%" src={require('../img/categories/download (1).jpeg')}/>
            <div>sadasd</div>
        </div>
    </div>
          </div>
    );
  }
}
export default Categories;
 
