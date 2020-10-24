import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import PlanetView from './planet-view';
import Spinner from '../spinner';
import './random-planet.css';

export default class RandomPlanet extends Component {
  api = new SwapiService()

  constructor() {
    super();
    this.updatePlanet();
  }
  onPlanetLoaded =(planet) => {this.setState({planet, loading: false})};

  state = {
    loading: true,
    planet: {}
  }
  planetId(max){
    return Math.floor(Math.random() * Math.floor(max));
  }
  updatePlanet(){
    const id = this.planetId(20);
    this.api.getPlanet(id)
    .then(this.onPlanetLoaded)

  }
  render() {
    const { loading, planet } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PlanetView planet={planet} /> : null;
    return (
      <div className="random-planet jumbotron rounded">
      {spinner}
      {content}
      
      </div>

    );
  }
}

