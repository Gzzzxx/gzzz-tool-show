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
    <el-row style="margin:20px 0 20px 0px;text-align: left;">
      <el-col :span="24">
        <el-card class="box-card">
          <el-text tag="b">相关概念</el-text>
          <br/>
          <el-text class="text_left">
            在
            <el-text type="primary">密码学</el-text>
            中，
            <el-text tag="b">分组加密</el-text>
            （英语：
            <el-text tag="b">Block cipher</el-text>
            ），又称
            <el-text tag="b">分块加密</el-text>
            或
            <el-text tag="b">块密码</el-text>
            ，是一种对称密钥算法。它将明文分成多个等长的模块（block），使用确定的算法和
            <el-text type="primary">对称密钥</el-text>
            对每组分别加密解密。分组加密是极其重要的加密协议组成，其中典型的如
            <el-text type="primary">DES</el-text>
            和
            <el-text type="primary">AES</el-text>
            作为美国政府核定的标准加密算法，应用领域从电子邮件加密到银行交易转帐，非常广泛。
          </el-text>
          <br/>
          <el-text class="text_left">
            国密即国家密码局认定的国产密码算法。主要有SM1，SM2，SM3，SM4。密钥长度和分组长度均为128位。
          </el-text>
          <br/>
          <el-text class="text_left">
            SM1为对称加密。其加密强度与AES相当。该算法不公开，调用该算法时，需要通过加密芯片的接口进行调用。
          </el-text>
          <br/>
          <el-text class="text_left">
            SM2为非对称加密，基于ECC。该算法已公开。由于该算法基于ECC，故其签名速度与秘钥生成速度都快于RSA。ECC 256位（SM2采用的就是ECC 256位的一种）安全强度比RSA 2048位高，但运算速度快于RSA。
          </el-text>
          <br/>
          <el-text class="text_left">
            SM3消息摘要。可以用MD5作为对比理解。该算法已公开。校验结果为256位。
          </el-text>
          <br/>
          <el-text class="text_left">
            SM4无线局域网标准的分组数据算法。对称加密，密钥长度和分组长度均为128位。
          </el-text>
          <br/>
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
  margin-top: 14px !important;
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

