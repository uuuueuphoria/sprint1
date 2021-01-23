import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import { Interface } from 'readline';


function DisplayAuthor(props:any):any{
  return <h1 className="author">Author: {props.name}</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <DisplayAuthor name="Wanlun"/>
      </header>
    </div>
  );
}


interface photo{
  url:string,
  alt:string,
  text:string
}


function ShowMyPicture(props:photo):any{
  return (
    <div className="App">
        <img src={props.url} alt={props.alt}/>
        <p className="cat">{props.text}</p>
  </div>
  );
}




export {App, DisplayAuthor,ShowMyPicture}
export default photo;
