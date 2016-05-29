import Ember from 'ember';
import LineItem from 'woodland/models/line-item';
import Order from 'woodland/models/order';
import Product from 'woodland/models/product';

export default Ember.Service.extend({

  getOrderById(id){
    const orders = this.getOrders();
    return orders;
  },
  getOrders(){
    return [
      {id: 1, name: 'Nate'},
      {id: 2, name: 'John'}
  ];
}
});
