<img src="/covers/0_home__26.3WildernessBound.jpg" alt="LifeSci-Craft" class="hero-cover" />

<div class="mc-note">
<img src="/icons/item__wheat.png" class="mc-icon" alt="" />
<div>

**欢迎来到 LifeSci-Craft Wiki**——一群生命科学大学生（及 TA 的朋友们）构建的方块世界。这里汇总了服务器的玩法说明、规则与常见问题，帮助你快速熟悉这个小小的「生态系统」。

**使用提示**：本页各章节默认收起，点击标题即可展开。

</div>
</div>

## 快速导航

<details class="mc-section">
<summary><img src="/icons/item__compass_00.png" class="mc-icon" alt="" />想了解什么？</summary>

- [新玩家指南](/guide/newbie)——入服前的准备与首次进入
- [服务器规则](/guide/rules)——先读一遍，避免无意违规
- [特殊功能](/features/)——Carpet、投影共享、语音聊天等
- [常用指令](/commands)——跨服切换、假人、镜像服控制
- [常见问题 FAQ](/guide/faq)——遇到问题先看这里
- [相关链接](/links)——排行榜等网址

</details>

## 服务器概况

<details class="mc-section">
<summary><img src="/icons/item__oak_sign.png" class="mc-icon" alt="" />一眼看懂 LifeSci-Craft</summary>

| 项目 | 内容 |
| --- | --- |
| 游戏版本 | Minecraft Java Edition 26.3（原版玩法）——会尽可能跟随 Mojang 官方发布的最新版本更新（在模组支持的前提下） |
| 服务端架构 | Fabric 服务端 + MCDReforged；群组端使用 Velocity，三个子服务器互相连通 |
| 子服务器 | 生存服 Survival（主要活动区）／ 创造服 Creative（超平坦，自由设计）／ 镜像服 Mirror（默认关闭，测试专用） |
| 主要玩法 | 原版生存：从零收集资源、建造家园、推进原版进度，与同伴共同经营这个世界 |
| 加入方式 | 邀请制，不开放公开注册——需要**正版账号 + 白名单**（向服主 / 管理组索取） |
| 推荐客户端 | 官方 QQ 群里的最新整合客户端（内置模组与性能优化）；原版客户端也能进服，但用不了多数特殊功能 |
| 社群构成 | 服主与核心成员来自生命科学专业，以及他们的朋友们——整体是一个熟人社区 |
| 游戏规则 | 死亡掉落开启；1 人入睡即可跳过夜晚；没有传送类指令与经济系统 |
| 特色功能 | Carpet 系列技术工具、投影共享、语音聊天、跨服聊天、排行榜、数据包扩展 |

> 借用微生物学的一个概念：本服实行「纯培养」——如同无菌培养基中挑出的纯种菌落，我们通过邀请制维持社区的纯粹、友好与稳定。🧫

</details>

## 最新动态

<details class="mc-section">
<summary><img src="/icons/item__firework_rocket.png" class="mc-icon" alt="" />更新记录</summary>

- [服务器更新动态](/updates/server)——服务端功能与活动的变化
- [客户端更新动态](/updates/client)——整合包、资源包与模组的变化

> **说明**：本部分的更新记录较为缓慢（对内意义不大）——实际内容请以游戏内最新上线的内容为准。

</details>

## 其他信息

<details class="mc-section">
<summary><img src="/icons/item__bundle.png" class="mc-icon" alt="" />服务器后台的运作机制</summary>

这些是服务器后台的运作机制——日常游玩基本感受不到，但它们也是服务器能够稳定运行的一部分。

### 运作模式

- 服务器本体运行在一台 **Mac Mini M4** 上，由服主负责日常维护
- 通过**部署在中国香港的中转服务器**接入公网，并做了 **BGP 线路优化**，尽可能保证各地玩家都有优质的连接体验
- 除了网络波动与特殊情况下的停机维护，服务器**几乎长期保持开启**

### 自动备份 PrimeBackup

- 服务器**每小时自动备份一次**存档（仅在有玩家在线时执行），游玩过程几乎无感
- 采用**增量备份**，只记录变化的部分，体积小、速度快，不会拖慢服务器
- 万一出现误拆、误删、区块损坏等意外，管理组可以**从最近的备份点恢复**
- 恢复时会**先自动备份当前状态**，并有 10 秒倒计时，避免二次失误
- 除了世界存档，**数据库每周也会备份一次**

### 崩溃自动重启 CrashRestart

- 服务器进程如果意外崩溃，会**自动重新启动**，通常很快就能恢复，不需要人工干预
- 为避免陷入无限重循环，**5 分钟内连续崩溃 3 次**会停止自动重启，并通知管理组排查
- 配合上面的自动备份，即使遇到严重故障，存档也能回到最近的状态

**说明**：以上都是后台机制，玩家**不需要做任何操作**。

</details>

## 关于本 Wiki

<details class="mc-section">
<summary><img src="/icons/item__writable_book.png" class="mc-icon" alt="" />本 Wiki 的信息</summary>

<div class="meta-list">

- **维护者**：Pau1AM
- **AI Agent 辅助撰写**：WorkBuddy（DeepSeek-V4 Flash）
- **最后维护**：2026 年 10 月 2 日
- 本 Wiki 面向服务器成员开放，内容持续更新中
- 如发现信息过时或有误，欢迎随时联系管理组修订

</div>

</details>
