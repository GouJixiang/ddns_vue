import type { FormItemRule, FormRules } from 'naive-ui'

let password: string

const userConfigRule: FormRules = {
  account: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('账号是必填的，孩子！')
        } else if (!/^[a-zA-z]/.test(value)) {
          return new Error('只能以字母开头奥！')
        } else if (value.length < 6) {
          return new Error('账号最短六位奥')
        }
        return true
      },
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码！'
    },
    {
      validator(rule: FormItemRule, value: string) {
        password = value
        return true
      },
      trigger: ['input']
    }
  ],
  reenteredPassword: [
    {
      required: true,
      message: '请再次输入密码！',
      trigger: ['input', 'blur']
    },
    {
      validator: validatePasswordStartWith,
      message: '两次密码输入不一致',
      trigger: 'input'
    },
    {
      validator: validatePasswordSame,
      message: '两次密码输入不一致',
      trigger: ['blur', 'password-input']
    }
  ]
}

function validatePasswordStartWith(rule: FormItemRule, value: string): boolean {
  return (
    !!password && password.startsWith(value) && password.length >= value.length
  )
}
function validatePasswordSame(rule: FormItemRule, value: string): boolean {
  return value === password
}

export default userConfigRule
