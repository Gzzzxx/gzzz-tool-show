<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";

defineProps<{ msg: string }>();

const count = ref(0);
const input = ref("element-plus");

const curDate = ref("");

const toast = () => {
  ElMessage.success("Hello");
};

const value1 = ref(true);
</script>

<template>

  <!-- <p style="font-size: 30px;">Gzzz</p> -->

  <img
      src="../images/home-page.png"
      alt="banner"
      class="mobile-banner"
      style="width: 600px;margin-top: 50px;"
    />

</template>

<style>
.ep-button {
  margin: 4px;
}
.ep-button + .ep-button {
  margin-left: 0;
  margin: 4px;
}
</style>
