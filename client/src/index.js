import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);

const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: lightskyblue;
  }

  body {
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  }

  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  
  th, td {
    padding-right: 5px;
  }
`;

root.render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </StrictMode>,
);