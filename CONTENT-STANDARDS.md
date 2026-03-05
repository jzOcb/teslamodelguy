# Tesla Model Guy — 内容 & 网站硬性标准

> 每次写文章、改页面前必须读这个文件。出过的错不能再犯。

---

## 📋 历史问题总结

### 🔗 链接问题（共修复 ~40 个）

| 问题 | 具体表现 | 影响 |
|------|---------|------|
| **Amazon 搜索链接** | 链接到 `amazon.com/s?k=xxx` 搜索页而非产品页 | 用户找不到具体产品，转化率极低 |
| **错误 ASIN** | 复制了错误的 ASIN，链接到完全不同的产品 | 用户信任崩塌（推荐 A 产品链到 B） |
| **假 ASIN** | 编造不存在的 ASIN 号码 | 404 页面，用户流失 |
| **品类链接代替产品链接** | 店铺不卖某产品时链到品类页 | 用户困惑（"推荐的产品在哪？"） |
| **过期/失效链接** | 产品下架但链接未更新 | 404 或跳转到无关页面 |

### 🖼️ 图片问题（共修复 ~20 个）

| 问题 | 具体表现 | 影响 |
|------|---------|------|
| **Emoji 代替产品图** | 产品卡片用 🧴💡 emoji 而不是真实照片 | 看起来不专业，像未完成的网站 |
| **错误图片** | 中控台分类用了后排座椅图片；充电分类用了车外观图 | 内容和视觉不匹配 |
| **AI 生成图片当产品图** | 用 AI 生成的 Wall Connector 图代替真实产品照片 | 和实物差距大，不可信 |
| **所有文章用同一张图** | guides 页 9 篇文章全用 `tesla-model-y-hero.jpg` | 视觉单调，无法区分内容 |
| **缺图片引用** | `<Image src=...>` 引用了 `public/images/` 中不存在的文件 | 图片不显示，broken image |
| **文章内无图片** | suspension 文章纯文字无任何图片 | 排版单调，阅读体验差 |

### 📝 排版问题

| 问题 | 具体表现 | 影响 |
|------|---------|------|
| **使用 Tailwind `prose` 类** | 文章用了 `prose prose-invert` | 和网站其他页面风格不统一（字号、颜色、行高都不对） |
| **缺少视觉层次** | 纯文字 + 标题，无高亮框、无数据卡片、无对比表 | 像 Word 文档，不像专业网站 |
| **间距太密** | section 之间 `mb-8` 不够 | 内容挤在一起，阅读疲劳 |
| **无 hero 图/头图** | 文章直接从 GradientHero 组件开始 | 和有全幅图片的文章对比，视觉冲击力差 |

### 📰 内容问题

| 问题 | 具体表现 | 影响 |
|------|---------|------|
| **直接引用 YouTube 来源** | 文章里写 "Based on [YouTuber Name]'s video" + 链接 | 看起来是搬运/洗稿，不像原创 |
| **文章角度不对** | 24K 文章最初写成 "1 year review" | Jason 认为太像抄袭某个视频，需要独立角度 |
| **guides 页排序不合理** | 新文章排在最底部 | 用户看不到新内容 |
| **guides 页无搜索/筛选** | 9 篇文章只有列表 | 用户找不到想看的 |

---

## ✅ 硬性标准（Checklist）

### 一、链接标准

- [ ] **Amazon 链接必须用直接 ASIN 格式**: `https://www.amazon.com/dp/{ASIN}?tag=teslamodelguy-20`
- [ ] **每个 ASIN 必须验证**: 打开链接确认产品名、图片与文章描述一致
- [ ] **禁止编造 ASIN**: 如果找不到产品 ASIN，用 Amazon 搜索确认后再用
- [ ] **Yeslak affiliate**: 所有链接加 `?sca_ref=10733389.GHD3wW8fWH`
- [ ] **EV Bandit affiliate**: 所有链接加 `?sca_ref=10733634.pROAnZ9F8x`
- [ ] **店铺不卖某产品 → 删除该链接**: 不要链到品类页或首页
- [ ] **所有 affiliate 链接加 `rel="sponsored"`**
- [ ] **发布前测试每个外链**: 确认非 404、非重定向到无关页面

### 二、图片标准

- [ ] **每个产品卡片必须有真实产品照片**: 不允许 emoji 占位
- [ ] **禁止 AI 生成图片冒充产品照**: AI 图只能用于装饰性 hero/banner
- [ ] **每篇文章必须有至少 2 张图片**: hero/头图 + 至少 1 张内容图
- [ ] **guides 页每篇文章用不同图片**: 禁止全部用同一张 hero 图
- [ ] **图片文件必须存在于 `public/images/`**: 发布前验证 `ls public/images/{filename}`
- [ ] **图片 alt 文字必须描述内容**: 不要用 "image" 或空 alt
- [ ] **分类卡片图片必须匹配分类内容**: 中控台→中控台图，充电→充电设备图
- [ ] **产品真实图片来源优先级**: ① 品牌官网 CDN ② Amazon 产品图 ③ 品牌 PR 图 ④ AI 生成（仅装饰）
- [ ] **只要提到产品就必须有产品图片**: 文章中推荐/对比/提及的每个具体产品，旁边必须有对应的真实产品图。不允许"只有文字描述没有图"的产品推荐

### 三、排版标准

- [ ] **禁止使用 Tailwind `prose` 类**: 全站统一手动样式
- [ ] **正文**: `text-lg text-zinc-200 leading-relaxed`
- [ ] **大标题 (h2)**: `text-2xl md:text-3xl font-bold text-white`
- [ ] **引言/intro**: `text-xl text-zinc-200 leading-relaxed`
- [ ] **小标签**: `text-sm text-zinc-500`
- [ ] **section 间距**: `mb-12` 起步，推荐 `mb-16`
- [ ] **每篇文章必须有**: 全幅 hero 图 OR GradientHero + 文章内至少 1 张 divider 图
- [ ] **数据必须可视化**: 有数字对比 → 用 grid 卡片/表格/进度条，不要纯文字列数据
- [ ] **长文章必须有目录 (TOC)**: 6+ sections 的文章要有目录框
- [ ] **CTA 按钮颜色统一 — 全部 cyan**: `bg-cyan-600 text-white hover:bg-cyan-700`。**禁止**灰色/白色边框按钮（`border border-zinc-600`）用作 CTA — 这个错误已经犯了 3 次
- [ ] **重要信息用高亮框**: 警告=amber border，正面=green border，负面=red border，信息=cyan border

### 四、内容标准

- [ ] **不引用/链接 YouTube 来源**: 文章写成原创内容，用 "based on real-world owner data" 等通用表述
- [ ] **每篇文章必须有独立角度**: 不能是视频的文字版，要有自己的结构和观点
- [ ] **FAQ schema**: 每篇 guide/review 至少 3-5 个 FAQ 问题
- [ ] **SEO keywords**: 每篇文章 metadata 里至少 5 个 keywords
- [ ] **canonical URL**: 每篇文章必须有 `alternates.canonical`
- [ ] **OpenGraph**: 每篇文章必须有 og:title, og:description, og:url, og:image
- [ ] **sitemap**: 新页面必须加入 `sitemap.ts`
- [ ] **guides/reviews index**: 新文章必须加入对应的 index 页面
- [ ] **新文章排序**: 在 index 页面中排在前 3-5 位（靠前展示），不要沉底
- [ ] **tag 分层**: ESSENTIAL（核心必读）> HOT（热门话题）> NEW（新发布）> POPULAR（高流量）> 无标签

### 五、发布前 Final Check

```bash
# 1. TypeScript 编译通过
npx tsc --noEmit

# 2. 所有图片文件存在
grep -r 'src="/images/' src/app/[article-path]/ | sed 's/.*src="//;s/".*//' | sort -u | while read img; do
  [ -f "public$img" ] && echo "✅ $img" || echo "❌ MISSING: $img"
done

# 3. 检查 sitemap 包含新页面
grep "new-article-slug" src/app/sitemap.ts

# 4. 检查 index 页面包含新文章
grep "new-article-slug" src/app/guides/page.tsx  # 或 reviews

# 5. Git diff 确认改动合理
git diff --stat
```

---

## 📁 文件命名规范

- **文章目录**: `src/app/guides/{seo-slug}/page.tsx` 或 `src/app/reviews/{category}/{seo-slug}/page.tsx`
- **图片文件**: `public/images/{descriptive-name}.{jpg|png}` — 用英文短横线，描述内容
- **SEO slug**: 全小写，短横线分隔，包含主关键词，≤60 字符

---

## 🔄 更新流程

1. **读这个文件**
2. **写内容** — 遵循上述标准
3. **跑 Final Check** — 5 步验证
4. **截图确认** — 用 browser 截图发给 Jason 看效果
5. **Jason 确认后** → git push

---

*最后更新: 2026-03-04*
*维护者: Business Agent*
