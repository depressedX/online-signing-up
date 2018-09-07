if (process.env.NODE_ENV === 'production') {
    module.exports = {
        baseUrl: process.env.BASE_URL
    }
} else {
// dev-server
    module.exports = {
        devServer: {
            proxy: {
                "/api/v1": {
                    target: "https://sduonline.cn/joinus",
                    // pathRewrite: {"^/api/v1": ""}
                }
            }
        },
    }
}