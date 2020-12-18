import React, {Component} from 'react';
import './people-page.css';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';
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
    const itemDetails =  <PersonDetails
    entityId={this.state.selectedPersonId}
    getData={this.api.getPerson}/>




    return(
            <div className="row mb2 people-page">
        <div className="col-md-6">
          { itemList }
        </div>
        <div className="col-md-6">
          { itemDetails }
        </div>
      </div>
    );
  }
}
