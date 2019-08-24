const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 다른 스크립트에서 사용할 수 있도록 배포하는 방법
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, 'dist')  // __ >> 현재위치하고 있는 폴더
    },
    module: {
        rules: [
            {
                test: /\.css/, /* test에는 정규표현식이 들어가고 true, false를 판단하는 predicate 역할을 한다 */
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss/, /*파일 확장명*/
                use: ['style-loader', 'css-loader', 'sass-loader']
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}