import React, {Component} from 'react';
import './people-page.css';
import {PersonList,PersonDetails} from '../sw-components';
import ItemDetails from '../item-details';
import ErrorButton from '../error-button';
import ErrorBoundry from '../error-boundry';
import ItemField from '../item-field';
import Row from '../row';
export default class PeoplePage extends Component{
  state={
    slectedPersonId: null
  };

  onSelectItem = (selectedItemId) => {
    this.setState({selectedItemId})
  }

  renderLabel = ({ name, gender, birthYear }) => (`${name}, (${gender}) [${birthYear}]`);

  render(){

      const itemList = <PersonList
                          onSelectItem={this.onSelectItem}
                          entity = 'Person'
                          renderLabel={this.renderLabel}/>;
    const itemDetails = <PersonDetails itemId={this.state.selectedItemId} />;


      return(
    <Row
      left={<ErrorBoundry>{itemList}</ErrorBoundry>}
      right={<ErrorBoundry>{itemDetails}</ErrorBoundry>}
    />
      );
  }
}
