import React, {Component} from 'react';
import './starships-page.css';
import ItemList from '../item-list';
import StarshipDetails from '../starship-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

export default class StarshipsPage extends Component {
  api = new SwapiService();
  state={
    slectedStarshipId: null
  };

  onSelectItem = (selectedStarshipId) => {
    this.setState({selectedStarshipId})
  }

  renderLabel =({ name, manufacturer }) => (`${name}i (${manufacturer})`);

  render(){

    const itemList = <ItemList
    onSelectItem={this.onSelectItem}
    getData = {this.api.getAllStarships}
    entity = 'Starship'
    renderLabel={this.renderLabel}/>;
    const itemDetails =  <StarshipDetails
    entityId={this.state.selectedStarshipId}
    getData={this.api.getStarship}/>;



    return(
    <Row
      left={itemList}
      right={itemDetails}
    />
    );
  }
}
