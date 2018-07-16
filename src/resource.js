import axios from "axios"

const API_BASE_URL = '/api/v1/'

let http = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
})

// 请求返回时的Error
class RequestError extends Error {
    constructor(message) {
        super()
        this.message = message
    }
}

const handleResponse = resp => {
    let data = resp.data
    if (data.status === 200) {
        return data.data
    } else {
        throw new RequestError(resp.data.message)
    }
}

export function login(studentId,password) {
    return http.post('login',qs.stringify({studentId,password})).then(handleResponse)
}

export function logout() {
    return http.post('logout').then(handleResponse)
}

export function f() {
    
}