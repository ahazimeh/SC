import React from "react";
import $ from 'jquery';
import './ListWatches.css';

var h;var hi;
class ListWatches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            apiResponse:""
          };
          this.handleResize = this.handleResize.bind(this);
    }
    ListWatch() {
        fetch("http://localhost:9000/testAPI/ViewWatch?gender=0,1")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: JSON.parse(res) }));
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
            this.ListWatch();



    
    }
  
    render() {
        if(this.state.apiResponse[0]!=undefined){
        let watches = [];
        let all = [];
        let all1 = [];

        for(let i = 0;i < this.state.apiResponse.length;i++){
            watches.push(
        
                <div onClick={event =>  window.location.href='/productDetails?id='+this.state.apiResponse[i].id} style={{ height:h}} className="singleWatch">
                <img height={hi} width="50%" src={require('../img/listWatches/'+this.state.apiResponse[i].image)}/>
                <br/><br/>
                <div>{this.state.apiResponse[i].name}</div>
    
                </div>);
                if((i+1)%3 == 0){
                    all.push(
                        <div className="listWatches">
                            {watches}
                        </div>
                    )
                    all.push(
                        <div className="clearWatchFloat"><br/><br/><br/><br/></div>
                    )
                    watches = [];
                }
        }
        all1.push(
            <div className="allWatches">
                {all}
            </div>
            
        )
    
      return (
        <div>
            {all1}

            
<div className="switchPage">
    <a href="#">
        <b>{"<"}</b>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp; Page 2 &nbsp;&nbsp;&nbsp;&nbsp;<a href="#"><b>{">"}</b></a>
  </div>
            </div>
      );
    }
    else
    return <div></div>
  }
}
  export default ListWatches;