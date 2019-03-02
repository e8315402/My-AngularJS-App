import { default as propertyApi } from './property.api';
import Property from './property';

let property = undefined;

export default {
  init: db => {
    property = new Property(db);
    return new propertyApi(property);
  }
}

export const getInstance = () => property;