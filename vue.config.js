// github deploymnent
// module.exports = {
//     baseUrl: '/online-signing-up/page',
//     outputDir: 'page',
// }

// dev-server
module.exports={
    devServer: {
        proxy: {
            "/api/v1": {
                target: "http://119.29.52.224:8083",
                // pathRewrite: {"^/api/v1": ""}
            }
        }
    }
}