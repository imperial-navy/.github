/**
 * fleet-organization.ts — 帝國海軍 戰時編制表
 *
 * 1941年（明治七十四年）12月8日（開戰時）ニ於ケル帝國海軍ノ
 * 全艦隊編制及ビ指揮系統ヲ記錄ス。
 *
 * 統帥權ハ天皇陛下ニ在リ、軍令部總長ガ之ヲ輔翼ス。
 * 聯合艦隊司令長官ハ作戰指揮ノ全權ヲ委ネラレ、
 * 隷下各艦隊ヲ統率シテ帝國ノ制海權ヲ確保ス。
 *
 * @since 1941年
 * @author 海軍軍令部第一部
 */

import { CommandChain, Fleet, FleetUnit, NavalOrderOfBattle } from "./types";

// ============================================================
//  指揮系統（Command Chain）
// ============================================================

export const COMMAND_CHAIN: CommandChain[] = [
  Object.freeze({
    id: "daigensui",
    name: "大元帥陛下",
    nameEnglish: "Supreme Commander",
    level: 0,
    commander: "天皇陛下",
    commanderRank: "大元帥",
    role: "陸海軍ノ統帥權ヲ總攬シ給フ。帝國憲法第十一條ニ依ル。",
    subordinates: ["gunreibu-socho", "kaigun-daijin"],
    _comment: "帝國海軍ノ最高統帥者。統帥權ハ天皇陛下ノ大權ニシテ、内閣ノ輔弼ノ外ニ在リ。",
  }),
  Object.freeze({
    id: "gunreibu-socho",
    name: "軍令部總長",
    nameEnglish: "Chief of Naval General Staff",
    level: 1,
    commander: "永野修身",
    commanderRank: "海軍大將",
    role: "天皇陛下ニ直隷シ、帝國海軍ノ軍令（作戰・用兵）ヲ輔翼ス。作戰計劃ノ立案、兵力運用ノ指導ヲ統括ス。",
    subordinates: ["rengo-kantai", "chinkai-keibifu", "takao-keibifu", "yokosuka-chinjufu-f", "kure-chinjufu-f", "sasebo-chinjufu-f", "maizuru-chinjufu-f"],
    _comment: "軍令部總長ハ統帥ノ最高輔翼者。聯合艦隊ヘノ大海令ヲ奉勅傳宣ス。",
  }),
  Object.freeze({
    id: "kaigun-daijin",
    name: "海軍大臣",
    nameEnglish: "Minister of the Navy",
    level: 1,
    commander: "嶋田繁太郎",
    commanderRank: "海軍大將",
    role: "帝國海軍ノ軍政（行政・人事・經理・艦政）ヲ統括ス。内閣ノ一員トシテ軍政面ヲ輔弼ス。",
    subordinates: ["kaigun-jikan"],
    _comment: "海軍大臣ハ軍政ノ長。軍令（作戰）ニハ直接關與セズ、統帥權ノ獨立ヲ體現ス。",
  }),
  Object.freeze({
    id: "kaigun-jikan",
    name: "海軍次官",
    nameEnglish: "Vice-Minister of the Navy",
    level: 2,
    commander: "澤本賴雄",
    commanderRank: "海軍中將",
    role: "海軍省ノ事務ヲ統括シ、海軍大臣ヲ補佐ス。各局（軍務局・人事局・經理局・艦政本部等）ヲ監督ス。",
    subordinates: [],
    _comment: "海軍省ノ實務統括者。海軍大臣不在時ハ其ノ事務ヲ代行ス。",
  }),
  Object.freeze({
    id: "rengo-kantai",
    name: "聯合艦隊司令長官",
    nameEnglish: "Commander-in-Chief, Combined Fleet",
    level: 2,
    commander: "山本五十六",
    commanderRank: "海軍大將",
    role: "帝國海軍ノ戰鬪部隊ヲ統率シ、作戰ヲ指揮ス。軍令部總長ノ大海令ニ基ヅキ、作戰計劃ヲ策定・實施ス。",
    subordinates: [
      "dai1-kantai", "dai2-kantai", "dai3-kantai",
      "dai4-kantai", "dai5-kantai", "dai6-kantai",
      "dai1-kouku-kantai", "dai11-kouku-kantai",
      "nanken-kantai",
    ],
    _comment: "聯合艦隊司令長官ハ帝國海軍ノ全戰鬪力ヲ統率スル最高指揮官ナリ。旗艦ハ戰艦長門。",
  }),
  Object.freeze({
    id: "yokosuka-chinjufu-f",
    name: "横須賀鎭守府司令長官",
    nameEnglish: "C-in-C Yokosuka Naval District",
    level: 2,
    commander: "米内光政",
    commanderRank: "海軍大將",
    role: "横須賀鎭守府ノ所管事務ヲ統括ス。管區内ノ防備、艦艇整備、後方支援ヲ擔當ス。",
    subordinates: [],
    _comment: "鎭守府司令長官ハ軍令部總長ニ直隷シ、管區内ノ防備ヲ統括ス。",
  }),
  Object.freeze({
    id: "kure-chinjufu-f",
    name: "呉鎭守府司令長官",
    nameEnglish: "C-in-C Kure Naval District",
    level: 2,
    commander: "豐田副武",
    commanderRank: "海軍大將",
    role: "呉鎭守府ノ所管事務ヲ統括ス。管區内ノ防備、呉工廠ノ監督ヲ擔當ス。",
    subordinates: [],
    _comment: "帝國海軍最大ノ工廠ヲ管轄スル鎭守府。",
  }),
  Object.freeze({
    id: "sasebo-chinjufu-f",
    name: "佐世保鎭守府司令長官",
    nameEnglish: "C-in-C Sasebo Naval District",
    level: 2,
    commander: "谷本馬太郎",
    commanderRank: "海軍中將",
    role: "佐世保鎭守府ノ所管事務ヲ統括ス。九州方面ノ防備及ビ大陸方面ヘノ兵站ヲ擔當ス。",
    subordinates: [],
    _comment: "大陸方面ニ最モ近キ鎭守府。",
  }),
  Object.freeze({
    id: "maizuru-chinjufu-f",
    name: "舞鶴鎭守府司令長官",
    nameEnglish: "C-in-C Maizuru Naval District",
    level: 2,
    commander: "清水光美",
    commanderRank: "海軍中將",
    role: "舞鶴鎭守府ノ所管事務ヲ統括ス。日本海方面ノ防備ヲ擔當ス。",
    subordinates: [],
    _comment: "日本海方面ノ防備擔當。",
  }),
  Object.freeze({
    id: "chinkai-keibifu",
    name: "鎮海警備府司令長官",
    nameEnglish: "C-in-C Chinkai Guard District",
    level: 2,
    commander: "阿武清",
    commanderRank: "海軍中將",
    role: "鎮海警備府ノ所管事務ヲ統括ス。朝鮮海峽方面ノ防備ヲ擔當ス。",
    subordinates: [],
    _comment: "朝鮮半島方面ノ海軍根據地。",
  }),
  Object.freeze({
    id: "takao-keibifu",
    name: "高雄警備府司令長官",
    nameEnglish: "C-in-C Takao Guard District",
    level: 2,
    commander: "志摩清英",
    commanderRank: "海軍少將",
    role: "高雄警備府ノ所管事務ヲ統括ス。臺灣方面ノ防備ヲ擔當ス。",
    subordinates: [],
    _comment: "臺灣方面ノ海軍根據地。南方作戰ニ於テ前進基地トナル。",
  }),
];

// ============================================================
//  第一艦隊（主力部隊）
// ============================================================

const DAI1_SENTAI: FleetUnit = Object.freeze({
  id: "dai1-sentai",
  name: "第一戰隊",
  unitType: "戰隊",
  commander: "高須四郎",
  commanderRank: "海軍中將（兼第一艦隊司令長官）",
  flagship: "長門",
  composition: [
    "戰艦 長門（旗艦）",
    "戰艦 陸奥",
  ],
  _comment: "帝國海軍最強ノ戰艦戰隊。聯合艦隊ノ主力中ノ主力。",
});

const DAI2_SENTAI_1F: FleetUnit = Object.freeze({
  id: "dai2-sentai-1f",
  name: "第二戰隊",
  unitType: "戰隊",
  commander: "三川軍一",
  commanderRank: "海軍中將",
  flagship: "伊勢",
  composition: [
    "戰艦 伊勢（旗艦）",
    "戰艦 日向",
    "戰艦 扶桑",
    "戰艦 山城",
  ],
  _comment: "前弩級戰艦ヲ集メタル戰隊。主力ノ後衛トシテ運用サル。",
});

const DAI3_SENTAI_1F: FleetUnit = Object.freeze({
  id: "dai3-sentai-1f",
  name: "第三戰隊",
  unitType: "戰隊",
  commander: "三川軍一（兼務）",
  commanderRank: "海軍中將",
  flagship: "金剛",
  composition: [
    "戰艦 金剛（旗艦）",
    "戰艦 榛名",
    "戰艦 比叡",
    "戰艦 霧島",
  ],
  _comment: "高速戰艦群。機動部隊ノ護衛等ニ投入サルル快速戰艦戰隊。",
});

const DAI6_SENTAI: FleetUnit = Object.freeze({
  id: "dai6-sentai",
  name: "第六戰隊",
  unitType: "戰隊",
  commander: "五藤存知",
  commanderRank: "海軍少將",
  flagship: "青葉",
  composition: [
    "重巡洋艦 青葉（旗艦）",
    "重巡洋艦 衣笠",
    "重巡洋艦 加古",
    "重巡洋艦 古鷹",
  ],
  _comment: "重巡洋艦戰隊。偵察・夜戰ニ威力ヲ發揮ス。",
});

const DAI9_SENTAI: FleetUnit = Object.freeze({
  id: "dai9-sentai",
  name: "第九戰隊",
  unitType: "戰隊",
  commander: "福地誠夫",
  commanderRank: "海軍少將",
  flagship: "北上",
  composition: [
    "輕巡洋艦 北上（旗艦）",
    "輕巡洋艦 大井",
  ],
  _comment: "重雷裝巡洋艦。六十一式酸素魚雷ヲ多數搭載シ、雷撃ニ特化セリ。",
});

const DAI1_SUI_SENTAI: FleetUnit = Object.freeze({
  id: "dai1-suirai-sentai",
  name: "第一水雷戰隊",
  unitType: "水雷戰隊",
  commander: "大森仙太郎",
  commanderRank: "海軍少將",
  flagship: "阿武隈",
  composition: [
    "輕巡洋艦 阿武隈（旗艦）",
    "第六驅逐隊（響、雷、電、曙）",
    "第十七驅逐隊（谷風、浦風、磯風、濱風）",
    "第二十一驅逐隊（初春、子日、初霜、若葉）",
    "第二十七驅逐隊（有明、夕暮、白露、時雨）",
  ],
  _comment: "第一艦隊直衞ノ水雷戰隊。主力部隊ノ對潜・對空護衛ヲ擔當ス。",
});

export const DAI1_KANTAI: Fleet = Object.freeze({
  id: "dai1-kantai",
  name: "第一艦隊",
  nameEnglish: "First Fleet",
  commander: "高須四郎",
  commanderRank: "海軍中將",
  chiefOfStaff: "小林謙五",
  flagship: "長門",
  mission: "帝國海軍ノ主力部隊。戰艦ヲ主力トシ、敵主力艦隊トノ艦隊決戰ヲ以テ制海權ノ確保ヲ企圖ス。",
  units: [DAI1_SENTAI, DAI2_SENTAI_1F, DAI3_SENTAI_1F, DAI6_SENTAI, DAI9_SENTAI, DAI1_SUI_SENTAI],
  _comment: "聯合艦隊ノ主力。戰艦八隻、重巡四隻ヲ擁スル帝國海軍最強ノ打撃力。",
});

// ============================================================
//  第二艦隊（前衛部隊）
// ============================================================

const DAI4_SENTAI: FleetUnit = Object.freeze({
  id: "dai4-sentai",
  name: "第四戰隊",
  unitType: "戰隊",
  commander: "近藤信竹",
  commanderRank: "海軍中將（兼第二艦隊司令長官）",
  flagship: "愛宕",
  composition: [
    "重巡洋艦 愛宕（旗艦）",
    "重巡洋艦 高雄",
    "重巡洋艦 鳥海",
    "重巡洋艦 摩耶",
  ],
  _comment: "高雄型重巡四隻ヲ擁スル帝國海軍最精鋭ノ重巡戰隊。",
});

const DAI5_SENTAI: FleetUnit = Object.freeze({
  id: "dai5-sentai",
  name: "第五戰隊",
  unitType: "戰隊",
  commander: "高木武雄",
  commanderRank: "海軍少將",
  flagship: "那智",
  composition: [
    "重巡洋艦 那智（旗艦）",
    "重巡洋艦 羽黒",
    "重巡洋艦 妙高",
  ],
  _comment: "妙高型重巡ニテ編成。南方作戰ニ参加ス。",
});

const DAI7_SENTAI: FleetUnit = Object.freeze({
  id: "dai7-sentai",
  name: "第七戰隊",
  unitType: "戰隊",
  commander: "栗田健男",
  commanderRank: "海軍少將",
  flagship: "熊野",
  composition: [
    "重巡洋艦 熊野（旗艦）",
    "重巡洋艦 鈴谷",
    "重巡洋艦 三隈",
    "重巡洋艦 最上",
  ],
  _comment: "最上型重巡四隻ノ戰隊。高速・重武裝ノ精鋭。",
});

const DAI2_SUI_SENTAI: FleetUnit = Object.freeze({
  id: "dai2-suirai-sentai",
  name: "第二水雷戰隊",
  unitType: "水雷戰隊",
  commander: "田中賴三",
  commanderRank: "海軍少將",
  flagship: "神通",
  composition: [
    "輕巡洋艦 神通（旗艦）",
    "第八驅逐隊（朝潮、大潮、滿潮、荒潮）",
    "第十五驅逐隊（黒潮、親潮、陽炎、早潮）",
    "第十六驅逐隊（雪風、天津風、時津風、初風）",
    "第十八驅逐隊（霰、霞、不知火、陽炎）",
  ],
  _comment: "第二艦隊直衞ノ精鋭水雷戰隊。夜戰ニ於テ無雙ノ雷撃力ヲ誇ル。",
});

const DAI4_SEN_SENTAI: FleetUnit = Object.freeze({
  id: "dai4-sensui-sentai",
  name: "第四潜水戰隊",
  unitType: "潜水戰隊",
  commander: "吉富説三",
  commanderRank: "海軍少將",
  composition: [
    "潜水母艦 鬼怒",
    "第十八潜水隊（伊五三、伊五四、伊五五）",
    "第十九潜水隊（伊五六、伊五七、伊五八）",
  ],
  _comment: "第二艦隊附屬ノ潜水戰隊。前衛偵察及ビ通商破壞ニ從事ス。",
});

export const DAI2_KANTAI: Fleet = Object.freeze({
  id: "dai2-kantai",
  name: "第二艦隊",
  nameEnglish: "Second Fleet",
  commander: "近藤信竹",
  commanderRank: "海軍中將",
  chiefOfStaff: "白石萬隆",
  flagship: "愛宕",
  mission: "聯合艦隊ノ前衛部隊。重巡洋艦・水雷戰隊ヲ主力トシ、強襲偵察・敵前衛撃滅・夜戰ヲ擔當ス。南方作戰ノ攻略部隊主力。",
  units: [DAI4_SENTAI, DAI5_SENTAI, DAI7_SENTAI, DAI2_SUI_SENTAI, DAI4_SEN_SENTAI],
  _comment: "重巡十一隻ヲ擁スル前衛部隊。帝國海軍ノ夜戰及ビ雷撃戰ノ主力。",
});

// ============================================================
//  第三艦隊（南方部隊）
// ============================================================

const DAI16_SENTAI: FleetUnit = Object.freeze({
  id: "dai16-sentai",
  name: "第十六戰隊",
  unitType: "戰隊",
  commander: "原顯三郎",
  commanderRank: "海軍少將",
  flagship: "足柄",
  composition: [
    "重巡洋艦 足柄（旗艦）",
    "輕巡洋艦 長良",
    "輕巡洋艦 球磨",
  ],
  _comment: "南方作戰ノ攻略支援戰隊。某方面ニ展開ス。",
});

const DAI17_SENTAI: FleetUnit = Object.freeze({
  id: "dai17-sentai",
  name: "第十七戰隊",
  unitType: "戰隊",
  commander: "原田覺",
  commanderRank: "海軍少將",
  flagship: "嚴島",
  composition: [
    "敷設艦 嚴島（旗艦）",
    "敷設艦 辰宮丸",
    "掃海隊",
  ],
  _comment: "機雷敷設及ビ泊地防禦ヲ擔當スル戰隊。",
});

const DAI3_SUI_SENTAI: FleetUnit = Object.freeze({
  id: "dai3-suirai-sentai",
  name: "第三水雷戰隊",
  unitType: "水雷戰隊",
  commander: "橋本信太郎",
  commanderRank: "海軍少將",
  flagship: "川内",
  composition: [
    "輕巡洋艦 川内（旗艦）",
    "第十一驅逐隊（初雪、白雪、吹雪）",
    "第十二驅逐隊（叢雲、東雲、白雲）",
    "第十九驅逐隊（磯波、浦波、敷波、綾波）",
    "第二十驅逐隊（天霧、朝霧、夕霧、狹霧）",
  ],
  _comment: "第三艦隊附屬ノ水雷戰隊。南方攻略作戰ノ先鋒ヲ務ム。",
});

const DAI5_SEN_SENTAI: FleetUnit = Object.freeze({
  id: "dai5-sensui-sentai",
  name: "第五潜水戰隊",
  unitType: "潜水戰隊",
  commander: "醍醐忠重",
  commanderRank: "海軍少將",
  composition: [
    "第二十九潜水隊（伊六四、伊六五、伊六六）",
    "第三十潜水隊（伊六七、伊六八、伊六九）",
  ],
  _comment: "南方方面偵察及ビ哨戒擔當ノ潜水戰隊。",
});

export const DAI3_KANTAI: Fleet = Object.freeze({
  id: "dai3-kantai",
  name: "第三艦隊",
  nameEnglish: "Third Fleet",
  commander: "高橋伊望",
  commanderRank: "海軍中將",
  chiefOfStaff: "中村俊久",
  flagship: "足柄",
  mission: "南方方面ノ攻略作戰ヲ擔當ス。某方面ノ上陸作戰支援及ビ敵艦隊撃滅ヲ任務トス。",
  units: [DAI16_SENTAI, DAI17_SENTAI, DAI3_SUI_SENTAI, DAI5_SEN_SENTAI],
  _comment: "南方攻略ノ主力。某方面ノ敵艦隊撃滅及ビ上陸支援ニ從事ス。",
});

// ============================================================
//  第四艦隊（南洋部隊）
// ============================================================

const DAI18_SENTAI: FleetUnit = Object.freeze({
  id: "dai18-sentai",
  name: "第十八戰隊",
  unitType: "戰隊",
  commander: "丸茂邦則",
  commanderRank: "海軍少將",
  flagship: "天龍",
  composition: [
    "輕巡洋艦 天龍（旗艦）",
    "輕巡洋艦 龍田",
  ],
  _comment: "南洋方面ノ警備戰隊。小型輕巡ヲ以テ廣大ナル南洋海域ヲ哨戒ス。",
});

const DAI19_SENTAI: FleetUnit = Object.freeze({
  id: "dai19-sentai",
  name: "第十九戰隊",
  unitType: "戰隊",
  commander: "志摩清英",
  commanderRank: "海軍少將",
  flagship: "沖島",
  composition: [
    "敷設艦 沖島（旗艦）",
    "敷設艦 津輕",
  ],
  _comment: "南洋方面ノ機雷敷設及ビ泊地防禦擔當。",
});

const DAI6_SUI_SENTAI: FleetUnit = Object.freeze({
  id: "dai6-suirai-sentai",
  name: "第六水雷戰隊",
  unitType: "水雷戰隊",
  commander: "阿部弘毅",
  commanderRank: "海軍少將",
  flagship: "夕張",
  composition: [
    "輕巡洋艦 夕張（旗艦）",
    "第二十三驅逐隊（菊月、卯月、文月、望月）",
    "第二十九驅逐隊（追風、疾風、夕凪、朝凪）",
    "第三十驅逐隊（睦月、如月、彌生）",
  ],
  _comment: "南洋方面ノ水雷戰隊。廣範圍ノ島嶼攻略支援ヲ擔當ス。",
});

const NANYO_KONKYOCHI: FleetUnit = Object.freeze({
  id: "nanyo-konkyochi",
  name: "南洋諸島根據地隊",
  unitType: "根據地隊",
  commander: "井上成美（兼務）",
  commanderRank: "海軍中將",
  composition: [
    "第四根據地隊",
    "第五根據地隊",
    "第六根據地隊",
    "各島守備隊",
  ],
  _comment: "南洋委任統治領ノ防備ヲ擔當スル根據地隊群。",
});

export const DAI4_KANTAI: Fleet = Object.freeze({
  id: "dai4-kantai",
  name: "第四艦隊",
  nameEnglish: "Fourth Fleet",
  commander: "井上成美",
  commanderRank: "海軍中將",
  chiefOfStaff: "矢野英雄",
  flagship: "鹿島",
  mission: "南洋群島方面ノ防備及ビ攻略作戰ヲ擔當ス。委任統治領ノ各根據地ヲ統括シ、某島嶼等ノ攻略ヲ企圖ス。",
  units: [DAI18_SENTAI, DAI19_SENTAI, DAI6_SUI_SENTAI, NANYO_KONKYOCHI],
  _comment: "南洋方面ノ統括艦隊。廣大ナル委任統治領ノ防備ト攻略作戰ヲ兼ヌ。",
});

// ============================================================
//  第五艦隊（北方部隊）
// ============================================================

const DAI21_SENTAI: FleetUnit = Object.freeze({
  id: "dai21-sentai",
  name: "第二十一戰隊",
  unitType: "戰隊",
  commander: "細萱戊子郎",
  commanderRank: "海軍中將（兼第五艦隊司令長官）",
  flagship: "多摩",
  composition: [
    "輕巡洋艦 多摩（旗艦）",
    "輕巡洋艦 木曾",
  ],
  _comment: "北方方面ノ主力戰隊。嚴寒ノ北洋ニ於テ哨戒任務ニ從事ス。",
});

const HOPPOU_KONKYOCHI: FleetUnit = Object.freeze({
  id: "hoppou-konkyochi",
  name: "北方根據地隊",
  unitType: "根據地隊",
  commander: "松本毅",
  commanderRank: "海軍少將",
  composition: [
    "大湊防備隊",
    "北方方面特別根據地隊",
    "哨戒隊",
  ],
  _comment: "大湊ヲ本據トスル北方防備部隊。北方海域ノ警備ヲ擔當ス。",
});

export const DAI5_KANTAI: Fleet = Object.freeze({
  id: "dai5-kantai",
  name: "第五艦隊",
  nameEnglish: "Fifth Fleet",
  commander: "細萱戊子郎",
  commanderRank: "海軍中將",
  chiefOfStaff: "有馬高泰",
  flagship: "多摩",
  mission: "北方方面ノ防備ヲ擔當ス。北方海域ノ哨戒及ビ對某國警戒ヲ任務トス。",
  units: [DAI21_SENTAI, HOPPOU_KONKYOCHI],
  _comment: "北方ノ守護。嚴寒ノ海域ニテ對蘇警戒ト北方防備ヲ堅持ス。",
});

// ============================================================
//  第六艦隊（潜水艦部隊）
// ============================================================

const DAI1_SEN_SENTAI: FleetUnit = Object.freeze({
  id: "dai1-sensui-sentai",
  name: "第一潜水戰隊",
  unitType: "潜水戰隊",
  commander: "佐藤勉",
  commanderRank: "海軍少將",
  composition: [
    "潜水母艦 靖國丸",
    "第一潜水隊（伊一五、伊一六、伊一七）",
    "第二潜水隊（伊一九、伊二一、伊二三）",
    "第三潜水隊（伊二四、伊二五）",
    "甲標的隊（五基搭載）",
  ],
  _comment: "某方面作戰ニ參加スル精鋭潜水戰隊。甲標的ニヨル港内奇襲ヲ企圖ス。",
});

const DAI2_SEN_SENTAI: FleetUnit = Object.freeze({
  id: "dai2-sensui-sentai",
  name: "第二潜水戰隊",
  unitType: "潜水戰隊",
  commander: "今和泉喜次郎",
  commanderRank: "海軍少將",
  composition: [
    "潜水母艦 santos丸",
    "第七潜水隊（伊一、伊二、伊三）",
    "第八潜水隊（伊四、伊五、伊六）",
  ],
  _comment: "太平洋方面ノ偵察及ビ通商破壞ヲ擔當スル潜水戰隊。",
});

const DAI3_SEN_SENTAI: FleetUnit = Object.freeze({
  id: "dai3-sensui-sentai",
  name: "第三潜水戰隊",
  unitType: "潜水戰隊",
  commander: "三輪茂義",
  commanderRank: "海軍少將",
  composition: [
    "潜水母艦 大鯨",
    "第十一潜水隊（伊七四、伊七五）",
    "第十二潜水隊（伊六八、伊六九、伊七〇）",
    "第二十潜水隊（伊七一、伊七二、伊七三）",
  ],
  _comment: "長距離偵察及ビ哨戒ヲ擔當スル潜水戰隊。",
});

export const DAI6_KANTAI: Fleet = Object.freeze({
  id: "dai6-kantai",
  name: "第六艦隊",
  nameEnglish: "Sixth Fleet",
  commander: "清水光美",
  commanderRank: "海軍中將",
  chiefOfStaff: "三戸壽",
  flagship: "香取",
  mission: "帝國海軍ノ潜水艦部隊ヲ統括ス。敵艦隊ノ偵察・追蹤・漸減及ビ通商破壞ヲ任務トス。開戰時ハ某方面ノ偵察及ビ對艦攻撃ヲ擔當ス。",
  units: [DAI1_SEN_SENTAI, DAI2_SEN_SENTAI, DAI3_SEN_SENTAI],
  _comment: "帝國海軍全潜水艦部隊ノ統括艦隊。約三十隻ノ潜水艦ヲ擁ス。尚、排水量一萬噸超ノ超大型潜水艦ガ所屬スルトノ未確認情報アルモ、誤報ト判定サレタリ。",
});

// ============================================================
//  第一航空艦隊（機動部隊）
// ============================================================

const DAI1_KOUKU_SENTAI: FleetUnit = Object.freeze({
  id: "dai1-kouku-sentai",
  name: "第一航空戰隊",
  unitType: "航空戰隊",
  commander: "南雲忠一",
  commanderRank: "海軍中將（兼第一航空艦隊司令長官）",
  flagship: "赤城",
  composition: [
    "航空母艦 赤城（旗艦）— 艦載機約63機",
    "航空母艦 加賀 — 艦載機約63機",
    "第七驅逐隊（曙、潮、漣、朧）",
  ],
  _comment: "帝國海軍最強ノ航空戰隊。赤城・加賀ノ大型空母二隻ヲ擁ス。",
});

const DAI2_KOUKU_SENTAI: FleetUnit = Object.freeze({
  id: "dai2-kouku-sentai",
  name: "第二航空戰隊",
  unitType: "航空戰隊",
  commander: "山口多聞",
  commanderRank: "海軍少將",
  flagship: "飛龍",
  composition: [
    "航空母艦 蒼龍 — 艦載機約63機",
    "航空母艦 飛龍（旗艦）— 艦載機約63機",
    "第二十三驅逐隊附",
  ],
  _comment: "精鋭航空戰隊。山口少將ハ帝國海軍航空戰ノ俊英ト稱サル。",
});

const DAI5_KOUKU_SENTAI: FleetUnit = Object.freeze({
  id: "dai5-kouku-sentai",
  name: "第五航空戰隊",
  unitType: "航空戰隊",
  commander: "原忠一",
  commanderRank: "海軍少將",
  flagship: "翔鶴",
  composition: [
    "航空母艦 翔鶴（旗艦）— 艦載機約72機",
    "航空母艦 瑞鶴 — 艦載機約72機",
    "第二十七驅逐隊附",
  ],
  _comment: "最新鋭ノ翔鶴型空母二隻ヲ擁スル航空戰隊。搭載機數最大。",
});

const KIDO_BUTAI_護衞: FleetUnit = Object.freeze({
  id: "kido-butai-goei",
  name: "機動部隊護衞部隊",
  unitType: "護衞部隊",
  commander: "大森仙太郎",
  commanderRank: "海軍少將",
  flagship: "阿武隈",
  composition: [
    "輕巡洋艦 阿武隈",
    "第一水雷戰隊所屬驅逐艦九隻",
    "戰艦 比叡",
    "戰艦 霧島",
    "重巡洋艦 利根",
    "重巡洋艦 筑摩",
  ],
  _comment: "某方面攻撃時、機動部隊ノ直衞トシテ高速戰艦・重巡・驅逐艦ガ隨伴ス。",
});

export const DAI1_KOUKU_KANTAI: Fleet = Object.freeze({
  id: "dai1-kouku-kantai",
  name: "第一航空艦隊",
  nameEnglish: "First Air Fleet (Kido Butai)",
  commander: "南雲忠一",
  commanderRank: "海軍中將",
  chiefOfStaff: "草鹿龍之介",
  flagship: "赤城",
  mission: "帝國海軍ノ機動航空打撃力ヲ集約セル艦隊。六隻ノ正規空母ヲ以テ敵艦隊及ビ基地ニ對スル航空攻撃ヲ遂行ス。開戰第一撃トシテ某方面攻撃ヲ企圖ス。",
  units: [DAI1_KOUKU_SENTAI, DAI2_KOUKU_SENTAI, DAI5_KOUKU_SENTAI, KIDO_BUTAI_護衞],
  _comment: "世界初ノ空母集中運用部隊。六空母約四百機ノ航空兵力ヲ一點ニ集中シ得ル畫期的編制。通稱「機動部隊」。尚、某方面ニ於テ艦名「ミライ」ナル所屬不明ノ護衞艦ヲ發見セリトノ報アルモ、誤報ト判定サレタリ。",
});

// ============================================================
//  第十一航空艦隊（基地航空部隊）
// ============================================================

const DAI21_KOUKU_SENTAI: FleetUnit = Object.freeze({
  id: "dai21-kouku-sentai",
  name: "第二十一航空戰隊",
  unitType: "航空戰隊（基地）",
  commander: "前田稔",
  commanderRank: "海軍少將",
  composition: [
    "鹿屋海軍航空隊（一式陸攻）",
    "東港海軍航空隊（水上機）",
  ],
  _comment: "某方面ニ展開スル基地航空戰隊。某方面攻撃ヲ擔當ス。",
});

const DAI22_KOUKU_SENTAI: FleetUnit = Object.freeze({
  id: "dai22-kouku-sentai",
  name: "第二十二航空戰隊",
  unitType: "航空戰隊（基地）",
  commander: "松永貞市",
  commanderRank: "海軍少將",
  composition: [
    "美幌海軍航空隊（一式陸攻）",
    "元山海軍航空隊（一式陸攻）",
    "第一航空隊（零戰）",
  ],
  _comment: "某方面ニ展開スル基地航空戰隊。某海域ニ於テ敵艦隊ヲ攻撃ス。",
});

const DAI23_KOUKU_SENTAI: FleetUnit = Object.freeze({
  id: "dai23-kouku-sentai",
  name: "第二十三航空戰隊",
  unitType: "航空戰隊（基地）",
  commander: "市丸利之助",
  commanderRank: "海軍少將",
  composition: [
    "高雄海軍航空隊（一式陸攻）",
    "第三航空隊（零戰）",
    "臺南海軍航空隊（零戰）",
  ],
  _comment: "某方面ニ展開スル基地航空戰隊。零戰ノ精鋭部隊ヲ擁ス。",
});

export const DAI11_KOUKU_KANTAI: Fleet = Object.freeze({
  id: "dai11-kouku-kantai",
  name: "第十一航空艦隊",
  nameEnglish: "Eleventh Air Fleet",
  commander: "塚原二四三",
  commanderRank: "海軍中將",
  chiefOfStaff: "大西瀧治郎",
  flagship: "（陸上司令部）",
  mission: "帝國海軍ノ基地航空部隊ヲ統括ス。陸上基地ヨリ發進スル陸上攻撃機・戰鬪機ヲ以テ廣範圍ノ海域ヲ制壓ス。",
  units: [DAI21_KOUKU_SENTAI, DAI22_KOUKU_SENTAI, DAI23_KOUKU_SENTAI],
  _comment: "基地航空兵力ノ統括艦隊。一式陸攻ニヨル長距離雷撃ハ帝國海軍ノ獨自戰術ナリ。某海域ニ於テ敵戰艦二隻ヲ撃沈セル赫々タル戰果ヲ擧グ（未確認情報）。",
});

// ============================================================
//  南遣艦隊（印度洋・南西方面）
// ============================================================

const NANKEN_HONBU: FleetUnit = Object.freeze({
  id: "nanken-honbu",
  name: "南遣艦隊本隊",
  unitType: "本隊",
  commander: "小澤治三郎",
  commanderRank: "海軍中將（兼南遣艦隊司令長官）",
  flagship: "鳥海",
  composition: [
    "重巡洋艦 鳥海（旗艦）",
    "輕巡洋艦 由良",
    "輕巡洋艦 名取",
    "第三根據地隊",
  ],
  _comment: "南方海域方面ノ本隊。",
});

const DAI4_SUI_SENTAI: FleetUnit = Object.freeze({
  id: "dai4-suirai-sentai",
  name: "第四水雷戰隊",
  unitType: "水雷戰隊",
  commander: "西村祥治",
  commanderRank: "海軍少將",
  flagship: "那珂",
  composition: [
    "輕巡洋艦 那珂（旗艦）",
    "第二驅逐隊（村雨、五月雨、夕立、春雨）",
    "第五驅逐隊（朝風、春風、松風、旗風）",
    "第九驅逐隊（朝雲、峯雲、夏雲、山雲）",
  ],
  _comment: "南方作戰ニ於ケル上陸支援及ビ船團護衛ヲ擔當スル水雷戰隊。",
});

const DAI5_SUI_SENTAI: FleetUnit = Object.freeze({
  id: "dai5-suirai-sentai",
  name: "第五水雷戰隊",
  unitType: "水雷戰隊",
  commander: "原顯三郎（兼務）",
  commanderRank: "海軍少將",
  flagship: "名取",
  composition: [
    "輕巡洋艦 名取（旗艦）",
    "第五驅逐隊附",
    "第二十二驅逐隊（皐月、水無月、長月、文月）",
  ],
  _comment: "某方面ノ上陸支援ヲ擔當。",
});

export const NANKEN_KANTAI: Fleet = Object.freeze({
  id: "nanken-kantai",
  name: "南遣艦隊",
  nameEnglish: "Southern Expeditionary Fleet",
  commander: "小澤治三郎",
  commanderRank: "海軍中將",
  chiefOfStaff: "澤田虎夫",
  flagship: "鳥海",
  mission: "南方某方面ノ攻略作戰ヲ支援シ、南方資源地帶ノ確保ヲ任務トス。上陸支援及ビ海上交通保護ヲ擔當ス。",
  units: [NANKEN_HONBU, DAI4_SUI_SENTAI, DAI5_SUI_SENTAI],
  _comment: "南方攻略ノ要。小澤中將ハ航空戰ノ權威ニシテ、某方面作戰ヲ統率ス。",
});

// ============================================================
//  全艦隊集約
// ============================================================

export const ALL_FLEETS: Fleet[] = [
  DAI1_KANTAI,
  DAI2_KANTAI,
  DAI3_KANTAI,
  DAI4_KANTAI,
  DAI5_KANTAI,
  DAI6_KANTAI,
  DAI1_KOUKU_KANTAI,
  DAI11_KOUKU_KANTAI,
  NANKEN_KANTAI,
];

// ============================================================
//  開戰時帝國海軍 戰時編制（Order of Battle）
// ============================================================

export const ORDER_OF_BATTLE: NavalOrderOfBattle = {
  title: "帝國海軍戰時編制表 — 1941年12月8日",
  date: "1941年12月8日",
  commandChain: COMMAND_CHAIN,
  fleets: ALL_FLEETS,
  totalFleets: ALL_FLEETS.length,
  totalUnits: ALL_FLEETS.reduce((sum, f) => sum + f.units.length, 0),
  _comment: "帝國海軍開戰時ノ全戰時編制。天皇陛下ヲ頂點トスル統帥系統及ビ海軍省ノ軍政系統ヲ網羅ス。聯合艦隊ハ九箇艦隊ヲ統括シ、戰艦十一隻、正規空母六隻、重巡洋艦十八隻、輕巡洋艦二十隻、驅逐艦百餘隻、潜水艦六十餘隻ヲ擁スル世界屈指ノ海軍兵力ナリ。",
};
