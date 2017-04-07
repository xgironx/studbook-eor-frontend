                                // {{!-- ################################
                                // 201704051239L   EL MIERCOLES   JAY @ GA --}}
                                // CREATED THIS W ember cli
                                // ember generate route stallion ;
                                // https://emberigniter.com/building-user-interface-around-ember-data-app/
                                // https://guides.emberjs.com/v1.10.0/routing/defining-your-routes/
import Ember from 'ember';

export default Ember.Route.extend({

    model: function(params)  { return this.get('store').find('stallion', params.stallion_id); }
    // model: function(params)  { return this.get('store').find('stallion', (params[:id])); }
    // actions: { delete(stallion) { stallion.deleteRecord(); stallion.save(); } }
  });
