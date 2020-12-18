import React, {Component} from 'react';
import './planets-page.css';
import ItemList from '../item-list';
import PlanetDetails from '../planet-details';
import SwapiService from '../../services/swapi-service';

export default class PlanetsPage extends Component{
  api = new SwapiService();
  state = {
    selectedItemId: null
  };
  onSelectItem = (selectedItemId) => {
    this.setState({ selectedItemId });
  };

  renderLabel =({ name, population }) => (`${name} (${population})`);

  render() {
    const {selectedItemId} = this.state;

    const itemList = <ItemList
        onSelectItem={this.onSelectItem}
        getData={this.api.getAllPlanets}
        renderLabel={this.renderLabel}
        entity='Planet'/>;
    const itemDetails =  <PlanetDetails
    entityId={selectedItemId}
    getData={this.api.getPlanet} />;

    return(
    <div className='row mb2 planets-page'>
    <div className='col-md-6'>
      { itemList }
      </div>
      <div className='col-md-6'>
      { itemDetails }
     />
      </div>
    </div>
    );
  }
};
