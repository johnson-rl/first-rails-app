import React from 'react';
import ReactDOM from 'react-dom';
import Post from './App.js'
import './index.css';

var post = {
  title: "Why React is Soooooper Seeet",
  author: "Ryan Johnson",
  body: "React is basically the best because it allows you to make websites that React well to changing data and views",
  comments: [
    "Yup, this doood gets it",
    "Sooooooopeer Seeeeeeeeet.",
    "React is definitely not unseeet."
  ]
}

ReactDOM.render(
  <Post
  title = {post.title}
  author = {post.author}
  body = {post.body}
  comments = {post.comments}
  />,
  document.getElementById('root')
);
