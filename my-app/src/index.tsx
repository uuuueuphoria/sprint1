import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App,ShowMyPicture} from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import datou from "./img/datou.jpeg";
import Circle from './circle';
import Increment from './increment.js';
import TransitionsModal from './materialUI';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Theme />
//   </React.StrictMode>,
//   document.querySelector('body')
// );

ReactDOM.render(
  <React.StrictMode>
    <ShowMyPicture url={datou} alt="My cat" text="This is my cat!"/>
  </React.StrictMode>
  ,
  document.querySelector('.cat')
)

ReactDOM.render(
  <React.StrictMode>
    <Circle/>
  </React.StrictMode>,
document.querySelector('.circle')
)

ReactDOM.render(
  <React.StrictMode>
    <Increment/>
  </React.StrictMode>,
document.querySelector('.number')
)

ReactDOM.render(
<TransitionsModal/>,
document.querySelector('.pop')
)







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
