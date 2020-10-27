import React, { Component, Fragment } from 'react';
import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class ItemList extends Component {
  api = new SwapiService();
  state = {
    peopleList: null
  };
  componentDidMount(){
    this.api.getAllPeople()
      .then((peopleList)=>{
        this.setState({ peopleList })
      })
  }
  renderPerson =(person) => {
    const {id,name} = person;
    const handleClick=()=>{
      this.props.onSelectPerson(id);
    }
    return(
        <li
      key={id}
      className="list-group-item"
      onClick={handleClick}
      >
      {name}
        </li>

    );
  }
  render() {
    const {peopleList} = this.state;
    if(!peopleList){ return <Spinner /> }
    const data = peopleList.map(this.renderPerson);
    return (
      <Fragment>
      <h4>Select Item: </h4>
      <ul className="item-list list-group">
      {data}
     </ul>
      </Fragment>
    );
  }
}
