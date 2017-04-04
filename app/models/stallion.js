
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number'),
  color: DS.attr('string'),
  registryTattoo: DS.attr('string'),
  studFee: DS.attr('number'),
  stakesWinnerProgeny: DS.attr('number'),
  imgUrl: DS.attr('string'),
  linkToPedigreeUrl: DS.attr('string')
});
