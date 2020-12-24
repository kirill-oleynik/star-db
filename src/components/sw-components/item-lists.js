import React from 'react';
import SwapiService from '../../services/swapi-service';
import itemList from '../item-list';
import {withDataHOC} from '../hoc-helpers';
const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = new SwapiService();

const PersonList = withDataHOC(itemList,getAllPeople);
const PlanetList = withDataHOC(itemList,getAllPlanets);
const StarshipList = withDataHOC(itemList,getAllStarships);

export{
  PersonList,
  PlanetList,
  StarshipList
};
