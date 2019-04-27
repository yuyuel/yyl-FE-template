import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = baseURL + APIURL
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
// 在响应时做的统一配置
service.interceptors.request.use(
  config => {
    // do something
    return config
  }
)

// 在响应时做的统一配置
service.interceptors.response.use(response => {
  // do something
})
export default service
