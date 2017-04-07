                                  // // {{!-- ################################
                                  // // 201704051314L   EL MIERCOLES   JAY @ GA --}}
                                  // TODAY I LEARNED THAT
                              // ember generate resource stallions ;
                              // ember generate route stallion ;
                              // ember generate route stallion/new ;
                                  // WIPED OUT THIS FILE SO I PASTED ATTR BACK IN FROM GH GITHUB
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
