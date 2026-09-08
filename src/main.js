import Lenis from 'lenis'
import * as THREE from 'three'
import './style.css'
import './hero-fix.css'
import './content-fix.css'

const cases = [
  { id:'haivis', type:'AI PRODUCT OPS', category:'product', year:'INTERNSHIP / 2026.06 — 2026.09', title:'生图 Agent 产品运营', summary:'第一月完成官网与宣发物料；产品上线后，围绕内容触达、用户增长、社群沉淀与产品反馈开展两个月运营。', result:'近 2000 新增注册用户', accent:'#d8f178', cover:null, role:'官网设计 / 内容运营 / 用户社群 / 产品协同', proof:'4% 注册用户付费转化率 · 850+ 小红书粉丝 · 100+ 图文视频', metrics:[['近 2000','上线运营两个月新增注册用户'],['4%','注册用户付费转化率'],['100+','图文与视频作品']], journey:['表达产品','触达用户','沉淀社群','反馈迭代'], gallery:[['/assets/haivis/cover.png','Haivis 产品主视觉','产品表达'],['/assets/haivis/frame-02.png','AI 生成视觉系列','AI 内容生产'],['/assets/haivis/frame-14.png','产品功能与编辑表达','产品内容与使用引导']], details:[['官网与宣发物料','实习第一个月负责 AI 生图平台官网主页面设计，并通过 Vibe Coding 制作 HTML 产品宣传动画，为产品正式上线准备官网视觉与对外宣传物料。'],['多平台内容运营','产品上线后，负责小红书、公众号、抖音和海外社媒等平台的内容更新与宣传物料生产，完成 <strong>100+ 个图文和视频作品</strong>；视频由本人独立剪辑。'],['AI 内容与用户增长','在产品上线后的两个月，使用 AI 生图平台生产图文素材，从图片中提炼视觉风格并生成系列内容；针对电商设计人群、年轻人和女性 P 图用户设计选题。期间平台新增注册用户<strong>近 2000</strong>，注册用户付费转化率达到<strong>4%</strong>。'],['社群反馈与产品迭代','创建小红书用户群，社群规模达到<strong>100+ 人</strong>；观察用户和粉丝反应，提出推荐官计划并带来<strong>200+ 用户增长</strong>。持续使用产品，累计提交<strong>30+ 项</strong>功能与体验问题，提出<strong>20+ 条</strong>产品优化建议，并协同开发推进<strong>40+ 项</strong>Bug 修复、体验优化与功能迭代。']] },
  { id:'personal', type:'PERSONAL MEDIA OPS', category:'content', year:'PERSONAL PRACTICE', title:'个人自媒体运营', summary:'覆盖剪辑分享、旅行、游戏与 AIGC 等方向，运营个人及团体账号，持续进行多主题、多平台内容实践。', result:'抖音累计 200 万播放', accent:'#ff879f', cover:'/assets/运营/从0到1运营团队.webp', role:'内容策划 / 全流程制作 / 平台运营 / 商业交付', proof:'3 万获赞 · 40 万单条最高播放 · 300+ 视频 · 50+ 客户', metrics:[['200 万','抖音账号累计播放'],['40 万','单条最高播放'],['20+','1 万以上播放视频']], journey:['多方向运营','全流程制作','数据表现','合作交付'], gallery:[['/assets/运营/从0到1运营团队.webp','抖音账号与阶段性数据','账号运营'],['/assets/运营/小红书图文1.webp','小红书图文样本 / 选题与正文','图文内容'],['/assets/运营/小红书图文2.webp','小红书视觉样本 / 封面与画面','视觉内容']], details:[['多赛道内容运营','围绕剪辑分享、旅行、游戏与 AIGC 等方向，运营个人及团体账号，持续进行多主题、多平台的内容实践。'],['账号运营与内容表现','运营过个人及团体抖音账号，多个账号累计播放量达 <strong>200 万</strong>，累计获赞约 <strong>3 万</strong>；单条视频最高播放量达 <strong>40 万</strong>，播放量超过 <strong>1 万</strong> 的短视频有 <strong>20 余条</strong>。同步运营小红书图文与视频账号，持续积累多平台内容数据和代表作品。'],['视频与图文全流程制作','累计发布 <strong>300+ 条视频</strong>、<strong>80+ 篇图文</strong>，具备从前期策划、素材组织到后期制作与成片交付的全流程执行能力。'],['内容获客与商业合作','通过小红书发布视频与剪辑作品，持续展示内容制作能力并承接合作需求，累计服务 <strong>50+ 位客户</strong>，客户反馈 <strong>100% 好评</strong>，形成从内容展示、合作承接到项目交付的商业闭环。']] },
  { id:'ai-product', type:'AI PRODUCT PRACTICE', category:'product', year:'VIBE CODING / 2025 — NOW', title:'AI 产品实践与快速交付', summary:'围绕自己构思的 AI 产品、小程序、网站与互动作品，完成从场景发现、产品设计到 AI 协作实现和内容表达。', result:'多类型 AI 产品作品', accent:'#8db8ff', cover:null, role:'产品构思 / AI 协作 / 原型实现 / 内容表达', proof:'6 个产品项目 · Vibe Coding · 多模态产出', metrics:[['06','产品项目'],['04','产品形态'],['01','独立上架小程序']], journey:['发现真实场景','构思产品方案','完成快速实现','形成作品交付'], gallery:[['/assets/products/fridge-main.webp','冰箱有啥吃啥小程序','场景型产品'],['/assets/products/lingyu-chat.webp','灵语·智能3场景语音识别软件','交互型产品'],['/assets/products/herbal-cover.png','AI 中药材识别产品','场景型产品'],['/assets/products/ai-chat-cover.webp','AI 角色对话网站','交互型产品'],['/assets/products/ai-game-cover.webp','AI 互动游戏','AI 创意产品'],['/assets/products/ai-character-cover.png','AI 角色产品界面','AI 创意内容']], detailProof:['冰箱有啥吃啥 · 场景识别 · 产品构思','灵语 · 功能梳理 · 产品介绍视频','AI 网站 · 互动网页 · Vibe Coding 实现','多类型 AI 产品与内容作品'], details:[['冰箱有啥吃啥','从“冰箱里有什么食材、今天可以做什么”这一生活场景出发，设计“冰箱有啥吃啥”小程序，独立借助 AI 完成产品设计、开发与上线全流程，现已成功上架微信小程序。<br><span class="project-skill-tags">场景识别 / 产品设计 / AI 辅助开发 / 独立交付</span>'],['灵语·智能3场景语音识别软件','围绕会议记录、日常记录和创作表达等 3 类语音使用场景，梳理语音输入、内容识别与结果整理的产品功能，完成界面交互设计，并制作完整的产品介绍视频。技术架构采用前端交互界面承载输入与结果展示，结合语音识别与大模型处理能力完成内容理解，再通过结构化结果模块支持用户查看、编辑与继续使用。<br><span class="project-skill-tags">场景拆解 / 功能架构 / 交互设计 / 产品表达</span>'],['AI 网站与互动产品','使用 Vibe Coding 与 AI 工具完成多个网站、互动网页和小产品，将产品想法转化为可查看、可体验的界面与原型。<br><span class="project-skill-tags">Vibe Coding / 快速原型 / 前端实现</span>'],['AI 创意内容','围绕 AI 角色、游戏化内容与视觉创意项目，完成 AI 生图、视频、动画和互动内容等多类型产出，将 AI 能力转化为可展示的作品。<br><span class="project-skill-tags">AI 生图 / AI 视频 / 多模态表达</span>']] },
]

// AI 生图 Agent evidence is kept separate from the compact case card so media can be replaced without rewriting the case list.
Object.assign(cases[0], {
  cover:'/assets/haivis/video/haivis-promo-cn.mp4',
  coverKind:'video',
  title:'生图 Agent 产品运营',
  proof:'4% 运营期付费转化率 · 850+ 小红书粉丝 · 100+ 图文视频',
  metrics:[['近 2000','上线运营两个月新增注册用户'],['4%','注册用户付费转化率'],['100+','图文与视频作品']],
  gallery:[
    ['/assets/haivis/video/haivis-promo-cn.mp4','AI 生图 Agent 产品宣发动画','Vibe Coding / 动效交付','video'],
    ['/assets/haivis/video/haivis-website-walkthrough.mp4','AI 生图 Agent 官网动态页面','官网视觉展示','video'],
     ['/assets/haivis/ai-agent-feedback.png','面向用户的 Skill 上线平台','Skill 发布与用户触达','image']
  ],
  details:[
    ['产品表达与宣发落地','负责 AI 生图平台官网主视觉设计，并通过 Vibe Coding 完成 HTML 产品宣传动画，将产品功能转化为可展示、可传播的网页与视觉物料。具备较强的产品理解、视觉表达、AI 协作开发、前端实现与动效交付能力。'],
    ['多平台内容运营','产品上线后，负责小红书、公众号、抖音和海外社媒等平台的内容运营，从选题策划到图文、视频制作与发布复盘均独立完成，累计产出<strong>100+ 个图文和视频作品</strong>。根据不同平台的人群特征和内容反馈，持续调整选题与内容表达；小红书总浏览达到<strong>2.1 万</strong>，粉丝达到<strong>850+</strong>。'],
    ['AI 内容与可复用工作流','能够将 AI 应用于内容生产和运营工作流，完成 AI 生图、视觉风格提炼、系列素材生成与内容表达；围绕用户实际需求沉淀调色、P 图、照片风格转换等内容型 Skill，同时针对工作中的高频任务编写系列风格提取、素材整理和内容生成等可复用 Skill。具备较强的 AI 工具应用、任务拆解、Skill 编写、内容生产和工作流沉淀能力。'],
     ['Skill 上线与用户反馈闭环','围绕已编写的内容型 Skill，搭建面向终端用户的 Skill 上线平台，将不同使用场景的能力整理为可浏览、可理解、可尝试的产品卡片，并补充使用说明与入口，降低用户发现和上手成本。通过内容分发与用户社群持续触达目标用户，社群规模达到<strong>100+ 人</strong>；基于用户反馈提出“推荐官计划”，带来<strong>200+ 用户增长</strong>，并将使用问题沉淀为后续产品优化与迭代依据。']
  ]
})

Object.assign(cases[1], {
  cover:'/assets/运营/个人自媒体-双平台代表作品.jpg',
  gallery:[
    ['/assets/运营/个人自媒体-旅行Vlog分享.jpg','旅行 Vlog 赛道的内容分享与作品表现','旅行 Vlog'],
    ['/assets/运营/个人自媒体-双平台代表作品.jpg','个人在小红书与抖音的高表现内容样本','代表作品'],
    ['/assets/运营/个人自媒体-AI方向分享.jpg','AI 方向的内容分享与作品表现','AI 内容']
  ]
})

Object.assign(cases[2], {
  cover:'/assets/products/herbal-cover.png',
  title:'AI 产品实践'
})

Object.assign(cases[2], {
  gallery:cases[2].gallery.map((entry,index)=>index===5?['/assets/products/video/goose-duck-aigc.mp4','鹅鸭杀 AIGC 游戏同人漫剧','AIGC','video']:entry),
  details:cases[2].details.map((entry,index)=>index===3?['AIGC','独立策划游戏同人漫剧剧本，生成分镜，完成素材组织与剪辑，最终制作成完整的《鹅鸭杀》AIGC 游戏同人漫剧。<br><span class="project-skill-tags">剧本策划 / 分镜生成 / 剪辑制作 / AIGC 内容交付</span>']:entry)
})

// GitHub Pages serves this project below a repository path, so keep public assets relative.
const normalizeAssetPath = path => path?.startsWith('/assets/') ? `.${path}` : path
cases.forEach(item => {
  item.cover = normalizeAssetPath(item.cover)
  item.gallery = item.gallery?.map(entry => [normalizeAssetPath(entry[0]), ...entry.slice(1)])
})

const capabilities = [
  {
    id:'product', word:'PRODUCT UNDERSTANDING', name:'产品理解', tags:'场景定义 · 功能拆解 · 路径设计',
    headline:'冰箱有啥吃啥｜小程序产品规划与独立上线',
    body:'围绕“家中已有食材，但不知道今天做什么”的日常场景，完成需求拆解、核心使用路径规划、页面与数据结构设计，并借助 AI 独立完成小程序开发与上线。',
    caseTitle:'冰箱有啥吃啥｜小程序产品规划与独立上线',
    stats:[['2.4 万','曝光率'],['60+','累计用户'],['230 道','内置食谱'],['5 项','核心功能']],
    points:[
      ['问题','冰箱里有现成食材，却不知道今天能做什么。'],
      ['判断','用户需要的不是更多菜谱，而是从已有食材快速得到可执行建议。'],
      ['方案','围绕“查看食材—获得推荐—查看做法”组织页面、数据与功能。']
    ],
    flow:['生活问题','核心任务','功能路径','小程序上线'], note:'当前证据重点是场景判断、功能组织与独立交付，不延伸为未经验证的用户增长结论。'
  },
  {
    id:'content', word:'CONTENT OPERATIONS', name:'内容运营', tags:'人群定位 · 内容制作 · 平台适配',
    headline:'Haivis 官方账号｜电商设计内容运营',
    body:'在 Haivis 官方账号中，面向电商设计师、商家和视觉创作者，围绕产品功能完成选题策划、图文制作、视频剪辑、使用教程与案例输出，并根据平台语境调整表达。',
    caseTitle:'Haivis 官方账号｜电商设计内容运营',
    points:[
      ['内容类型','亚马逊套图全流程、案例设计过程、官方使用教程与 Prompt 分享。'],
      ['选题判断','从电商设计的高频任务切入，优先选择结果直观、步骤可复用的场景。'],
      ['制作方法','拆解功能与案例，完成视觉素材、图文文案、视频剪辑和发布适配。'],
      ['迭代方式','结合评论、社群提问和内容反馈，调整下一轮选题与讲解重点。']
    ],
    stats:[['100+','图文与视频作品'],['2.1 万','小红书总浏览'],['850+','小红书粉丝']], flow:['定位人群','确定选题','制作内容','分发复盘']
  },
  {
    id:'user', word:'USER OPERATIONS', name:'用户运营', tags:'用户定位 · 首次引导 · 反馈闭环',
    headline:'光绘镜头签 Skill｜用户定位与反馈优化',
    body:'围绕“光绘镜头签”Skill，将目标用户定位为关注时尚、个人形象与视觉表达的年轻女性，通过发布生成效果图与文字使用说明引导用户体验，并根据用户反馈推动体验优化。',
    caseTitle:'光绘镜头签 Skill｜用户定位与反馈优化',
    points:[
      ['用户定位','关注时尚、个人形象与视觉表达的年轻女性。'],
      ['使用引导','发布生成效果图与文字使用说明，引导用户进入网站、上传照片并填写签名文字。'],
      ['问题反馈','部分生成结果改变原照片构图，与用户保留主体和画面的预期不一致。'],
      ['产品优化','整理问题表现并反馈开发，推动加强生成过程中的构图控制。']
    ],
    stats:[['100+','私域群用户'],['10+','覆盖内容群体'],['20+','体验优化反馈']], flow:['内容触达','首次体验','收集反馈','推动优化']
  },
  {
    id:'feedback', word:'PRODUCT COLLABORATION', name:'产品协同', tags:'发现问题 · 复现问题 · 反馈开发 · 跟进优化',
    headline:'AI 生图产品｜问题发现与产品协同',
    body:'基于真实使用反馈，发现并反馈 30+ 项功能与体验问题，提出 20+ 条产品优化建议，并协同推进 40+ 项修复与迭代。',
    caseTitle:'AI 生图产品｜问题发现与产品协同',
    points:[
      ['发现','在真实使用中发现输入、发送、生成和编辑环节的功能与体验问题。'],
      ['复现','记录操作路径、触发条件和实际表现，帮助开发者复现问题。'],
      ['反馈','整理问题现象、用户预期和优化建议，向开发者清晰说明问题。'],
      ['推进','持续跟进问题处理与产品优化，协同推进 40+ 项修复与迭代，让功能更加稳定、易用。']
    ],
    stats:[['30+','Bug 反馈'],['20+','产品优化建议'],['40+','修复与迭代']], flow:['发现问题','记录复现','反馈开发','跟进优化'], note:'实习期间持续使用产品，累计反馈 30+ 个 Bug，提出 20+ 条产品优化建议，并协同推进 40+ 项修复与迭代。'
  },
  {
    id:'growth', word:'GROWTH OPERATIONS', name:'增长运营', tags:'内容获客 · 社群承接 · 推荐拉新',
    headline:'Haivis｜内容、社群与推荐官增长',
    body:'产品上线后的两个月，围绕 AI 生图平台通过小红书、公众号、抖音和海外社媒触达目标人群，建立私域用户群承接产品兴趣，并提出推荐官计划扩展用户来源。',
    caseTitle:'Haivis｜内容、社群与推荐官增长',
    stats:[['近 2000','上线运营两个月新增注册用户'],['200+','推荐官计划带来用户增长'],['4%','注册用户付费转化率']],
    points:[
      ['触达','小红书、公众号、抖音与海外社媒持续发布产品内容。'],
      ['承接','建立 100+ 人私域用户群，沉淀问题、反馈与产品兴趣。'],
      ['放大','提出推荐官计划，让已有用户参与产品传播与新用户引入。']
    ],
    flow:['内容触达','进入产品','社群承接','推荐增长']
  },
  {
    id:'activity', word:'ACTIVITY OPERATIONS', name:'活动运营', tags:'目标拆解 · 宣发组织 · 现场执行 · 复盘推进',
    headline:'校园赛事｜从策划到现场落地',
    body:'围绕一场校园赛事，完成活动目标拆解、前期筹备、宣传推广、参赛者沟通、舞台布置和现场人员调度，将活动从策划方案推进到真实发生。',
    caseTitle:'校园赛事｜从策划到现场落地',
    stats:[['230','现场观众'],['30+','选手投稿'],['30+','人员调动']],
    points:[
      ['目标','明确活动主题、参与对象和现场目标，将活动拆成报名、宣发和执行三个阶段。'],
      ['组织','推进宣传物料、参赛者沟通、场地准备和现场分工。'],
      ['执行','负责舞台布置、人员协调和流程推进，处理活动当天的临时问题。'],
      ['复盘','结合现场反馈，复盘舞台布置、节目时长控制、观众入场与离场引导等环节，为下一次校园活动沉淀可复用的执行经验。']
    ],
    flow:['明确目标','拆解任务','组织宣发','现场执行','结果复盘'],
    note:'当前证据重点是活动从 0 到 1 的推进能力、现场协作和执行管理；报名转化、渠道效果及成本数据仍待补充。'
  },
  {
    id:'data', word:'DATA ANALYSIS', name:'数据分析', tags:'指标整理 · 内容对比 · 复盘调整',
    headline:'Haivis｜运营数据复盘与策略调整',
    body:'对比两个连续 30 日周期的曝光、观看、平均观看时长与完播率，区分内容分发规模和观看深度的变化，并将数据结论转化为下一轮选题、内容结构与用户触达动作。',
    caseTitle:'Haivis｜运营数据复盘与策略调整',
    stats:[['16.6 万','两个月累计曝光'],['2.25 万','两个月累计观看'],['+42%','平均观看时长提升']],
    points:[
      ['内容层','平均观看时长由 16.2 秒提升至 23 秒，完播率由 11.3% 提升至 18.1%；同时关注平台观看率由 11% 降至 7.6%，区分观看深度与分发转化。'],
      ['增长层','结合运营期新增用户和推荐官计划，观察内容触达能否承接到产品访问、社群沉淀与新增。'],
      ['产品层','将评论与社群反馈归类为选题疑问、功能障碍和素材需求，为产品优化和下一轮内容提供输入。'],
      ['行动层','优先复盘高峰日期内容，拆解人群、选题、封面与开头，再用下一周期指标验证调整效果。']
    ],
    flow:['整理指标','横向对比','结合反馈','调整动作']
  },
  {
    id:'ai-content', word:'AI CONTENT', name:'AI 内容', tags:'需求拆解 · 风格提炼 · 人工校准',
    headline:'AI 内容生产｜运营、设计与开发',
    body:'面向外部用户开展 AI 内容生产，覆盖 AI 生图内容运营、Skill 产品化、独立站 UI 设计与前端协同开发，以及 AI 游戏独立开发。',
    caseTitle:'AI 内容生产｜运营、设计与开发',
    points:[
      ['内容运营','利用 AI 辅助完成生图设计、图文内容与视频素材制作，提升运营内容的生产效率。'],
      ['Skill 产品化','面向电商、设计与女性用户，编写<strong>20+ 个 Skill</strong>；经多轮测试优化提示词，最终上架平台使用。'],
      ['独立站项目','参与大型独立站项目，协同推进前后端开发，积累网页 UI 设计与前端实现经验。'],
      ['AI 游戏开发','借助 Codex 独立完成 AI 游戏开发，实践需求拆解、功能实现与项目交付。']
    ],
    stats:[['20+','内容型 Skill'],['01','独立站项目'],['01','AI 游戏项目']], flow:['明确需求','AI 协作实现','人工校准','形成可用成果']
  },
  {
    id:'workflow', word:'AI WORKFLOW', name:'AI 工作流', tags:'任务拆解 · Skill 编写 · 迭代测试 · 流程复用',
    headline:'个人 AI 工作流｜效率工具与经验沉淀',
    body:'将 AI 应用于日常运营工作，围绕内容运营、用户运营等高频任务编写并复用 10+ 个 Skill，通过持续测试与迭代，沉淀可复用的工作流程与方法。',
    caseTitle:'个人 AI 工作流｜效率工具与经验沉淀',
    points:[
      ['任务拆解','从个人高频任务出发，明确输入素材、处理要求和输出格式。'],
      ['效率工具','将 AI Skill 应用于电商设计、滤镜、P 图和照片风格处理等工作。'],
      ['迭代验证','根据使用结果修改指令、补充边界条件并检查输出质量。'],
      ['经验沉淀','将稳定的方法整理为可复用流程，减少重复操作并提升工作效率。']
    ],
    stats:[['10+','可复用 Skill'],['475','近30天任务执行'],['21亿','近30天 Token 使用量']], flow:['发现高频任务','编写个人 Skill','迭代测试','工作复用']
  }
]

const contentLabImages = [
  ['xiaochengxu-growth.png','小程序增长数据'],
  ['个人自媒体-账号数据-完整截图.png','个人自媒体账号数据'],
  ['31afab35effce4fadd57a583cd27dd13.jpg','剪辑赛道获客'],
  ['6ee89a4aa3b51bb233c3a7bd10d90491.jpg','旅行内容分享'],
  ['ScreenShot_2026-09-04_135421_927.png','游戏创作者获客'],
  ['ScreenShot_2026-09-04_135452_231.png','UI设计向'],
  ['ScreenShot_2026-09-04_135507_248.png','电商设计向'],
  ['ScreenShot_2026-09-04_135524_471.png','女性审美种草'],
  ['ScreenShot_2026-09-04_135541_270.png','漫剧创作者获客'],
  ['ScreenShot_2026-09-04_135615_490.png','商家套图提效'],
  ['ScreenShot_2026-09-04_135650_733.png','热点内容扩散'],
  ['ScreenShot_2026-09-04_135719_958.png','AI工具教程转化'],
  ['ScreenShot_2026-09-04_135751_868.png','视频营销'],
  ['ScreenShot_2026-09-04_135837_956.png','SKILL创作'],
  ['ScreenShot_2026-09-05_162205_807.png','个人工作Skill'],
  ['ScreenShot_2026-09-04_175619_425.png','内容向Skill实操']
]

const app = document.querySelector('#app')
app.innerHTML = `
  <canvas class="signal-canvas" aria-hidden="true"></canvas>
  <header class="nav">
    <div class="nav-group"><a href="#cases">CASES</a><a href="#capabilities">CAPABILITIES</a></div>
    <a class="mark" href="#top" aria-label="返回首页">LY</a>
    <div class="nav-group nav-group--right"><a href="#contact">CONTACT</a></div>
  </header>
  <div class="scroll-progress"><span></span></div>
  <main id="top">
    <section class="hero scene" data-scene="01">
      <div class="hero-word" data-reveal>PORTFOLIO</div>
      <div class="hero-sub" data-reveal>2026</div>
      <div class="hero-intro"><span>AI PRODUCT OPS / CONTENT / USER INSIGHT</span><p>李颖｜AI 产品运营</p></div>
      <div class="hero-bottom"><span>SCROLL<br>TO EXPLORE</span></div>
    </section>

    <section class="results scene" data-scene="02">
      <div class="results-title">能力<em>成果</em></div>
      <div class="result-grid">
        <article class="result-card result-card--content"><div class="result-card-top"><span>01</span><i>CONTENT OPS</i></div><h3>内容运营</h3><p>从选题、制作到平台适配与发布复盘，让内容在具体语境里被看见。</p><div class="result-data"><strong>32<span>万</span></strong><small>抖音阶段性总曝光</small><strong>2500<span>+</span></strong><small>获赞</small><strong>280<span>+</span></strong><small>阶段性粉丝</small></div></article>
        <article class="result-card result-card--ai-practice"><div class="result-card-top"><span>02</span><i>AI PRODUCT PRACTICE</i></div><h3>AI 产品实践</h3><p>从场景发现、产品构思到 AI 协作实现，持续把产品想法转化为可体验的作品。</p><div class="result-data"><strong>06</strong><small>产品项目</small><strong>04</strong><small>产品形态</small><strong>01</strong><small>独立上架小程序</small></div></article>
        <article class="result-card result-card--user-feedback"><div class="result-card-top"><span>03</span><i>USER &amp; PRODUCT FEEDBACK</i></div><h3>用户反馈与产品迭代</h3><p>连接用户、观察使用问题，再把分散反馈整理成可以推动产品优化的具体行动。</p><div class="result-data"><strong>100<span>+</span></strong><small>私域用户群规模</small><strong>30<span>+</span></strong><small>Bug 反馈</small><strong>200<span>+</span></strong><small>推荐官计划带来用户增长</small></div></article>
        <article class="result-card result-card--outcome"><div class="result-card-top"><span>04</span><i>AI PRODUCT OPS OUTCOMES</i></div><h3>AI 产品运营结果</h3><p>产品上线后，围绕 AI 生图产品完成内容触达、用户承接与产品反馈，形成从传播到转化的运营实践。</p><div class="result-data"><strong>近 2000</strong><small>上线运营两个月新增注册用户</small><strong>4<span>%</span></strong><small>注册用户付费转化率</small><strong>850<span>+</span></strong><small>Haivis 小红书粉丝</small></div></article>
      </div>
    </section>

    <section id="cases" class="cases scene" data-scene="03">
      <div class="section-heading"><h2>项目<em>实践</em></h2></div>
      <div class="case-list">${cases.map((item,index)=>`<article class="case-row case-row--${item.id}" data-category="${item.category}" style="--case-accent:${item.accent}"><div class="case-number">0${index+1}<span>/ 03</span></div><div class="case-media ${item.cover?'has-image':'no-image'}">${item.cover?(item.coverKind==='video'?`<video src="${item.cover}" autoplay muted loop playsinline preload="metadata" aria-label="${item.title} 视频预览"></video>`:`<img src="${item.cover}" alt="${item.title}" loading="lazy">`):`<div class="case-signal case-signal--${item.id}"><span>${item.id==='haivis'?'AI / AGENT':'AI / LAB'}</span><b>${item.id==='haivis'?'PRODUCT OPS':'VIBE CODING'}</b></div><div class="signal-labels"><span>${item.id==='haivis'?'FUNCTION':'PROBLEM'}</span><span>${item.id==='haivis'?'CONTENT':'PROTOTYPE'}</span><span>${item.id==='haivis'?'FEEDBACK':'DELIVERY'}</span></div>`}</div><div class="case-copy"><span class="case-type">${item.type} / ${item.year}</span><h3>${item.title}</h3><p>${item.summary}</p><div class="case-metrics">${item.metrics.map(([value,label])=>`<div><strong>${value}</strong><span>${label}</span></div>`).join('')}</div><div class="case-meta"><b>我负责</b><span>${item.role}</span></div><div class="case-result"><b>${item.result}</b><span>${item.proof}</span></div><button class="case-open" data-case="${item.id}">OPEN CASE <span>↗</span></button></div></article>`).join('')}</div>
    </section>

    <section id="capabilities" class="capabilities scene" data-scene="04">
      <div class="section-heading"><h2>能力<em>案例</em></h2></div>
      <div class="capability-board"><div class="capability-list">${capabilities.map((item,index)=>`<button class="capability ${index===0?'active':''}" data-capability="${item.id}" aria-selected="${index===0?'true':'false'}"><span>0${index+1}</span><b>${item.name}</b><i>${item.tags}</i></button>`).join('')}</div><div class="capability-display"></div></div>
    </section>

    <section class="content-lab scene" data-scene="05">
      <div class="content-lab-title">内容<em>作品集</em></div>
      <div class="content-stack">${contentLabImages.map(([file,alt],index)=>`<figure class="content-tile content-tile--${index+1}" tabindex="0" role="button" aria-label="查看大图：${alt}"><img src="assets/content-lab/${file}" alt="${alt}" loading="lazy"><figcaption>${alt}</figcaption></figure>`).join('')}</div>
    </section>

    <section id="contact" class="contact scene contact--profile" data-scene="06"><div class="contact-layout"><div class="contact-copy"><div class="contact-title">ABOUT <em>ME</em></div><p>我喜欢把一个模糊的想法做成可以被看见、被使用的东西。我的优势是内容运营、用户沟通和 AI 工具应用，也能参与产品表达、网页 UI 设计与快速开发。希望加入一个愿意尝试新方法的团队，把 AI 用到真实业务中，和团队一起提升效率、优化体验、做出结果。</p></div><figure class="contact-photo" tabindex="0" role="button" aria-label="查看大图：李颖个人照片"><img src="assets/about/liying-with-dog.jpg" alt="李颖与狗的个人照片" loading="lazy"><figcaption><span>PERSONAL PROFILE</span><b>李颖｜AI 产品运营</b></figcaption></figure></div><div class="contact-bottom"><a class="contact-pill" href="mailto:ly2622319390@163.com">↗ CONTACT ME</a><span>© 2026 LIYING</span></div></section>
  </main>
  <div class="case-modal" aria-hidden="true"><div class="modal-backdrop" data-close></div><article class="modal-panel" data-lenis-prevent-wheel><button class="modal-close" data-close aria-label="关闭案例">×</button><div id="modal-body"></div></article></div>
  <div class="image-lightbox" aria-hidden="true"><button class="image-lightbox-close" aria-label="关闭图片预览">×</button><img src="" alt=""></div>
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

const capData=Object.fromEntries(capabilities.map((item,index)=>[item.id,{...item,index:String(index+1).padStart(2,'0')}]))
function renderCapability(key,direction='next'){
  const item=capData[key]
  const display=document.querySelector('.capability-display')
  const metrics=`<div class="capability-metrics">${item.stats.map(([value,label])=>`<div><strong>${value}</strong><span>${label}</span></div>`).join('')}</div>`
  display.style.setProperty('--switch-x',direction==='prev'?'-28px':'28px')
  if(direction!=='none'){
    display.classList.remove('is-switching')
    void display.offsetWidth
  }
  display.dataset.current=key
  display.innerHTML=`
    <div class="display-counter">CAPABILITY / <b>${item.index}</b><span>${item.tags}</span></div>
    <div class="display-word">${item.word}</div>
    <h3>${item.caseTitle}</h3>
    <p>${item.body}</p>
    ${metrics}
    <div class="capability-points">${item.points.map(([label,text])=>`<div><span>${label}</span><p>${text}</p></div>`).join('')}</div>
    <div class="display-loop"><span>OPERATING LOOP</span><strong>${item.flow.map((step,index)=>`<i>${String(index+1).padStart(2,'0')}</i>${step}`).join('<b>→</b>')}</strong></div>`
  if(direction!=='none') display.classList.add('is-switching')
}
let activeCapabilityIndex=0
renderCapability('product','none')
document.querySelectorAll('.capability').forEach((btn,index)=>btn.addEventListener('click',()=>{document.querySelectorAll('.capability').forEach(x=>{x.classList.remove('active');x.setAttribute('aria-selected','false')});btn.classList.add('active');btn.setAttribute('aria-selected','true');const direction=index>=activeCapabilityIndex?'next':'prev';activeCapabilityIndex=index;renderCapability(btn.dataset.capability,direction)}))
function renderEvidence([src,alt,caption,kind]){if(kind==='video')return `<video src="${src}" controls preload="metadata" playsinline aria-label="${alt}"></video>`;if(kind==='placeholder')return `<div class="evidence-placeholder"><span>03 / IMAGE TO BE ADDED</span><b>第三张图片待补充</b><small>建议放：社群规模、内容反馈或平台数据证据</small></div>`;return `<img src="${src}" alt="${alt}" loading="lazy">`}
function openCase(key){const item=cases.find(x=>x.id===key);if(!item)return;document.querySelector('#modal-body').innerHTML=`<span class="modal-kicker">${item.type} / ${item.year}</span><h2>${item.title}</h2><p class="modal-lede">${item.summary}</p><div class="modal-facts"><div><span>ROLE</span><b>${item.role}</b></div><div><span>RESULT</span><b>${item.result}</b></div><div><span>PROOF</span><b>${item.proof}</b></div></div><div class="modal-journey"><span>OPERATING JOURNEY</span><div>${item.journey.map((step,index)=>`<b><i>0${index+1}</i>${step}</b>`).join('')}</div></div><div class="modal-gallery"><div class="modal-gallery-head"><span>SELECTED EVIDENCE</span><b>${item.gallery.length} VISUALS</b></div><div class="modal-gallery-grid">${item.gallery.map((entry)=>`<figure class="evidence-${entry[3]||'image'}">${renderEvidence(entry)}<figcaption><b>${entry[2]}</b><span>${entry[1]}</span></figcaption></figure>`).join('')}</div></div><div class="modal-detail-list">${item.details.map(([title,body],index)=>`<section><div class="modal-section-index">0${index+1}</div><div><h3>${title}</h3><p>${body}</p></div></section>`).join('')}</div>`;const modal=document.querySelector('.case-modal');modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');lens.stop()}
function stopModalMedia(){document.querySelectorAll('.modal-panel video').forEach(video=>{video.pause();video.currentTime=0})}
function closeCase(){stopModalMedia();const modal=document.querySelector('.case-modal');modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');lens.start()}
document.querySelectorAll('.case-open').forEach(btn=>btn.addEventListener('click',()=>openCase(btn.dataset.case)));document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeCase));const lightbox=document.querySelector('.image-lightbox');const lightboxImage=lightbox.querySelector('img');function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImage.src=''}function openLightbox(figure){const image=figure?.querySelector('img');if(!image)return;lightboxImage.src=image.currentSrc||image.src;lightboxImage.alt=image.alt;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}document.addEventListener('click',event=>{openLightbox(event.target.closest('.modal-gallery-grid figure.evidence-image, .content-stack figure.content-tile, .contact-photo'))});document.addEventListener('keydown',event=>{const figure=event.target.closest?.('.content-stack figure.content-tile, .contact-photo');if(figure&&(event.key==='Enter'||event.key===' ')){event.preventDefault();openLightbox(figure)}if(event.key==='Escape'){closeCase();closeLightbox()}});lightbox.addEventListener('click',event=>{if(event.target===lightbox||event.target===lightbox.querySelector('.image-lightbox-close'))closeLightbox()})
if(matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('reduce-motion')}
