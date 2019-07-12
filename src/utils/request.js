import axios from 'axios'

const successCode = 200
const instance = axios.create({
  baseURL: '/api',
  withCredentials: true, // 跨域类型时是否在请求中协带cookie
})

export default class HttpUtil {
  static get(url, params ={}) {
    return new Promise((resolve, reject) => {
      instance.get(url, {...params}).then(({data}) => {
        if(data.code === successCode){
          resolve({res: data})
        }else{
          reject({err: data.errmsg, name: data.name||''})
        }
      }).catch((err) => {
        reject({err: JSON.stringify(err)})
      })
    })
  }
  static post(url, params={}){
    return new Promise((resolve,reject) => {
      instance.post(url,{...params}).then(({data}) => {
        if(data.code === successCode){
          resolve({res: data})
        }else{
          reject({err: data.errmsg,name: data.name||''})
        }
      }).catch((err) => {
        reject({err: JSON.stringify(err)})
      })
    })
  }
}
