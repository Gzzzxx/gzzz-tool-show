<template>
  <el-form :model="form" label-position="top">
    <el-row :gutter="30" justify="center">
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
        <el-form-item label="加密/解密结果" style="margin-bottom:0 !important;">
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
        <el-button type="primary" class="bu" @click="encrypt()">加密</el-button>
        <el-button type="primary" class="bu" @click="decrypt()">解密</el-button>
        <el-button @click="copyData()" class="bu">复制结果</el-button>
        <el-button @click="clear()" class="bu" style="margin-bottom:0 !important;">清空</el-button> 
      </el-col>
    </el-row>
    <el-row style="margin:20px 0 0px 0px;text-align: left;">
      <el-col :span="24">
        <el-card class="box-card">
          <el-text tag="b">算法介绍</el-text>
          <br/>
          <el-text class="text_left">
            <el-text tag="b">SM4.0</el-text>
            （原名SMS4.0）是一种
            <el-text type="primary">分组密码</el-text>
            标准，由
            <el-text type="primary">国家密码管理局</el-text>
            于2012年3月21日发布。相关标准为“GM/T 0002-2012《SM4分组密码算法》（原SMS4分组密码算法）”。
          </el-text>
          <br/>
          <el-text class="text_left">
            在
            <el-text type="primary">商用密码</el-text>
            体系中，SM4主要用于
            <el-text type="primary">数据加密</el-text>
            ，其算法公开，分组长度与密钥长度均为128bit，
            <el-text type="primary">加密算法</el-text>
            与密钥扩展算法都采用32轮非线性迭代结构，
            <el-text type="primary">S盒</el-text>
            为固定的8比特输入8比特输出。
          </el-text>
          <br/>
          <el-text class="text_left">
            SM4.0中的指令长度被提升到大于64K（即64×1024）的水平，这是SM 3.0规格（渲染指令长度允许大于512）的128倍。
          </el-text>
        </el-card>
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

.bu {
  width: 100%;
  margin-top: 15px !important;
  margin-left: 0 !important;
}

.text_left {
  margin-left: 28px;
}

:deep(.ep-form-item__content .ep-select) {
  width: 100% !important;
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

