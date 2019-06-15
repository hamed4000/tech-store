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
    featuredProducts: [], // اینایی که میخواهیم در صفحه اصلی دیده بشوند
    filteredProducts: [], // محصولاتی که در فیلتر میشوند
    singleProduct: {},
    loading: true,
    /*for the search filter product*/
    search:"",
    price:0,
    min:0,
    max:0,
    company:"all",
    shipping: false
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

    //get max price for search filter
    let maxPrice = Math.max(...storeProducts.map(item => item.price));

    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false,
      price:maxPrice,
      max:maxPrice,
    }, () => {
      this.addTotals()
    })
  };

  // get cart from localStorage
  getStorageCart = () => {
    return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
  };
  // get product from localStorage
  getStorageProduct = () => {
    return localStorage.getItem("singleProduct") ? JSON.parse(localStorage.getItem("singleProduct")) : {};
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
  // برای اینکه محصولی که کلیک شد را در لوکال استورج ذخیره کنیم به جایه اینکه وقتی به صفحه تک محصول رفتیم از api فچش کنیم
  setSingleProduct = id => {
    let product = this.state.storeProducts.find(item => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product));
    this.setState({
      singleProduct: {...product},
      loading: false
    })
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


  /*cart functionality*/
  increment = id => {
    //clone
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => item.id === id);
    cartItem.count++;
    cartItem.total = (cartItem.price * cartItem.count);
    cartItem.total = parseFloat(cartItem.total.toFixed(2));
    this.setState(() => {
      return {
        cart: [...tempCart]
      }
    }, () => {
      this.addTotals();
      this.syncStorage();
    })
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    let itemCart = tempCart.find(item => item.id === id);
    itemCart.count--;
    if (itemCart.count === 0) {
      this.removeItem(id)
    } else {
      itemCart.total = itemCart.count * itemCart.price;
      itemCart.total = parseFloat(itemCart.total.toFixed(2));
      this.setState({
        cart: [...tempCart]
      }, () => {
        this.addTotals();
        this.syncStorage();
      })
    }
  };
  removeItem = id => {
    //کپی
    let tempCart = [...this.state.cart];
    //پیدا کردن جایه محصول در ارایه کارت
    let index = tempCart.findIndex(item => item.id === id);
    //پاک کردن به 2روش زیر
    // 1.
    tempCart = [
      ...tempCart.slice(0, index),
      ...tempCart.slice(index + 1)
    ];
    // 2.
    // tempCart.splice(index,1);
    this.setState({
      cart: [...tempCart]
    }, () => {
      this.addTotals();
      this.syncStorage();
    })
  };
  clearCart = () => {
    this.setState({
      cart: []
    }, () => {
      this.addTotals();
      this.syncStorage();
    })
  };

  /***handle search filtering****/
  handleChange = e => {};
  sortDate = () =>{};

  render() {
    return (
        <ProductContext.Provider value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          handleChange: this.handleChange
        }}>
          {this.props.children}
        </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};



