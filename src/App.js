import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Login from './components/login'
import Header1 from './header'
import Header2 from './header2'
import Footer from './footer'
import Main from './components/main/main'
import ProductDetail from './components/productDetail'
import Checkout from './components/checkout'
import Signup from './components/signup'
import SignupUser from './signupUser'
import Contact from './components/contact'
import Error from './components/error'
import Brand from './components/brand'
import data from'./myList.json'
import Category from './components/subCategory'
import Prescription from './uploadPrescription'

const customHistory = createBrowserHistory();

class App extends Component {
  state = {
    categoryId: '',
    classId: ''
  }
  detectCategoryId = (categoryId)=>{
    this.setState(categoryId)
  }
  detectProductId = (classId)=>{
    console.log(classId)
    this.setState(classId)
  }
  render() {
    const loggedIn = data.login.isLoggedIn

    return (
      <div>
        {loggedIn === "true" ? 
        (<Header2 cart={data.cart} />) : 
        (<Header1 cart={data.cart} />)}
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/login" />

            <Route path="/index" >
              <Main trending={data.trending} />
            </Route>

            <Route path="/detail" component={ProductDetail} />

            <Route path="/brand" >
              <Brand brands={data.trending} categoryId={this.state.categoryId} classId={this.state.classId} />
            </Route>

            <Route path="/category" >
              <Category detectCategoryId={this.detectCategoryId} detectProductId={this.detectProductId} />
            </Route>

            <Route path="/checkout" component={Checkout} />

            <Route path="/signup" component={Signup} />

            <Route path="/admin" component={SignupUser} />

            <Route path="/contact" component={Contact} />

            <Route path="/upload-prescription" component={Prescription} />

            <Route path="/login" component={() =>
              <Login login={data.login} history={customHistory} />} 
              />
            
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
        <Footer />

      </div>
    );
  }
}

export default App;
