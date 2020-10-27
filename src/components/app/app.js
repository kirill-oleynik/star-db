import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ToggleRandomPlanetButton from '../toggle-random-planet-button';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import './app.css';

export default class App extends Component {
  state  = {
    randomPlanetVisible: false,
    selectedPersonId:null
  }
  onSelectItem = (selectedPersonId) => {
    this.setState({selectedPersonId})
  }
  handleRandomPlanetVisibilityToggleClick = () => {
    this.setState(({ randomPlanetVisible }) => {
      return {
        randomPlanetVisible: !randomPlanetVisible
      };
    });
  }
  render() {
    const { randomPlanetVisible } = this.state;
   return(
    <div>
      <Header />
     <ToggleRandomPlanetButton
     state={randomPlanetVisible}
     handleClick={this.handleRandomPlanetVisibilityToggleClick}
     />
     { randomPlanetVisible ? <RandomPlanet /> : null }
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onSelectPerson={this.onSelectItem} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPersonId} />
        </div>
      </div>
    </div>
  );
  }
}
