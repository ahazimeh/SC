import React, {Component} from "react";
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ViewWatches from './components/ViewWatches';
import About from './components/About';
import NavBar from './components/navbar/NavBar';
import ProductDetails from './components/productDetails/ProductDetails';
import MainImages from './components/MainImages';
import Brands from './components/Brands';
import Categories from './components/Categories';
import './App.css';
var b = ""
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
    this.state = { brands: "" };
}

callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}
Brands() {
  fetch("http://localhost:9000/testAPI/brands")
        .then(res => res.text())
        .then(res => this.setState({ brands: res }));
      
}
componentWillMount() {
    this.Brands();

}
render(){
  // for(let i=0;i<this.state.brands.length;i++)
  // alert(i);
  var a="";
  var icon = [];
  if(this.state.brands!=""){
  a = JSON.parse(this.state.brands);
  for(let i = 0;i<a.length;i++);
}
  return (
    <div className="App">
      <header className="App-header">
      <NavBar currentweather = "" />
      {/* <MainImages/>
      <Brands/>
      <br/><br/><br/><br/><br/><br/>
      <Categories/> */}

      {/* <ProductDetails currentweather = "" /> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        
      </header>
      {/* <p className="App-intro">{this.state.apiResponse}</p>
      <p className="App-intro">{this.state.brands}</p> */}
      {/* <img src={require('./logo.svg')} />



      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr /> */}
          <Switch>
              <Route exact path='/home' component={Home} />
              <Route exact path='/watches' component={ViewWatches} />
              <Route exact path='/productDetails' component={ProductDetails} />
              
              <Route path='/about' component={About} />
          </Switch>

    </div>
  );
}
}

export default App;
<<<<<<< HEAD
//  test
=======
//here is a comment
 
>>>>>>> ba0784ed852be880b86e8f32d199f6c4a567a162
