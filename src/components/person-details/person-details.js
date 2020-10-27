import React, { Component } from 'react';
import './person-details.css';
import SwapiService from '../../services/swapi-service';

export default class PersonDetails extends Component {
  api=new SwapiService();
  constructor(){
    super();
  }
  state = {
    person: null
  };
  updatePerson(){
    const {personId} = this.props;
    if(!personId) { return };
    this.api.getPerson(personId)
      .then((person) => {
        this.setState({person});
      });
  }
  componentDidMount(){
    this.updatePerson();
  }
  componentDidUpdate(prevProps){
    if(prevProps.personId !== this.props.personid){
      this.updatePerson();
    }
  }
  render(){
    const { person } = this.state;
    if(!person) {return ( <span>Nothing Selected</span> )}
    const {id,name,gender,eyeColor,birthYear} = person;
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
