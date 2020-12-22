import React, {Component} from 'react';
import './starships-page.css';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

export default class StarshipsPage extends Component {
  api = new SwapiService();
  state={
    slectedStarshipId: null
  };

  onSelectItem = (selectedItemId) => {
    this.setState({selectedItemId})
  }

  renderLabel = ({ name, manufacturer }) => (`${name}i (${manufacturer})`);

  render(){

    const itemList = <ItemList
    onSelectItem={this.onSelectItem}
    getData = {this.api.getAllStarships}
    renderLabel={this.renderLabel}
    entity = 'Starship' />;
    const itemDetails =  <ItemDetails
    itemId={this.state.selectedItemId}
    getData={this.api.getStarship}
    getImageUrl={this.api.getStarshipImage} />;

    return(
    <Row
      left={itemList}
      right={itemDetails}
    />
    );
  }
}
