import React from 'react';
import Login from './login'
import Header from './header'
import Footer from './footer'
import './assets/css/animate.css'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/all.min.css'
import './assets/css/ionicons.min.css'
import './assets/css/themify-icons.css'
import './assets/css/linearicons.css'
import './assets/css/flaticon.css'
import './assets/css/simple-line-icons.css'
import './assets/owlcarousel/css/owl.carousel.min.css'
import './assets/owlcarousel/css/owl.theme.css'
import './assets/owlcarousel/css/owl.theme.default.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/slick.css'
import './assets/css/slick-theme.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/css/jquery-ui.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './main'

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
            <Switch>
             <Route path="/index" component={Main} exact/>
             <Route path="/" component={Login}/>
             {/* <Route component={Error}/> */}
           </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
