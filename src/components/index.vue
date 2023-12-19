<template>

  <!-- <img
    src="../images/home-page.png"
    alt="banner"
    class="mobile-banner"
    style="width: 600px;margin-top: 20px;"
  /> -->

  <div class="inner">
    <p class="tts">Cross the stars over the moon to meet your better self</p>
  </div>
  
  <footer>
    <el-link style="color: #4f4f4f;" href="https://beian.miit.gov.cn/">京ICP备2023038054号</el-link>
  </footer>
  
</template>

<script setup lang="ts">

</script>

<style>
.inner {
  min-height: calc(100vh - 100px);
  position: relative;
}

.tts {
  font-family: 'CUSTOM';
  font-size: 16px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* font-weight: bold; */

  /* font-family: monospace; */
  overflow: hidden;
  /* 使用右边框作为打印的指针光标 */
  border-right: .15em solid orange;
  /* 要设置不允许换行，且溢出隐藏 */
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  /* 加上两个动画，一个是打字动画，使用steps让字一个一个的出现，
  注意step和字数保持一致，然后多一步用来丢弃，光标动画也是同理 */
  animation: typing 5s steps(42, end),blink-caret .5s step-end infinite;
}

/**打字机动画 */
@keyframes typing {
  from { width: 0 }
  to { width: 42em }
}

/**光标动画 */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}
</style>
