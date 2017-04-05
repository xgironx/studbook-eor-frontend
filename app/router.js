                                        // {{!-- ################################
                                        // 201704051239L   EL MIERCOLES   JAY @ GA --}}
                                        // CREATED THIS W ember cli
                                        // ember generate resource stallions ;
                                        // ember generate route stallion ;
                                        // ember generate route stallion/new ;
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
                                      location: config.locationType,
                                      rootURL:  config.rootURL
                                  });
                                  // {{!-- ################################
                                  // 201704051239L   EL MIERCOLES   JAY @ GA --}}
                                  //             I THINK THAT THE
                                  // 'stallions' &
                                  // 'stallion'  BELOW REFER TO THEIR RESPECTIVE
                                  // *.hbs       FILES
Router.map(function() {
                        this.route('stallions',           { path: '/'                     });
                        this.route('stallion',            { path: 'stallion/:stallion_id' });
                        this.route('stallion', function() {
                                                            this.route('new');
                                                          }
                                  )
                                  ;
                      }
          )
          ;

export default Router;

                                        // {{!-- ################################
                                        // 201704051255L   EL MIERCOLES   JAY @ GA --}}
                                        // http://9elements.com/io/an-ember-js-application-with-a-rails-api-backend/
                                        // Now lets update the router. The generators already added some routes, but I learned from Andy Borsz’s blog post that it should be more like this.
                                        // app/router.js
                                                        // Router.map(function() {
                                                        //   this.route('stallions');
                                                        //   this.route('stallion.new', { path: 'stallions/new' });
                                                        //   this.resource('stallion', { path: 'stallions/:stallion_id' }, function() {
                                                        //     this.route('comment.new', { path: 'comments/new' });
                                                        //   });
                                                        // });
