# DDNS_VUE
>家庭宽带无公网IP内网穿透解决方法\
> 注意⚠️：所有命令均在代码根目录下执行

**预览图：**
![浅色界面](public/light_config.png)
![深色界面](public/dark_config.png)

## 一、安装及启动
**前置条件：**
- 已安装不低于16.0的node
- 已安装yarn

```shell
# 安装依赖
yarn install

# 启动项目
yarn run dev
```

## 二、Docker打包镜像及启动
**前置条件：**
- 已安装Docker

**打包Docker镜像：**
```shell
docker build -f ./docker/Dockerfile -t ddns-vue:0.1 .
```
**启动Docker镜像：**
```shell
docker run -d -p 80:80 ddns-vue:0.1
```