<template>
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false" style="padding-left: 5%;padding-right: 5%;">
    <el-menu-item index="1" @click="handleChange(1)">
      <img
        style="width: 100px;height: 100%;min-height: 56px;"
        src="../../images/logo.svg"
        alt="logo"
      />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="2" @click="handleChange(2)">加密/解密</el-menu-item>
    <el-menu-item index="3" >JSON格式化</el-menu-item>
    <el-menu-item index="4" >Base64转换</el-menu-item>
    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { toggleDark } from "~/composables";
import { useRouter } from "vue-router";

const router = useRouter();

const handleChange = (_val: any) => {
  if (_val == 1) {
    router.push("/");
  }
  if (_val == 2) {
    router.push("/home");
  }  
};
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
