const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '.', dir);
}
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/perform-management/' : '/',
    outputDir: 'dist',
    lintOnSave: false,
    chainWebpack: config => {
        config.module.rule('svg')
            .exclude
            .add(resolve('src/icons'))
            .end();
        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include
            .add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    },
    devServer: {
        // open: true, // 是否自动打开浏览器页面
        // port: 8080, // 端口地址
        // https: false, // 使用https提供服务
        overlay: {
            warnings: false,
            errors: false
        },
    }
};