# 龙灵正式GLB模型接入

将经品牌确认、已绑定骨骼动画的模型命名为 `longling.glb`，放入本目录。

首屏会自动尝试加载：`/longtou-accounting-service-site/models/longling.glb`。模型可包含 `Idle`、`Wave`、`HairSway`、`TailSway` 动画轨道；当前画面在模型缺席时会保留已确认的龙灵品牌视觉作为兜底，不会生成或替换角色脸型、服装及配色。
