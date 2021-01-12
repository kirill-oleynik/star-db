import React from 'react';
import ItemDetails from '../item-details';
import ItemField from '../item-field';
import {SwapiServiceConsumer} from '../swapi-service-context';
const PersonDetails = ({itemId}) => {
  return(
  <SwapiServiceConsumer>
    { ({getPerson,getPersonImage}) => {
      return(
  <ItemDetails
    itemId={itemId}
    getData={getPerson}
    getImageUrl={getPersonImage}>
      <ItemField field={'gender'} label={'Gender'} />
      <ItemField field={'birthYear'} label={'Birth Year'} />
      <ItemField field={'eyeColor'} label={'Eye Color'} />
      </ItemDetails>
      );
    } }
    </SwapiServiceConsumer>
  );
};
export {PersonDetails};
