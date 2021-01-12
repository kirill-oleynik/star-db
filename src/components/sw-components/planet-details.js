import React from 'react';
import ItemDetails from '../item-details';
import ItemField from '../item-field';
import {SwapiServiceConsumer} from '../swapi-service-context';
const PlanetDetails = ({itemId}) => {
  return(
  <SwapiServiceConsumer>
    {
      ({ getPlanet,getPlanetImage }) => {
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
      }
    }
  </SwapiServiceConsumer>
  );
};
export{PlanetDetails};
