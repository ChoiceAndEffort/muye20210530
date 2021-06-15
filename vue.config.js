const ENV = process.env.NODE_ENV;
let publicPath = "./", //开发环境
  productionSourceMap = true; //开发环境开启devTool/source-map
console.log("----------------", ENV);
if (ENV === "production") {
  publicPath = "/yuchen/";
  productionSourceMap = false; //生产环境不开启devTool/source-map
}
module.exports = {
  publicPath,
  productionSourceMap,
  devServer: {
    // history模式下的url会请求到服务器端，但是服务器端并没有这一个资源文件，就会返回404，所以需要配置这一项
    historyApiFallback: {
      index: "/index.html", //与output的publicPath
    },
  },
};
