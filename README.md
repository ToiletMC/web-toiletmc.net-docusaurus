# 厕所总部网站
[![Deploy to Aliyun](https://github.com/ToiletMC/toiletmc.net/actions/workflows/deploy.yml/badge.svg)](https://github.com/ToiletMC/toiletmc.net/actions/workflows/deploy.yml)

网站构建使用 [Docusaurus 2](https://docusaurus.io/zh-CN/)，一个现代化的静态网站生成器。浏览我们的站点：[toiletmc.net](https://toiletmc.net)

## ❓ 如何贡献

如果需要插入图片，建议压缩后再添加：[tinify.cn](https://tinify.cn)

### 小白教程：

1. 将本仓库 fork 到自己的 github 账号并下载文件到本地
2. 在文件夹内运行命令 `npm install`，等待依赖文件下载完成
3. 在文件夹内运行命令 `npm run start` 启动实时预览服务器
4. 编辑文件，浏览器转到 `localhost:3000` 实时预览页面
5. 完成所有编辑工作后运行 `npm run build`，测试是否构建通过
6. 将文件上传到自己仓库，然后向本仓库提交 pr

### 高手教程：

```bash
$ git clone https://github.com/<your-name>/toiletmc.net.git
$ cd toiletmc.net
$ cnpm i
$ code .
$ cnpm start
$ # 完成编辑后……
$ git commit -m "..."
$ git push
$ # 提交pr即可
```

## ⚙️ 工作流程

当检测到 main 分支文件变化时，Github Action 会自动构建网站并完成部署。
