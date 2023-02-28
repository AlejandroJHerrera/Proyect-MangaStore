import axios from 'axios';

const URL =
  window.location.hostname === 'localhost'
    ? 'https://localhost:4000'
    : 'https://';

const customInstance = axios.create({
  baseURL: URL,
  headers: {
    Accept: 'application/json',
  },
});

export default customInstance;
