import Lenis from 'lenis'
import * as THREE from 'three'
import './style.css'
import './hero-fix.css'
import './content-fix.css'

const cases = [
  { id:'haivis', type:'AI PRODUCT OPS', category:'product', year:'INTERNSHIP / 2026', title:'Haivis AI 产品运营闭环', summary:'从官网产品表达、多平台内容宣发，到用户增长、社群沉淀与产品反馈协同。', result:'近 2000 新增用户', accent:'#d8f178', cover:null, role:'官网设计 / 内容 / 社群 / 产品协同', proof:'3% 付费转化 · 830+ 小红书粉丝 · 100+ 图文视频', metrics:[['近 2000','一个运营月新增用户'],['3%','付费转化率'],['100+','图文与视频作品']], journey:['表达产品','触达用户','沉淀社群','反馈迭代'], gallery:[['/assets/haivis/cover.png','Haivis 产品主视觉','产品表达'],['/assets/haivis/frame-02.png','AI 生成视觉系列','AI 内容生产'],['/assets/haivis/frame-14.png','产品功能与编辑表达','产品教育']], details:[['产品表达与发布准备','负责 AI 生图平台官网主页面设计，并通过 Vibe Coding 制作 HTML 产品宣传动画，为产品早期对外宣传建立产品表达和视觉物料基础。'],['多平台内容运营','负责小红书、公众号、抖音和海外社媒等平台的内容更新与宣传物料生产，完成 <strong>100+ 个图文和视频作品</strong>；视频由本人独立剪辑。'],['AI 内容与用户增长','使用 AI 生图平台生产图文素材，从图片中提炼视觉风格并生成系列内容；针对电商设计人群、年轻人和女性 P 图用户设计选题。在一个运营月内平台新增用户<strong>接近 2000</strong>，付费转化率达到<strong>3%</strong>，小红书粉丝达到<strong>830+</strong>。'],['社群反馈与产品迭代','创建小红书用户群，观察用户和粉丝反应，提出推荐官计划并带来<strong>200+ 用户增长</strong>；持续使用产品发现并反馈<strong>十余次 Bug</strong>，多次提出优化意见，与开发者协同推动平台迭代和功能增加。']] },
  { id:'personal', type:'PERSONAL MEDIA OPS', category:'content', year:'PERSONAL PRACTICE', title:'个人自媒体运营', summary:'覆盖剪辑分享、旅行、游戏与 AIGC 等方向，运营个人及团体账号，持续进行多主题、多平台内容实践。', result:'抖音累计 200 万播放', accent:'#ff879f', cover:'/assets/运营/从0到1运营团队.webp', role:'内容策划 / 全流程制作 / 平台运营 / 商业交付', proof:'3 万获赞 · 40 万单条最高播放 · 300+ 视频 · 50+ 客户', metrics:[['200 万','抖音账号累计播放'],['40 万','单条最高播放'],['20+','1 万以上播放视频']], journey:['多方向运营','全流程制作','数据表现','合作交付'], gallery:[['/assets/运营/从0到1运营团队.webp','抖音账号与阶段性数据','账号运营'],['/assets/运营/小红书图文1.webp','小红书图文样本 / 选题与正文','图文内容'],['/assets/运营/小红书图文2.webp','小红书视觉样本 / 封面与画面','视觉内容']], details:[['多赛道内容运营','围绕剪辑分享、旅行、游戏与 AIGC 等方向，运营个人及团体账号，持续进行多主题、多平台的内容实践。'],['账号运营与内容表现','运营过个人及团体抖音账号，多个账号累计播放量达 <strong>200 万</strong>，累计获赞约 <strong>3 万</strong>；单条视频最高播放量达 <strong>40 万</strong>，播放量超过 <strong>1 万</strong> 的短视频有 <strong>20 余条</strong>。同步运营小红书图文与视频账号，持续积累多平台内容数据和代表作品。'],['视频与图文全流程制作','累计发布 <strong>300+ 条视频</strong>、<strong>80+ 篇图文</strong>，具备从前期策划、素材组织到后期制作与成片交付的全流程执行能力。'],['内容获客与商业合作','通过小红书发布视频与剪辑作品，持续展示内容制作能力并承接合作需求，累计服务 <strong>50+ 位客户</strong>，客户反馈 <strong>100% 好评</strong>，形成从内容展示、合作承接到项目交付的商业闭环。']] },
  { id:'ai-product', type:'AI PRODUCT PRACTICE', category:'product', year:'VIBE CODING / 2025 — NOW', title:'AI 产品实践与快速原型', summary:'从真实使用场景出发，将 AI 工具、网页交互和内容表达组合成可运行的产品作品。', result:'可运行产品作品', accent:'#8db8ff', cover:null, role:'问题拆解 / 方案设计 / Vibe Coding / 交付', proof:'官网 · 互动网页 · 宣传动画 · AI 工作流', metrics:[['01','问题与场景'],['02','方案与原型'],['03','可运行交付']], journey:['发现问题','定义方案','做出原型','补充验证'], gallery:[['/assets/products/herbal-cover.png','AI 中药材识别产品原型','产品界面'],['/assets/products/lingyu-cover.webp','语音输入与内容工作流','交互原型'],['/assets/products/ai-character-cover.png','AI 角色产品界面','用户场景']], detailProof:['从用户场景和使用障碍开始定义问题','网页 / 互动界面 / HTML 动画 · Vibe Coding','官网、互动网页、宣传动画与 AI 工作流','真实用户验证与版本迭代待补充'], details:[['我如何思考','从具体用户场景和使用障碍出发，拆解问题、定义功能和表达方式，而不是只展示技术实现。'],['我如何实现','使用 Vibe Coding 完成网页、互动界面和 HTML 动画，将产品想法快速做成可以被查看和体验的作品。'],['可以证明什么','这些作品支持产品理解、快速原型、视觉表达、AI 协作和交付能力；没有用户数据时，不虚构用户增长或商业结果。'],['验证状态','当前以产品方案、原型和实现过程为主，真实用户验证、使用数据和版本迭代记录待补充。']] },
  { id:'event', type:'ACTIVITY OPS', category:'activity', year:'2025', title:'一次活动的全流程运营', summary:'从策划、筹备、宣发到现场执行、人员调度与复盘，推进一场小型赛事真正发生。', result:'230 位现场观众', accent:'#ffb25f', cover:'/assets/运营/活动运营.webp', role:'策划 / 宣发 / 执行 / 复盘', proof:'30+ 选手投稿 · 舞台布置 · 人员协调', metrics:[['230','现场观众'],['30+','选手投稿'],['01','完整落地活动']], journey:['策划目标','组织宣发','现场执行','结果复盘'], gallery:[['/assets/运营/活动运营.webp','活动宣传图文与现场项目','活动物料']], detailProof:['活动目标 · 前期筹备 · 宣传推广 · 参赛者沟通','舞台布置 · 人员调度 · 现场流程推进','230 位现场观众 · 30+ 位选手投稿','报名转化、渠道效果和成本数据待补充'], details:[['前期策划','负责活动策划、前期筹备、宣传推广和参赛者沟通，将活动目标拆解为报名、宣发与现场执行任务。'],['现场执行','负责舞台布置、人员调度和现场流程推进，处理活动当天的协作与执行问题。'],['已确认结果','活动从 0 到 1 落地，吸引 230 位现场观众，获得 30+ 位选手投稿。'],['复盘边界','当前重点展示项目推进和执行证据；报名转化、渠道效果和成本数据待补充。']] }
]

// AI 生图 Agent evidence is kept separate from the compact case card so media can be replaced without rewriting the case list.
Object.assign(cases[0], {
  title:'AI 生图 Agent 产品运营闭环',
  proof:'4% 付费转化 · 830+ 小红书粉丝 · 100+ 图文视频',
  metrics:[['近 2000','一个运营月新增用户'],['4%','付费转化率'],['100+','图文与视频作品']],
  gallery:[
    ['/assets/haivis/video/haivis-promo-cn.mp4','AI 生图 Agent 产品宣发动画','Vibe Coding / 动效交付','video'],
    ['/assets/haivis/video/haivis-website-walkthrough.mp4','AI 生图 Agent 官网动态页面','官网视觉展示','video'],
    ['','第三张运营证据图片','待补充：社群、内容反馈或平台数据','placeholder']
  ],
  details:[
    ['产品表达与宣发落地','负责 AI 生图平台官网主视觉设计，并通过 Vibe Coding 完成 HTML 产品宣传动画，将产品功能转化为可展示、可传播的网页与视觉物料。具备较强的产品理解、视觉表达、AI 协作开发、前端实现与动效交付能力。'],
    ['多平台内容运营','负责小红书、公众号、抖音和海外社媒等平台的内容运营，从选题策划到图文、视频制作与发布复盘均独立完成，累计产出<strong>100+ 个图文和视频作品</strong>。根据不同平台的人群特征和内容反馈，持续调整选题与内容表达；小红书账号粉丝达到<strong>830+</strong>，运营期间平台新增用户<strong>接近 2000</strong>。'],
    ['AI 内容与可复用工作流','能够将 AI 应用于内容生产和运营工作流，完成 AI 生图、视觉风格提炼、系列素材生成与内容表达；围绕用户实际需求沉淀调色、P 图、照片风格转换等内容型 Skill，同时针对工作中的高频任务编写系列风格提取、素材整理和内容生成等可复用 Skill。具备较强的 AI 工具应用、任务拆解、Skill 编写、内容生产和工作流沉淀能力。'],
    ['社群反馈与产品迭代','通过持续发布小红书内容建立用户连接，并创建私域用户社群，社群规模达到<strong>100+ 人</strong>。基于用户和粉丝反馈提出“推荐官计划”，带来<strong>200+ 用户增长</strong>；同时持续使用产品，发现并反馈<strong>十余次 Bug</strong>，协助开发者优化产品体验、修复问题并推进功能迭代。']
  ]
})

const capabilities = [
  ['product','PRODUCT UNDERSTANDING','产品理解','功能拆解 · 场景匹配 · 价值表达','把 AI 产品功能放进具体用户场景，用官网、内容和宣传物料降低理解门槛。','官网主页面与产品宣传动画','功能拆解 · 场景匹配 · 价值表达','功能 → 场景 → 表达 → 理解'],
  ['content','CONTENT OPERATIONS','内容运营','人群定位 · 内容制作 · 平台分发','从目标人群和平台语境出发，完成选题、图文、视频与平台适配，关注内容如何被理解和行动。','100+ 图文与视频 · 小红书 · 抖音','人群定位 · 内容制作 · 平台分发','人群 → 选题 → 制作 → 分发'],
  ['user','USER OPERATIONS','用户运营','社群建立 · 反馈归类 · 用户触达','通过用户群、评论和社群反应建立用户连接，归类内容疑问、产品问题和运营机会。','小红书用户群与社群反馈','社群建立 · 反馈归类 · 用户触达','连接 → 观察 → 归类 → 触达'],
  ['feedback','PRODUCT COLLABORATION','产品协同','问题定位 · 需求转译 · 开发协作','把产品使用中的问题和用户反馈转化为开发者可理解的优化建议，并参与后续协同。','十余次 Bug 反馈 · 多次优化意见','问题定位 · 需求转译 · 开发协作','问题 → 建议 → 协作 → 迭代'],
  ['growth','GROWTH OPERATIONS','增长运营','内容获客 · 推荐拉新 · 付费转化','将内容、社群和推荐机制连接到用户增长与转化；统计口径和渠道归因持续补齐。','近 2000 新增用户 · 3% 转化 · 推荐官 200+','内容获客 · 推荐拉新 · 付费转化','内容 → 访问 → 增长 → 转化'],
  ['data','DATA ANALYSIS','数据分析','指标整理 · 内容对比 · 复盘调整','通过平台指标、内容表现和用户反馈进行阶段性对比，形成下一轮选题、触达或产品协同动作。','内容表现与运营期数据复盘','指标整理 · 内容对比 · 复盘调整','指标 → 对比 → 结论 → 调整'],
  ['ai-content','AI CONTENT','AI 内容','AI 生图 · 风格提炼 · 系列制作','根据目标人群生成并筛选视觉素材，从优秀样本中提炼风格，形成系列化内容表达。','AI 生图平台与系列图素材','AI 生图 · 风格提炼 · 系列制作','需求 → 生图 → 筛选 → 适配'],
  ['workflow','AI WORKFLOW','AI 工作流','任务拆解 · Skill 编写 · 流程复用','把重复的 AI 内容任务拆成可复用 Skill 和流程，并持续沉淀选题、素材和系列内容。','P 图、照片转化与风格提炼 Skill','任务拆解 · Skill 编写 · 流程复用','任务 → Skill → 输出 → 复用']
]

const app = document.querySelector('#app')
app.innerHTML = `
  <canvas class="signal-canvas" aria-hidden="true"></canvas>
  <header class="nav">
    <div class="nav-group"><a href="#cases">CASES</a><a href="#capabilities">CAPABILITIES</a><a href="#proof">PROOF</a></div>
    <a class="mark" href="#top" aria-label="返回首页">LY</a>
    <div class="nav-group nav-group--right"><a href="#method">METHOD</a><a href="#contact">CONTACT</a></div>
  </header>
  <div class="scroll-progress"><span></span></div>
  <main id="top">
    <section class="hero scene" data-scene="01">
      <div class="hero-word" data-reveal>OPERATIONS</div>
      <div class="hero-sub" data-reveal>IN PRACTICE</div>
      <div class="hero-intro"><span>AI PRODUCT OPS / CONTENT / USER INSIGHT</span><p>让内容被看见，<br><em>让用户愿意行动。</em></p></div>
      <div class="hero-bottom"><span>SCROLL<br>TO EXPLORE</span><p>李颖 · 运营作品集<br>内容、用户、产品、增长与活动实践</p></div>
    </section>

    <section class="results scene" data-scene="02">
      <div class="section-tag">02 / OPERATIONS AT A GLANCE</div>
      <div class="results-title">运营能力<br><em>与成果。</em></div>
      <p class="results-lede">把我做过的内容、活动、交付与 AI 产品实践拆开看，每一块能力都对应具体项目和可核验的材料。</p>
      <div class="result-grid">
        <article class="result-card result-card--content"><div class="result-card-top"><span>01</span><i>CONTENT OPS</i></div><h3>内容运营</h3><p>从选题、制作到平台适配与发布复盘，让内容在具体语境里被看见。</p><div class="result-data"><strong>32<span>万</span></strong><small>抖音阶段性总曝光</small><strong>2500<span>+</span></strong><small>获赞</small><strong>280<span>+</span></strong><small>阶段性粉丝</small></div></article>
        <article class="result-card result-card--activity"><div class="result-card-top"><span>02</span><i>ACTIVITY OPS</i></div><h3>活动运营</h3><p>把策划、宣发、现场执行与人员协调串成一条完整的落地链路。</p><div class="result-data"><strong>230</strong><small>活动现场观众</small><strong>30<span>+</span></strong><small>选手投稿</small></div></article>
        <article class="result-card result-card--delivery"><div class="result-card-top"><span>03</span><i>CONTENT DELIVERY</i></div><h3>内容交付</h3><p>从需求沟通、素材整理、制作修改到最终交付，持续完成真实项目。</p><div class="result-data"><strong>200<span>+</span></strong><small>视频项目</small><strong>30<span>+</span></strong><small>旅行与日常图文</small></div></article>
        <article class="result-card result-card--product"><div class="result-card-top"><span>04</span><i>AI PRODUCT OPS</i></div><h3>AI 产品运营</h3><p>理解功能与使用场景，把 AI 产品表达成用户容易理解和继续探索的内容。</p><div class="result-data result-data--text"><strong>正式实习</strong><small>AI 生图 Agent 官方账号运营</small><strong>持续实践</strong><small>AI 内容与产品表达</small></div></article>
      </div>
    </section>

    <section id="cases" class="cases scene" data-scene="03">
      <div class="section-tag">03 / OPERATIONS CASES</div>
      <div class="section-heading"><h2>按项目看，<br><em>完整闭环。</em></h2><p>先看真实项目，再拆能力。每张卡片只保留最重要的工作与结果，展开后再看过程和证据边界。</p></div>
      <div class="case-filter" role="tablist" aria-label="筛选运营案例"><button class="filter active" data-filter="all" role="tab" aria-selected="true">ALL</button><button class="filter" data-filter="content" role="tab" aria-selected="false">CONTENT</button><button class="filter" data-filter="product" role="tab" aria-selected="false">PRODUCT OPS</button><button class="filter" data-filter="activity" role="tab" aria-selected="false">ACTIVITY</button></div>
      <div class="case-list">${cases.map((item,index)=>`<article class="case-row case-row--${item.id}" data-category="${item.category}" style="--case-accent:${item.accent}"><div class="case-number">0${index+1}<span>/ 04</span></div><div class="case-media ${item.cover?'has-image':'no-image'}">${item.cover?`<img src="${item.cover}" alt="${item.title}" loading="lazy">`:`<div class="case-signal case-signal--${item.id}"><span>${item.id==='haivis'?'AI / AGENT':'AI / LAB'}</span><b>${item.id==='haivis'?'PRODUCT OPS':'VIBE CODING'}</b></div><div class="signal-labels"><span>${item.id==='haivis'?'FUNCTION':'PROBLEM'}</span><span>${item.id==='haivis'?'CONTENT':'PROTOTYPE'}</span><span>${item.id==='haivis'?'FEEDBACK':'DELIVERY'}</span></div>`}</div><div class="case-copy"><span class="case-type">${item.type} / ${item.year}</span><h3>${item.title}</h3><p>${item.summary}</p><div class="case-metrics">${item.metrics.map(([value,label])=>`<div><strong>${value}</strong><span>${label}</span></div>`).join('')}</div><div class="case-meta"><b>我负责</b><span>${item.role}</span></div><div class="case-result"><b>${item.result}</b><span>${item.proof}</span></div><button class="case-open" data-case="${item.id}">OPEN CASE <span>↗</span></button></div></article>`).join('')}</div>
    </section>

    <section id="capabilities" class="capabilities scene" data-scene="04">
      <div class="section-tag">04 / CAPABILITY INDEX</div>
      <div class="section-heading"><h2>能力不是标签，<br><em>是小案例。</em></h2><p>每项能力都对应一个具体场景。03 讲完整项目，04 讲我在项目中如何做出判断、形成方法并留下证据。</p></div>
      <div class="capability-board"><div class="capability-list">${capabilities.map((item,index)=>`<button class="capability ${index===0?'active':''}" data-capability="${item[0]}" aria-selected="${index===0?'true':'false'}"><span>0${index+1}</span><b>${item[2]}</b><i>${item[3]}</i></button>`).join('')}</div><div class="capability-display"><div class="display-counter">CAPABILITY / <b>01</b></div><div class="display-word">PRODUCT<br><em>UNDERSTANDING</em></div><p>用官网、内容和宣传物料把 AI 产品功能翻译成用户能理解的场景与价值。</p><div class="display-proof"><span>MICRO CASE</span><b>官网主页面与产品宣传动画</b><small>功能拆解 · 场景匹配 · 价值表达</small></div><div class="display-loop">OPERATING LOOP <strong>功能 → 场景 → 表达 → 理解</strong></div></div></div>
    </section>

    <section class="content-lab scene" data-scene="05">
      <div class="section-tag">05 / CONTENT LAB</div>
      <div class="content-lab-title">内容<br><em>现场。</em></div>
      <div class="content-stack"><figure class="stack-main"><img src="/assets/运营/小红书图文1.webp" alt="小红书旅行图文内容" loading="lazy"><figcaption>小红书 / 旅行图文 / 选题与正文</figcaption></figure><figure class="stack-side stack-side--one"><img src="/assets/运营/小红书图文2.webp" alt="小红书美食图文内容" loading="lazy"><figcaption>平台语境 / 生活方式</figcaption></figure><figure class="stack-side stack-side--two"><img src="/assets/运营/活动运营.webp" alt="活动宣传物料" loading="lazy"><figcaption>活动传播 / 视觉物料</figcaption></figure></div>
      <div class="lab-copy"><p>我把内容当作一项需要判断的运营工作：从人群和平台出发，选择表达方式，再用真实反馈决定下一轮。</p><div class="lab-tags"><span>选题</span><span>标题</span><span>封面</span><span>脚本</span><span>图文</span><span>视频</span><span>复盘</span></div></div>
    </section>

    <section id="method" class="method scene" data-scene="06">
      <div class="section-tag">06 / METHOD</div>
      <div class="section-heading"><h2>我如何把事情<br><em>推进到发生。</em></h2><p>这是我的工作顺序，不是一套抽象口号。每一步都要有具体产出和下一步动作。</p></div>
      <div class="method-sticky"><div class="method-rail"><span></span></div><div class="method-items"><article><b>01</b><h3>FRAME</h3><p>定义目标人群、运营对象和要改变的行为。</p></article><article><b>02</b><h3>FIND</h3><p>看评论、搜索、热点、投稿和已有数据。</p></article><article><b>03</b><h3>MAKE</h3><p>选择内容、活动、产品表达或触达路径。</p></article><article><b>04</b><h3>SHIP</h3><p>协调资源，把方案推进到发布或现场执行。</p></article><article><b>05</b><h3>REVIEW</h3><p>看结果、保留未知、决定下一轮怎么调整。</p></article></div></div>
    </section>

    <section id="proof" class="proof scene" data-scene="07">
      <div class="section-tag">07 / PROOF & BOUNDARY</div><div class="section-heading"><h2>结果有来源，<br><em>能力有边界。</em></h2><p>作品集展示我能证明什么，也展示目前还需要继续补充什么。</p></div>
      <div class="proof-board"><article><span class="proof-grade">A</span><h3>已核验成果</h3><p>有原始截图、数据、作品或本人职责确认，可以直接展示。</p><b>32 万曝光 / 230 人 / 200+ 项目</b></article><article><span class="proof-grade">B</span><h3>可迁移能力</h3><p>能证明部分能力，但不等同于完整岗位经验。</p><b>AI 项目 / 网页 / 动画 / 数据分析</b></article><article><span class="proof-grade">C</span><h3>待补证据</h3><p>方向合理，但需要补充用户反馈、漏斗或复盘材料。</p><b>AI 生图 Agent 结果 / 投放 ROI / 留存</b></article></div>
    </section>

    <section id="contact" class="contact scene" data-scene="08"><div class="section-tag">08 / ABOUT & CONTACT</div><div class="contact-title">NEXT<br><em>LOOP.</em></div><p>我是李颖，主求职方向为 AI 产品运营，也关注内容运营、用户运营和增长实践。希望从一个真实的问题开始，把下一步做得更有依据。</p><div class="contact-bottom"><a class="contact-pill" href="mailto:ly2622319390@163.com">↗ CONTACT ME</a><a href="https://ly2622319390-afk.github.io/portfolio" target="_blank" rel="noreferrer">AI PRODUCT PORTFOLIO ↗</a><span>© 2026 LIYING</span></div></section>
  </main>
  <div class="case-modal" aria-hidden="true"><div class="modal-backdrop" data-close></div><article class="modal-panel" data-lenis-prevent-wheel><button class="modal-close" data-close aria-label="关闭案例">×</button><div id="modal-body"></div></article></div>
`

const lens = new Lenis({ autoRaf:true, anchors:true, lerp:.085, prevent:node=>node?.closest('.modal-panel') })
const canvas = document.querySelector('.signal-canvas')
const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true})
renderer.setPixelRatio(Math.min(devicePixelRatio,2))
const camera = new THREE.PerspectiveCamera(35,1,.1,100)
camera.position.z = 7
const scene = new THREE.Scene()
const points = new THREE.BufferGeometry()
const positions = new Float32Array(75*3)
const velocities = []
for(let i=0;i<75;i++){const radius=1.2+Math.random()*2.5;const theta=Math.random()*Math.PI*2;const phi=(Math.random()-.5)*Math.PI;positions[i*3]=Math.cos(theta)*Math.cos(phi)*radius;positions[i*3+1]=Math.sin(phi)*radius*.72;positions[i*3+2]=Math.sin(theta)*Math.cos(phi)*radius;velocities.push({x:(Math.random()-.5)*.0018,y:(Math.random()-.5)*.0018,z:(Math.random()-.5)*.0018})}
points.setAttribute('position',new THREE.BufferAttribute(positions,3))
const pointMaterial = new THREE.PointsMaterial({color:0xff879f,size:.045,transparent:true,opacity:.72})
const pointCloud = new THREE.Points(points,pointMaterial);scene.add(pointCloud)
const ring = new THREE.Mesh(new THREE.IcosahedronGeometry(1.48,2),new THREE.MeshBasicMaterial({color:0x693545,wireframe:true,transparent:true,opacity:.32}));scene.add(ring)
const resize=()=>{const width=innerWidth,height=innerHeight;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix()};addEventListener('resize',resize);resize()
let scrollTarget=0,scrollCurrent=0
const tick=(time)=>{scrollCurrent+=(scrollTarget-scrollCurrent)*.04;pointCloud.rotation.y=time*.00008+scrollCurrent*.00012;pointCloud.rotation.x=scrollCurrent*.00006;ring.rotation.y=-time*.00012-scrollCurrent*.00018;ring.rotation.x=time*.00005;const p=points.attributes.position.array;for(let i=0;i<velocities.length;i++){const v=velocities[i];p[i*3]+=v.x;p[i*3+1]+=v.y;p[i*3+2]+=v.z;if(Math.abs(p[i*3])>3.8)v.x*=-1;if(Math.abs(p[i*3+1])>3)v.y*=-1;if(Math.abs(p[i*3+2])>3.8)v.z*=-1}points.attributes.position.needsUpdate=true;renderer.render(scene,camera);requestAnimationFrame(tick)};requestAnimationFrame(tick)

const progress=document.querySelector('.scroll-progress span')
addEventListener('scroll',()=>{scrollTarget=scrollY;const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${max?scrollY/max:0})`;document.querySelectorAll('.scene').forEach(section=>{const r=section.getBoundingClientRect();if(r.top<innerHeight*.8&&r.bottom>innerHeight*.2)section.classList.add('is-visible')})},{passive:true})

const capData=Object.fromEntries(capabilities.map((item,index)=>[item[0],{index:String(index+1).padStart(2,'0'),word:item[1],name:item[2],body:item[4],micro:item[5],proof:item[6],loop:item[7]}]))
function renderCapability(key){const item=capData[key];const display=document.querySelector('.capability-display');display.innerHTML=`<div class="display-counter">CAPABILITY / <b>${item.index}</b></div><div class="display-word">${item.word.split(' ')[0]}<br><em>${item.word.split(' ').slice(1).join(' ')}</em></div><p>${item.body} 根据不同项目调用对应的真实证据，保持能力和结果之间的边界。</p><div class="display-proof"><span>MICRO CASE</span><b>${item.micro}</b><small>${item.proof}</small></div><div class="display-loop">OPERATING LOOP <strong>${item.loop}</strong></div>`}
document.querySelectorAll('.capability').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.capability').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-selected','false')});btn.classList.add('active');btn.setAttribute('aria-selected','true');renderCapability(btn.dataset.capability)}))
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-selected','false')});btn.classList.add('active');btn.setAttribute('aria-selected','true');const key=btn.dataset.filter;document.querySelectorAll('.case-row').forEach(row=>{row.classList.toggle('is-hidden',key!=='all'&&row.dataset.category!==key)})}))
function renderEvidence([src,alt,caption,kind]){if(kind==='video')return `<video src="${src}" controls preload="metadata" playsinline aria-label="${alt}"></video>`;if(kind==='placeholder')return `<div class="evidence-placeholder"><span>03 / IMAGE TO BE ADDED</span><b>第三张图片待补充</b><small>建议放：社群规模、内容反馈或平台数据证据</small></div>`;return `<img src="${src}" alt="${alt}" loading="lazy">`}
function openCase(key){const item=cases.find(x=>x.id===key);if(!item)return;document.querySelector('#modal-body').innerHTML=`<span class="modal-kicker">${item.type} / ${item.year}</span><h2>${item.title}</h2><p class="modal-lede">${item.summary}</p><div class="modal-facts"><div><span>ROLE</span><b>${item.role}</b></div><div><span>RESULT</span><b>${item.result}</b></div><div><span>PROOF</span><b>${item.proof}</b></div></div><div class="modal-journey"><span>OPERATING JOURNEY</span><div>${item.journey.map((step,index)=>`<b><i>0${index+1}</i>${step}</b>`).join('')}</div></div><div class="modal-gallery"><div class="modal-gallery-head"><span>SELECTED EVIDENCE</span><b>${item.gallery.length} VISUALS</b></div><div class="modal-gallery-grid">${item.gallery.map((entry)=>`<figure class="evidence-${entry[3]||'image'}">${renderEvidence(entry)}<figcaption><b>${entry[2]}</b><span>${entry[1]}</span></figcaption></figure>`).join('')}</div></div><div class="modal-detail-list">${item.details.map(([title,body],index)=>`<section><div class="modal-section-index">0${index+1}</div><div><h3>${title}</h3><p>${body}</p></div></section>`).join('')}</div><div class="modal-boundary">证据边界：数字与职责按当前作品集材料呈现；尚未确认的业务结果已明确标注。</div>`;const modal=document.querySelector('.case-modal');modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');lens.stop()}
function closeCase(){const modal=document.querySelector('.case-modal');modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');lens.start()}
document.querySelectorAll('.case-open').forEach(btn=>btn.addEventListener('click',()=>openCase(btn.dataset.case)));document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeCase));document.addEventListener('keydown',event=>{if(event.key==='Escape')closeCase()})
if(matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('reduce-motion')}
