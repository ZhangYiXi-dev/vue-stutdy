import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: '', // 基础地址
  timeout: 10000, // 超时时间
  headers: { 'Content-Type': 'application/json' }
})

export default service
