                          // {{!-- ################################
                          // 201704051239L   EL MIERCOLES   JAY @ GA --}}
import Ember from 'ember';
// app/routes/stallion/new.js
export default Ember.Route.extend({
  model() {
      return {};
    },
  actions: {
          save() {
                  const newStallion = this.get('store').createRecord('stallion', this.currentModel);
                        newStallion.save().then((stallion) => { this.transitionTo('stallion', stallion);
                  });
                },
          cancel() {
                                                                this.transitionTo('stallions');
                }
              }
            });
