// محتوایه وب سایت را از طریق سایت https://www.contentful.com کنترل میکنیم (این سایت یک جور cms رایگان در اختیارمون قرار میدهد)

import React, {Component} from 'react';
import {linkData} from "./LinkData";
import {socialData} from "./socialData";
import {items} from "./productData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    links: linkData,
    socialLinks: socialData,
    cart: [],
    cartItems: 0,
    cartSubTotal: 0, // قیمت کل بدون احتساب مالیات
    cartTax: 0, // مالیات
    cartTotal: 0, // قیمت کل با احتساب مالیات
    storeProducts: [], // کل محصولات
    filteredProducts: [],
    featuredProducts: [], // اینایی که میخواهیم در صفحه اصلی دیده بشوند
    singleProduct: {},
    loading: false
  };

  // handle set product
  setProduct = products => {
    let storeProducts = products.map(item => {
      const {id} = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = {id, ...item.fields, image};
      return product;
    });
    // featured product
    let featuredProducts = storeProducts.filter(item => item.featured === true);

    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading : false,
    }, () => {
      this.addTotals()
    })
  };

  // get cart from localStorage
  getStorageCart = () => {
    let cart;
    localStorage.getItem("cart") ?
        cart = JSON.parse(localStorage.getItem("cart"))
        :
        cart = [];
    return cart;
  };
  // get product from localStorage
  getStorageProduct = () => {
    return []
  };
  // get totals قیمت کل و تعداد کل محصولات در سبد خرید
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(item => {
      subTotal += item.total;
      cartItems += item.count;
    });
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.2;
    tax = parseFloat(tax.toFixed(2));
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));
    return {
      subTotal,
      cartItems,
      tax,
      total,
    }
  };
  // add totals
  addTotals = () => {
    // get totals
    let {
      subTotal,
      cartItems,
      tax,
      total,
    } = this.getTotals();
    this.setState({
      cartItems,
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total,
    })
  };
  //sync localStorage
  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };
  // add to cart
  addToCart = id => {
    // clone
    let tempCart = [...this.state.cart];
    let tempProd = [...this.state.storeProducts];
    //چک میکنیم ببینیم این محصول در کارت هست یا نع
    let tempItem = tempCart.find(item => item.id === id);
    // اگر در کارت نبود
    if (!tempItem) {
      tempItem = tempProd.find(item => item.id === id);
      let total = tempItem.price;
      let cartItem = {...tempItem, total, count: 1};
      tempCart = [...tempCart, cartItem];
    } else { // اگر در کارت بود
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2)); // با متود toFixed که مشخص میکنیم اعداد اعشاریشو رشته برمیگرده
    }
    this.setState(() => {
      return {cart: tempCart};
    }, () => {
      this.addTotals();
      this.syncStorage();
      this.openCart();
    });
  };
  // set single product هرموقع که روی تک محصولات کلیک میکنیم این متود اجرا میشود
  setSingleProduct = id => {
  };

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



