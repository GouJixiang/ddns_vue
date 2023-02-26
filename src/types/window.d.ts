/** 覆盖lib,dom.d.ts的window */
import type {
  DialogApi,
  LoadingBarApi,
  MessageApi,
  NotificationApi
} from 'naive-ui'

declare global {
  interface Window {
    $message?: MessageApi
    $dialog?: DialogApi
    $notification?: NotificationApi
    $loading?: LoadingBarApi
  }
}
