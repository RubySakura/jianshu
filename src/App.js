import React, { Component } from "react";
import GlobalStyle from './style';
import GlobalFontStyle from './statics/iconfont/iconfont';
import Header from './common/header/index';
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <GlobalFontStyle />
        <BrowserRouter>
        ​<Switch>
          <Route exact path="/login" render={null}/>
          <Route component={Header}/>
        </Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail/:id" exact component={Detail} />
          <Route path="/login" exact component={Login} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
