import React, {Component} from 'react';
import './people-page.css';
import {PersonList,PersonDetails} from '../sw-components';
import ErrorButton from '../error-button';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
export default class PeoplePage extends Component{
  state={
    slectedPersonId: null
  };

  onSelectItem = (selectedItemId) => {
    this.setState({selectedItemId})
  }

  render(){

      const itemList = <PersonList
                          onSelectItem={this.onSelectItem}
                          entity = 'Person'>
                          {({name}) => (<span>{name}</span>)}
                        </PersonList>;
    const itemDetails = <PersonDetails itemId={this.state.selectedItemId} />;


      return(
    <Row
      left={<ErrorBoundry>{itemList}</ErrorBoundry>}
      right={<ErrorBoundry>{itemDetails}</ErrorBoundry>}
    />
      );
  }
}
