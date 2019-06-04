// محتوایه وب سایت را از طریق سایت https://www.contentful.com کنترل میکنیم (این سایت یک جور cms رایگان در اختیارمون قرار میدهد)

import React, {Component} from 'react';
import {linkData} from "./LinkData";
import { socialData } from "./socialData";
import {items} from "./productData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    links: linkData,
    socialLinks: socialData,
    cart:[],
    cartItems: 0,
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0,
    storeProducts:[], // کل محصولات
    filteredProducts:[],
    featuredProducts:[], // اینایی که میخواهیم در صفحه اصلی دیده بشوند
    singleProduct:{},
    loading:false
  };

  // handle set product
  setProduct = products => {
    let storeProducts  = products.map( item => {
      const {id} = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image};
      return product;
    });
    // featured product
    let featuredProducts = storeProducts.filter( item => item.featured === true);

    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      // cart: this.getStorageCart(),
      // singleProduct: this.getStorageProduct(),
    })
  };

  // get cart from localStorage
  getStorageCart = () => {
    return []
  };
  // get product from localStorage
  getStorageProduct = () => {
    return []
  };
  // get totals
  getTotals = () => {};
  // add totals
  addTotals = () => {};
  //sync localStorage
  syncStorage = () => {};
  // add to cart
  addToCart = id => {};
  // set single product هرموقع که روی تک محصولات کلیک میکنیم این متود اجرا میشود
  setSingleProduct = id => {};

  componentDidMount() {
    this.setProduct(items)
  }

  handleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    })
  };

  handleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    })
  };

  closeCart = () => {
    this.setState({
      cartOpen: false
    })
  };

  openCart = () => {
    this.setState({
      cartOpen: true
    })
  };

  render() {
    return (
        <ProductContext.Provider value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct
        }}>
          {this.props.children}
        </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};



