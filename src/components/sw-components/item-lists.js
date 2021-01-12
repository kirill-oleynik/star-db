import React from 'react';
import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list';
import {withDataHOC} from '../hoc-helpers';
const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = new SwapiService();

const withChildFunc = (Wrapped,fn) =>{
  return (props) => {
    return(
    <Wrapped {...props}>
      {fn}
      </Wrapped>
    );
  };
};
    const renderName = ({name}) => (<span>{name}</span>);
    const renderNameAndModel = ({name,model}) => (<span>{name } ({model})</span>);

const PersonList = withDataHOC(
  withChildFunc(ItemList, renderName),
  getAllPeople
);
const PlanetList = withDataHOC(
  withChildFunc(ItemList, renderName),
  getAllPlanets
);
const StarshipList = withDataHOC(
  withChildFunc(ItemList, renderNameAndModel),
  getAllStarships
);

export{
  PersonList,
  PlanetList,
  StarshipList
};
