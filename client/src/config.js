import axios from 'axios';

const URL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:4000'
    : 'https://manga-store-v1.onrender.com/';

const customInstance = axios.create({
  baseURL: URL,
  headers: {
    Accept: 'application/json',
  },
});

export default customInstance;
