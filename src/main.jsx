import React from 'react';
import ReactDOM from 'react-dom/client';


import { CalendarApp } from './CalendarApp';
import './styles.css';


//inicialmente estaba asi con las importaciones bloqueadas 
//que tengo arriva sin la de reactDOM
//createRoot(document.getElementById('root')).render(
//  <StrictMode>
//  <CalendarApp />
//</StrictMode>,
//)

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <CalendarApp />
  //</React.StrictMode>,
)
