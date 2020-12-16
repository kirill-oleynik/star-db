import React, {Component} from 'react';
import './starships-page.css';
import ItemList from '../item-list';
import StarshipDetails from '../starship-details';
import SwapiService from '../../services/swapi-service';

export default class StarshipsPage extends Component {
  api = new SwapiService();
  state={
    slectedStarshipId: null
  };

  onSelectItem = (selectedStarshipId) => {
    this.setState({selectedStarshipId})
  }

  render(){
    return(
            <div className="row mb2 starship-page">
        <div className="col-md-6">
          <ItemList
            onSelectItem={this.onSelectItem}
            getData = {this.api.getAllStarships}
            entity = 'Starship'
          />
        </div>
        <div className="col-md-6">
          <StarshipDetails starshipId={this.state.selectedStarshipId} />
        </div>
      </div>
    );
  }
}
