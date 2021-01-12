import React, {Component} from 'react';
import './planets-page.css';
import {PlanetList,PlanetDetails} from '../sw-components';
import Row from '../row';

export default class PlanetsPage extends Component{
  state = {
    selectedItemId: null
  };
  onSelectItem = (selectedItemId) => {
    this.setState({ selectedItemId });
  };

  render() {
    const {selectedItemId} = this.state;

    const itemList = <PlanetList
        onSelectItem={this.onSelectItem}
        entity='Planet'>
      </PlanetList>;
    const itemDetails = <PlanetDetails itemId={this.state.selectedItemId}/>;
    return(
    <Row
      left={itemList}
      right={itemDetails}
    />
    );
  }
};
