---
title: 特殊功能
---

<img src="/covers/3_feature__TechnicallyUpdated.jpg" alt="特殊功能" class="hero-cover" />

<div class="mc-note">
<img src="/icons/item__golden_apple.png" class="mc-icon" alt="" />
<div>

**温馨提示**：如果你想体验本页的完整功能，请确保已下载官方 QQ 群里的最新客户端——使用自己的原版客户端可能无法使用这些功能。

本页介绍 LifeSci-Craft 的特色模组与服务端功能，每一节都写清了「这是什么」和「怎么用」，只玩过原版也能看懂。

</div>
</div>

## 一、地毯功能 Carpet（含 TIS / Gugle 附属）

<div class="mc-head"><img src="https://minecraft.wiki/images/Red_Carpet_JE1_BE1.png" class="mc-icon" alt="" />技术向服务端模组</div>

<details>
<summary>展开 / 收起</summary>

### 这是什么

Carpet 是一套不改变原版玩法的服务端模组：它给服务器加上技术向工具与性能优化，并开放一些便利指令。本服同时安装了它的两个扩展——**TIS Addition**（更多规则、日志与调试工具）与 **Gugle's Carpet Addition（GCA）**（假人管理与实用小功能）。

<figure class="feature-shot">
<img src="/features/carpet_gca.png" alt="右键假人即可打开它的物品栏（GCA）" />
<figcaption>右键假人即可打开它的物品栏（GCA）</figcaption>
</figure>

### 你已经能用的功能

- **中文界面（GCA）**：Carpet 相关的提示与菜单已设为中文。
- **假人 `/player`（Carpet 核心 + GCA 增强）**：召唤「假人」代替你挂机、加载区块、触发刷怪，是刷怪塔与农场的好帮手。
  - `/player <名字> spawn` 召唤　`/player <名字> kill` 移除
  - `/player <名字> use` 使用手中物品　`/player <名字> attack` 持续攻击　`/player <名字> stop` 停止动作
  - 右键假人可直接打开它的物品栏（GCA 已开启）
  - 假人会**自动补货**（GCA 已开启），不用手动塞物品
- **坐标广播 `/here`（GCA）**：一键把当前坐标播报给全服，并给自己加发光效果方便队友找到你；输出的坐标还兼容 Xaero 小地图的路径点格式。
- **游戏内计算器（GCA）**：在聊天栏输入以 `==` 开头的算式即可得到结果（如 `==1+2*3`、`==sqrt(16)`），支持常用数学函数与常量，红石计时、建筑尺寸换算很方便
- **快速提醒队友（GCA）**：聊天栏输入 `@ <玩家名>`（普通提醒，箭矢击中声）或 `@@ <玩家名>`（紧急提醒：钟声 + 屏幕中央标题）
- **展示框右键穿透（GCA）**：右键物品展示框时会同时与它后面的方块交互——例如箱子上挂了展示框，可以直接开箱。
- **仙人掌翻转 `flippinCactus`（Carpet）**：空手右键即可旋转楼梯、原木等有朝向的方块。
- **无延迟刷怪 `lagFreeSpawning`（Carpet）**：满足条件的怪物立即生成，刷怪塔效率更稳定。
- **漏斗计数器 `hopperCounters`（Carpet）**：用 `/counter` 查看漏斗计数，统计产量很方便（该指令需要权限）
- **TNT 与红石优化（Carpet）**：大规模爆破与复杂红石电路会更流畅。
- **查看服务端状态**：`/log tps` 查看服务器 TPS，`/log mobcaps` 查看各维度刷怪上限（这些指令需要权限）

### 技术向 / 管理向（了解即可）

- `/tick` 可冻结、步进游戏刻；`/carpet` 可查看与切换所有规则（需要权限）。
- TIS Addition 提供了更多日志器与调试工具（性能、袭击、实体跟踪等），文档见 [Carpet TIS Addition 官网](https://carpet.tis.world/)。
- 服务端已调整反作弊相关规则，OP 玩家不受反作弊检测限制。

</details>

## 二、投影共享 Syncmatica（配合 Litematica）

<div class="mc-head"><img src="/icons/block__glass.png" class="mc-icon" alt="" />多人共用同一份蓝图</div>

<details>
<summary>展开 / 收起</summary>

### 这是什么

Litematica 能把一张「投影」（蓝图）叠加到世界里，照着一步步盖。Syncmatica 让投影能**在服务器里共享**：一个人上传，所有人都用同一份蓝图，不再需要互传文件。

<figure class="feature-shot">
<img src="/features/syncmatica.png" alt="服务器投影列表：在这里浏览和下载其他人分享的投影" />
<figcaption>服务器投影列表：在这里浏览和下载其他人分享的投影</figcaption>
</figure>

### 怎么用

1. 进服后，Litematica 菜单里会多出服务器相关的按钮
2. **下载别人的投影**：主菜单里打开「服务器投影」列表，选想要的下载到本地
3. **分享自己的投影**：在 Litematica 的投影放置（Placements）列表里，按住 **Shift** 选中某个投影 → 上传到服务器
4. **加载投影**：必须站在与投影相同的维度才能加载显示
5. **修改共享投影**：把该投影「解锁」→ 修改 → 再「锁定」，修改就会同步给所有人

### 学习资料

- Litematica 官方 Wiki（GitHub：maruohon/litematica）功能说明很全
- 也可以直接在 B 站搜索「Litematica 教程」「Syncmatica 教程」跟着视频学

</details>

## 三、图片转地图 Image2Map

<div class="mc-head"><img src="/icons/item__painting.png" class="mc-icon" alt="" />把图片变成像素壁画</div>

<details>
<summary>展开 / 收起</summary>

### 这是什么

把任意一张图片渲染成**原版地图**，放进物品展示框就能当壁画、像素海报用，没装模组的原版客户端也能正常看到。

<figure class="feature-shot">
<img src="/features/image2map.png" alt="用图片生成的地图，装进展示框就是一幅像素壁画" />
<figcaption>用图片生成的地图，装进展示框就是一幅像素壁画</figcaption>
</figure>

### 怎么用

1. 准备好图片的**直链地址**（图片 URL）
2. 在聊天栏输入指令：
   - `/image2map preview <图片URL>` 先预览，边看边调（新手推荐）
   - `/image2map create <宽> <高> <图片URL>` 直接按指定像素尺寸生成
3. 预览模式里可以继续微调：
   - `/dither` 切换抖动模式（颜色过渡更自然）
   - `/size` 查看当前尺寸　`/size <像素>` 修改尺寸
   - `/grid` 开关地图网格线
   - `/save` 保存为地图物品　`/exit` 退出不保存

### 大地图（超过 128×128 像素）

- 超过单张地图尺寸（128×128）的图片会以「收纳袋」形式打包成多张地图
- 手持收纳袋，对着展示框的**左上角**点击，会自动把所有地图按顺序铺好（墙面、地板、天花板都支持）

### 小提示

- 尺寸越大越耗时间与材料，建议先用 preview 定好尺寸再保存
- 官方说明：[Image2Map](https://modrinth.com/mod/image2map)

</details>

## 四、排行榜 RankBoard

<div class="mc-head"><img src="/icons/item__gold_ingot.png" class="mc-icon" alt="" />17 种指标 × 5 种周期</div>

<details>
<summary>展开 / 收起</summary>

### 这是什么

服务端排行榜模组：统计各种数据并展示排行榜。**你不需要装任何东西**，用原版界面就能看。

### 数据与榜单

- 覆盖 17 种统计指标，支持 5 种时间周期：日榜 / 周榜 / 月榜 / 年榜 / 总榜
- 游戏内原版侧边栏：个人榜、全服榜、轮播榜，进服后自动恢复你上次的显示
- 网页排行榜：可按日期区间查询、筛选在线玩家、切换主题配色

### 常用指令

- `/leaderboard` 打开可点击的排行榜菜单（推荐从这里开始）
- `/leaderboard mine` 查看自己的各项分数
- `/leaderboard display show all playtime` 在侧边栏显示「游玩时长」总榜
- `/leaderboard help` 查看全部指令

### 说明

- **网页排行榜地址**：[https://mcrank.pau1am.xyz](https://mcrank.pau1am.xyz)
- 中文文档：[RankBoard](https://modrinth.com/mod/rankboard)

</details>

## 五、快捷潜影盒 Quick Shulker

<div class="mc-head"><img src="/icons/item__shulker_shell.png" class="mc-icon" alt="" />手持即可打开</div>

<details>
<summary>展开 / 收起</summary>

### 这是什么

不用再把潜影盒放到地上——手持潜影盒就能直接打开，查看和整理里面的物品，野外搬家和整包效率大幅提升。

<figure class="feature-shot">
<img src="/features/quickshulker.png" alt="手持潜影盒按住潜行 + 右键即可直接打开" />
<figcaption>手持潜影盒按住潜行 + 右键即可直接打开</figcaption>
</figure>

### 怎么用

- 手持潜影盒，按住 **潜行（Shift）** 再 **右键** 即可打开
- 直接右键（不按 Shift）仍是原版的「放下潜影盒」行为，不会相互冲突

### 小提示

- 整理时注意背包剩余空间，避免物品溢出掉落
- 官方说明：[Quick Shulker Boxes](https://modrinth.com/datapack/quick-shulker-boxes)

</details>

## 六、语音聊天 Simple Voice Chat

<div class="mc-head"><img src="/icons/item__goat_horn.png" class="mc-icon" alt="" />带 3D 方位感的近距离语音</div>

<details>
<summary>展开 / 收起</summary>

### 这是什么

游戏内语音聊天：按**距离远近**听到附近玩家说话，声音还带 3D 方位感；也可以创建频道，和远方的队友随时通话。

<figure class="feature-shot">
<img src="/features/voicechat.png" alt="按 V 打开的语音聊天菜单" />
<figcaption>按 V 打开的语音聊天菜单</figcaption>
</figure>

### 怎么用

1. 进服后按 **V** 打开语音聊天菜单
2. 在菜单里：选择麦克风与输出设备、切换**按键说话（Push-to-Talk）**或**自动激活**、试音测试、静音 / 闭麦
3. 平时说话，附近的玩家（默认约 48 格内）就能听见；说话时头顶会显示图标
4. 想和远处队友通话 → 在菜单里**创建频道**（可设密码），或用 `/voicechat invite <玩家名>` 邀请对方加入
5. 菜单里还可以单独调整每个玩家的音量，做成自己的混音

### 排查小抄

- 显示「未连接 / 语音不可用」：请先确认你用的是官方 QQ 群里的最新客户端；若仍然不行，告知管理组检查服务端语音端口
- 别人听不到你：检查菜单里选的麦克风设备，以及系统是否允许 Minecraft 使用麦克风
- 声音卡顿：网络波动时更明显，可尝试耳机或反馈给管理组调整服务端参数

### 说明

- 语音走独立通道传输，不占用游戏连接
- 官方说明：[Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat)

</details>

## 七、聊天互通（全服）

<div class="mc-head"><img src="/icons/item__oak_sign.png" class="mc-icon" alt="" />三个子服消息实时同步</div>

<details>
<summary>展开 / 收起</summary>

### 这是什么

群组端安装了聊天互通插件（ChatHub），**消息在所有子服务器之间实时同步**：你在生存服说的话，创造服、镜像服的朋友同样能看到，不必再靠群聊转述。

### 你会看到的变化

- 每条聊天前会带上**所在服务器**的标签，方便分辨谁在哪台服
  - 例如 `[Survival] Steve: 有人一起挖矿吗`
- 玩家进服、离开、切换子服时也会广播提示（如 `[Survival] ➟ [Creative]`）

### 常用指令

- `/chathub list` 查看**所有子服**的在线玩家名单
- `/chathub msg <玩家名> <消息>` 私聊任意子服的玩家（即使不在同一台服）

### 说明

- 聊天互通由群组端统一处理，**不需要任何设置**，进服即生效
- 只想和身边的人说话、不想打扰其他子服？用语音聊天（见第六节）

</details>

## 八、创世神 WorldEdit（创造服专属）

<div class="mc-head"><img src="/icons/item__wooden_axe.png" class="mc-icon" alt="" />批量建造工具</div>

<details>
<summary>展开 / 收起</summary>

### 这是什么

创造服专属的批量建造工具。用指令一次性填充、替换、复制、粘贴、生成几何体，盖大工程时效率能提升几十倍。

### 怎么开始

1. `//wand` 获得「选区魔杖」（默认为木斧）
2. 用魔杖 **左键** 点第一个角、**右键** 点第二个角完成选区
   - 也可以用 `//pos1` / `//pos2` 在脚下位置设点，`//hpos1` / `//hpos2` 以视线目标设点

### 常用指令

- `//set <方块>` 把选区填满（如 `//set stone`、`//set oak_planks`）
- `//replace <旧方块> <新方块>` 批量替换
- `//copy` / `//paste` 复制与粘贴（`//paste -a` 粘贴时忽略空气）
- `//walls` / `//hollow` / `//sphere` / `//cyl` 生成墙体、空心体、球体、圆柱
- `//schem save <名字>` / `//schem load <名字>` 保存与加载建筑结构（蓝图）
- `//brush sphere <方块>` 涂抹刷（右键连续放置球体，适合做地形）
- `//undo` / `//redo` 撤销与重做（**手滑了先想到它**）

### 注意事项

- 只在创造服可用，生存服无效（进入方式见[常用指令 › 跨服切换](/commands)）
- 大范围操作容易造成卡顿，先用 `//limit <方块数>` 限制单次范围
- 可用的指令与权限范围由管理组设定，不确定就在群里问

### 学习资料

- WorldEdit 官方文档：[worldedit.enginehub.org](https://worldedit.enginehub.org/en/latest/)
- 也可以在 B 站搜索「WorldEdit 教程」「创世神教程」

</details>

## 九、自定义头颅合成（生存服专属）

<div class="mc-head"><img src="/icons/head__wither_skeleton_face.png" class="mc-icon" alt="" />服务器自研数据包</div>

<details>
<summary>展开 / 收起</summary>

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

## 十、武器架 Racks（生存服专属）

<div class="mc-head"><img src="/icons/item__iron_sword.png" class="mc-icon" alt="" />给工具和武器一个展示位</div>

<details>
<summary>展开 / 收起</summary>

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

## 十一、悬挂告示牌 Better Hanging Signs（生存服专属）

<div class="mc-head"><img src="/icons/item__oak_hanging_sign.png" class="mc-icon" alt="" />告示牌上挂物品</div>

<details>
<summary>展开 / 收起</summary>

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

## 十二、更好的盔甲架编辑 Better Armour Stands（生存服专属）

<div class="mc-head"><img src="/icons/item__armor_stand.png" class="mc-icon" alt="" />摆姿势、调大小、做雕像</div>

<details>
<summary>展开 / 收起</summary>

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
