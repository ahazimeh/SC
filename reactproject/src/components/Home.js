import React, { Component } from 'react';
import MainImages from './MainImages';
import Brands from './Brands';
import Categories from './Categories';
class Home extends Component {
  render() {
    return (
        <div>
          <MainImages/>
      <Brands/>
      <br/><br/><br/><br/><br/><br/>
      <Categories/>
        </div>
    );
  }
}

export default Home;