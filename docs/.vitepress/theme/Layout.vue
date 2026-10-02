<script setup>
/*
 * 自定义 Layout，叠加两项交互增强：
 *
 * ① 分页过渡遮罩
 *    为什么用遮罩而不是直接给内容加动画：
 *    VitePress 切换路由时是同步替换内容的，旧页面会立刻消失，
 *    因此无法让旧内容自己淡出。这里改为在路由变化后立刻铺一层
 *    与页面背景同色的遮罩，再让它淡出——观感上就是「淡出 → 淡入」。
 *
 * ② 收起折叠块时，临时抑制标题条上「悬停预览」的三角形旋转
 *    鼠标点击收起后通常仍停在标题条上，此时若继续套用悬停旋转，
 *    会出现「内容已收起、箭头却指向下」的矛盾。
 *    纯 CSS 无法区分「鼠标移入」与「刚点击收起」（两者都只是 :hover），
 *    故在此用 JS 于收起时加一个临时类，鼠标离开标题条后自动恢复。
 *
 * ③ 点击「不可展开的框」时给一次弹跳反馈
 *    .mc-head / .mc-note 长得像可折叠区块却点不开，加一次「弹一下」的反馈，
 *    明确传达「此处没有隐藏内容」。反馈是瞬时事件，无法只靠 CSS 伪类实现。
 */
import { useRouter } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const { Layout } = DefaultTheme
const { route } = useRouter()

/* ── ① 分页过渡遮罩 ─────────────────────────────────── */

const veilActive = ref(false)
let timer = null

watch(
  () => route.path,
  () => {
    // 先复位，再在下一帧启动，确保动画每次都能重新触发
    veilActive.value = false
    requestAnimationFrame(() => {
      veilActive.value = true
      clearTimeout(timer)
      timer = setTimeout(() => {
        veilActive.value = false
      }, 500)
    })
  },
)

/* ── ② 收起后抑制悬停旋转 ───────────────────────────── */

const SUPPRESS = 'mc-no-hover-turn'

/*
 * toggle 事件**不冒泡**，因此只能在捕获阶段监听。
 * 收起 → 加类抑制；展开 → 清除；鼠标离开标题条 → 清除（恢复悬停预览）。
 */
const onToggle = (event) => {
  const el = event.target
  if (!(el instanceof HTMLDetailsElement)) return

  const summary = el.querySelector(':scope > summary')
  if (!summary) return

  if (el.open) {
    summary.classList.remove(SUPPRESS)
    return
  }

  summary.classList.add(SUPPRESS)
  summary.addEventListener(
    'mouseleave',
    () => summary.classList.remove(SUPPRESS),
    { once: true },
  )
}

/* ── ③ 点击不可展开的框：弹跳反馈 ───────────────────── */

const NUDGE = 'mc-nudge'
const NUDGE_SELECTOR = '.vp-doc .mc-head, .vp-doc .mc-note'

const onDocClick = (event) => {
  const target = event.target
  if (!(target instanceof Element)) return

  // 点的是链接 / 按钮 / 折叠标题时不触发，避免干扰正常交互
  if (target.closest('a, button, summary')) return

  const box = target.closest(NUDGE_SELECTOR)
  if (!box) return

  box.classList.remove(NUDGE)
  // 读取布局属性强制回流，使连续点击时动画能重新播放
  void box.offsetWidth
  box.classList.add(NUDGE)

  box.addEventListener('animationend', () => box.classList.remove(NUDGE), {
    once: true,
  })
}

onMounted(() => {
  document.addEventListener('toggle', onToggle, true)
  document.addEventListener('click', onDocClick)
})

onUnmounted(() => {
  clearTimeout(timer)
  document.removeEventListener('toggle', onToggle, true)
  document.removeEventListener('click', onDocClick)
})
</script>

<template>
  <Layout />
  <div class="mc-page-veil" :class="{ 'is-active': veilActive }" aria-hidden="true" />
</template>
