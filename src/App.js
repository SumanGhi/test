import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './login'
import Header1 from './header'
import Header2 from './header2'
import Footer from './footer'
import Main from './main'
import ProductDetail from './productDetail'
import Checkout from './checkout'
import Signup from './signup'
import Contact from './contact'
import Error from './error'
import data from './myList.json'
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: "false",
      user: {}
    }
  }
  render() {
    const loggedIn = this.state.loggedIn
    return (
      <div>
        {loggedIn === "true" ? 
        (<Header2 />) : 
        (<Header1 cart={data.cart} />)}
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/login" />


            <Route path="/index" >
              <Main trending={data.trending} />
            </Route>
            <Route path="/detail" component={ProductDetail} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/signup" component={Signup} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={() => <Login login={data.login} loggedIn = {loggedIn} history={customHistory} />} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
        <Footer />

      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react'
// import io from '/socket.io/socket.io-client'
// import OAuth from './components/auth/0Auth'
// // import { API_URL } from './config'
// import './App.css'
// const socket = io('https://localhost:8080/__provider__/callback')
// const providers = ['twitter', 'google', 'facebook', 'github']

// export default class App extends Component {

//   render() {
//     return (
//       <div className={'wrapper'}>
//         <div className={'container'}>
//           {providers.map(provider => 
//             <OAuth 
//               provider={provider}
//               key={provider}
//               socket={socket}
//             />
//           )}
//         </div>
//       </div>
//     )
//   }
// }