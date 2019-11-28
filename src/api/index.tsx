import HttpUtil from '../utils/request'

// 登录
export const login = (params: object) => {return HttpUtil.post('/users/login', params)}
// 登出
export const logout = (params?: object) => {return HttpUtil.post('/users/logout', params)}
// 获取用户信息
export const getUserInfo = (params?: object) => {return HttpUtil.post('/users/info', params)}
// 修改用户信息
export const updateUserInfo = (params?: object) => {return HttpUtil.post('/users/update', params)}

// 文章列表
export const artList = (params?: object) => {return HttpUtil.post('/art/list', params)}
// 新增文章
export const addArt = (params: object) => {return HttpUtil.post('/art/add', params)}
// 删除文章
export const delArt = (params: object) => {return HttpUtil.post('/art/delete', params)}
// 修改文章
export const updateArt = (params: object) => {return HttpUtil.post('/art/update', params)}

// 标签列表
export const tagList = (params?: object) => {return HttpUtil.post('/tag/list', params)}
// 新增标签
export const addTag = (params: object) => {return HttpUtil.post('/tag/add', params)}
// 删除标签
export const delTag = (params: object) => {return HttpUtil.post('/tag/delete', params)}
// 修改标签
export const updateTag = (params: object) => {return HttpUtil.post('/tag/update', params)}