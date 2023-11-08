<template>
  <el-form :model="form" label-position="top">
    <el-row :gutter="20" justify="center">
      <el-col :span="18">
        <el-form-item label="加密/解密内容">
          <el-input v-model="form.data" placeholder="加密/解密内容" type="textarea" :rows="6" resize='none'></el-input>
        </el-form-item>
        <el-form-item label="密钥">
          <el-input v-model="form.key" placeholder="密钥"></el-input>
        </el-form-item>
        <el-form-item label="向量IV">
          <el-input v-model="form.iv" placeholder="向量IV"></el-input>
        </el-form-item>
        <el-form-item label="加密/解密结果">
          <el-input v-model="form.result" placeholder="加密/解密结果" disabled type="textarea" :rows="6" resize='none'></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="加密/解密内容数据格式">
          <el-select v-model="form.dataType">
            <el-option label="文本（解密为Base64）" value="TEXT" />
            <el-option label="Base64" value="BASE64" />
            <el-option label="十六进制" value="HEX" />
          </el-select>
        </el-form-item>
        <el-form-item label="加密/解密结果数据格式">
          <el-select v-model="form.resultType">
            <el-option label="文本（加密为Base64）" value="TEXT" />
            <el-option label="Base64" value="BASE64" />
            <el-option label="十六进制" value="HEX" />
          </el-select>
        </el-form-item>
        <el-form-item label="密钥/IV数据格式">
          <el-select v-model="form.keyType">
            <el-option label="Base64" value="BASE64" />
            <el-option label="十六进制" value="HEX" />
          </el-select>
        </el-form-item>
        <el-form-item label="加密模式">
          <el-select v-model="form.mode">
            <el-option label="ECB" value="ECB" />
            <el-option label="CBC" value="CBC" />
            <el-option label="CTR" value="CTR" />
          </el-select>
        </el-form-item>
        <el-button type="primary" class="bu1" @click="encrypt()">加密</el-button>
        <el-button type="primary" class="bu" @click="decrypt()">解密</el-button>
        <el-button type="" @click="copyData()" class="bu">复制结果</el-button>
        <el-button type="" @click="clear()" class="bu">清空</el-button> 
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { sm4Encrypt , sm4Decrypt } from '../api/index.js'
import { ElMessage } from 'element-plus'

const form = reactive({
  algorithmName: 'SM4',
  data: '',
  key: '',
  iv: '',
  result: '',
  dataType: 'TEXT',
  resultType: 'TEXT',
  keyType: 'BASE64',
  mode: 'ECB'
})

function encrypt() {
  sm4Encrypt(form).then((res) => {
    if (res.code == 200) {
      form.result = res.data.data
      ElMessage.success({message: '加密成功'})
    }
  })
}

function decrypt() {
  sm4Decrypt(form).then((res) => {
    if (res.code == 200) {
      form.result = res.data.data
      ElMessage.success({message: '解密成功'})
    }
  })
}

function copyData() {
  navigator.clipboard.writeText(form.result).then(() => {
    ElMessage.success({message: '复制成功'})
});
}

function clear() {
  form.data = '';
  form.key = '';
  form.iv = '';
  form.result = '';
}
</script>

<style lang="less" scoped>
.bu1 {
  float: center;
  width: 200px;
  margin-top: 15px;
}
.bu {
  float: center;
  width: 200px;
  margin-top: 15px;
  margin-left: 0px;
}

// .ep-button--primary {
//     --ep-button-bg-color: #409eff;
//     --ep-button-hover-bg-color: #409eff;
// }
// .ep-button--primary:hover {
//     --ep-button-hover-bg-color: #79bbff;
// }


:deep(.ep-textarea__inner::-webkit-scrollbar) {
     width: 6px ;
     height: 6px ;
}
:deep(.ep-textarea__inner::-webkit-scrollbar-thumb) {
    border-radius: 3px ;
      -moz-border-radius: 3px ;
      -webkit-border-radius: 3px ;
      background-color: #c3c3c3 ;
}
:deep(.ep-textarea__inner::-webkit-scrollbar-track) {
    background-color: transparent ;
}


</style>

