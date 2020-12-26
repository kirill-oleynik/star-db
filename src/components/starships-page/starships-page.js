import React, {Component} from 'react';
import './starships-page.css';
import {StarshipList,StarshipDetails} from '../sw-components';
import ItemDetails from '../item-details';
import ItemField from '../item-field';
import Row from '../row';

export default class StarshipsPage extends Component {
  state={
    slectedStarshipId: null
  };

  onSelectItem = (selectedItemId) => {
    this.setState({selectedItemId})
  }

  renderLabel = ({ name, manufacturer }) => (`${name}i (${manufacturer})`);

  render(){

    const itemList = <StarshipList
    onSelectItem={this.onSelectItem}
    renderLabel={this.renderLabel}
    entity = 'Starship' />;
    const itemDetails = <StarshipDetails itemId={this.state.selectedItemId} />;
      return(
    <Row
      left={itemList}
      right={itemDetails}
    />
    );
  }
}
