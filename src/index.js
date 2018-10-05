import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import './index.css';


axios.interceptors.request.use(request => {
  console.log(request);
  return request;
}, error=> {
  console.log('Error', error);
  return Promise.reject(error);
});

axios.interceptors.response.use(resp=> {
  console.log('Response', resp);
  return resp;
}, error=> {
  console.log('Error', error);
  return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
