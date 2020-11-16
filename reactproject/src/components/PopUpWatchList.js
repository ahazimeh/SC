import React from "react";
import './PopUpWatchList.css';
class PopUpWatchList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: "",
      display:"block",
      height:0
    };
    this.close = this.close.bind(this);
    this.handleResize = this.handleResize.bind(this);
    
  }

    close(){
    this.props.close("none");
      
    }
    handleResize(){
      let a = document.getElementById("popUpTitle").clientHeight + document.getElementById("close").clientHeight;
      a = window.innerHeight - a;
      this.setState({
        height:a
      })
    }
    
    componentDidMount(){
      window.addEventListener('resize',this.handleResize);
      let a = document.getElementById("popUpTitle").clientHeight + document.getElementById("close").clientHeight;
      a = window.innerHeight - a;
      this.setState({
        height:a
      })

    }
  
    render() {
      // var h = window.innerHeight/2;
      if(this.state.height==0)
      return (
        <div>
          <div  className="PopUpList" display={this.props.displayres}>
          <span onClick={this.closePopUp} id="close"  onClick={this.close} class="closePopUp">&times;</span>
          <div  className="mainPopup">
            <div id="popUpTitle">SELECT YOUR CRITERIA
            <hr/></div>
            <div  id="PopUpOverflow" className="PopUpOverflow">
            <div>
              <p>BRAND</p>
            </div>
            <label class="container">
              <div className="labelName">Men</div>
              <input type="checkbox"/>
              <span class="checkmark"></span>
              </label>
              <label class="container">
              <div className="labelName">Women</div>
              <input type="checkbox"/>
              <span class="checkmark"></span>
              </label>
              <label class="container">
              <div className="labelName">sdsaf</div>
              <input type="checkbox"/>
              <span class="checkmark"></span>
              </label>
            <div>
            <p>CATEGORY</p>
            </div>
            <div>
              <p>BRAND</p>
            </div>
            <label class="container">
              <div className="labelName">Men</div>
              <input type="checkbox"/>
              <span class="checkmark"></span>
              </label>
              <label class="container">
              <div className="labelName">Women</div>
              <input type="checkbox"/>
              <span class="checkmark"></span>
              </label>
              <label class="container">
              <div className="labelName">sdsaf</div>
              <input type="checkbox"/>
              <span class="checkmark"></span>
              </label>
            <div>
            <p>CATEGORY</p>
            </div>



            



            



            </div>

            
            
            
          </div>
</div>
          </div>
      );
      else 
      return (
        <div>
          <div  className="PopUpList" display={this.props.displayres}>
          <span onClick={this.closePopUp} id="close"  onClick={this.close} class="closePopUp">&times;</span>
          <div  className="mainPopup">
            <div id="popUpTitle">SELECT YOUR CRITERIA
            <hr/></div>
            <div style={{height:this.state.height}} id="PopUpOverflow" className="PopUpOverflow">
            <div>
              <p>BRAND</p>
            </div>
            <label class="container">
              <div className="labelName">Men</div>
              <input type="checkbox"/>
              <span class="checkmark"></span>
              </label>
              <label class="container">
              <div className="labelName">Women</div>
              <input type="checkbox"/>
              <span class="checkmark"></span>
              </label>
              <label class="container">
              <div className="labelName">sdsaf</div>
              <input type="checkbox"/>
              <span class="checkmark"></span>
              </label>
            <div>
            <p>CATEGORY</p>
            </div>
            <div>
              <p>BRAND</p>
            </div>
            <label class="container">
              <div className="labelName">Men</div>
              <input type="checkbox"/>
              <span class="checkmark"></span>
              </label>
              <label class="container">
              <div className="labelName">Women</div>
              <input type="checkbox"/>
              <span class="checkmark"></span>
              </label>
              <label class="container">
              <div className="labelName">sdsaf</div>
              <input type="checkbox"/>
              <span class="checkmark"></span>
              </label>
            <div>
            <p>CATEGORY</p>
            </div>



            



            



            </div>

            
            
            
          </div>
</div>
          </div>
      );
    }
  }
  export default PopUpWatchList;