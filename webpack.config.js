const path = require('path');

module.exports = {
    entry: './src/app.js',  // 你的主入口文件
    output: {
        filename: 'douyin_auto_fudai.js',  // 輸出的文件名
        path: path.resolve(__dirname, 'dist'),  // 輸出目錄
    },
    mode: 'production',
};
