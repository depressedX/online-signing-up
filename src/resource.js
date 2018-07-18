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

// 获取用户信息
export function getUserInfo() {
    return http.get('user').then(handleResponse)
}

/***
 * 更新用户信息
 * @param bundle 要修改的字段
 * @return {Promise<AxiosResponse<any>>}
 */
export function updateUserInfo(bundle) {
    return http.post('user',qs.stringify(bundle)).then(handleResponse)
}

export function getSigningUpDeadline() {
    return http.get('deadline').then(handleResponse)
}

// 提交报名表
export function submitForm(form) {
    return http.post('form',form).then(handleResponse)
}

// 获取报名表
export function getForm() {
    return http.get('form').then(handleResponse)
}

// 获取招新进程
export function getProcess() {
    return http.get('process').then(handleResponse)
}

// 获取试用期内作业完成情况
export function getWorkExecution() {
    return http.get('work').then(handleResponse)
}