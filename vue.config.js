const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

let target = "http://127.0.0.1:7002"; // 代理的路径
const ENV = process.env.NODE_ENV;

let publicPath = "/"; //开发环境
let productionSourceMap = true; //开发环境开启devTool/source-map

if (ENV === "production") {
  publicPath = "/yuchen/";
  target = "";
  productionSourceMap = false; //生产环境不开启devTool/source-map
}

module.exports = {
  publicPath,
  productionSourceMap,
  devServer: {
    open: true, // 配置自动启动浏览器
    proxy: {
      "/api": {
        target: target, // 代理的第一个路径,

        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api", // 代理重写
        },
      },
    },

    // history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404，所以需要配置这一项
    historyApiFallback: {
      index: "/index.html", //与output的publicPath
    },
  },
  // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: (config) => {
    if (ENV === "production") {
      // 压缩图片
      config.module
        .rule("images")
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        .use("image-webpack-loader")
        .loader("image-webpack-loader")
        .options({ bypassOnDebug: true });
    }
  },
  //   如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
  //   如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西
  configureWebpack: (config) => {
    if (ENV === "production") {
      //开启gzip压缩
      config.plugins.push(
        new CompressionPlugin({
          /* [file]被替换为原始资产文件名。
                   [path]替换为原始资产的路径。
                   [dir]替换为原始资产的目录。
                   [name]被替换为原始资产的文件名。
                   [ext]替换为原始资产的扩展名。
                   [query]被查询替换。*/
          filename: "[path].gz[query]",
          //压缩算法
          algorithm: "gzip",
          //匹配文件
          test: /\.js$|\.css$|\.less$|\.html$/,
          //压缩超过此大小的文件,以字节为单位
          threshold: 10240,
          minRatio: 0.8,
          //删除原始文件只保留压缩后的文件
          deleteOriginalAssets: false,
        }),
        //注释处理
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: false, // 去掉注释
            },
            warnings: false,
            compress: {
              drop_console: true, //不清除console语句
              drop_debugger: true, //清除 debugger 语句
              pure_funcs: ["console.log"], //移除console
            },
          },
        })
      );
    }
  },
};
