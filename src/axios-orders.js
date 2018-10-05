import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-b2249.firebaseio.com/',
  withCredentials: true
});

export default instance;