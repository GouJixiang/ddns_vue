import CustomAxiosInstance from './instance'
import { AxiosInstance, AxiosRequestConfig } from 'axios'

type RequestMethod = 'get' | 'post' | 'put' | 'delete'

interface RequestParam {
  url: string
  method?: RequestMethod
  data?: any
  axiosConfig?: AxiosRequestConfig
}

/**
 * 创建请求
 * @param axiosConfig axios配置
 */
export function createRequest(axiosConfig: AxiosRequestConfig) {
  const customInstance = new CustomAxiosInstance(axiosConfig)

  /**
   * 异步promise请求
   * @param param 请求参数
   */
  async function asyncRequest<T>(param: RequestParam): Promise<T> {
    const { url } = param
    const method = param.method || 'get'
    const { instance } = customInstance
    return (await getRequestResponse({
      instance,
      method,
      url,
      data: param.data,
      config: param.axiosConfig
    })) as T
  }

  /**
   * get请求
   * @param url
   * @param config
   */
  function get<T>(url: string, config?: AxiosRequestConfig) {
    return asyncRequest<T>({ url, method: 'get', axiosConfig: config })
  }

  return {
    get
  }
}

async function getRequestResponse(params: {
  instance: AxiosInstance
  method: RequestMethod
  url: string
  data?: any
  config?: AxiosRequestConfig
}) {
  const { instance, method, url, data, config } = params
  let res: any
  if (method === 'get' || method === 'delete') {
    res = await instance[method](url, config)
  } else {
    res = await instance[method](url, data, config)
  }
  return res
}
