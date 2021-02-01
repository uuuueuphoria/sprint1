import React,{ useState } from 'react';
import { Interface } from 'readline';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from './theme.js';
import { GlobalStyles } from './global.js';
import Toggle from './Toggle.js';


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

// function Theme(){
//   const [theme, toggleTheme] = useDarkMode();
//   const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
//   return (
//     <ThemeProvider theme={lightTheme}>
//       <>
//         <GlobalStyles />
//         <Toggle theme={theme} toggleTheme={toggleTheme} />
//         <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>   
//         <footer>
//         </footer>
//       </>
//     </ThemeProvider>
//   );
// }


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
