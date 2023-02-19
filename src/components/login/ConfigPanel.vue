<template>
  <n-alert title="初始化提醒" type="info">
    初次启动服务，请配置相关参数！
  </n-alert>
  <n-steps class="mt-4" :current="current" :status="currentStatus">
    <n-step title="用户设置">
      <div class="n-step-description">
        <p>设置登录控制台的账号和密码</p>
      </div>
    </n-step>
    <n-step title="服务设置">
      <div class="n-step-description">
        <p>设置后台Go服务的相关参数</p>
      </div>
    </n-step>
    <n-step title="网络设置">
      <div class="n-step-description">
        <p>设置宿主机器的网络信息</p>
      </div>
    </n-step>
    <n-step title="完成">
      <div class="n-step-description">
        <p>完成配置</p>
      </div>
    </n-step>
  </n-steps>
  <!-- 表单 -->
  <n-card class="mt-4" title="用户设置" hoverable>
    <n-form
        ref="formRef"
        :label-width="80"
        :model="formValue"
    >
      <n-form-item label="登录名" path="user.name" show-require-mark>
        <n-input v-model:value="formValue.user.name" placeholder="登录名" />
      </n-form-item>
      <n-form-item label="密码" path="user.age" show-require-mark>
        <n-input type="password" show-password-on="mousedown" v-model:value="formValue.user.age" placeholder="密码" />
      </n-form-item>
      <n-form-item label="重复密码" path="phone" show-require-mark>
        <n-input type="password" show-password-on="mousedown" v-model:value="formValue.phone" placeholder="重复输入密码" />
      </n-form-item>
    </n-form>
    <template #action>
      <n-space class="w-1/2" justify="space-between" style="margin: 0 auto">
        <n-button type="primary">上一步</n-button>
        <n-button type="primary">下一步</n-button>
        <n-button type="error">取消配置</n-button>
      </n-space>
    </template>
  </n-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { StepsProps } from 'naive-ui'

const current = ref<number>(1)
const currentStatus = ref<StepsProps['status']>('process')
const formValue = ref({
  user: {
    name: '',
    age: ''
  },
  phone: ''
})

</script>

<style scoped>

</style>