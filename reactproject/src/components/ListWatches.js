import React from "react";
import $ from 'jquery';
import './ListWatches.css';

var h;var hi;
class ListWatches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
          };
          this.handleResize = this.handleResize.bind(this);
    }
    
    handleResize(){
            // alert("h")
            h =window.innerWidth*0.65*0.45;
            hi =window.innerWidth*0.455*0.45;

            this.setState({
                input:"a"
            });
    
      }
    componentWillMount() {
        window.addEventListener('resize',this.handleResize);
            h =window.innerWidth*0.65*0.45;
            hi =window.innerWidth*0.455*0.45;

    
    }
  
    render() {
    
      return (
        <div>
            <div className="allWatches">
        <div className="listWatches">
        <div onClick={event =>  window.location.href='/productDetails'} style={{ height:h}} className="singleWatch">
            
            <img height={hi} width="50%" src={require('../img/listWatches/1.jpeg')}/>
            <br/><br/>
            <div>image 1</div>
        </div>
        <div onClick={event =>  window.location.href='/productDetails'} style={{ height:h}} className="singleWatch">
            
        <img height={hi} width="50%" src={require('../img/listWatches/2.jpeg')}/>
            <br/><br/>
            <div>image 1</div>
        </div>
        <div onClick={event =>  window.location.href='/productDetails'} style={{ height:h}} className="singleWatch">
            
            <img height={hi} width="50%" src={require('../img/listWatches/3.jpeg')}/>
            <br/><br/>
            <div>image 1</div>
        </div>
    </div>
    <div className="clearWatchFloat"><br/><br/><br/><br/></div>
    <div className="listWatches">
        <div onClick={event =>  window.location.href='/productDetails'} style={{ height:h}} className="singleWatch">
            
            <img height={hi} width="50%" src={require('../img/listWatches/4.jpeg')}/>
            <br/><br/>
            <div>image 1</div>
        </div>
        <div onClick={event =>  window.location.href='/productDetails'} style={{ height:h}} className="singleWatch">
            
            <img height={hi} width="50%" src={require('../img/listWatches/5.jpeg')}/>
            <br/><br/>
            <div>image 1</div>
        </div>
        <div onClick={event =>  window.location.href='/productDetails'} style={{ height:h}} className="singleWatch">
            
            <img height={hi} width="50%" src={require('../img/listWatches/6.jpeg')}/>
            <br/><br/>
            <div>image 1</div>
        </div>
    </div>
    <div className="clearWatchFloat"><br/><br/><br/><br/></div>
</div>
<div className="switchPage">
    <a href="#">
        <b>{"<"}</b>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp; Page 2 &nbsp;&nbsp;&nbsp;&nbsp;<a href="#"><b>{">"}</b></a>
  </div>
            </div>
      );
    }
  }
  export default ListWatches;