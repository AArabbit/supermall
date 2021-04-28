import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/mn',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
  // Do something before request is sent
  return config;
  },error => {
  // Do something with request error
  });

  instance.interceptors.response.use(response => {
  // Do something before response is sent
  return response;
  },error => {
  // Do something with response error
  });

  return instance(config)
}