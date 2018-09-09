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
                    // target: "https://sduonline.cn/joinus",
                    target: "http://202.194.15.122:8080/joinus",
                    onProxyRes: function(proxyRes, req, res) {
                        let cookies = proxyRes.headers['set-cookie'];
                        let cookieRegex = /Path=\/joinus/i;
                        //修改cookie Path
                        if (cookies) {
                            var newCookie = cookies.map(function(cookie) {
                                if (cookieRegex.test(cookie)) {
                                    return cookie.replace(cookieRegex, 'Path=/');
                                }
                                return cookie;
                            });
                            //修改cookie path
                            delete proxyRes.headers['set-cookie'];
                            proxyRes.headers['set-cookie'] = newCookie;
                        }
                    }
                }
            }
        },
    }
}