import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App style={{margin:"0",padding:"0",boxSizing:"border-box"}}/>
  </React.StrictMode>
);

