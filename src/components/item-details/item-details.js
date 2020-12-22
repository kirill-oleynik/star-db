import React, { Component } from 'react';
import './item-details.css';
import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry';
import ErrorButton from '../error-button';
import ItemField from '../item-field';

export default class ItemDetails extends Component {
  constructor(){
    super();
  }
  state = {
    item: null,
    fetching: false,
    image: null
  };
  updatePerson(){
    const {itemId, getData, getImageUrl} = this.props;
    if(!itemId) { return };
    this.setState({ fetching: true });
    getData(itemId)
      .then((item) => {
        this.setState({item, fetching: false, image: getImageUrl(item)});
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
    const { item, fetching, image } = this.state;
    if(fetching) { return <Spinner /> };
    if(!item) {return ( <span>Nothing Selected</span> )}
    return (
      <div className="person-details card">
        <img className="person-image"
          src={image} />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
      <ItemField item={item} field={'gender'} label={'Gender'} />
      <ItemField item={item} field={'birthYear'} label={'Birth Year'} />
      <ItemField item={item} field={'eyeColor'} label={'Eye Color'} />
          </ul>
      <ErrorButton />
        </div>
      </div>
    );
  }
}
