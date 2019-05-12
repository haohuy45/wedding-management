import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import router from './router';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <div className="container">
            <div className="row">
              
              {this.showContentMenus(router)}
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
  showContentMenus = (router) => {
    var result = null;
    if (router.length > 0) {
      result = router.map((route, index) => {
        return (
          <Route key={index}
            path={route.path}
            exact={route.exact}
            component={route.main} />
        )
      });
    }

    return <Switch>{result}</Switch>
  }
}

export default App;
