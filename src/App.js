import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login'
import Header from './header'
import Footer from './footer'
import Main from './main'
import ProductDetail from './productDetail'
import Checkout from './checkout'
import Signup from './signup'
import Contact from './contact'

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/index" component={Main} exact />
          <Route path="/detail" component={ProductDetail} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/signup" component={Signup} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Login} />
          {/* <Route component={Error}/> */}
        </Switch>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
