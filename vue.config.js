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
                    target: "http://119.29.52.224:8083",
                    // pathRewrite: {"^/api/v1": ""}
                }
            }
        },
    }
}