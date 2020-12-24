import React from 'react';
import './item-list.css';
import ErrorBoundry from '../error-boundry';
import {withDataHOC} from '../hoc-helpers';
const ItemList = (props) => {
  const renderItem = (item) => {
    const label = props.renderLabel(item);
    const {id,name} = item;
    return(
    <li
      key={id}
      className='list-group-item'
      onClick={() => {props.onSelectItem(id)}}
    >
      {label}
      </li>
    );
  };
  const {data, entity} = props;
    const itemList = data.map(renderItem);
    return (
      <ErrorBoundry>
      <h4>Select {entity} :</h4>
      <ul className="item-list list-group">
      {itemList}
     </ul>
      </ErrorBoundry>
    );
};
export default withDataHOC(ItemList);
