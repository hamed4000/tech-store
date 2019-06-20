import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router} from 'react-router-dom'
import {ProductProvider} from "./context/Context";

//با استفاده ازین قسمت و تغییر BrowserRouter به Router کاری کردیم که وقتی صفحه ها تغیر میکنند با ابتدایه صفحه برویم
import {createBrowserHistory} from 'history'
const history = createBrowserHistory();
history.listen((location, action) => {
  window.scrollTo(0, 0)
});

ReactDOM.render(
    <ProductProvider>
      <Router history={history}>
        <App/>
      </Router>
    </ProductProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
