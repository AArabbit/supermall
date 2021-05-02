import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/mn',
    timeout: 5000
  })

  // 拦截器
  instance.interceptors.request.use(config => {
  return config;
  },error => {
  });

  // 响应
  instance.interceptors.response.use(response => {
  return response;
  },error => {
  });

  return instance(config)
}