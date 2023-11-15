<template>
  <el-form :model="form" label-position="top">
    <el-row>
      <el-col :span="12">
        <el-input v-model="form.data" placeholder="请输入JSON数据" type="textarea" :rows="28" resize='none'></el-input>
      </el-col>
      <el-col :span="12">
        <el-input v-model="form.data" placeholder="" type="textarea" :rows="28" resize='none'></el-input>
      </el-col>
    </el-row>
  </el-form>
</template>
  
<script lang="ts" setup>
import { reactive } from "vue";

const form = reactive({
  data: "",
});
</script>

<style lang="less" scoped>
</style>
  