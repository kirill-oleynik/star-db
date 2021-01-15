import React from 'react';
import {SwapiServiceConsumer} from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';
const swapiService = new SwapiService();
const withSwapiService = (Wrapped, mapMethodsToProps) => (props) => {
  return(
  <SwapiServiceConsumer>
    {
      (SwapiService) => {
      const serviceProps = mapMethodsToProps(swapiService);
        return(
        <Wrapped {...props} swapiService={swapiService} {...serviceProps} />
        );
      }
    }
  </SwapiServiceConsumer>
  );
};
export {withSwapiService};
