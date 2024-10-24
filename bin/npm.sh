#!/bin/bash
echo "当前 npm 镜像源：$(npm config get registry)"
pnpm run build
if [ $? -ne 0 ]; then
    echo "请先登录 npm 账户"
    exit 1
fi

pnpm publish 
echo "发布成功！"