<template>
  <el-affix>
    <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
      <el-menu-item index="1" @click="handleChange(1)">
        <img
          style="width: 100px;height: 100%;min-height: 58px;"
          src="../../images/logo.svg"
          alt="logo"
        />
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="2" @click="handleChange(2)">加密/解密</el-menu-item>
      <el-menu-item index="3" @click="handleChange(3)">JSON格式化</el-menu-item>
      <el-menu-item index="4" >Base64转换</el-menu-item>
      <el-menu-item h="full">
        <button
          class="border-none w-full bg-transparent cursor-pointer"
          style="height: var(--ep-menu-item-height)"
          @click="toggleTheme"
        >
          <i inline-flex i="dark:ep-moon ep-sunny" />
        </button>
      </el-menu-item>
    </el-menu>
  </el-affix>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useDark } from "@vueuse/core";

const router = useRouter();

const handleChange = (_val: any) => {
  if (_val == 1) {
    router.push("/");
  }
  if (_val == 2) {
    router.push("/encryption");
  }
  if (_val == 3) {
    router.push("/format");
  } 
};

useDark();

const toggleTheme = (event: MouseEvent) => {
  
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

  let isDark: boolean

  // @ts-ignore
  const transition = document.startViewTransition(() => {
    const root = document.documentElement
    isDark = root.classList.contains('dark')
    root.classList.remove(isDark ? 'dark' : 'light')
    root.classList.add(isDark ? 'light' : 'dark')
  })

  transition.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
    document.documentElement.animate(
      {
        clipPath: isDark ? [...clipPath].reverse() : clipPath
      },
      {
        duration: 500,
        easing: 'ease-in',
        pseudoElement: isDark ? '::view-transition-old(root)' : '::view-transition-new(root)'
      }
    )
  })
}
</script>

<style>

.flex-grow {
  flex-grow: 1;
}

.el-menu-demo {
  padding-left: 5%;
  padding-right: 5%;
  backdrop-filter: saturate(50%) blur(4px);
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

/* 进入dark模式和退出dark模式时，两个图像的位置顺序正好相反 */
.dark::view-transition-old(root) {
  z-index: 1;
}

.dark::view-transition-new(root) {
  z-index: 999;
}

::view-transition-old(root) {
  z-index: 999;
}

::view-transition-new(root) {
  z-index: 1;
}

</style>
