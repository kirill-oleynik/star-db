import React, { Component } from 'react';
import './app.css';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ToggleRandomPlanetButton from '../toggle-random-planet-button';
import ItemList from '../item-list';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import PlanetsPage from '../planets-page';
import StarshipsPage from '../starships-page';
import ErrorBoundry from '../error-boundry';
import {PersonList,PlanetList,StarshipList} from '../sw-components';
import {SwapiServiceProvider} from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {
  swapiService = new SwapiService();
  // }
  state  = {
    randomPlanetVisible:true,
    selectedPersonId:null,
  };
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
     <SwapiServiceProvider value={this.swapiService}>
     <ErrorBoundry>
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
     <StarshipsPage />
    </div>
     </ErrorBoundry>
     </SwapiServiceProvider>
  );
  }
}
