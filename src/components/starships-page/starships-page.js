import React, {Component} from 'react';
import './starships-page.css';
import {StarshipList,StarshipDetails} from '../sw-components';
import Row from '../row';

export default class StarshipsPage extends Component {
  state={
    slectedStarshipId: null
  };

  onSelectItem = (selectedItemId) => {
    this.setState({selectedItemId})
  }

  render(){

    const itemList = <StarshipList
    onSelectItem={this.onSelectItem}
    entity = 'Starship' >
    </StarshipList>;
    const itemDetails = <StarshipDetails itemId={this.state.selectedItemId} />;
      return(
    <Row
      left={itemList}
      right={itemDetails}
    />
    );
  }
}
