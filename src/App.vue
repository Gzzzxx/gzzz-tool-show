<template>
  <!-- <div :style="{ zoom: scaleva }"> -->
  <div>
    <el-config-provider namespace="ep">
      <BaseHeader />
      <div class="flex main-container">
        <!-- <BaseSide /> -->
        <div w="full" py="4">
          <router-view :key="$router.currentRoute.value.fullPath"></router-view>
        </div>
      </div>
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from '@vue/runtime-core'

export default {
  setup () {
    const scaleva = ref()
    const bodyScale = () => {
      const devicewidth = document.documentElement.clientWidth// 获取当前分辨率下的可是区域宽度
      const scale = devicewidth / 1920 // 分母——设计稿的尺寸
      scaleva.value = scale
    }
    onMounted(() => {
      bodyScale()
      window.onresize = () => {
        return (() => {
          bodyScale()
        })()
      }
    })
    return {
      scaleva,
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 5px);
}
</style>
