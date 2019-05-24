import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Products from './pages/ProductsPage'
import SingleProduct from './pages/SingleProductPage'
import Contact from './pages/ContactPage'
import Cart from './pages/CartPage'
import Default from './pages/DefaultPage'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";


function App() {
  return (
      <>
        <NavigationBar/>
        <Sidebar/>
        <SideCart/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/products' component={Products}/>
          <Route path='/products/:id' component={SingleProduct}/>
          <Route path='/cart' component={Cart}/>
          <Route component={Default}/>
          Tech Store
        </Switch>
        <Footer/>
      </>
  );
}

export default App;
