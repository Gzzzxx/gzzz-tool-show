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
      <el-sub-menu index="2">
        <template #title>加密/解密</template>
        <el-menu-item index="2-1" @click="handleChange(2)">SM4 加密/解密</el-menu-item>
        <el-menu-item index="2-2" @click="handleChange(3)">AES 加密/解密</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3" @click="handleChange(4)">JSON格式化</el-menu-item>
      <el-menu-item index="4" @click="handleChange(5)">Base64转换</el-menu-item>
      <el-sub-menu index="5">
        <template #title>其他工具</template>
        <el-menu-item index="5-1" @click="handleChange(6)">代码对比</el-menu-item>
        <el-menu-item index="5-2" @click="handleChange(7)">日历</el-menu-item>
      </el-sub-menu>
      <!-- <el-menu-item index="0" h="full" class="s-icon">
        <button
          class="border-none w-full bg-transparent cursor-pointer"
          style="height: var(--ep-menu-item-height)"
          @click="toggleTheme"
        >
          <i inline-flex i="dark:ep-moon ep-sunny" />
        </button>
      </el-menu-item> -->
      <div class="si">
        <label class="plane-switch">
            <input type="checkbox" @click="toggleTheme">
            <div>
                <div>
                    <svg viewBox="0 0 13 13">
                        <path d="M1.55989957,5.41666667 L5.51582215,5.41666667 L4.47015462,0.108333333 L4.47015462,0.108333333 C4.47015462,0.0634601974 4.49708054,0.0249592654 4.5354546,0.00851337035 L4.57707145,0 L5.36229752,0 C5.43359776,0 5.50087375,0.028779451 5.55026392,0.0782711996 L5.59317877,0.134368264 L7.13659662,2.81558333 L8.29565964,2.81666667 C8.53185377,2.81666667 8.72332694,3.01067661 8.72332694,3.25 C8.72332694,3.48932339 8.53185377,3.68333333 8.29565964,3.68333333 L7.63589819,3.68225 L8.63450135,5.41666667 L11.9308317,5.41666667 C12.5213171,5.41666667 13,5.90169152 13,6.5 C13,7.09830848 12.5213171,7.58333333 11.9308317,7.58333333 L8.63450135,7.58333333 L7.63589819,9.31666667 L8.29565964,9.31666667 C8.53185377,9.31666667 8.72332694,9.51067661 8.72332694,9.75 C8.72332694,9.98932339 8.53185377,10.1833333 8.29565964,10.1833333 L7.13659662,10.1833333 L5.59317877,12.8656317 C5.55725264,12.9280353 5.49882018,12.9724157 5.43174295,12.9907056 L5.36229752,13 L4.57707145,13 L4.55610333,12.9978962 C4.51267695,12.9890959 4.48069792,12.9547924 4.47230803,12.9134397 L4.47223088,12.8704208 L5.51582215,7.58333333 L1.55989957,7.58333333 L0.891288881,8.55114605 C0.853775374,8.60544678 0.798421006,8.64327676 0.73629202,8.65879796 L0.672314689,8.66666667 L0.106844414,8.66666667 L0.0715243949,8.66058466 L0.0715243949,8.66058466 C0.0297243066,8.6457608 0.00275502199,8.60729104 0,8.5651586 L0.00593007386,8.52254537 L0.580855011,6.85813984 C0.64492547,6.67265611 0.6577034,6.47392717 0.619193545,6.28316421 L0.580694768,6.14191703 L0.00601851064,4.48064746 C0.00203480725,4.4691314 0,4.45701613 0,4.44481314 C0,4.39994001 0.0269259152,4.36143908 0.0652999725,4.34499318 L0.106916826,4.33647981 L0.672546853,4.33647981 C0.737865848,4.33647981 0.80011301,4.36066329 0.848265401,4.40322477 L0.89131128,4.45169723 L1.55989957,5.41666667 Z" fill="currentColor"></path>
                    </svg>
                </div>
                <span class="street-middle"></span>
                <span class="cloud"></span>
                <span class="cloud two"></span>
            </div>
        </label>
      </div>
    </el-menu>
  </el-affix>
  <el-backtop :bottom="100" />
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
    router.push("/encryption/SM4");
  }
  if (_val == 3) {
    router.push("/encryption/AES");
  }
  if (_val == 4) {
    router.push("/format");
  }
  if (_val == 5) {
    router.push("/base64");
  }
  if (_val == 6) {
    router.push("/contrast");
  }
  if (_val == 7) {
    router.push("/calendar");
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

    // JsonEditorVue插件主题切换
    const j = document.getElementById('JsonEditorVue')
    if (j != null) {
      if (isDark) {
        j.className = 'my-json-editor'
      } else {
        j.className = 'my-json-editor jse-theme-dark'
      }
    }
  
    // 代码对比插件主题切换
    const d = document.getElementById('diff')
    if (d != null) {
      if (isDark) {
        d.className = 'vue-diff-wrapper vue-diff-mode-split vue-diff-theme-light'
      } else {
        d.className = 'vue-diff-wrapper vue-diff-mode-split vue-diff-theme-dark'
      }
    }
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
  padding-left: 4%;
  padding-right: 4%;
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

.ep-menu--popup {
  min-width: 120px;
}

.s-icon {
  padding: 5px;
}

.si {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

/* switch settings 👇 */
.plane-switch {
  --dot: #fff;
  --street: #6B6D76;
  --street-line: #A8AAB4;
  --street-line-mid: #C0C2C8;
  --sky-1: #60A7FA;
  --sky-2: #2F8EFC;
  --light-1: rgba(255, 233, 0, 1);
  --light-2: rgba(255, 233, 0, .3);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.plane-switch input {
  display: none;
}

.plane-switch input + div {
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  position: relative;
  overflow: hidden;
  width: 50px;
  /* height: 25px; */
  padding: 1px;
  border-radius: 13px;
  background: linear-gradient(90deg, var(--street) 0%, var(--street) 25%, var(--sky-1) 75%, var(--sky-2) 100%) left var(--p, 0%) top 0;
  background-position-x: var(--p, 0%);
  background-size: 400% auto;
  transition: background-position 0.6s;
}

.plane-switch input + div:before, .plane-switch input + div:after {
  content: "";
  display: block;
  position: absolute;
  transform: translateX(var(--s, 0));
  transition: transform 0.3s;
}

.plane-switch input + div:before {
  width: 42px;
  right: 2px;
  top: 4px;
  height: 1px;
  background: var(--street-line);
  box-shadow: 0 16px 0 0 var(--street-line);
}

.plane-switch input + div:after {
  width: 2px;
  height: 2px;
  border-radius: 50%;
  left: 23px;
  top: 1px;
  -webkit-animation: lights2 2s linear infinite;
  animation: lights2 2s linear infinite;
  box-shadow: inset 0 0 0 2px var(--light-1), 0 21px 0 var(--light-1), 8px 0 0 var(--light-2), 8px 21px 0 var(--light-2), 16px 0 0 var(--light-2), 16px 21px 0 var(--light-2);
}

.plane-switch input + div span {
  display: block;
  position: absolute;
}

.plane-switch input + div span.street-middle {
  top: 12px;
  left: 21px;
  width: 3px;
  height: 1px;
  transform: translateX(var(--s, 0));
  background: var(--street-line-mid);
  box-shadow: 5px 0 0 var(--street-line-mid), 10px 0 0 var(--street-line-mid), 15px 0 0 var(--street-line-mid), 20px 0 0 var(--street-line-mid), 25px 0 0 var(--street-line-mid);
  transition: transform 0.3s;
}

.plane-switch input + div span.cloud {
  width: 12px;
  height: 4px;
  border-radius: 2px;
  background: #fff;
  position: absolute;
  top: var(--ct, 8px);
  left: 100%;
  opacity: var(--co, 0);
  transition: opacity 0.3s;
  -webkit-animation: clouds2 4s linear infinite var(--cd, 0s);
  animation: clouds2 4s linear infinite var(--cd, 0s);
}

.plane-switch input + div span.cloud:before, .plane-switch input + div span.cloud:after {
  content: "";
  position: absolute;
  transform: translateX(var(--cx, 0));
  border-radius: 50%;
  width: var(--cs, 5px);
  height: var(--cs, 5px);
  background: #fff;
  bottom: 1px;
  left: 1px;
}

.plane-switch input + div span.cloud:after {
  --cs: 6px;
  --cx: 4px;
}

.plane-switch input + div span.cloud.two {
  --ct: 20px;
  --cd: 1s;
  opacity: var(--co-2, 0);
}

.plane-switch input + div div {
  display: table;
  position: relative;
  z-index: 1;
  padding: 5px;
  border-radius: 50%;
  background: var(--dot);
  transform: translateX(var(--x, 0));
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.35, 1.2);
}

.plane-switch input + div div svg {
  width: 13px;
  height: 13px;
  display: block;
  color: var(--c, var(--street));
  transition: color 0.6s;
}

.plane-switch input:checked + div {
  --p: 100%;
  --x: 25px;
  --s: -50px;
  --c: var(--sky-2);
  --co: .8;
  --co-2: .6;
}

@keyframes lights2 {
  20%, 30% {
    box-shadow: inset 0 0 0 2px var(--light-2), 0 21px 0 var(--light-2), 8px 0 0 var(--light-1), 8px 21px 0 var(--light-1), 16px 0 0 var(--light-2), 16px 21px 0 var(--light-2);
  }

  55%, 65% {
    box-shadow: inset 0 0 0 2px var(--light-2), 0 21px 0 var(--light-2), 8px 0 0 var(--light-2), 8px 21px 0 var(--light-2), 16px 0 0 var(--light-1), 16px 21px 0 var(--light-1);
  }

  90%, 100% {
    box-shadow: inset 0 0 0 2px var(--light-1), 0 21px 0 var(--light-1), 8px 0 0 var(--light-2), 8px 21px 0 var(--light-2), 16px 0 0 var(--light-2), 16px 21px 0 var(--light-2);
  }
}

@keyframes clouds2 {
  97% {
    transform: translateX(-72px);
    visibility: visible;
  }

  98%, 100% {
    visibility: hidden;
  }

  99% {
    transform: translateX(-72px);
  }

  100% {
    transform: translateX(0);
  }
}
/* switch settings 👆 */
</style>
