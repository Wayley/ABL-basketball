import React, { Component } from 'react';
// import './News.css';
import NewsStyle from './News.css';
import lionImg from '../News/Images/lion.jpg'
class News extends Component {
  render() {
    return (
      <div className={NewsStyle['news-box']}>
        <h2>this is News page </h2>
        <img className={NewsStyle.img} src={lionImg} />
      </div>
    )
  }
}
export default News;