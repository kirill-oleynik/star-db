import React, {Component} from 'react';
import './starships-page.css';
import {StarshipList,StarshipDetails} from '../sw-components';
import ItemDetails from '../item-details';
// import SwapiService from '../../services/swapi-service';
import ItemField from '../item-field';
import Row from '../row';

export default class StarshipsPage extends Component {
  // api = new SwapiService();
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
    const itemDetails = <StarshipDetails itemId={10} />;
    // const itemDetails =  <ItemDetails
    // itemId={this.state.selectedItemId}
    // getData={this.api.getStarship}
    // getImageUrl={this.api.getStarshipImage}>
    //     <ItemField field={'model'} label={'Model'} />
    //     <ItemField field={'manufacturer'} label={'Manufacturer'} />
    //     <ItemField field={'crew'} label={'Crew'} />
    //     <ItemField field={'length'} label={'Length'} />
    //     <ItemField field={'passengers'} label={'Passengers'} />
    //     <ItemField field={'costInCredits'} label={'Cost in Credits'} />
    //     <ItemField field={'cargoCapacity'} label={'Cargo Capacity'} />
// </ItemDetails>

    return(
    <Row
      left={itemList}
      right={itemDetails}
    />
    );
  }
}
