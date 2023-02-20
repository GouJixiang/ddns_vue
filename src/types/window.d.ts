/** 覆盖lib,dom.d.ts的window */
interface Window {
  $loadingBar?: import('naive-ui').LoadingBarProviderInst
}
