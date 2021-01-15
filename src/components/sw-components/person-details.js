import React from 'react';
import ItemDetails from '../item-details';
import ItemField from '../item-field';
import {withSwapiService} from '../hoc-helpers';

const PersonDetails = (props) => {
      return(
  <ItemDetails {...props}>
      <ItemField field={'gender'} label={'Gender'} />
      <ItemField field={'birthYear'} label={'Birth Year'} />
      <ItemField field={'eyeColor'} label={'Eye Color'} />
      </ItemDetails>
      );
};
const mapMethodsToProps = (swapiService) => ({
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  });

export default withSwapiService(PersonDetails, mapMethodsToProps);
