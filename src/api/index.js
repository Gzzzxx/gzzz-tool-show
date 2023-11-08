import axios from 'axios'
import { baseUrl } from './base.js'

const api = {
  // 加密
  sm4Encrypt: baseUrl + '/sm4/encrypt',
  // 解密
  sm4Decrypt: baseUrl + '/sm4/decrypt',

}

export function sm4Encrypt(data) {
  return axios({
    url: api.sm4Encrypt,
    data,
    method: 'post'
  })
}

export function sm4Decrypt(data) {
  return axios({
    url: api.sm4Decrypt,
    data,
    method: 'post'
  })
}


