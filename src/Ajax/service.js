import axios from 'axios'

// axios.defaults.baseURL = 'http://api.zgdc2023tx.com';

// 创建axios实例
const service = axios.create({
  baseURL: 'http://api.zgdc2023tx.com',
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {

    // config.headers.token = process.env.NODE_ENV === 'development'?'AppletUser:910c94c03b7cc429bdc38dd1838e081e': store.state.token  // 正式环境
    // config.headers.token = process.env.NODE_ENV === 'development'?'AppletUser:85b73fbde3d71b91672bb3d3183e8f37': store.state.token // 测试环境

    // config.headers.token = store.state.token


    return config
  },
  error => {
    // Do something with request error
    // console.log('请求拦截error', error) // for debug
    return Promise.reject(error)
  }
)


export default service
