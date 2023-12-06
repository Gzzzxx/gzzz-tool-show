<template>
  <div style="padding: 0px 21% 0px 21%;">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="SM4" name="SM4">
        <detail :algorithm="algorithm"/>
      </el-tab-pane>
      <el-tab-pane label="AES" name="AES">
        <detail :algorithm="algorithm"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
import detail from './encryptionDetail.vue'

const router = useRouter();

const par = router.currentRoute.value.params.id

const activeName = ref(par)

let algorithm = par;

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
