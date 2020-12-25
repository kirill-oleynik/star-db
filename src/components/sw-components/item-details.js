import React from 'react';
import SwapiService from '../../services/swapi-service';
import ItemDetails from '../item-details';
import ItemField from '../item-field';

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = new SwapiService();


const PersonDetails = ({itemId}) => {
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
const PlanetDetails = ({itemId}) => {
  return(
  <ItemDetails
    itemId={itemId}
    getData={getPlanet}
    getImageUrl={getPlanetImage}>
      <ItemField field={'population'} label={'Population'} />
      <ItemField field={'diameter'} label={'Diameter'} />
      <ItemField field={'rotationPeriod'} label={'Rotation Period'} />
      </ItemDetails>
  );
};
const StarshipDetails = ({itemId}) => {
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
};
export{
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};
