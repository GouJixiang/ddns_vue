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
  <n-card class="mt-4" title="用户设置" hoverable embedded>
    <n-form
      ref="formRef"
      :rules="userConfigRule"
      :label-width="80"
      :model="formValue"
    >
      <n-form-item label="登录名" path="account" show-require-mark>
        <n-input
          v-model:value="formValue.account"
          maxlength="20"
          placeholder="登录名"
        />
      </n-form-item>
      <n-form-item label="密码" path="password" show-require-mark>
        <n-input
          v-model:value="formValue.password"
          type="password"
          maxlength="20"
          show-password-on="mousedown"
          placeholder="密码"
        />
      </n-form-item>
      <n-form-item label="重复密码" path="reenteredPassword" show-require-mark>
        <n-input
          v-model:value="formValue.reenteredPassword"
          type="password"
          maxlength="20"
          show-password-on="mousedown"
          placeholder="重复输入密码"
        />
      </n-form-item>
    </n-form>
    <template #action>
      <n-space class="w-1/2" justify="space-between" style="margin: 0 auto">
        <n-button type="primary" :disabled="current === 1" @click="current--"
          >上一步</n-button
        >
        <n-button type="primary" :disabled="current === 4" @click="current++"
          >下一步</n-button
        >
        <n-badge value="beta" type="warning">
          <n-button type="error" @click="handleSkipConfig">跳过配置</n-button>
        </n-badge>
      </n-space>
    </template>
  </n-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { StepsProps } from 'naive-ui'
import UserConfig = ConfigPanel.UserConfig
import userConfigRule from '@/rules/config/user'

const current = ref<number>(1)
const currentStatus = ref<StepsProps['status']>('process')
const formValue = ref<UserConfig>({
  account: '',
  password: '',
  reenteredPassword: '',
  role: 'admin'
})
const handleSkipConfig = () => {
  window.$dialog?.warning({
    title: '跳过配置',
    content: () => {
      return `默认用户登录账户名：admin，密码：123456`
    },
    positiveText: '跳过配置',
    negativeText: '取消',
    onPositiveClick: () => {
      window.$message?.info('跳过配置')
    },
    onNegativeClick: () => {
      window.$message?.error('取消')
    }
  })
}
</script>

<style scoped></style>
