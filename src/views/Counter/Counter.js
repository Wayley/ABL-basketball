import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement, reset } from 'Actions/counter';

class Counter extends Component {
  render() {
    return (
      <div>
        <div>当前的计数为(显示redux计数)</div>
        <button onClick={() => {
          this.props.increment();
          console.log('自增函数')
        }}>自增</button>
        <button onClick={() => {
          this.props.decrement();
          console.log('自减函数')
        }}>自减</button>
        <button onClick={() => {
          this.props.reset();
          console.log('重置函数')
        }}>重置</button>
      </div>
    )
  }
}
// 把redux的state转为组件的Props
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
// 把发射actions的方法转为Props属性函数
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    },
    reset: () => {
      dispatch(reset())
    }
  }
}
// export default Counter;
export default connect(mapStateToProps, mapDispatchToProps)(Counter);//connect两个参数