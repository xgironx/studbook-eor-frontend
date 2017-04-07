                                                // {{!-- ################################
                                                // 201704051239L   EL MIERCOLES   JAY @ GA --}}
                                                // {{!-- ################################
                                                // 201704062216L   EL JUEVES   EVS, JAY @ GREYSTONE @ EL AZTECA --}}
                                                // https://emberigniter.com/modern-bridge-ember-and-rails-5-with-json-api/
import Ember from 'ember';
                                                // app/routes/stallion/new.js
export default Ember.Route.extend({
  model() {
      return {};
    },
  actions: {
          save() {
                const newStallion = this.get('store').createRecord('stallion', this.currentModel); // not model, not stallion
                //   const newStallion = this.get('store').createRecord('stallion', { name: 'xxx', age: 3});
              // const book = $E.store.createRecord('book', { title: "Ember and Coal", price: 9.99, author: james, publisher: james}); book.save()
             //   const newStallion = this.get('store').createRecord('stallion', this.currentModel);
                        newStallion.save().then((stallion) => { this.transitionTo('stallion', stallion);
                  });
                },
          cancel() {
                                                                this.transitionTo('stallions');
                }
              }
            });
