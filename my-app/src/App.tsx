import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Interface } from 'readline';

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
  text:string
}


function showMyPicture(props:photo){
  return <img src={props.url} alt="my cat"/>;
}
function showDescription(props:photo){
  return <p>{props.text}</p>;
}

function testApp(){
  return(

  );
}


export {App, DisplayAuthor,showDescription,showMyPicture}
export default photo;
