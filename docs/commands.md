---
title: 常用指令
---

<img src="/covers/4_command__ExplorationUpdate.jpg" alt="常用指令" class="hero-cover" />

<div class="mc-note">
<img src="/icons/item__spyglass.png" class="mc-icon" alt="" />
<div>

本页汇总 LifeSci-Craft 的常用指令，随时按需查阅。指令均在游戏内聊天框输入。

另有部分功能指令以 `!!` 开头（由 MCDR 提供，主要用于镜像服控制），详见下方「镜像服务器使用」。

</div>
</div>

## 跨服切换

<div class="mc-head"><img src="/icons/item__ender_pearl.png" class="mc-icon" alt="" />在三个子服之间移动</div>

<details>
<summary>展开 / 收起</summary>

- **进入游戏默认在生存服（Survival）**：本服**没有大厅**，登录后直接进入生存服
- `/server Survival` 切换到生存服
- `/server Creative` 切换到创造服
- `/server Mirror` 切换到镜像服（**默认不开启**，需要先用指令启动，见下方「镜像服务器使用」）
- **本服没有任何传送类指令**（如 `/home`、`/tpa`、`/spawn`），请提前规划路线与据点

</details>

## 服务端指令（Carpet）

<div class="mc-head"><img src="/icons/block__command_block_front.png" class="mc-icon" alt="" />已向所有玩家开放</div>

<details>
<summary>展开 / 收起</summary>

本服已向所有玩家开放以下 Carpet 系指令，直接在聊天栏输入即可。

**假人控制 `/player`**

- `/player <名字> spawn` 召唤一个假人　`/player <名字> kill` 移除它
- `/player <名字> use` 使用手中物品　`/player <名字> attack` 持续攻击
- `/player <名字> stop` 停止当前动作　`/player <名字> drop` 丢出手中物品
- `/player <名字> jump` 跳跃　`/player <名字> mount` 骑乘附近的坐骑
- 假人**会自动补货**，不用手动塞物品；**右键假人**可直接打开它的物品栏

**使用假人的注意事项**

- 假人是为**特殊机器的运作**准备的：只有在需要**保持区块加载**或**重复执行同一操作**时（如刷怪塔、农场、挂机钓鱼）才建议使用
- **用完请立刻删除**（`/player <名字> kill`）——长期挂着会白白占用服务器性能
- **严禁恶意生成大量假人**，这会被视作破坏服务器的行为，按[服务器规则 › 违规处理](/guide/rules)从重处置

**位置与提醒**

- `/here` 把当前坐标广播给全服，并给自己加发光效果（输出的坐标兼容 Xaero 小地图的路径点格式）
- `@ <玩家名>` 提醒队友，对方听到箭矢击中的声音
- `@@ <玩家名>` **紧急提醒**，对方听到钟声，且屏幕中央弹出醒目标题
- 提醒功能是**为了叫醒正在挂机或走神的队友**，请**不要用来恶意吵人**、反复刷屏

**游戏内计算器**

- 在聊天栏输入**以 `==` 开头的算式**，回车即得结果：
  - `==1+2*3` → 7　　`==sqrt(16)` → 4　　`==sin(pi/2)` → 1
  - 支持常用数学函数与常量（`sin`、`cos`、`sqrt`、`log`、`pi`、`e` 等）

**延伸阅读**

- 这些功能背后的模组与更多玩法，见[特殊功能 › 地毯功能 Carpet](/features/)

</details>

## 镜像服务器使用

<div class="mc-head"><img src="/icons/block__glass.png" class="mc-icon" alt="" />默认关闭，需手动开启</div>

<details>
<summary>展开 / 收起</summary>

镜像服是生存服主世界的**独立副本**：可以在这里自由采集资源、测试建筑与红石方案，而不影响生存服的「生态平衡」。

镜像服**默认处于关闭状态**，需要在游戏内手动开启（为什么默认关闭、具体用途见[服务器规则 › 镜像服规则](/guide/rules)）。以下指令由 MCDR 提供，直接在**聊天框**输入（注意是 `!!` 两个感叹号开头，不是 `/`）：

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
