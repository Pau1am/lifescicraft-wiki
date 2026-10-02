import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,

  enhanceApp({ router }) {
    if (typeof window === 'undefined') return

    const root = document.documentElement

    /*
     * 平滑滚动：默认开启，作用于「本页目录」与锚点跳转。
     *
     * VitePress 只在点击标题旁的 # 锚点时才平滑滚动，「本页目录」的链接
     * 走的是 window.scrollTo(0, top) 瞬跳分支；开启 scroll-behavior 后
     * 位置式调用也会遵循该值，从而获得平滑效果。
     *
     * 但换页时 VitePress 同样会 window.scrollTo(0, 0) 回到顶部，
     * 若此时仍为平滑，会看到内容向上滑动 —— 故导航期间临时关掉。
     * （这些路由钩子 VitePress 自身并未占用，可安全接管）
     */
    root.classList.add('mc-smooth')

    let restoreTimer

    const prevBefore = router.onBeforeRouteChange
    router.onBeforeRouteChange = async (href) => {
      root.classList.remove('mc-smooth')
      // 兜底：万一导航被中断或中途出错，1.5 秒后也强制恢复
      clearTimeout(restoreTimer)
      restoreTimer = setTimeout(() => root.classList.add('mc-smooth'), 1500)
      return prevBefore?.(href)
    }

    const prevAfter = router.onAfterRouteChange
    router.onAfterRouteChange = async (href) => {
      const result = await prevAfter?.(href)
      /*
       * VitePress 的「回到顶部」在 nextTick 回调里执行，
       * 可能晚于本钩子，故再等一帧 + 一个宏任务后恢复。
       */
      clearTimeout(restoreTimer)
      requestAnimationFrame(() => {
        setTimeout(() => root.classList.add('mc-smooth'), 0)
      })
      return result
    }
  },
}
