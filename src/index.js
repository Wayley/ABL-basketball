
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';//react热更插件 热更新时候不改变组件的state
import { Provider } from 'react-redux';
import store from './redux/store';

// 引入
import getRouter from 'Router/router';

/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
  module.hot.accept('./router/router', () => {
    const getRouter = require('./router/router').default;
    renderWithHotReload(getRouter());
  });
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        {RootElement}
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}