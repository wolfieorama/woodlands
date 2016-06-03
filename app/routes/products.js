import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    const title = params.product_title;
    const store = this.get('store');
    return store.getProductByTitle(title);
  },
  store: Ember.inject.service() //the local name of the service and the name of the service to inject
  //beacuse the service name matches the property name we can leave out the 'store'
});
