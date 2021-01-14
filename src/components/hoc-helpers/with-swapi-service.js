import React from 'react';
import {SwapiServiceConsumer} from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';
const swapiService = new SwapiService();

const withSwapiService = (Wrapped) => (props) => (
  <SwapiServiceConsumer>
  {
    (SwapiService) => <Wrapped {...props} swapiService={swapiService} />
  }
  </SwapiServiceConsumer>
);
export {withSwapiService};
