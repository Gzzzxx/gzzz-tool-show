import axios from 'axios'
import Message from '../components/message/index'

// http response 拦截器
axios.interceptors.response.use(
    (response) => {
      if (response.data.code !== 200) {
        // JSON流：状态码 != 200，进行错误失败处理
        const res = response.data
        const _codeMsg = res && res.msg
        if (_codeMsg) {
          Message.error({
            message: res.msg,
            type: 'error'
          })
        } else {
          Message.warning({
            message: res.msg || '数据请求错误，请稍后重试！',
            type: 'error'
          })
          deleteEleLoading()
          return Promise.reject(res)
        }
      }
      // JSON流：状态码 == 200 ，进行成功业务处理
      return response.data
    },
    (error) => {
      const res = error.response || error
      Message.error({
        message: '网络请求失败，请重试',
        type: 'error',
        duration: 3 * 1000
      })
      deleteEleLoading()
      return Promise.reject(res)
    }
  )

function deleteEleLoading() {
    const elLoading = document.querySelectorAll('.el-loading-mask')
    for (let i = 0; i < elLoading.length; i++) {
        elLoading[i].remove ? elLoading[i].remove() : elLoading[i].parentNode.removeChild(elLoading[i])
    }
}