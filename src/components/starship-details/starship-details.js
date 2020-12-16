import React, { Component } from 'react';
import './starship-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class StarshipDetails extends Component {
  api=new SwapiService();
  constructor(){
    super();
  }
  state = {
    entity: null,
    fetching: false
  };
  updateStarship(){
    const {entityId} = this.props;
    if(!entityId) { return };
    this.setState({ fetching: true });
    this.api.getStarship(entityId)
      .then((entity) => {
        this.setState({entity, fetching: false});
      });
  }
  componentDidMount(){
    this.updateStarship();
  }
  componentDidUpdate(prevProps, prevState){
    if(prevProps.entityId !== this.props.entityId){
      this.updateStarship();
    }
    if(this.state.fetching == prevState.fetching) { return; }
  }
  render(){
    const { entity, fetching } = this.state;
    if(fetching) { return <Spinner /> };
    if(!entity) {return ( <span>Nothing Selected</span> )}
    const {id,name,model,manufacturer,cargoCapacity,passengers, crew} = entity;
    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Model</span>
              <span>{model}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Manufacturer</span>
              <span>{manufacturer}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Passengers</span>
              <span>{passengers}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Crew</span>
              <span>{crew}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
