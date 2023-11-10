<template>
  <div style="padding: 0px 21% 0px 21%;">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="SM4" name="first">
        <detail/>
      </el-tab-pane>
      <el-tab-pane label="AES" name="second">Config</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import detail from './encryptionDetail.vue'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style lang="less" scoped>

// :deep(.ep-tabs__nav-scroll) {
// 	width:50%;
// 	margin:0 auto
// }

</style>
