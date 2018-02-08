import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// import Home from '../Views/Home/Home';
// import News from '../Views/News/News';
// 使用别名配置 可以使用相对路径
import Home from 'Views/Home/Home';
import News from 'Views/News/News';
import Counter from 'Views/Counter/Counter';
import UserInfo from 'Views/UserInfo/UserInfo'

const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/news">新闻</Link></li>
        <li><Link to="/counter">Counter Page</Link></li>
        <li><Link to="/userinfo">UserInfo Page</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/counter" component={Counter} />
        <Route path="/userinfo" component={UserInfo} />
      </Switch>
    </div>
  </Router>
);

export default getRouter;