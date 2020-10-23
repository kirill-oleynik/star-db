import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';

export default class RandomPlanet extends Component {
  api = new SwapiService()

  constructor() {
    super();
    this.updatePlanet();
  }
  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  }
  planetId(max){
    return Math.floor(Math.random() * Math.floor(max));
  }
  updatePlanet(){
    const id = this.planetId(20);
    this.api.getPlanet(id)
      .then(({ name, population, rotation_period, diameter }) => {
        this.setState({
          id: id,
          name,
          population,
          diameter,
          rotationPeriod: rotation_period
        });
      });
  }
  render() {
    const {id,name,population,rotationPeriod,diameter}=this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
