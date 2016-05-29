import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    const id = params.order_id;
    const store = this.get('store');
    return store.getOrderById(id);
  },
  store: Ember.inject.service() //the local name of the service and the name of the service to inject
  //beacuse the service name matches the property name we can leave out the 'store'
});
