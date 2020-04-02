module.exports = {
    devServer: {
        port: 80,
        proxy: {
            // detail: https://cli.vuejs.org/config/#devserver-proxy
            '/api': {
                target: `http://192.168.1.92/api/`,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    lintOnSave: false,
    runtimeCompiler: true,
    publicPath: "/", //打包路径
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("postcss-px-to-viewport")({
                        viewportWidth: 750, // 设计稿的视口宽度
                        unitPrecision: 3, // 单位转换后保留的精度
                        viewportUnit: 'vw', // 希望使用的视口单位
                        selectorBlackList: ['.ignore'], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
                        minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
                        mediaQuery: false, // 媒体查询里的单位是否需要转换单位
                        propList: ["*"], //能转化为vw的属性列表
                        replace: true, //是否直接更换属性值，而不添加备用属性
                        exclude: /(\/|\\)(node_modules)(\/|\\)/, //忽略某些文件夹下的文件或特定文件
                    }),
                    require("cssnano")({
                        "cssnano-preset-advanced": {
                            zindex: false,
                            autoprefixer: false
                        }
                    }),
                    require("postcss-write-svg")({
                        utf8: false
                    })
                ]
            },
            sass: {
                prependData: `@import "@/assets/scss.scss";`
            }
        }
    }
}