import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import PlanetView from './planet-view';
import Spinner from '../spinner';
import './random-planet.css';

export default class RandomPlanet extends Component {
  api = new SwapiService()

  constructor() {
    super();
  }
  componentDidMount(){
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  onPlanetLoaded =(planet) => {this.setState({planet, loading: false})};

  state = {
    error: false,
    loading: true,
    planet: {}
  }
  _onError = (error) => { this.setState({ error: true, loading: false }) }
  planetId(max){
    return Math.floor(Math.random() * Math.floor(max))+1;
  }
  updatePlanet = () => {
    const id = this.planetId(20);
    this.api.getPlanet(id)
    .then(this.onPlanetLoaded)
    .catch(this._onError)

  }
  render() {
    const { loading, planet, error } = this.state;
    const hasData = !error && !loading;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    return (
      <div className="random-planet jumbotron rounded">
      {spinner}
      {content}
      {errorMessage}

      </div>

    );
  }
}

const ErrorMessage = () => {
  return(<p>404 Not Found :(</p>);
};
