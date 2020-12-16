import React, { Component } from 'react';
import './planet-details.css';
import Spinner from '../spinner';

export default class PlanetDetails extends Component {
  constructor(){
    super();
  }
  state = {
    item: null,
    fetching: false
  };
  updatePlanet(){
    const {entityId, getData} = this.props;
    if(!entityId) { return };
    this.setState({ fetching: true });
    getData(entityId)
      .then((entity) => {
        this.setState({entity, fetching: false});
      });
  }
  componentDidMount(){
    this.updatePlanet();
  }
  componentDidUpdate(prevProps, prevState){
    if(prevProps.entityId !== this.props.entityId){
      this.updatePlanet();
    }
    if(this.state.fetching == prevState.fetching) { return; }
  }
  render(){
    const { entity, fetching } = this.state;
    if(fetching) { return <Spinner /> };
    if(!entity) {return ( <span>Nothing Selected</span> )}
    const {id,name,population,diameter,rotationPeriod} = this.state.entity;
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
