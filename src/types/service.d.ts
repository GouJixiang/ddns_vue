declare namespace Service {
  /** 请求返回数据的类型 */
  interface ResponseData<T> {
    code: number
    message: string
    data?: T
  }
}
