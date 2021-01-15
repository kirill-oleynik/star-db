import React from 'react';
import ItemDetails from '../item-details';
import ItemField from '../item-field';
import {withSwapiService} from '../hoc-helpers';

const PlanetDetails = (props) => (
  <ItemDetails {...props}>
      <ItemField field={'population'} label={'Population'} />
      <ItemField field={'diameter'} label={'Diameter'} />
      <ItemField field={'rotationPeriod'} label={'Rotation Period'} />
      </ItemDetails>
        );
const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getPlanet,
  getImageUrl: swapiService.getPlanetImage
});
export default withSwapiService(PlanetDetails,mapMethodsToProps);
