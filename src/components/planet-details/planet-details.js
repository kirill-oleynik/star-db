import React, { Component } from 'react';
import './planet-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class PlanetDetails extends Component {
  api=new SwapiService();
  constructor(){
    super();
  }
  state = {
    planet: null,
    fetching: false
  };
  updatePlanet(){
    const {planetId} = this.props;
    if(!planetId) { return };
    this.setState({ fetching: true });
    this.api.getPlanet(planetId)
      .then((planet) => {
        this.setState({planet, fetching: false});
      });
  }
  componentDidMount(){
    this.updatePlanet();
  }
  componentDidUpdate(prevProps, prevState){
    if(prevProps.planetId !== this.props.planetId){
      this.updatePlanet();
    }
    if(this.state.fetching == prevState.fetching) { return; }
  }
  render(){
    const { planet, fetching } = this.state;
    if(fetching) { return <Spinner /> };
    if(!planet) {return ( <span>Nothing Selected</span> )}
    const {id,name,population,diameter,rotationPeriod} = this.state.planet;
    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Diameter</span>
              <span>{diameter}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Rotation period</span>
              <span>{rotationPeriod}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
