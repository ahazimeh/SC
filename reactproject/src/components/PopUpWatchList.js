import React from "react";
import './PopUpWatchList.css';
class PopUpWatchList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: "",
      display:"block"
    };
    this.close = this.close.bind(this);
  }

    close(){
    this.props.close("none");
      
    }
    
    componentDidMount(){
      
    }
  
    render() {
    
    
      return (
        <div>
          <div  className="PopUpList" display={this.props.displayres}>
          <span onClick={this.closePopUp} id="close"  onClick={this.close} class="closePopUp">&times;</span>
          <div>
            
          </div>
</div>
          </div>
      );
    }
  }
  export default PopUpWatchList;