import React, {Component} from 'react';
import './people-page.css';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
export default class PeoplePage extends Component{
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
          <ItemList onSelectItem={this.onSelectItem} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPersonId} />
        </div>
      </div>
    );
  }
}
