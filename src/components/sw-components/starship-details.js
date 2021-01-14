import React from 'react';
import ItemDetails from '../item-details';
import ItemField from '../item-field';
import {SwapiServiceConsumer} from '../swapi-service-context';
const StarshipDetails = ({itemId}) => {
  return(
  <SwapiServiceConsumer>
    {
      ({getStarship,getStarshipImage}) => {
        return(
  <ItemDetails
    itemId={itemId}
    getData={getStarship}
    getImageUrl={getStarshipImage}>
        <ItemField field={'model'} label={'Model'} />
        <ItemField field={'manufacturer'} label={'Manufacturer'} />
        <ItemField field={'crew'} label={'Crew'} />
        <ItemField field={'length'} label={'Length'} />
        <ItemField field={'passengers'} label={'Passengers'} />
        <ItemField field={'costInCredits'} label={'Cost in Credits'} />
        <ItemField field={'cargoCapacity'} label={'Cargo Capacity'} />
</ItemDetails>
        );
      }
    }
    </SwapiServiceConsumer>
  );
};
export default StarshipDetails;
