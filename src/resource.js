import axios from "axios"
import qs from 'qs'

const API_BASE_URL = '/api/v1/'

let http = axios.create({
    baseURL: API_BASE_URL,
    timeout: 2000,
})

// 请求返回时的Error
class RequestError extends Error {
    constructor(message, status) {
        super()
        this.message = message
        this.status = status
    }
}

const handleResponse = resp => {
    let data = resp.data
    if (data.status === 200) {
        return data.data
    } else {
        throw new RequestError(resp.data.message, resp.data.status)
    }
}

const loginStatusKey = 'hasLoggedIn'

// 初始化  首先发请求看是否登陆
async function updateAuthorizationStatus() {
    let hasLoggedIn = handleResponse(await http.get('hasLoggedIn'))
    hasLoggedIn = hasLoggedIn ? true : false
    sessionStorage.setItem(loginStatusKey, hasLoggedIn.toString())
}

updateAuthorizationStatus().then()

export async function signup(stu_no, name) {

    let resp = await http.post('signup', qs.stringify({stu_no, name}))
    return handleResponse(resp)

}

export async function login(stu_no, name) {

    let resp = await http.post('login', qs.stringify({stu_no, name}))
    resp = handleResponse(resp)
    sessionStorage.setItem(loginStatusKey, 'true')
    return resp

}

export function hasLoggedIn() {
    return sessionStorage.getItem(loginStatusKey) === 'true' ? true : false
}

export function logout() {
    return http.post('logout').then(handleResponse)
        .then(() => {
            sessionStorage.setItem(loginStatusKey, null)
        })
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
    return http.post('user', qs.stringify(bundle)).then(handleResponse)
}

export function getSigningUpDeadline() {
    return http.get('deadline').then(handleResponse)
}

// 提交报名表
export function submitForm(form) {
    return http.post('form', form).then(handleResponse)
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
    return http.get('work').then(handleResponse).then(data => Array.isArray(data) ? data : [])
}
