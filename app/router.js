import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('orders', function(){//this.route('orders', { path: '/orders'});-- this will work too :)
    this.route('order', { path: '/:order_id'});//nested routed for order //route for a specific order referenced by id
  });
});

export default Router;
