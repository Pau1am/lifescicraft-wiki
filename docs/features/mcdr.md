---
title: MCDR 插件
---

<img src="/covers/overview.jpg" alt="MCDR 插件" class="hero-cover" />

<div class="mc-note">
<img src="/icons/block__command_block_side.png" class="mc-icon" alt="" />
<div>

LifeSci-Craft 的服务器由 **MCDR（MCDReforged）** 管理——它外挂在服务端之外，通过各类插件扩展功能，镜像服的启停等事务也由它负责。

本页只介绍**这些插件能做什么**；**完整的指令与用法**统一放在[常用指令 › MCDR 相关命令](/commands/mcdr)。

</div>
</div>

## 一、计算器 AdvancedCalculator

<details class="mc-section">
<summary><span class="mc-t"><img src="/icons/block__redstone_torch.png" class="mc-icon" alt="" />聊天栏里的多功能计算器</span></summary>

### 这是什么

直接在游戏内聊天栏做计算，**不用切出去开电脑上的计算器**。除了普通算式，还多两类换算：

- **物品数与堆叠数互转**：想知道「1794 个圆石是几盒几组几个」，或者反过来「1 盒 10 组 32 个一共多少个」，一句话就能算
- **RGB ↔ 十六进制颜色互转**：做地图画、告示牌配色或调资源包时很实用

### 为什么换了实现

这项功能原先由 Carpet 的 GCA 附属提供，现已改用 MCDR 插件实现，能力更强（多了堆叠换算与颜色转换）。

### 怎么用

玩法很短，在聊天栏输入 `!!calc` 开头的指令即可：

- `!!calc 1+1` 计算算式
- `!!calc item 1794` 把物品数换算成「几盒几组几个」
- `!!calc color 255 0 255` 做颜色转换

👉 完整指令与示例见[常用指令 › MCDR 相关命令](/commands/mcdr)

</details>

## 二、服务器信息 Info

<details class="mc-section">
<summary><span class="mc-t"><img src="/icons/item__spyglass.png" class="mc-icon" alt="" />一眼看清服务器状况</span></summary>

### 这是什么

在游戏内直接查看服务器的运行状况，不用去问管理组：

- **系统与运行环境**：操作系统版本、Python 版本、Java 版本
- **实时负载**：CPU 利用率、内存使用量
- **存档大小**：主世界存档占用了多少空间

### 有什么用

感觉服务器卡顿时，可以先自己看一眼 CPU 与内存，判断是**服务器负载高**还是**自己网络的问题**——这样反馈问题时也能说得更准确。

### 怎么用

聊天栏输入 `!!info` 即可。

👉 完整指令见[常用指令 › MCDR 相关命令](/commands/mcdr)

</details>

## 三、开服天数 DayCount NBT

<details class="mc-section">
<summary><span class="mc-t"><img src="/icons/item__clock_00.png" class="mc-icon" alt="" />这是开服第几天了</span></summary>

### 这是什么

输出服务器**已经运行了多少天**，用来做纪念日、周年活动或者单纯感慨一下都很方便。

### 怎么用

聊天栏输入 `!!day` 或 `!!days`，会返回类似「这是服务器开服的第 N 天」的提示。

### 一个值得知道的细节

它默认从**存档的实际游玩时长**推算，而不是日历天数。所以：

- 服务器**回档**时，天数会跟着退回到存档时的数值
- 但从另一个角度看，这个数字**更接近「大家真正一起玩了多少时间」**，比单纯的日期差更有意义
- 想改成按固定起始日期计算，需要管理组改插件配置

👉 完整指令见[常用指令 › MCDR 相关命令](/commands/mcdr)

</details>
