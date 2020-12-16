import React, { Component } from 'react';
import './person-details.css';
import Spinner from '../spinner';

export default class PersonDetails extends Component {
  constructor(){
    super();
  }
  state = {
    entity: null,
    fetching: false
  };
  updatePerson(){
    const {entityId, getData} = this.props;
    if(!entityId) { return };
    this.setState({ fetching: true });
    getData(entityId)
      .then((entity) => {
        this.setState({entity, fetching: false});
      });
  }
  componentDidMount(){
    this.updatePerson();
  }
  componentDidUpdate(prevProps, prevState){
    if(prevProps.entityId !== this.props.entityId){
      this.updatePerson();
    }
    if(this.state.fetching == prevState.fetching) { return; }
  }
  render(){
    const { entity, fetching } = this.state;
    if(fetching) { return <Spinner /> };
    if(!entity) {return ( <span>Nothing Selected</span> )}
    const {id,name,gender,eyeColor,birthYear} = entity;
    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
