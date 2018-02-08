import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  _handleClick(isAdd) {
    this.setState({
      count: isAdd ? ++this.state.count : this.state.count > 0 ? --this.state.count : 0
    })
  }
  render() {
    return (
      <div>
        <h2>this is Home pa3ge</h2>
        <p>当前的计数count是：{this.state.count}</p>
        <button onClick={() => this._handleClick(1)}>点我自增啊</button><button onClick={() => this._handleClick(0)}>点我自减啊</button>
      </div>
    )
  }
}
export default Home;