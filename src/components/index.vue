<template>

  <!-- <img
    src="../images/home-page.png"
    alt="banner"
    class="mobile-banner"
    style="width: 600px;margin-top: 20px;"
  /> -->

  <div class="inner">
    <p class="tts">Gross the stars over the moon to meet your betterself</p>
  </div>

</template>

<script setup lang="ts">

</script>

<style>
.inner {
  height: 80%;
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
  border-right: .15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation: typing 5s steps(42, end),blink-caret .5s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 42em }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange;}
}
</style>
