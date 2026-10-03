---
title: 数据包功能
---

<img src="/covers/misc.jpg" alt="数据包功能" class="hero-cover" />

<div class="mc-note">
<img src="/icons/item__bundle.png" class="mc-icon" alt="" />
<div>

本页介绍 LifeSci-Craft 装载的**数据包**——它们完全运行在服务端，**你不需要安装任何东西**，进服即可使用。

每一节都写清了「这是什么」和「怎么用」，只玩过原版也能看懂。

需要安装模组才能用的功能见[服务端 Mod](/features/mods)。

</div>
</div>

## 一、自定义头颅合成（生存服专属）

<details class="mc-section">
<summary><span class="mc-t"><img src="/icons/head__wither_skeleton_face.png" class="mc-icon" alt="" />服务器自研数据包</span></summary>

### 这是什么

服务器自研的数据包：把「凋灵骷髅头」变成任意玩家样式的头颅，可以用来做雕像、头像墙与装饰。

### 怎么用

1. 用「书与笔」写一本书：**书名填你想要的头颅 ID**（玩家名 / ID，区分大小写），然后**签名**成书
2. 把「已署名的成书」和「凋灵骷髅头」一起丢到地上（手中选中后按 Q 丢出）
3. 两件物品会合成为对应的玩家头颅

### 小提示

- 名字写错、或写成不存在的 ID，会得到一个默认样式的头颅
- 凋灵骷髅头可以在下界要塞刷凋灵骷髅获得
- 每次合成消耗一份材料（一个头颅 + 一本成书）

</details>

## 二、武器架 Racks（生存服专属）

<details class="mc-section">
<summary><span class="mc-t"><img src="/icons/item__iron_sword.png" class="mc-icon" alt="" />给工具和武器一个展示位</span></summary>

### 这是什么

给你的工具和武器一个展示位——不用再全部塞箱子里。地上最多放 2 件，墙上放 1 件，还能调整摆放角度。

<figure class="feature-shot">
<img src="/features/racks.png" alt="摆上工具与武器的武器架" />
<figcaption>摆上工具与武器的武器架</figcaption>
</figure>

### 怎么用

1. **合成**：2 根木棍 + 3 块任意木板 → 武器架
2. **放置**：手持武器架右键地面或墙面
3. **放入**：手持要展示的物品，右键武器架
4. **取回**：主手空着，右键武器架
5. **换姿势**：潜行 + 右键循环切换摆放角度（地上 6 种，墙上 4 种）

### 能放什么

- 地上的武器架：斧、锄、镐、锹、剑、钓鱼竿、胡萝卜钓竿、诡异菌钓竿、重锤、长矛
- 墙上的武器架：以上全部，再加弓、弩、三叉戟、盾牌、剪刀、刷子、望远镜

### 小提示

- 附魔物品、自定义名字的物品都能正常展示，属性不会丢失
- 首次合成某一木材的武器架时需要联网加载外观；若显示成普通头颅，重启客户端即可
- 官方说明：[Racks](https://modrinth.com/project/racks)

</details>

## 三、悬挂告示牌 Better Hanging Signs（生存服专属）

<details class="mc-section">
<summary><span class="mc-t"><img src="/icons/item__oak_hanging_sign.png" class="mc-icon" alt="" />告示牌上挂物品</span></summary>

### 这是什么

让悬挂告示牌不再只能写字——还能在牌子上挂物品，用来做店招、路牌、纪念墙都很合适。

<figure class="feature-shot">
<img src="/features/hangsigns.jpg" alt="在悬挂告示牌上挂物品展示框的效果" />
<figcaption>在悬挂告示牌上挂物品展示框的效果</figcaption>
</figure>

### 怎么用

- 把**普通物品展示框**或**荧光物品展示框**直接放到悬挂告示牌上，再往框里放上想展示的物品即可
- 任何材质包都适用，不需要额外设置

### 小提示

- 用荧光展示框，夜里物品也会发光，招牌效果更好
- 官方说明：[Better Hanging Signs](https://modrinth.com/datapack/better-hanging-signs)

</details>

## 四、更好的盔甲架编辑 Better Armour Stands（生存服专属）

<details class="mc-section">
<summary><span class="mc-t"><img src="/icons/item__armor_stand.png" class="mc-icon" alt="" />摆姿势、调大小、做雕像</span></summary>

### 这是什么

Gamemode 4 的经典模块：让盔甲架能摆出各种姿势、开关手臂、调整大小，甚至做隐形盔甲架与雕像。

### 怎么用

1. 手持「书与笔」，在书里写下代码（**每页写一个代码**，可以写多页同时生效）
2. 拿着书写右键盔甲架，即可应用
   - 书**不需要签名**；一页里除了代码还有其它文字的会被忽略

### 常用代码

- `arms` 开关手臂　`base` 开关底座
- `size` 切换大小　`gravity` 开关重力
- `visible` 开关隐形　`turn` 切换缓慢旋转
- `lock` / `unlock` 锁定 / 解锁交互
- `pose` 进入姿势编辑：右键选中手臂 / 腿 / 头 / 身体，移动鼠标拖动角度（潜行时对齐网格，再次右键结束）
- `move` 移动位置　`rotate` 旋转方向　`flip` 翻转整体姿势　`mirror` 左右镜像
- `copy` / `paste` 复制 / 粘贴姿势（配合副手持有的盔甲架物品使用）
- `equip` 把副手物品装到选中的部位
- `default` 恢复默认姿势（潜行使用则只重置选中的部位）

### 小提示

- 默认所有盔甲架都带手臂（原版是没有的）
- 想知道附近有没有隐形 / 被锁定的盔甲架？手持写着 `visible` 或 `unlock` 的书就能看到它们
- 编辑中途不想改了：把书收起来或者走远，当前编辑就会被撤销
- 官方 Wiki：[Better Armour Stands](https://wiki.gm4.co/Better_Armor_Stands)

</details>

## 五、更好的展示框 Better Item Frames

<details class="mc-section">
<summary><span class="mc-t"><img src="/icons/block__glass.png" class="mc-icon" alt="" />让展示框隐形、锁定角度</span></summary>

### 这是什么

KawaMood 出品的数据包：**在生存模式下**就能把普通 / 发光物品展示框变成**隐形**，也可以**锁住物品的角度**，避免误触把摆好的朝向转歪。做隐形装饰、壁画与展柜时非常好用。

### 怎么用

- **变隐形**：主手拿**剪刀**，**潜行 + 右键**物品展示框 → 底板被「剪掉」，只剩里面的物品
- **变回可见**：两种方式
  - 把展示框打掉重新放，或
  - 主手拿**刷子**，**潜行 + 右键**展示框 → 底板「粘」回去
- **锁定角度**：主手拿**玻璃板**，**潜行 + 右键**展示框 → 消耗一块玻璃板，之后里面的物品**不能再被旋转**（物品本身仍可更换）
  - 想解锁只能把展示框打掉重新放置

### 小提示

- 用剪刀 / 刷子会消耗**耐久**，但**尊重「耐久」附魔**（超过 3 级也生效）
- 锁定角度消耗的是**玻璃板**，不是玻璃块
- 还可以开启「**展示框空置时自动恢复可见**」，需要用指令切换（默认关闭），需要时找管理组
- 官方说明：[Better Item Frames](https://modrinth.com/datapack/kawamood-better-item-frames)

</details>
