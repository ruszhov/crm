import axios from 'axios';

/**
 * @typedef {object} window.preloaded.urls
 */
// roots
const CLIENTS = '/api/clients';
const CLIENT = `${CLIENTS}/:clientId`;

Object.assign(window.preloaded.urls, {
  clients: `${CLIENTS}/`,
  client: `${CLIENT}/`,
});

const apiUrl = window.preloaded.urls;

const requests = axios.create({
  xsrfHeaderName: 'X-CSRFToken',
  xsrfCookieName: 'csrftoken',
});

window._axios = requests;

export { requests, apiUrl };
