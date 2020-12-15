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

  render(){
    return(
            <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onSelectItem={this.onSelectItem}
            getData = {this.api.getAllPeople}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPersonId} />
        </div>
      </div>
    );
  }
}
