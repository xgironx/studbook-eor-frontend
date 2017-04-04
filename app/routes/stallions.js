import Ember from 'ember';

export default Ember.Route.extend({
});



                                    // #####################################
                                    // 201704041222L   EL MARTES   JAY @ GA
                                    // https://emberigniter.com/building-user-interface-around-ember-data-app/
                                    // THIS LEADS TO IN CHROME
                                    // GET http://localhost:4200/favicon.ico 500 (Internal Server Error)
                                    // TypeError: studbook-eor-frontend/routes/stallions.js: Line 5: Duplicate declaration "Ember"
                                    // export default Ember.Route.extend({
                                    // });
                                    // import Ember from 'ember';
                                    // export default Ember.Route.extend({
                                    //   model() {
                                    //     at File.errorWithNode (/User
                                    // OR
                                    // GET http://localhost:4200/stallions 406 (Not Acceptable)
// import Ember from 'ember';
// export default Ember.Route.extend({
//   model() {
//     return this.store.findAll('stallion');
//   }
// });
