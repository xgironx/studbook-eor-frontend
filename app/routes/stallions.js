import Ember from 'ember';
                                    // #####################################
                                    // 201704042222L   EL MARTES   JAY @ GA
                                    // this model() populates the 'store'
                                    // programmatically, makes the
                                    // model avail to the
                                    // hbs files
export default Ember.Route.extend({
  model() { return this.store.findAll('stallion');
  }
});
