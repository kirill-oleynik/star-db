import React, {Component} from 'react';
import './planets-page.css';
import {PlanetList,PlanetDetails} from '../sw-components';
import ItemField from '../item-field';
import Row from '../row';
import ItemDetails from '../item-details';

export default class PlanetsPage extends Component{
  state = {
    selectedItemId: null
  };
  onSelectItem = (selectedItemId) => {
    this.setState({ selectedItemId });
  };

  renderLabel =({ name, population }) => (`${name} (${population})`);

  render() {
    const {selectedItemId} = this.state;

    const itemList = <PlanetList
        onSelectItem={this.onSelectItem}
        renderLabel={this.renderLabel}
        entity='Planet'/>;
    const itemDetails = <PlanetDetails itemId={this.state.selectedItemId} />;
    return(
    <Row
      left={itemList}
      right={itemDetails}
    />
    );
  }
};
