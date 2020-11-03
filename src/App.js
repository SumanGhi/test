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
import Brand from './components/handlebrand'
import data from'./myList.json'
import Category from './components/subCategory'
import Prescription from './uploadPrescription'
import axios from 'axios';

const customHistory = createBrowserHistory();



class App extends Component {

  constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }
  getUsersData() {
    axios
      .get(
        "http://127.0.0.1:5000/user/login",
        {}
      )
      .then(res => {
        const data = res.data
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  componentDidMount() {
    this.getUsersData()
  }

  render() {
    const loggedIn = data.login.isLoggedIn
    const total = data.cart.length
    return (
      <div>
        {loggedIn === "true" ?
          (<Header2 cart={data.cart} total={total} />) :
          (<Header1 cart={data.cart} total={total} />)}
        <BrowserRouter>
          <Switch location={this.props.location}>
            <Redirect exact from="/" to="/login" />

            <Route path="/index" >
              <Main trending={data.trending} />
            </Route>

            <Route path="/detail" component={ProductDetail} />

            <Route path="/brand:id&:pid" >
              <Brand brands={data.trending} />
            </Route>

            <Route path="/category" >
              <Category detectCategoryId={this.detectCategoryId} detectProductId={this.detectProductId} history={customHistory} />
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
