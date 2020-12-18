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
  renderItem =(item) => {
    const label = this.props.renderLabel(item);
    const {id,name} = item;
    return(
        <li
      key={id}
      className="list-group-item"
      onClick={()=>{this.props.onSelectItem(id)}}
      >
      {label}
        </li>

    );
  }
  render() {
    const {itemList} = this.state;
    const{entity} = this.props;
    if(!itemList){ return <Spinner /> }
    const data = itemList.map(this.renderItem);
    return (
      <Fragment>
      <h4>Select {entity} :</h4>
      <ul className="item-list list-group">
      {data}
     </ul>
      </Fragment>
    );
  }
}
