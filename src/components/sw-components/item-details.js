import React from 'react';
import SwapiService from '../../services/swapi-service';
import {withDataHOC} from '../hoc-helpers';
import ItemDetails from '../item-details';

const {getPerson,getPlanet,getStarship} = new SwapiService();
const PersonDetails = withDataHOC(ItemDetails, getPerson);
const PlanetDetails = withDataHOC(ItemDetails, getPlanet);
const StarshipDetails = withDataHOC(ItemDetails, getStarship);
export{
  PersonDetails,
  PlanetDetails,
  StarshipDetails
};
