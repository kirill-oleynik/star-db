import React, {Component} from 'react';
import './people-page.css';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button';
import ErrorBoundry from '../error-boundry';
import ItemField from '../item-field';
import Row from '../row';
export default class PeoplePage extends Component{
  api = new SwapiService();
  state={
    slectedPersonId: null
  };

  onSelectItem = (selectedPersonId) => {
    this.setState({selectedPersonId})
  }

  renderLabel = ({ name, gender, birthYear }) => (`${name}, (${gender}) [${birthYear}]`);

  render(){

      const itemList = <ItemList
                          onSelectItem={this.onSelectItem}
                          getData = {this.api.getAllPeople}
                          entity = 'Person'
                          renderLabel={this.renderLabel}/>;
    const itemDetails =  <ItemDetails
    itemId={this.state.selectedPersonId}
    getData={this.api.getPerson}
    getImageUrl={this.api.getPersonImage}>
      <ItemField field={'gender'} label={'Gender'} />
      <ItemField field={'birthYear'} label={'Birth Year'} />
      <ItemField field={'eyeColor'} label={'Eye Color'} />
      </ItemDetails>


      return(
    <Row
      left={<ErrorBoundry>{itemList}</ErrorBoundry>}
      right={<ErrorBoundry>{itemDetails}</ErrorBoundry>}
    />
      );
  }
}
