<template>
  <div style="padding: 0px 21% 0px 21%;">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="SM4" name="first">
        <detail :algorithm="algorithm"/>
      </el-tab-pane>
      <el-tab-pane label="AES" name="second">
        <detail :algorithm="algorithm"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import detail from './encryptionDetail.vue'

const activeName = ref('first')

let algorithm = "SM4";

const handleClick = (tab: any) => {
    algorithm = tab.props.label
}

</script>

<style lang="less" scoped>

// :deep(.ep-tabs__nav-scroll) {
// 	width:50%;
// 	margin:0 auto
// }

</style>
