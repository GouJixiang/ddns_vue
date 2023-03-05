# 打包程序
FROM node:18.14 as builder

ENV WORKDIR=/ddns-vue

WORKDIR $WORKDIR

COPY ./ $WORKDIR/

RUN yarn install  \
    && yarn build

# nginx 操作
FROM nginx:latest as prod

RUN mkdir "/ddns-vue"

COPY --from=builder /ddns-vue/dist /ddns-vue
COPY --from=builder /ddns-vue/docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80