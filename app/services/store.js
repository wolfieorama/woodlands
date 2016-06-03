import Ember from 'ember';
import LineItem from 'woodland/models/line-item';
import Order from 'woodland/models/order';
import Product from 'woodland/models/product';

const products = [
  Product.create({title: 'Tent', Price: 10, description: 'This is a 2 man tent'}),
  Product.create({title: 'Sleeping Bag', Price: 5, description: 'This is a 1 man -70 sleeping bag'}),
  Product.create({title: 'Flash light', Price: 3, description: 'This is a 20m antifog light'}),
  Product.create({title: 'First Aid', Price: 6, description: 'Essentials'})
];

const orders = [
  Order.create({ id: '1234', name: 'Blaise Blobfish',
    items: [
      LineItem.create({product: products[0], quantity: 1}),
      LineItem.create({product: products[1], quantity: 1})
    ]
  }),
  Order.create({ id: '1256', name: 'MiIke Pow',
    items: [
      LineItem.create({product: products[2], quantity: 1}),
      LineItem.create({product: products[3], quantity: 1})
    ]
  })
];

export default Ember.Service.extend({

  getOrderById(id){
    const orders = this.getOrders();
    return orders;
  },
  getProductByTitle(title){
    const products = this.getProducts();
    return products;
  },
  getProducts(){
    return products;
  },
  getOrders(){
    return orders;
}
});
