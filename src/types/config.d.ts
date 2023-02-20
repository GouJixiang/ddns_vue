// 配置的数据类型

/** 初始化配置面板所需要的类型 */
declare namespace ConfigPanel {
  /** 用户配置 */
  interface UserConfig {
    account: string
    password: string
    reenteredPassword: string
    role: string
  }

  /** 网络配置 */
  interface NetworkConfig {
    id: string
    mac: string
    ip: string
  }
}
