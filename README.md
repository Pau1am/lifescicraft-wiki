# LifeSci-Craft Wiki

LifeSci-Craft 服务器的 Wiki —— 新玩家指南、服务器规则、特殊功能、常用指令、
常见问题与更新动态。

- **线上地址**：<https://wiki.pau1am.xyz/>
- 由原 Notion 版 Wiki 迁移而来，使用 [VitePress](https://vitepress.dev/) 构建，
  通过 GitHub Pages 发布。正文与图片都在本仓库里。

> 本站由站主自行维护。

## 仓库内容

| 位置 | 说明 |
| --- | --- |
| `docs/` | 站点源码：Markdown 正文、配置与样式 |
| 根目录 `icons/` `covers/` `features/` | 图片素材。**请勿移动或改名** —— Notion 版 Wiki 仍在通过外链引用它们 |

图片以根目录为唯一源，构建前由 `scripts/sync-assets.mjs` 复制到 `docs/public/`，
因此同一张图只需维护一份，Notion 与站点会同时生效。

## 本地预览

```bash
npm install        # 首次
npm run docs:dev   # 本地预览，http://localhost:5173
```

## 维护须知

- 改 `docs/` 下的 Markdown 后推送到 `main`，会自动重新部署
- 换图片请放进**根目录**（不是 `docs/public/`），构建时会自动同步
- `config.mts` 的 `base` 需与访问方式一致（绑自定义域名时为 `'/'`），
  配错会导致 CSS 与图片全部 404
- 站点公开可访问但不希望被搜索引擎收录，已设 `robots.txt` + `noindex`

## 变更记录

<details>
<summary>1.2 —— 2026 年 10 月 3 日</summary>

导航体验完善。

- 点击右侧「本页目录」或锚点时平滑滚动到目标，不再瞬间跳转
- 右侧目录改为只收章节标题（h2）：条目更精简，滚动时高亮也更稳
- 常见问题与两个更新动态页补上小标题，现在 9 个页面都有「本页目录」
- 悬停侧边栏或右侧目录的条目时，被悬停项放大、上下相邻项按距离递减跟随，
  形成类似拨轮的缩放曲线

</details>

<details>
<summary>1.1 —— 2026 年 10 月 3 日</summary>

界面与交互打磨。

- 侧边栏与顶部导航栏配上 MC 贴图图标
- 全站强调色改为绿色
- 章节标题与折叠块合并：点标题即可展开／收起，不再单独占一行「展开 / 收起」
- 折叠展开／收起、三角形旋转、标题悬停、点击反馈、页面切换均加上动画

</details>

<details>
<summary>1.0.1 —— 2026 年 10 月 2 日</summary>

部署与构建。

- 绑定自定义域名 `wiki.pau1am.xyz`，站点改由该域名发布
- 修复 CI 构建失败与依赖锁问题

</details>

<details>
<summary>1.0 —— 2026 年 10 月 2 日</summary>

由原 Notion 版 Wiki 迁移为 VitePress 站点。

- 正文与图片纳入本仓库；新增原生侧边栏，章节默认收起
- 搜索改用 VitePress 本地搜索（自带中文分词）
- 新增 MC 像素风格式与图片同步脚本
- 启用 `noindex` + `robots.txt`，避免被搜索引擎收录
- 「相关链接」页移除客户端下载章节

</details>
