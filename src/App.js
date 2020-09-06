import React from 'react';
import Login from './login'
import Header from './header'
import Footer from './footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './main'

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/index" component={Main} exact />
          <Route path="/" component={Login} />
          {/* <Route component={Error}/> */}
        </Switch>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
