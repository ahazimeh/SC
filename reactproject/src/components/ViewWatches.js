import React from "react";
import CategoryFilters from './CategoryFilters';
import ListWatches from './ListWatches';
import PopUpWatchList from './PopUpWatchList'; 
import './ViewWatches.css';

class ViewWatches extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: "",
      display:"none"
    };
  }
  displayPopUp = (result) => {
    this.setState({display: result});
}
close = (result) =>{

  this.setState({display: result});
}
    render() {
    
    
      return (
        <div className="viewWatches">
          <PopUpWatchList close={this.close} displayres={this.state.display}/>
          
          
          <CategoryFilters res={this.displayPopUp}/>
          <ListWatches/>
          </div>
      );
    }
  }
  export default ViewWatches;