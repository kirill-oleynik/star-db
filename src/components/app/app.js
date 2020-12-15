import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ToggleRandomPlanetButton from '../toggle-random-planet-button';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import PlanetsPage from '../planets-page';
import './app.css';

export default class App extends Component {
  componentDidCatch(){
    this.setState({ hasError: true })
  }
  state  = {
    randomPlanetVisible:true,
    selectedPersonId:null,
    hasError:false
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
    const { randomPlanetVisible, hasError } = this.state;
    if(hasError) { return(<ErrorIndicator />); }
   return(
    <div id='Application'>
      <Header />
     { randomPlanetVisible ? <RandomPlanet /> : null }
     <ToggleRandomPlanetButton
     state={randomPlanetVisible}
     handleClick={this.handleRandomPlanetVisibilityToggleClick}
     />
     <ErrorButton />
     <PeoplePage />
     <PlanetsPage />
    </div>
  );
  }
}
