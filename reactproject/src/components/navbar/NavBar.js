import React from "react";
import './css/bootstrap.css';
import {Link} from 'react-router-dom';
// import './css/bootstrap.min.css';
// import './css/font-awesome.min.css';
// import './css/front-end.css';

  class NavBar extends React.Component {
  state = {
    input: ""
  };

  render() {
  
  
    return (
      <div>
        <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <Link class="navbar-brand" to="/">WebSiteName</Link>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><Link to="/home">Home</Link></li>
        {/* <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Page 1-1</a></li>
            <li><a href="#">Page 1-2</a></li>
            <li><a href="#">Page 1-3</a></li>
          </ul>
        </li> */}
        <li><Link to="/watches">Watches</Link></li>
        {/* <li><a href="/productDetails">ProductDetails</a></li> */}
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><Link to="#"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
        <li><Link to="#"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
      </ul>
    </div>
  </div>
</nav>
      
          </div>
    );
  }
}
export default NavBar;
 
