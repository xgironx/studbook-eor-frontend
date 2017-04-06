                                    // // {{!-- ################################
                                    // // 201704051314L   EL MIERCOLES   JAY @ GA --}}
                                    // TODAY I LEARNED THAT
                                // ember generate resource stallions ;
                                // ember generate route stallion ;
                                // ember generate route stallion/new ;
                                    // WIPED OUT THIS FILE SO I PASTED ATTR BACK IN FROM GH GITHUB
                                    // FIGURE ILL HAVE TO DO SAME SIM W
                                // app/routes/stallion.js
                                    // LEFT IT ONLY WITH THIS AND THEREFORE SANS
                                // model
                                        // import Ember from 'ember';
                                        //
                                        // export default Ember.Route.extend({
                                        // });
                                    // THAT EQUESTRIAN AND I PUT IN LAST NIGHT @ FOO
import Ember from 'ember';
                                    // #####################################
                                    // 201704042222L   EL MARTES   JAY @ GA
                                    // this model() populates the 'store'
                                    // programmatically, makes the
                                    // model avail to the
                                    // hbs files
// NOW IN stallions.js
export default Ember.Route.extend({
                                            // model()  { return this.get('stallion').findAll('stallion'); },
                                            // model()  { return this.get('model').findAll('stallion'); },
                                            // this.get('store').createRecord('stallion', this.currentModel);
                                    model: function() { return this.get('store').findAll('stallion');                   },
                                    // model()           { return this.get('store').findAll('stallion');                   },
                                    // model: function() { return this.get('store').findAll('stallion',this.currentModel); },
                                    // model()           { return this.get('store').findAll('stallion',this.currentModel); },
                                    actions:          { delete(stallion) { stallion.deleteRecord(); stallion.save(); }  }
                                  });
