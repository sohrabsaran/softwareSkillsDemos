/*

Of course, this file will compile to yield index.js
To see how index.js is automatically linked by create-react-app into index.html
(the single page of our singl-page app), see:
https://stackoverflow.com/questions/42438171/wheres-the-connection-between-index-html-and-index-js-in-a-create-react-app-app

*/
import React from 'react';
import ReactDOM from 'react-dom';

//Feature: css files can be imported into tsx!
//Navigation using ctrl+click to the file below does not work.
//Filed a bug at https://github.com/microsoft/vscode/issues/117954
import './index.css';

//notice that file extension is automatically supplied by the build and/or
//dev-build-and-run program. Also note that it is 'import App' rather than
//'import {App}', since App is the default export.
import App from './App';

//Below seems to be related to only performance monitoring:
import reportWebVitals from './reportWebVitals';

//Below JS executes IMMEDIATELY on load:
ReactDOM.render(
  //see https://reactjs.org/docs/strict-mode.html
  <React.StrictMode>
    {/*
    Comments are added in JSX like this (curly braces and multi-line comments).
Apart from the div with id 'Root', we need to render the root-level (top-level)
React component into this 'Root' div. But by convention, this top-level React
component/tag is named App rather than Root!
     */}
    <App />
  </React.StrictMode>,
  //the single page of the single-page-app is ../public/index.html
  //In that file, we have already defined an empty div with id 'root'
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
