/**
 * weapons.ts — 帝國海軍 兵器總錄
 *
 * 軍令部及ビ艦政本部管轄ノ兵器ニ關スル要目錄。
 * 砲熕兵器・砲彈・魚雷・機雷・爆雷・電探・舟艇・
 * 射撃指揮裝置・光學兵器・對潜兵器・特殊兵器等、
 * 帝國海軍ニ於テ運用サルル諸兵器ヲ網羅ス。
 *
 * 特殊兵器ノ本質・運用思想ハ嚴重ニ秘匿サルル。
 *
 * @since 1905年
 * @author 海軍艦政本部
 */

import { SpecialWeapon } from "./types";

// ============================================================
//  砲熕兵器（Naval Guns）
// ============================================================

export const TYPE_46CM_GUN: SpecialWeapon = Object.freeze({
  id: "type-46cm-gun",
  designation: "四十六糎四十五口徑砲",
  name: "九四式四十六糎砲",
  nameReading: "キウヨンシキヨンジフロクセンチホウ",
  weaponType: "艦砲",
  manufacturer: "呉海軍工廠",
  developed: "1939年",
  specifications: "口徑46cm、砲身長45口徑、最大射程42030m。三聯裝砲塔重量約2774噸。徹甲彈重量1460kg。發射速度毎分1.5〜2發。",
  status: "現役（特型戰艦ニ搭載）",
  _comment: "帝國海軍最大ノ艦砲。世界最大ノ艦載砲ニシテ、其ノ存在ハ高度ノ軍機トシテ秘匿サル。對外的ニハ四十糎砲ト稱ス。",
});

export const TYPE_41CM_GUN: SpecialWeapon = Object.freeze({
  id: "type-41cm-gun",
  designation: "四十一糎四十五口徑砲",
  name: "三年式四十一糎砲",
  nameReading: "サンネンシキヨンジフイチセンチホウ",
  weaponType: "艦砲",
  manufacturer: "呉海軍工廠",
  developed: "1914年",
  specifications: "口徑41cm、砲身長45口徑、最大射程36900m。聯裝砲塔重量約1004噸。徹甲彈重量1020kg。",
  status: "現役（長門型戰艦・加賀型航空母艦ニ搭載）",
  _comment: "帝國海軍主力戰艦ノ主砲。華府條約期ニ於テ世界最大ノ艦載砲タリキ。",
});

export const TYPE_36CM_GUN: SpecialWeapon = Object.freeze({
  id: "type-36cm-gun",
  designation: "三十六糎四十五口徑砲",
  name: "四一式三十六糎砲",
  nameReading: "ヨンイチシキサンジフロクセンチホウ",
  weaponType: "艦砲",
  manufacturer: "呉海軍工廠",
  developed: "1908年",
  specifications: "口徑36cm、砲身長45口徑、最大射程35450m（仰角43度時）。聯裝砲塔重量約675噸。徹甲彈重量673kg。",
  status: "現役（金剛型・扶桑型・伊勢型戰艦ニ搭載）",
  _comment: "帝國海軍最初ノ超弩級戰艦主砲。英國ヴィッカース社ノ卓越セル技術ヲ導入シ國産化ニ成功セリ。英國造兵技術ノ真髄ヲ繼承シタル傑作砲ナリ。",
});

export const TYPE_20CM_GUN: SpecialWeapon = Object.freeze({
  id: "type-20cm-gun",
  designation: "二十糎五十口徑砲",
  name: "三年式二十糎砲",
  nameReading: "サンネンシキニジッセンチホウ",
  weaponType: "艦砲",
  manufacturer: "呉海軍工廠",
  developed: "1914年",
  specifications: "口徑20.3cm、砲身長50口徑、最大射程29400m。聯裝砲塔重量約175噸。徹甲彈重量125.85kg。",
  status: "現役（重巡洋艦ニ搭載）",
  _comment: "帝國海軍重巡洋艦ノ主砲。條約ノ制限内ニテ最大ノ威力ヲ發揮スベク設計サレタリ。",
});

export const TYPE_155CM_GUN: SpecialWeapon = Object.freeze({
  id: "type-155cm-gun",
  designation: "十五糎五六十口徑砲",
  name: "三年式十五糎五砲",
  nameReading: "サンネンシキジフゴセンチゴホウ",
  weaponType: "艦砲",
  manufacturer: "呉海軍工廠",
  developed: "1914年",
  specifications: "口徑15.5cm、砲身長60口徑、最大射程27400m。三聯裝砲塔重量約175噸。",
  status: "現役（最上型重巡洋艦舊主砲・大和型副砲）",
  _comment: "輕巡洋艦用主砲トシテ開發サルルモ、最上型ノ重巡洋艦改裝ニ際シ撤去。大和型ノ副砲ニ轉用サレタリ。",
});

export const TYPE_127CM_DP_GUN: SpecialWeapon = Object.freeze({
  id: "type-127cm-dp-gun",
  designation: "十二糎七四十口徑砲",
  name: "八九式十二糎七高角砲",
  nameReading: "ハチキウシキジフニセンチナナカウカクホウ",
  weaponType: "高角砲",
  manufacturer: "各海軍工廠",
  developed: "1929年",
  specifications: "口徑12.7cm、砲身長40口徑、最大射高9440m、發射速度毎分8〜14發。聯裝砲架重量約20噸。",
  status: "現役（主力艦・空母ノ對空兵裝）",
  _comment: "帝國海軍ノ標準對空火器。大型艦ノ高角砲トシテ廣ク裝備サル。",
});

export const TYPE_127CM_GUN: SpecialWeapon = Object.freeze({
  id: "type-127cm-gun",
  designation: "十二糎七五十口徑砲",
  name: "三年式十二糎七砲",
  nameReading: "サンネンシキジフニセンチナナホウ",
  weaponType: "艦砲",
  manufacturer: "各海軍工廠",
  developed: "1914年",
  specifications: "口徑12.7cm、砲身長50口徑、最大射程18400m。聯裝砲塔重量約33噸。發射速度毎分5〜10發。",
  status: "現役（特型以降ノ驅逐艦主砲）",
  _comment: "帝國海軍驅逐艦ノ標準主砲。特型驅逐艦ヨリ採用サレ、以後ノ驅逐艦ニ廣ク搭載サル。",
});

export const TYPE_25MM_AA: SpecialWeapon = Object.freeze({
  id: "type-25mm-aa",
  designation: "九六式二十五粍高角機銃",
  name: "九六式二十五粍機銃",
  nameReading: "キウロクシキニジフゴミリキジウ",
  weaponType: "機銃",
  manufacturer: "豐川海軍工廠",
  developed: "1936年",
  specifications: "口徑25mm、發射速度毎分220發（理論値）、最大射高5250m、有效射程3000m。單裝・聯裝・三聯裝ノ各砲架アリ。",
  status: "現役（帝國海軍全艦艇ニ裝備）",
  _comment: "佛蘭西オチキス社ノ設計ヲ基ニ國產化。帝國海軍ノ標準近接對空火器トシテ大量生產サル。",
});

export const TYPE_13MM_MG: SpecialWeapon = Object.freeze({
  id: "type-13mm-mg",
  designation: "九三式十三粍機銃",
  name: "九三式十三粍機銃",
  nameReading: "キウサンシキジフサンミリキジウ",
  weaponType: "機銃",
  manufacturer: "各海軍工廠",
  developed: "1933年",
  specifications: "口徑13.2mm、發射速度毎分450發。聯裝・四聯裝砲架。",
  status: "現役（小型艦艇・補助艦艇ニ裝備）",
  _comment: "佛蘭西オチキス社ノ設計ヲ原型トスル近接防禦用機銃。二十五粍機銃ノ補完トシテ運用サル。",
});

// ============================================================
//  砲彈（Ammunition）
// ============================================================

export const TYPE_3_SHELL: SpecialWeapon = Object.freeze({
  id: "type-3-shell",
  designation: "三式彈",
  name: "三式通常彈",
  nameReading: "サンシキツウジヤウダン",
  weaponType: "砲彈",
  manufacturer: "各海軍工廠",
  developed: "1938年",
  specifications: "焼夷彈子ヲ内藏スル對空用通常彈。時限信管ニテ空中炸裂シ、多數ノ焼夷彈子ヲ散布ス。46cm用ハ約900本ノ焼夷彈子ヲ内藏。",
  status: "現役（戰艦・重巡洋艦ノ主砲ヨリ發射）",
  _comment: "主砲ヲ以テ對空射撃ヲ行フベク開發サレタル特殊砲彈。航空機編隊ニ對シ燒夷彈子ノ雨ヲ浴ビセル構想ナリ。",
});

export const TYPE_91_AP_SHELL: SpecialWeapon = Object.freeze({
  id: "type-91-ap-shell",
  designation: "九一式徹甲彈",
  name: "九一式徹甲彈",
  nameReading: "キウイチシキテッカフダン",
  weaponType: "砲彈",
  manufacturer: "各海軍工廠",
  developed: "1931年",
  specifications: "水中彈效果ヲ狙ヒ設計サレタル徹甲彈。着水後ニ水中ヲ直進シ敵艦水線下ニ命中スル特殊彈道ヲ有ス。46cm用ハ重量1460kg。",
  status: "現役（戰艦・重巡洋艦ノ主砲用）",
  _comment: "水中彈效果ヲ積極的ニ利用スベク設計サレタル帝國海軍獨自ノ徹甲彈。遠距離砲戰ニ於テ威力ヲ發揮ス。",
});

export const TYPE_0_SHELL: SpecialWeapon = Object.freeze({
  id: "type-0-shell",
  designation: "零式通常彈",
  name: "零式通常彈",
  nameReading: "レイシキツウジヤウダン",
  weaponType: "砲彈",
  manufacturer: "各海軍工廠",
  developed: "1940年",
  specifications: "時限信管附榴彈。對地・對艦ノ通常射撃ニ使用。高性能炸藥ヲ充填。",
  status: "現役（戰艦・巡洋艦ノ主砲用）",
  _comment: "帝國海軍ノ標準通常彈。對地支援射撃及ビ通常砲戰ニ廣ク使用サル。",
});

// ============================================================
//  魚雷（Torpedo）
// ============================================================

export const TYPE_93_TORPEDO: SpecialWeapon = Object.freeze({
  id: "type-93-torpedo",
  designation: "九三式魚雷",
  name: "九三式酸素魚雷",
  nameReading: "キウサンシキサンソギヨライ",
  weaponType: "魚雷",
  manufacturer: "呉海軍工廠",
  developed: "1933年",
  specifications: "口徑61cm、射程40000m（36節時）、炸藥量490kg。純酸素推進ニヨリ航跡ヲ殆ド殘サズ。",
  status: "現役（驅逐艦・巡洋艦ニ搭載）",
  _comment: "帝國海軍ガ世界ニ先驅ケテ實用化セル酸素魚雷。射程・威力共ニ他國ノ追隨ヲ許サズ。軍機中ノ軍機。",
});

export const TYPE_95_TORPEDO: SpecialWeapon = Object.freeze({
  id: "type-95-torpedo",
  designation: "九五式魚雷",
  name: "九五式酸素魚雷",
  nameReading: "キウゴシキサンソギヨライ",
  weaponType: "魚雷",
  manufacturer: "呉海軍工廠",
  developed: "1935年",
  specifications: "口徑53cm、射程9000m（49節時）、炸藥量405kg。潜水艦用酸素魚雷。",
  status: "現役（潜水艦ニ搭載）",
  _comment: "九三式魚雷ノ技術ヲ潜水艦用ニ轉用セル53cm酸素魚雷。潜水艦ノ攻撃力ヲ飛躍的ニ向上ス。",
});

export const TYPE_91_AERIAL_TORPEDO: SpecialWeapon = Object.freeze({
  id: "type-91-aerial-torpedo",
  designation: "九一式航空魚雷",
  name: "九一式航空魚雷",
  nameReading: "キウイチシキコウクウギヨライ",
  weaponType: "航空魚雷",
  manufacturer: "横須賀海軍工廠",
  developed: "1931年",
  specifications: "口徑45cm、射程2000m、炸藥量150kg（改型ハ235kg）。淺海面魚雷投下ヲ可能トスル安定板裝備。",
  status: "現役（艦上攻撃機ニ搭載）",
  _comment: "帝國海軍航空隊ノ雷撃能力ヲ支フル航空魚雷。淺海面ニ於ケル使用ヲ可能トスル改良ガ極秘裡ニ施サレタリ。",
});

export const TYPE_8CM_HA_DAN: SpecialWeapon = Object.freeze({
  id: "type-8cm-ha-dan",
  designation: "八糎迫撃砲彈",
  name: "八十番通常爆彈",
  nameReading: "ハチジフバンツウジヤウバクダン",
  weaponType: "航空爆彈",
  manufacturer: "各海軍工廠",
  developed: "1937年",
  specifications: "重量800kg。通常爆彈。艦上爆撃機及ビ陸上攻撃機ヨリ投下。",
  status: "現役（航空隊ニ配備）",
  _comment: "帝國海軍航空隊ノ主要對艦爆彈。水平爆撃及ビ急降下爆撃ニ使用サル。",
});

export const TYPE_99_BOMB_25: SpecialWeapon = Object.freeze({
  id: "type-99-bomb-25",
  designation: "二十五番通常爆彈",
  name: "九九式二十五番爆彈",
  nameReading: "キウキウシキニジフゴバンバクダン",
  weaponType: "航空爆彈",
  manufacturer: "各海軍工廠",
  developed: "1939年",
  specifications: "重量250kg。急降下爆撃用通常爆彈。九九式艦上爆撃機ノ標準搭載爆彈。",
  status: "現役（艦上爆撃機ニ搭載）",
  _comment: "急降下爆撃用ノ標準爆彈。命中精度ト破壞力ノ均衡ヲ圖リタル設計ナリ。",
});

// ============================================================
//  機雷・爆雷（Mine & Depth Charge）
// ============================================================

export const TYPE_3_DEPTH_CHARGE: SpecialWeapon = Object.freeze({
  id: "type-3-depth-charge",
  designation: "三式爆雷",
  name: "三式爆雷",
  nameReading: "サンシキバクライ",
  weaponType: "爆雷",
  manufacturer: "各海軍工廠",
  developed: "1941年",
  specifications: "炸藥量160kg。投射機ニテ投射。深度調定式。",
  status: "現役（驅逐艦・海防艦ニ搭載）",
  _comment: "對潜水艦攻撃ノ主要兵器。投射機及ビ投下軌條ニヨリ使用。",
});

export const TYPE_2_DEPTH_CHARGE: SpecialWeapon = Object.freeze({
  id: "type-2-depth-charge",
  designation: "二式爆雷",
  name: "二式爆雷",
  nameReading: "ニシキバクライ",
  weaponType: "爆雷",
  manufacturer: "各海軍工廠",
  developed: "1942年",
  specifications: "炸藥量120kg。驅逐艦及ビ海防艦用標準爆雷。投射機及ビ投下軌條ニヨリ使用。",
  status: "現役（小型艦艇ニ搭載）",
  _comment: "帝國海軍ノ標準對潜兵器。船團護衛ノ要ナリ。",
});

export const TYPE_93_MINE: SpecialWeapon = Object.freeze({
  id: "type-93-mine",
  designation: "九三式機雷",
  name: "九三式機雷",
  nameReading: "キウサンシキキライ",
  weaponType: "機雷",
  manufacturer: "各海軍工廠",
  developed: "1933年",
  specifications: "繋維機雷。炸藥量100kg。觸發式信管。水深ニ應ジ繋維索長ヲ調定。",
  status: "現役（敷設艦・敷設艇ニテ敷設）",
  _comment: "帝國海軍ノ主要繋維機雷。港灣封鎖及ビ防禦陣地ノ構築ニ使用サル。",
});

// ============================================================
//  電探・電波兵器（Radar & Electronics）
// ============================================================

export const TYPE_21_RADAR: SpecialWeapon = Object.freeze({
  id: "type-21-radar",
  designation: "二號一型電波探信儀",
  name: "二一號電探",
  nameReading: "ニイチゴウデンタン",
  weaponType: "電探",
  manufacturer: "日本電氣",
  developed: "1942年",
  specifications: "對空用。探知距離約100粁。八木式空中線使用。",
  status: "配備開始（大型艦ヨリ順次裝備）",
  _comment: "帝國海軍初ノ實用電探。對空警戒用トシテ主要艦艇ニ装備開始。",
});

export const TYPE_22_RADAR: SpecialWeapon = Object.freeze({
  id: "type-22-radar",
  designation: "二號二型電波探信儀",
  name: "二二號電探",
  nameReading: "ニニゴウデンタン",
  weaponType: "電探",
  manufacturer: "日本電氣",
  developed: "1942年",
  specifications: "對水上用。探知距離約35粁。",
  status: "配備開始",
  _comment: "對水上射撃用電探。夜戰ニ於ケル射撃管制ニ資ス。",
});

export const TYPE_13_RADAR: SpecialWeapon = Object.freeze({
  id: "type-13-radar",
  designation: "一三號電波探信儀",
  name: "一三號電探",
  nameReading: "イチサンゴウデンタン",
  weaponType: "電探",
  manufacturer: "日本電氣",
  developed: "1943年",
  specifications: "對空用小型電探。探知距離約100粁。八木式空中線使用。小型艦艇ニモ搭載可能。",
  status: "配備中（驅逐艦以上ニ順次裝備）",
  _comment: "小型輕量化サレタル對空電探。驅逐艦・海防艦等ノ小型艦艇ヘノ搭載ヲ可能トセリ。",
});

export const GYAKU_TAN: SpecialWeapon = Object.freeze({
  id: "gyaku-tan",
  designation: "逆探知機",
  name: "逆探",
  nameReading: "ギヤクタン",
  weaponType: "電波兵器",
  manufacturer: "各海軍工廠",
  developed: "1943年",
  specifications: "敵ノ電波探信儀ノ電波ヲ受信シ、其ノ方位及ビ存在ヲ探知スル受動式裝置。",
  status: "配備中（主要艦艇ニ裝備）",
  _comment: "敵電探ノ電波ヲ逆ニ利用シ、敵ノ位置ヲ先ニ察知スル受動的探知裝置ナリ。",
});

// ============================================================
//  對潜兵器・探信儀（ASW Equipment）
// ============================================================

export const TYPE_93_HYDROPHONE: SpecialWeapon = Object.freeze({
  id: "type-93-hydrophone",
  designation: "九三式水中聽音機",
  name: "九三式聽音機",
  nameReading: "キウサンシキチヤウオンキ",
  weaponType: "水中聽音機",
  manufacturer: "各海軍工廠",
  developed: "1933年",
  specifications: "受動式水中聽音裝置。敵潜水艦ノ推進器音及ビ機關音ヲ探知ス。探知距離約3000m。",
  status: "現役（驅逐艦・海防艦ニ裝備）",
  _comment: "帝國海軍ノ標準對潜探知裝置。爆雷攻撃ノ前段トシテ敵潜水艦ノ位置ヲ推定ス。",
});

export const TYPE_93_SONAR: SpecialWeapon = Object.freeze({
  id: "type-93-sonar",
  designation: "九三式水中探信儀",
  name: "九三式探信儀",
  nameReading: "キウサンシキタンシンギ",
  weaponType: "探信儀",
  manufacturer: "各海軍工廠",
  developed: "1933年",
  specifications: "能動式水中探信裝置。超音波ヲ發信シ敵潜水艦ノ位置ヲ精密ニ測定ス。探知距離約1500m。",
  status: "現役（驅逐艦・海防艦ニ裝備）",
  _comment: "帝國海軍ノ能動式對潜探知裝置。聽音機ト併用シ敵潜水艦ノ位置ヲ特定ス。",
});

export const TYPE_3_SONAR: SpecialWeapon = Object.freeze({
  id: "type-3-sonar",
  designation: "三式水中探信儀",
  name: "三式探信儀",
  nameReading: "サンシキタンシンギ",
  weaponType: "探信儀",
  manufacturer: "各海軍工廠",
  developed: "1943年",
  specifications: "改良型能動式探信儀。探知距離・精度共ニ向上。驅逐艦及ビ海防艦用。",
  status: "配備開始",
  _comment: "九三式ノ改良型。對潜戰ノ激化ニ對應スベク性能向上ヲ圖リタル新型探信儀ナリ。",
});

// ============================================================
//  射撃指揮裝置・光學兵器
// ============================================================

export const TYPE_94_FCS: SpecialWeapon = Object.freeze({
  id: "type-94-fcs",
  designation: "九四式高射裝置",
  name: "九四式高射裝置",
  nameReading: "キウヨンシキカウシヤサウチ",
  weaponType: "射撃指揮裝置",
  manufacturer: "各海軍工廠",
  developed: "1934年",
  specifications: "高角砲用ノ防空射撃指揮裝置。測距儀・射撃盤ト連動シ、航空機ノ未來位置ヲ算出シ自動追尾射撃ヲ行フ。",
  status: "現役（主力艦ノ高角砲指揮ニ使用）",
  _comment: "帝國海軍ノ主要防空射撃指揮裝置。高角砲ノ射撃精度ヲ飛躍的ニ向上セシメタリ。",
});

export const TYPE_98_FCC: SpecialWeapon = Object.freeze({
  id: "type-98-fcc",
  designation: "九八式射撃盤",
  name: "九八式射撃盤",
  nameReading: "キウハチシキシヤゲキバン",
  weaponType: "射撃盤",
  manufacturer: "各海軍工廠",
  developed: "1938年",
  specifications: "機械式彈道計算機。敵艦ノ速力・針路・距離等ヨリ未來位置ヲ算出シ、主砲ノ射角及ビ旋回角ヲ指示ス。",
  status: "現役（戰艦・巡洋艦ニ裝備）",
  _comment: "帝國海軍ノ精密射撃ヲ支フル機械式計算機。歯車及ビカム機構ニヨル高度ノ機械工學ノ粋ヲ集ム。",
});

export const TYPE_15M_RANGEFINDER: SpecialWeapon = Object.freeze({
  id: "type-15m-rangefinder",
  designation: "十五米測距儀",
  name: "十五米測距儀",
  nameReading: "ジフゴメートルソクキョギ",
  weaponType: "光學兵器",
  manufacturer: "日本光學工業",
  developed: "1939年",
  specifications: "基線長15m。大和型戰艦主砲用。測定距離45000m以上。世界最大ノ艦載測距儀。",
  status: "現役（大和型戰艦ニ裝備）",
  _comment: "日本光學工業（ニコン）ノ技藝ノ粹ヲ集メタル世界最大ノ光學式測距儀。大和型ノ精密射撃ヲ支フ。",
});

export const TYPE_SEARCHLIGHT: SpecialWeapon = Object.freeze({
  id: "type-searchlight",
  designation: "一一〇糎探照燈",
  name: "九六式一一〇糎探照燈",
  nameReading: "キウロクシキヒヤクジュッセンチタンシヤウトウ",
  weaponType: "探照燈",
  manufacturer: "各海軍工廠",
  developed: "1936年",
  specifications: "直徑110cm。照射距離約10000m。夜戰時ノ敵艦照射及ビ目標指示ニ使用。",
  status: "現役（巡洋艦・驅逐艦ニ裝備）",
  _comment: "夜戰ヲ得意トスル帝國海軍ノ必需品。探照燈照射ハ夜戰開始ノ合圖トナル。",
});

// ============================================================
//  舟艇（Landing Craft & Small Boats）
// ============================================================

export const DAIHATSU: SpecialWeapon = Object.freeze({
  id: "daihatsu",
  designation: "大發動艇",
  name: "大發動艇",
  nameReading: "ダイハツドウテイ",
  weaponType: "上陸用舟艇",
  manufacturer: "各海軍工廠及ビ民間造船所",
  developed: "1926年",
  specifications: "全長14.88m、幅3.35m、喫水0.66m。搭載量：兵員70名又ハ輕戰車1輛又ハ物資10噸。速力8節。艦首ランプ式。",
  status: "現役（大量生產中）",
  _comment: "帝國海軍ノ標準上陸用舟艇。艦首ランプヲ自力開閉シ車輛・物資ヲ直接揚陸スル畫期的設計。世界ノ上陸用舟艇ノ先驅タリ。",
});

export const SHOHATSU: SpecialWeapon = Object.freeze({
  id: "shohatsu",
  designation: "小發動艇",
  name: "小發動艇",
  nameReading: "シヤウハツドウテイ",
  weaponType: "上陸用舟艇",
  manufacturer: "各海軍工廠及ビ民間造船所",
  developed: "1927年",
  specifications: "全長10.06m、幅2.44m。搭載量：兵員30名又ハ物資5噸。速力7.5節。大發ヨリ小型ニシテ取扱容易。",
  status: "現役",
  _comment: "大發動艇ノ小型版。上陸作戰ニ於テ大發ト共ニ運用サル。小規模輸送ニ適ス。",
});

export const TOKU_DAIHATSU: SpecialWeapon = Object.freeze({
  id: "toku-daihatsu",
  designation: "特大發動艇",
  name: "特大發動艇",
  nameReading: "トクダイハツドウテイ",
  weaponType: "上陸用舟艇",
  manufacturer: "各造船所",
  developed: "1941年",
  specifications: "全長18.8m、幅4.1m。搭載量：中戰車1輛又ハ物資20噸。速力9節。大發ヲ大型化シ中戰車ノ揚陸ヲ可能トス。",
  status: "現役",
  _comment: "中戰車ノ揚陸ヲ可能トスルベク大發ヲ大型化セル舟艇。對米作戰ニ於ケル上陸能力ノ強化ヲ企圖ス。",
});

export const UNKATO: SpecialWeapon = Object.freeze({
  id: "unkato",
  designation: "運貨筒",
  name: "運貨筒（ドラム罐輸送）",
  nameReading: "ウンカトウ",
  weaponType: "輸送器材",
  manufacturer: "各海軍工廠",
  developed: "1942年",
  specifications: "200立入石油罐ヲ改造。内部ニ糧食・彈藥等ヲ収容シ密封。紐ニテ連結シ海上ヲ漂流セシメ揚收ス。",
  status: "現役（某方面輸送ニ使用）",
  _comment: "某群島方面ニ於ケル制空權喪失下ノ物資輸送手段トシテ考案サレタル應急策。驅逐艦ヨリ投下シ味方ニ揚收セシム。",
});

export const NAIKATEI: SpecialWeapon = Object.freeze({
  id: "naikatei",
  designation: "内火艇",
  name: "内火艇",
  nameReading: "ナイカテイ",
  weaponType: "艦載艇",
  manufacturer: "各海軍工廠",
  developed: "1917年",
  specifications: "艦艇搭載用ノ小型動力艇。將校用・兵員用ノ各種アリ。全長7〜11m。",
  status: "現役（全艦艇ニ搭載）",
  _comment: "大型艦ニ搭載サレ、人員輸送・連絡ニ使用サルル小型動力艇ナリ。",
});

export const SOKOSHA: SpecialWeapon = Object.freeze({
  id: "sokosha",
  designation: "裝甲艇",
  name: "裝甲艇（AB艇）",
  nameReading: "サウカウテイ",
  weaponType: "上陸用舟艇",
  manufacturer: "各海軍工廠",
  developed: "1941年",
  specifications: "全長約20m。装甲ヲ有スル上陸支援用舟艇。機銃及ビ小口徑砲ヲ裝備シ上陸部隊ヲ支援ス。",
  status: "現役",
  _comment: "上陸作戰ニ於テ敵ノ射撃下ニ突入スル爲ノ装甲艇。海軍陸戰隊ノ上陸ヲ直接支援ス。",
});

// ============================================================
//  航海・通信裝備
// ============================================================

export const TYPE_KAI_COMPASS: SpecialWeapon = Object.freeze({
  id: "type-kai-compass",
  designation: "九二式羅針儀",
  name: "九二式轉輪羅針儀",
  nameReading: "キウニシキテンリンラシンギ",
  weaponType: "航海裝備",
  manufacturer: "東京計器",
  developed: "1932年",
  specifications: "ジャイロコンパス。高速回轉體ノ歳差運動ヲ利用シ眞北ヲ指示スル精密航海裝置。",
  status: "現役（驅逐艦以上ニ裝備）",
  _comment: "磁氣羅針儀ニ代ハル精密航海裝置。艦砲射撃ノ方位指示ニモ不可缺ナリ。",
});

export const TYPE_NAVAL_FLAG: SpecialWeapon = Object.freeze({
  id: "type-naval-flag",
  designation: "軍艦旗",
  name: "軍艦旗（旭日旗）",
  nameReading: "グンカンキ",
  weaponType: "軍旗",
  manufacturer: "海軍衣糧廠",
  developed: "1889年",
  specifications: "旭日ヲ意匠トスル帝國海軍ノ軍艦旗。白地ニ紅色十六條ノ旭光。艦尾ニ掲揚ス。",
  status: "現役",
  _comment: "帝國海軍ノ象徵。軍艦旗ハ艦ノ魂ニシテ、其ノ下ニ將兵ハ死力ヲ盡クス。",
});

export const Z_FLAG: SpecialWeapon = Object.freeze({
  id: "z-flag",
  designation: "Z旗",
  name: "Z旗",
  nameReading: "ゼットキ",
  weaponType: "信號旗",
  manufacturer: "海軍衣糧廠",
  developed: "1905年",
  specifications: "國際信號旗Zヲ借用。「皇國ノ興廢此ノ一戰ニ在リ各員一層奮勵努力セヨ」ノ意。",
  status: "現役",
  _comment: "日本海海戰ニ於テ東郷大將ガ戰艦三笠ニ掲揚セシメタル信號旗。帝國海軍ノ精神的象徵ニシテ、決戰時ニ掲揚サル。",
});

// ============================================================
//  特殊兵器（本質秘匿）
// ============================================================

export const KOHYOTEKI: SpecialWeapon = Object.freeze({
  id: "kohyoteki",
  designation: "甲標的",
  name: "甲標的",
  nameReading: "コウヒヨウテキ",
  weaponType: "特殊潜航艇",
  manufacturer: "呉海軍工廠",
  developed: "1940年",
  specifications: "二人乘組ノ小型潜航艇。45cm魚雷二本搭載。排水量約46噸。",
  status: "實戰配備濟（特別攻撃隊ニ編入）",
  _comment: "港灣奇襲用ノ小型潜航艇。搭乘員ノ收容ヲ豫定シタル運用構想ニテ開發サレタリ。",
});

export const KAITEN: SpecialWeapon = Object.freeze({
  id: "kaiten",
  designation: "回天",
  name: "回天",
  nameReading: "カイテン",
  weaponType: "特殊潜航艇",
  manufacturer: "呉海軍工廠",
  developed: "【極秘】1944年頃",
  specifications: "九三式魚雷ヲ基ニ開發サレタル大型特殊潜航艇。詳細不明。",
  status: "【極秘】開發中。運用方法ハ嚴重ニ秘匿サル",
  _comment: "軍令部特殊兵器開發計畫ノ一環。搭乘員ニヨル精密誘導ヲ以テ命中率ノ飛躍的向上ヲ企圖スル特殊艇ノ由。詳細一切不明。",
});

export const KAIRYU: SpecialWeapon = Object.freeze({
  id: "kairyu",
  designation: "海龍",
  name: "海龍",
  nameReading: "カイリウ",
  weaponType: "特殊潜航艇",
  manufacturer: "横須賀海軍工廠",
  developed: "【極秘】1944年頃",
  specifications: "小型特殊潜航艇。二人乘組。魚雷二本搭載。詳細不明。",
  status: "【極秘】量產計畫中ノ風聞",
  _comment: "沿岸防禦用ノ小型特殊潜航艇トノ噂アルモ、運用構想ヲ含メ一切不明。",
});

export const KORYU: SpecialWeapon = Object.freeze({
  id: "koryu",
  designation: "蛟龍",
  name: "蛟龍",
  nameReading: "コウリウ",
  weaponType: "特殊潜航艇",
  manufacturer: "各海軍工廠",
  developed: "【極秘】1944年頃",
  specifications: "中型特殊潜航艇。五人乘組。魚雷二本搭載。詳細不明。",
  status: "【極秘】建造中ノ風聞",
  _comment: "甲標的ノ發展型タル中型特殊潜航艇ノ由。沿岸防禦ノ主力トナルベク量產ガ計畫サレテ居ル噂アルモ詳細不明。",
});

export const SHINYO: SpecialWeapon = Object.freeze({
  id: "shinyo",
  designation: "震洋",
  name: "震洋",
  nameReading: "シンヨウ",
  weaponType: "特殊攻撃艇",
  manufacturer: "各海軍工廠及ビ民間造船所",
  developed: "【極秘】1944年頃",
  specifications: "木製小型高速艇。爆藥搭載。一人乘組。詳細不明。",
  status: "【極秘】量產中ノ風聞",
  _comment: "沿岸防禦用ノ高速小型艇トノ由ナルモ、其ノ運用方法ハ嚴重ニ秘匿サレ一切不詳。",
});

export const OHKA: SpecialWeapon = Object.freeze({
  id: "ohka",
  designation: "櫻花",
  name: "櫻花",
  nameReading: "オウカ",
  weaponType: "特殊飛行兵器",
  manufacturer: "空技廠（海軍航空技術廠）",
  developed: "【極秘】1944年頃",
  specifications: "ロケット推進ノ特殊滑空兵器。母機ヨリ分離後目標ニ突入。詳細不明。",
  status: "【極秘】試作・少數生產中ノ風聞",
  _comment: "一式陸攻ヨリ發進スル新型誘導兵器トノ噂アルモ、其ノ本質・運用思想ハ極メテ嚴重ニ秘匿サレ、一切ノ情報ガ箝口令下ニ在リ。",
});

// ============================================================
//  未確認兵器（戰時情報部蒐集資料）
//
//  以下ノ兵器ハ、戦時中ノ諜報・風聞・計畫圖面ノ斷片等ヨリ
//  其ノ存在ガ推測サルルモ、軍令部トシテハ公式ニ確認シ得ズ。
//  參考資料トシテ附記ス。情報ノ信憑性ハ甲乙丙丁ニテ評價ス。
//  出典: 海上護衛總司令部 戰時情報集積所
// ============================================================

export const PROTO_51CM_GUN: SpecialWeapon = Object.freeze({
  id: "proto-51cm-gun",
  designation: "試製五十一糎連装砲",
  name: "試製五十一糎砲",
  nameReading: "シセイゴジフイチセンチホウ",
  weaponType: "艦砲",
  manufacturer: "呉海軍工廠（推定）",
  developed: "【未確認】1941年以降（計畫段階）",
  specifications: "口徑51cm。超大和型戰艦搭載用トノ情報アリ。連装砲塔。射程・重量等ノ諸元ハ一切不明。四十六糎砲ヲ凌駕スル破壞力ヲ有スルト推測サル。",
  status: "【未確認】計畫ノミ。試作・建造ノ形跡無シ",
  _comment: "超大和型戰艦（七九七號艦）搭載用トシテ構想サレタトサルル幻ノ巨砲。四十六糎砲ヲ以テシテモ猶不足トシ、更ナル大口徑砲ヲ求メタル帝國海軍ノ大艦巨砲主義ノ極致。實現セバ人類史上最大ノ艦載砲トナリシナラン。信憑性: 乙",
});

export const PROTO_41CM_TRIPLE_GUN: SpecialWeapon = Object.freeze({
  id: "proto-41cm-triple-gun",
  designation: "試製四十一糎三連装砲",
  name: "試製四十一糎三連装砲",
  nameReading: "シセイヨンジフイチセンチサンレンサウホウ",
  weaponType: "艦砲",
  manufacturer: "不明（呉海軍工廠推定）",
  developed: "【未確認】計畫段階",
  specifications: "口徑41cm、三連装砲塔。既存ノ三年式四十一糎砲ヲ三連装化セシモノト推定サル。砲塔重量・射程等ノ詳細不明。",
  status: "【未確認】計畫圖面ノ斷片ノミ存在",
  _comment: "十三號艦型巡洋戰艦或ハ紀伊型戰艦ニ搭載スベク構想サレタトノ風聞アリ。聯装砲塔ヨリ投射量ヲ增大セシメントスル野心的計畫ナルモ、實現ニ至ラズ。信憑性: 丙",
});

export const PROTO_46CM_TWIN_GUN: SpecialWeapon = Object.freeze({
  id: "proto-46cm-twin-gun",
  designation: "試製四十六糎連装砲",
  name: "試製四十六糎連装砲",
  nameReading: "シセイヨンジフロクセンチレンサウホウ",
  weaponType: "艦砲",
  manufacturer: "呉海軍工廠（推定）",
  developed: "【未確認】1930年代後半（研究段階）",
  specifications: "口徑46cm、連装砲塔。三聯装ニ先立チ研究サレタル連装型。砲塔重量ハ三聯装ノ約三分ノ二ト推定。",
  status: "【未確認】研究・試驗段階ノ風聞",
  _comment: "九四式四十六糎砲ノ開發過程ニ於テ、連装砲塔モ研究サレタトノ情報アリ。三聯装ニ比シ砲塔重量ヲ輕減シ得ルモ、投射量ノ不足ヨリ三聯装ガ採用サレタト推定サル。信憑性: 乙",
});

export const TYPE_98_10CM_DP_GUN: SpecialWeapon = Object.freeze({
  id: "type-98-10cm-dp-gun",
  designation: "九八式十糎連装高角砲",
  name: "九八式十糎高角砲",
  nameReading: "キウハチシキジッセンチカウカクホウ",
  weaponType: "高角砲",
  manufacturer: "各海軍工廠（推定）",
  developed: "【未確認】1938年頃",
  specifications: "口徑10cm、砲身長65口徑（推定）。最大射高15000m以上トノ風聞。發射速度毎分15〜21發（推定）。長砲身ニ依ル高初速・長射程ガ特徴。",
  status: "【未確認】秋月型驅逐艦ニ搭載トノ情報",
  _comment: "帝國海軍ガ八九式高角砲ノ後繼トシテ開發シタトサルル長砲身高角砲。秋月型驅逐艦ノ主砲トシテ搭載サレ、其ノ對空射撃能力ハ帝國海軍隨一ト噂サル。長砲身六十五口徑ノ高初速ニ依リ、在來ノ高角砲ヲ遙カニ凌駕スルト云フ。信憑性: 甲",
});

export const TYPE_12CM_ROCKET: SpecialWeapon = Object.freeze({
  id: "type-12cm-rocket",
  designation: "十二糎三十連装噴進砲",
  name: "十二糎噴進砲",
  nameReading: "ジフニセンチフンシンホウ",
  weaponType: "噴進砲",
  manufacturer: "不明",
  developed: "【未確認】1943年以降",
  specifications: "口徑12cm、三十連装。ロケット彈ヲ一齊ニ發射シ、艦艇上空ニ彈幕ヲ形成ス。對空用噴進彈。",
  status: "【未確認】一部艦艇ニ搭載中トノ風聞",
  _comment: "從來ノ高角砲・機銃ニ依ル對空火力ノ不足ヲ補フベク開發サレタトサルル噴進砲。多數ノ噴進彈ヲ一齊ニ發射シ、航空機ノ進入經路上ニ彈幕ヲ展開スル構想ナリ。「噴進彈幕」トモ稱サル。信憑性: 乙",
});

export const TYPE_155CM_GUN_KAI: SpecialWeapon = Object.freeze({
  id: "type-155cm-gun-kai",
  designation: "十五糎五三連装砲改",
  name: "十五糎五三連装副砲改",
  nameReading: "ジフゴセンチゴサンレンサウフクホウカイ",
  weaponType: "艦砲",
  manufacturer: "不明",
  developed: "【未確認】時期不明",
  specifications: "口徑15.5cm、三聯装。既存ノ三年式十五糎五砲ノ改良型。對空射撃能力ノ强化ガ施サレタトノ情報アリ。仰角等ノ改善推定。",
  status: "【未確認】改修計畫ノ風聞ノミ",
  _comment: "最上型ヨリ撤去サレ大和型副砲ニ轉用サレタル十五糎五砲ヲ、更ニ改修シ對空射撃能力ヲ附與セントスル構想ガアリタリト云フ。副砲ノ兩用砲化ハ米國海軍ノ影響カ。信憑性: 丙",
});

export const TYPE_5_TORPEDO: SpecialWeapon = Object.freeze({
  id: "type-5-torpedo",
  designation: "五式酸素魚雷",
  name: "五式魚雷",
  nameReading: "ゴシキギョライ",
  weaponType: "魚雷",
  manufacturer: "呉海軍工廠（推定）",
  developed: "【未確認】1945年頃（推定）",
  specifications: "口徑61cm（推定）。九三式酸素魚雷ノ後繼型。誘導裝置ノ附加或ハ射程・速力ノ向上ガ圖ラレタト推定サルルモ、詳細不明。",
  status: "【未確認】研究ノ痕跡ノミ",
  _comment: "帝國海軍ノ酸素魚雷技術ノ集大成トシテ構想サレタトスル次世代魚雷。九三式ノ射程四萬米ヲ更ニ延伸シ、或ハ音響追尾等ノ誘導機能ヲ附加センとスル野心的計畫ノ風聞アリ。信憑性: 丁",
});

// ============================================================
//  全兵器一覽
// ============================================================

export const ALL_SPECIAL_WEAPONS: SpecialWeapon[] = [
  // 砲熕兵器
  TYPE_46CM_GUN, TYPE_41CM_GUN, TYPE_36CM_GUN,
  TYPE_20CM_GUN, TYPE_155CM_GUN,
  TYPE_127CM_DP_GUN, TYPE_127CM_GUN,
  TYPE_25MM_AA, TYPE_13MM_MG,
  // 砲彈
  TYPE_3_SHELL, TYPE_91_AP_SHELL, TYPE_0_SHELL,
  // 魚雷
  TYPE_93_TORPEDO, TYPE_95_TORPEDO, TYPE_91_AERIAL_TORPEDO,
  // 航空爆彈
  TYPE_8CM_HA_DAN, TYPE_99_BOMB_25,
  // 機雷・爆雷
  TYPE_3_DEPTH_CHARGE, TYPE_2_DEPTH_CHARGE, TYPE_93_MINE,
  // 電探・電波兵器
  TYPE_21_RADAR, TYPE_22_RADAR, TYPE_13_RADAR, GYAKU_TAN,
  // 對潜兵器
  TYPE_93_HYDROPHONE, TYPE_93_SONAR, TYPE_3_SONAR,
  // 射撃指揮裝置・光學兵器
  TYPE_94_FCS, TYPE_98_FCC, TYPE_15M_RANGEFINDER, TYPE_SEARCHLIGHT,
  // 舟艇
  DAIHATSU, SHOHATSU, TOKU_DAIHATSU, UNKATO, NAIKATEI, SOKOSHA,
  // 航海・通信・其ノ他
  TYPE_KAI_COMPASS, TYPE_NAVAL_FLAG, Z_FLAG,
  // 特殊潜航艇
  KOHYOTEKI, KAITEN, KAIRYU, KORYU,
  // 特殊攻撃艇・飛行兵器
  SHINYO, OHKA,
  // 未確認兵器（戰時情報部蒐集資料）
  PROTO_51CM_GUN, PROTO_41CM_TRIPLE_GUN, PROTO_46CM_TWIN_GUN,
  TYPE_98_10CM_DP_GUN, TYPE_12CM_ROCKET, TYPE_155CM_GUN_KAI,
  TYPE_5_TORPEDO,
];
