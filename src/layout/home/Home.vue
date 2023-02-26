<template>
  <n-watermark
    content="DDNS FOR IPV6"
    cross
    fullscreen
    :font-size="16"
    :line-height="16"
    :width="384"
    :height="384"
    :x-offset="12"
    :y-offset="60"
    :rotate="-15"
  />
  <n-layout>
    <n-layout-header class="bg-blue-500">
      <!-- 三列式栅格 -->
      <n-grid :x-gap="12" :y-gap="12" :cols="3" layout-shift-disabled>
        <n-gi>标题</n-gi>
        <n-gi>占位</n-gi>
        <n-gi>右侧栏</n-gi>
      </n-grid>
    </n-layout-header>
    <n-layout-content> 平山道 </n-layout-content>
    <n-layout-footer class="bg-amber-300 fixed bottom-0 w-full">
      <div class="">哈哈</div>
    </n-layout-footer>
  </n-layout>
</template>

<script setup lang="ts"></script>

<style scoped></style>
