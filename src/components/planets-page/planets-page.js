import React, {Component} from 'react';
import './planets-page.css';
import {PlanetList,PlanetDetails} from '../sw-components';
// import SwapiService from '../../services/swapi-service';
import ItemField from '../item-field';
import Row from '../row';
import ItemDetails from '../item-details';

export default class PlanetsPage extends Component{
  // api = new SwapiService();
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
    const itemDetails = <PlanetDetails itemId={5} />;
    // const itemDetails =  <ItemDetails
    // itemId={selectedItemId}
    // getData={this.api.getPlanet}
    // getImageUrl={this.api.getPlanetImage}>
    //   <ItemField field={'population'} label={'Population'} />
    //   <ItemField field={'diameter'} label={'Diameter'} />
    //   <ItemField field={'rotationPeriod'} label={'Rotation Period'} />
    //   </ItemDetails>


    return(
    <Row
      left={itemList}
      right={itemDetails}
    />
    );
  }
};
