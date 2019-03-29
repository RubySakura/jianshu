import React, { Component } from "react";
import GlobalStyle from './style';
import GlobalFontStyle from './statics/iconfont/iconfont';
import Header from './common/header/index';
import store from './store/index';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <GlobalFontStyle />
        <Header />
      </Provider>
    );
  }
}

export default App;
