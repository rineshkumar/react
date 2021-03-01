import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserList from './components/UserList';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route 
      exact 
      path="/" 
      render={()=> <App />} 
      />
      <Route
      exact
      path="/userlist"
      render={(props)=><UserList {...props}/>}
      />
  </Switch>
  </BrowserRouter>,
  // <React.StrictMode>
  
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
