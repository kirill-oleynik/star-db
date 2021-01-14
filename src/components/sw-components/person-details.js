import React from 'react';
import ItemDetails from '../item-details';
import ItemField from '../item-field';
import {withSwapiService} from '../hoc-helpers';

const PersonDetails = ({itemId,swapiService}) => {
  const{getPerson,getPersonImage} = swapiService;
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
};
export default withSwapiService(PersonDetails);
