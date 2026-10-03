---
title: MCDR 相关命令
---

<img src="/covers/4_command__ExplorationUpdate.jpg" alt="MCDR 相关命令" class="hero-cover" />

<div class="mc-note">
<img src="/icons/item__book.png" class="mc-icon" alt="" />
<div>

本页收录由 **MCDR 插件**提供的指令。它们以 **`!!` 两个感叹号**开头（**不是 `/`**），直接在游戏内聊天栏输入。

这些插件分别实现了什么功能，见[特殊功能 › MCDR 插件](/features/mcdr)。

</div>
</div>

## 计算器 AdvancedCalculator

<details class="mc-section">
<summary><span class="mc-t"><img src="/icons/block__redstone_torch.png" class="mc-icon" alt="" />算式、堆叠换算、颜色转换</span></summary>

**全部指令**（都在聊天栏输入，以 `!!calc` 开头）

| 写法 | 用途 | 示例与结果 |
| --- | --- | --- |
| `!!calc <算式>` | 计算表达式 | `!!calc 1+1` → 「1+1=2」 |
| `!!calc item <数量>` | 物品数 → 堆叠数 | `!!calc item 1794` → 「1794个物品为1盒1组2个」 |
| `!!calc item <盒> <组> <个>` | 堆叠数 → 物品数 | `!!calc item 1 10 32` → 「1盒10组32个为2400个物品」 |
| `!!calc color <红> <绿> <蓝>` | 十进制 RGB → 十六进制 | `!!calc color 255 0 255` → 「(255, 0, 255) → #FF00FF」 |
| `!!calc color <#十六进制>` | 十六进制 → 十进制 RGB | `!!calc color #00FF00` → 「#00FF00 → (0, 255, 0)」 |
| `!!calc` | 查看插件自带的帮助 | — |

**说明**

- 算式支持常用数学函数与常量（`sin`、`cos`、`sqrt`、`log`、`pi`、`e` 等）
- 「1 盒」按**潜影盒**计，即 27 组；「1 组」按 64 个计
- 红石计时、建筑尺寸换算、物品清点、配色取色都用得上

</details>

## 服务器信息 Info

<details class="mc-section">
<summary><span class="mc-t"><img src="/icons/item__spyglass.png" class="mc-icon" alt="" />查看服务器运行状况</span></summary>

`!!info` 查看当前服务器的运行信息：

- **运行环境**：操作系统版本、Python 版本、Java 版本
- **实时负载**：CPU 利用率、内存使用量
- **存档大小**：参与统计的存档文件夹占用空间

**说明**

- 感觉卡顿时可以先自己看一眼 CPU 与内存，大致判断是**服务器负载高**还是**自己网络的问题**
- 反馈问题时附上这些数据，管理组排查会快很多

</details>

## 开服天数 DayCount NBT

<details class="mc-section">
<summary><span class="mc-t"><img src="/icons/item__clock_00.png" class="mc-icon" alt="" />这是开服第几天了</span></summary>

- `!!day` 或 `!!days` → 输出类似「这是服务器开服的第 N 天」

**说明**

- 天数由**存档的实际游玩时长**推算，而非日历天数
- 因此**服务器回档时，天数会跟着退回**；反过来看，这个数字更接近「大家真正一起玩了多少时间」
- 输出文字与指令名都可以在插件配置里自定义，实际以服务器为准

</details>

## 镜像服务器使用

<details class="mc-section">
<summary><span class="mc-t"><img src="/icons/block__glass.png" class="mc-icon" alt="" />默认关闭，需手动开启</span></summary>

镜像服是生存服主世界的**独立副本**：可以在这里自由采集资源、测试建筑与红石方案，而不影响生存服的「生态平衡」。

镜像服**默认处于关闭状态**，需要在游戏内手动开启（为什么默认关闭、具体用途见[服务器规则 › 镜像服规则](/guide/rules)）。

1. `!!msr sync` 把生存服主世界同步到镜像服（**同步前建议先关闭镜像服**）
2. `!!msr start` 启动镜像服
3. 用 `/server Mirror` 切换到镜像服
4. 玩完后用 `!!msr stop` 关闭镜像服（需要服务端开启 Rcon）

**全部可用指令**

- `!!msr help` 显示帮助信息
- `!!msr status` 查看镜像服状态（未知 / 已停止 / 正在启动 / 正在运行 / 正在停止）
- `!!msr sync` 同步主世界到镜像服
- `!!msr start` 启动镜像服
- `!!msr stop` 关闭镜像服（需要 Rcon）
- `!!msr reload` 重载插件配置
- `!!msr init` 初始化镜像服（一般由管理组使用）

**注意事项**

- `!!msr sync` 会用生存服的存档**覆盖**镜像服，动手前确认镜像服里没有需要保留的东西
- 镜像服里的改动**不会**回传到生存服
- 若提示权限不足，说明你的身份组还没有对应权限，请联系管理组

</details>
