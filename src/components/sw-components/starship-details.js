import React from 'react';
import ItemDetails from '../item-details';
import ItemField from '../item-field';
import {withSwapiService} from '../hoc-helpers';

const StarshipDetails = (props) => (
  <ItemDetails {...props}>
        <ItemField field={'model'} label={'Model'} />
        <ItemField field={'manufacturer'} label={'Manufacturer'} />
        <ItemField field={'crew'} label={'Crew'} />
        <ItemField field={'length'} label={'Length'} />
        <ItemField field={'passengers'} label={'Passengers'} />
        <ItemField field={'costInCredits'} label={'Cost in Credits'} />
        <ItemField field={'cargoCapacity'} label={'Cargo Capacity'} />
</ItemDetails>
        );
const mapmethodsToProps = (swapiService) => ({
  getData: swapiService.getStarship,
  getImageUrl: swapiService.getStarshipImage
});
export default withSwapiService(StarshipDetails, mapmethodsToProps);
