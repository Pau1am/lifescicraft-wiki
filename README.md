# LifeSci-Craft Wiki

LifeSci-Craft 服务器 Wiki 的**图片素材库 + 站点源码**。

本站点由原 Notion 版 Wiki（主页 + 8 个子页面）迁移而来，使用
[VitePress](https://vitepress.dev/) 构建，通过 GitHub Pages 发布。正文与图片都在本仓库里。

## 这个仓库承担两件事

| 用途 | 位置 | 说明 |
|---|---|---|
| **图片素材库** | 根目录 `icons/` `covers/` `features/` | 供 **Notion 版 Wiki** 通过 `raw.githubusercontent.com` 外链引用。**请勿移动或改名**，否则 Notion 上的图标、封面会立即失效 |
| **站点源码与内容** | `docs/` | VitePress 站点：Markdown 正文 + 配置 + 主题 |

> 根目录的图片是**唯一源**。构建前由 `scripts/sync-assets.mjs` 自动复制到 `docs/public/`，
> 该目录不纳入版本控制。这样同一张图只存一份，改一处即可同时生效于 Notion 与站点。
> 若将来 Notion 版退役，可直接把图片移入 `docs/public/` 并删除同步脚本。

## 本地开发

```bash
npm install            # 首次
npm run docs:dev       # 本地预览（会先同步图片），http://localhost:5173
npm run docs:build     # 构建到 docs/.vitepress/dist
npm run docs:preview   # 预览构建产物
npm run sync:assets    # 仅同步图片素材
```

> Windows 上 `npm install` 有时会漏装 esbuild / rollup 的平台二进制，
> 已在 `optionalDependencies` 中显式声明。若仍报
> `The package "@esbuild/win32-x64" could not be found`，执行：
> ```bash
> npm install @esbuild/win32-x64 @rollup/rollup-win32-x64-msvc --save-optional
> ```

## 目录结构

```
.
├─ icons/                 # 42 张 MC 物品贴图（Notion 外链源 + 站点图标）
├─ covers/                # 11 张页面封面图
├─ features/              # 7 张模组功能截图
├─ scripts/
│   └─ sync-assets.mjs    # 根目录图片 → docs/public/
├─ .github/workflows/
│   └─ deploy-wiki.yml    # 推送 main 自动部署到 GitHub Pages
└─ docs/
    ├─ .vitepress/
    │   ├─ config.mts     # 导航 / 侧边栏 / 搜索 / noindex
    │   └─ theme/
    │       ├─ index.ts
    │       └─ custom.css # MC 像素风格式
    ├─ public/            # 站点静态资源（构建时原样复制）
    │   ├─ robots.txt     # 禁止搜索引擎收录
    │   ├─ .nojekyll
    │   └─ icons|covers|features/   # 由同步脚本生成，已 gitignore
    ├─ index.md                    # 主页
    ├─ guide/
    │   ├─ newbie.md               # 新玩家指南
    │   ├─ rules.md                # 服务器规则
    │   └─ faq.md                  # 常见问题 FAQ
    ├─ features/index.md           # 特殊功能（12 个模组章节）
    ├─ commands.md                 # 常用指令
    ├─ links.md                    # 相关链接
    └─ updates/
        ├─ server.md               # 服务器更新动态
        └─ client.md               # 客户端更新动态
```

## 页面与文件对照

| 原 Notion 页面 | 现文件 |
| --- | --- |
| 主页 | `docs/index.md` |
| 新玩家指南 | `docs/guide/newbie.md` |
| 服务器规则 | `docs/guide/rules.md` |
| 特殊功能 | `docs/features/index.md` |
| 常用指令 | `docs/commands.md` |
| 常见问题 FAQ | `docs/guide/faq.md` |
| 服务器更新动态 | `docs/updates/server.md` |
| 客户端更新动态 | `docs/updates/client.md` |
| 相关链接 | `docs/links.md` |

## 写作约定

- **图片用仓库内相对路径**：`/icons/item__map.png`、`/features/racks.png`。
  资源位于 `docs/public/` 下，引用时**不带 `public`** 前缀。
- **章节标题**用 `mc-head` 组件：
  ```html
  <div class="mc-head"><img src="/icons/item__bell.png" class="mc-icon" alt="" />章节名</div>
  ```
- **可折叠内容**用原生 `<details>` / `<summary>`，**不加 `open` 属性即为默认收起**。
- **提示条**用 `<div class="mc-note">`，内部文字与 `<div>` 之间**必须留空行**，
  否则 markdown-it 会按原始 HTML 透传、不解析其中的 Markdown。
- **功能截图**：
  ```html
  <figure class="feature-shot">
    <img src="/features/racks.png" alt="描述" />
    <figcaption>图注</figcaption>
  </figure>
  ```
- 站内跳转一律用**站内相对链接**（如 `/guide/rules`）。
  中文标题的锚点 slug 不可预测，**不要手写中文锚点**，链接到页面即可。
- 标题格式沿用原约定：**中文在前、英文在后**。

## 部署

推送 `main` 分支后由 GitHub Actions 自动构建并部署。

需要一次性配置：仓库 **Settings → Pages → Build and deployment → Source** 选 **GitHub Actions**。
（若误选「分支 / root」，GitHub 会尝试用 Jekyll 处理整个仓库。）

### ⚠ base 路径：决定资源能否加载

`docs/.vitepress/config.mts` 里的 `base` 必须与访问方式匹配，**配错会导致页面能打开但 CSS 与图片全部 404**：

| 访问方式 | `base` 应设为 |
|---|---|
| 默认 Pages 地址 `https://pau1am.github.io/lifescicraft-wiki/` | `'/lifescicraft-wiki/'` ← **当前设置** |
| 绑定了自定义域名（如 `wiki.pau1am.xyz`） | `'/'` |

绑定自定义域名的步骤：仓库 Settings → Pages → Custom domain 填入域名并勾选 Enforce HTTPS，
再到域名 DNS 添加 `CNAME` 记录指向 `pau1am.github.io`。**改完域名记得同步改 `base`。**


### 关于搜索引擎收录

站点**公开可访问，但不希望被搜索引擎收录**，已做双重设置：

- `docs/public/robots.txt` → `Disallow: /`
- `config.mts` 的 `head` 中注入 `<meta name="robots" content="noindex, nofollow">`（作用于全部页面）

如需允许收录，两处都要改。

### 访问控制说明

站点内容本身不含任何进服入口（**无服务器地址 / IP、无 QQ 群号、无客户端下载链接**），
防线由**白名单 + 客户端分发**承担。因此公开托管不构成额外泄露面。

## 变更记录

### 1.0 —— 2026 年 10 月 2 日

- 由 Notion 版 Wiki 迁移为 VitePress 站点；正文与图片纳入本仓库
- **不再使用外部图床**：原 `raw.githubusercontent.com` 外链在站点内改为仓库内相对路径
  （Notion 侧仍沿用根目录外链，两者共用同一份图片源）
- 新增原生侧边栏导航；移除 8 个子页面顶部原有的「Wiki 导航」提示条
  （该提示条原本是为弥补 Notion 发布站没有侧边栏而设，现由侧边栏取代，保留会造成 9 份重复导航）
- 全站章节改为**默认收起**的折叠块（Notion API 无法设置默认收起）
- 搜索改用 VitePress 本地搜索，自带中文分词
- 新增 MC 像素风格式（`theme/custom.css`）：章节标题条、提示条、折叠块、图片渲染
- 新增 `scripts/sync-assets.mjs`：根目录图片自动同步到 `docs/public/`
- 启用 `noindex` + `robots.txt`，避免被搜索引擎收录
- 「相关链接」页移除「客户端下载」章节（含「备用下载通道」占位符），
  避免在公开站点上留下空的下载承诺
- 部署路径 `base` 设为 `'/lifescicraft-wiki/'`，适配默认的 GitHub Pages 子路径地址
- 新增 `.gitattributes` 统一 LF 换行，便于 Windows / macOS 双向协作
