import React, { Component } from 'react';
import './person-details.css';
import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry';
import ErrorButton from '../error-button';

export default class PersonDetails extends Component {
  constructor(){
    super();
  }
  state = {
    item: null,
    fetching: false
  };
  updatePerson(){
    const {itemId, getData} = this.props;
    if(!itemId) { return };
    this.setState({ fetching: true });
    getData(itemId)
      .then((item) => {
        this.setState({item, fetching: false});
      });
  }
  componentDidMount(){
    this.updatePerson();
  }
  componentDidUpdate(prevProps, prevState){
    if(prevProps.itemId !== this.props.itemId){
      this.updatePerson();
    }
    if(this.state.fetching == prevState.fetching) { return; }
  }
  render(){
    const { item, fetching } = this.state;
    if(fetching) { return <Spinner /> };
    if(!item) {return ( <span>Nothing Selected</span> )}
    const {id,name,gender,eyeColor,birthYear} = item;
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
      <ErrorButton />
        </div>
      </div>
    );
  }
}
