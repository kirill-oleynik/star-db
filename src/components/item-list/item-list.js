import React, { Component, Fragment } from 'react';
import './item-list.css';
import Spinner from '../spinner';

export default class ItemList extends Component {
  state = {
    itemList: null
  };
  componentDidMount(){
    this.props.getData()
      .then((itemList)=>{
        this.setState({ itemList })
      })
  }
  renderPerson =(person) => {
    const {id,name} = person;
    const handleClick=()=>{
      this.props.onSelectItem(id);
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
    const {itemList} = this.state;
    if(!itemList){ return <Spinner /> }
    const data = itemList.map(this.renderPerson);
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
