import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse
} from 'axios'

/**
 * 封装Axios请求类
 */
export default class CustomAxiosInstance {
  axiosConfig: AxiosRequestConfig
  instance: AxiosInstance

  constructor(axiosConfig: AxiosRequestConfig) {
    this.axiosConfig = axiosConfig
    this.instance = axios.create(axiosConfig)
    this.setInterceptor()
  }

  /** axios拦截器 */
  setInterceptor() {
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        window.$loading?.start()
        return config
      },
      (err: AxiosError) => err
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        window.$loading?.finish()
        return res
      },
      (error: AxiosError) => {
        window.$message?.error(error.message)
        window.$loading?.error()
      }
    )
  }
}
