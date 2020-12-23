import React, { Component } from 'react';
import './item-details.css';
import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry';
import ErrorButton from '../error-button';

export default class ItemDetails extends Component {
  constructor(){
    super();
  }
  state = {
    item: null,
    fetching: false,
    image: null
  };
  updateItem(){
    const {itemId, getData, getImageUrl} = this.props;
    if(!itemId) { return };
    this.setState({ fetching: true });
    getData(itemId)
      .then((item) => {
        this.setState({item, fetching: false, image: getImageUrl(item)});
      });
  }
  componentDidMount(){
    this.updateItem();
  }
  componentDidUpdate(prevProps, prevState){
    if(prevProps.itemId !== this.props.itemId){
      this.updateItem();
    }
    if(this.state.fetching == prevState.fetching) { return; }
  }
  render(){
    const { item, fetching, image } = this.state;
    if(fetching) { return <Spinner /> };
    if(!item) {return ( <span>Nothing Selected</span> )}
    const itemFields = React.Children.map(
    this.props.children,
      (child) => (React.cloneElement(child, {item}))
    );
    return (
      <div className="person-details card">
        <img className="person-image"
          src={image} />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
      { itemFields }
          </ul>
      <ErrorButton />
        </div>
      </div>
    );
  }
}
