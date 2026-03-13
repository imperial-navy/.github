/**
 * aircraft.ts — 帝國海軍 航空兵器錄
 *
 * 帝國海軍航空本部管轄ノ航空機ニ關スル要目錄。
 * 艦上機・水上機・陸上機ヲ此處ニ編纂ス。
 * 時局下ノ新型機ハ機密區分「極秘」ニ指定サル。
 *
 * @since 1922年
 * @author 海軍航空本部
 */

import { Aircraft } from "./types";

// ============================================================
//  艦上戰鬪機（Carrier Fighter）
// ============================================================

export const A5M: Aircraft = Object.freeze({
  id: "a5m",
  designation: "九六式艦上戰鬪機",
  name: "九六式艦戰",
  nameReading: "キウロクシキカンジヤウセントウキ",
  role: "艦上戰鬪機",
  manufacturer: "三菱重工業",
  firstFlight: "1935年",
  speed: 432,
  range: 1200,
  armament: "七粍七機銃 二挺",
  crew: 1,
  status: "現役（第一線部隊配備）",
  _comment: "世界初ノ全金屬單葉艦上戰鬪機。支那事變ニテ空中戰鬪ノ優秀性ヲ實證セリ。",
});

export const A6M: Aircraft = Object.freeze({
  id: "a6m",
  designation: "零式艦上戰鬪機",
  name: "零戰",
  nameReading: "レイセン",
  role: "艦上戰鬪機",
  manufacturer: "三菱重工業",
  firstFlight: "1939年",
  speed: 533,
  range: 3350,
  armament: "二十粍機銃 二挺、七粍七機銃 二挺",
  crew: 1,
  status: "主力戰鬪機（全航空隊ニ配備中）",
  _comment: "帝國海軍航空戰力ノ中核ヲ擔フ傑作機。長大ナル航續距離ト優レタル格鬪性能ヲ有ス。",
});

export const N1K: Aircraft = Object.freeze({
  id: "n1k",
  designation: "紫電改",
  name: "紫電改",
  nameReading: "シデンカイ",
  role: "艦上戰鬪機",
  manufacturer: "川西航空機",
  firstFlight: "【極秘】1943年頃",
  speed: 594,
  range: 1715,
  armament: "二十粍機銃 四挺",
  crew: 1,
  status: "【極秘】試作・少數生產中ノ由",
  _comment: "零戰ノ後繼タルベキ新鋭戰鬪機トノ風聞。高速・重武裝ニシテ防彈性能モ向上ノ由。詳細不明。",
});

// ============================================================
//  艦上攻撃機（Carrier Attack Bomber）
// ============================================================

export const B5N: Aircraft = Object.freeze({
  id: "b5n",
  designation: "九七式艦上攻撃機",
  name: "九七式艦攻",
  nameReading: "キウナナシキカンジヤウコウゲキキ",
  role: "艦上攻撃機",
  manufacturer: "中島飛行機",
  firstFlight: "1937年",
  speed: 378,
  range: 1990,
  armament: "航空魚雷一本 又ハ八百粁爆彈",
  crew: 3,
  status: "主力艦攻（全空母ニ配備）",
  _comment: "帝國海軍主力ノ艦上攻撃機。雷撃及ビ水平爆撃ニ於テ優レタル性能ヲ發揮ス。",
});

export const B6N: Aircraft = Object.freeze({
  id: "b6n",
  designation: "天山",
  name: "天山",
  nameReading: "テンザン",
  role: "艦上攻撃機",
  manufacturer: "中島飛行機",
  firstFlight: "【極秘】1941年頃",
  speed: 463,
  range: 1745,
  armament: "航空魚雷一本 又ハ八百粁爆彈",
  crew: 3,
  status: "【極秘】新型艦攻トシテ配備開始ノ風聞",
  _comment: "九七式艦攻ノ後繼機。速力・航續力共ニ向上ノ由ナルモ詳細未確認。",
});

// ============================================================
//  艦上爆撃機（Carrier Dive Bomber）
// ============================================================

export const D3A: Aircraft = Object.freeze({
  id: "d3a",
  designation: "九九式艦上爆撃機",
  name: "九九式艦爆",
  nameReading: "キウキウシキカンジヤウバクゲキキ",
  role: "艦上爆撃機",
  manufacturer: "愛知航空機",
  firstFlight: "1938年",
  speed: 386,
  range: 1472,
  armament: "二百五十粁爆彈 一發（急降下爆撃用）",
  crew: 2,
  status: "主力艦爆（全空母ニ配備）",
  _comment: "帝國海軍主力ノ急降下爆撃機。命中精度ノ高サヲ以テ知ラル。",
});

export const D4Y: Aircraft = Object.freeze({
  id: "d4y",
  designation: "彗星",
  name: "彗星",
  nameReading: "スイセイ",
  role: "艦上爆撃機",
  manufacturer: "愛知航空機",
  firstFlight: "【極秘】1942年頃",
  speed: 546,
  range: 1520,
  armament: "五百粁爆彈 一發",
  crew: 2,
  status: "【極秘】高速艦爆トシテ配備開始ノ風聞",
  _comment: "液冷發動機ヲ搭載セル高速艦爆。九九式艦爆ノ後繼トナルベキ機體ノ由。",
});

// ============================================================
//  水上偵察機（Reconnaissance Seaplane）
// ============================================================

export const E13A: Aircraft = Object.freeze({
  id: "e13a",
  designation: "零式水上偵察機",
  name: "零式水偵",
  nameReading: "レイシキスイジヤウテイサツキ",
  role: "水上偵察機",
  manufacturer: "愛知航空機",
  firstFlight: "1940年",
  speed: 375,
  range: 2090,
  armament: "七粍七機銃 一挺",
  crew: 3,
  status: "主力水偵（巡洋艦・戰艦ニ搭載）",
  _comment: "帝國海軍主力ノ水上偵察機。長大ナル航續力ニテ廣域偵察ニ威力ヲ發揮ス。",
});

export const F1M: Aircraft = Object.freeze({
  id: "f1m",
  designation: "零式觀測機",
  name: "零式觀測機",
  nameReading: "レイシキカンソクキ",
  role: "水上偵察機",
  manufacturer: "三菱重工業",
  firstFlight: "1940年",
  speed: 370,
  range: 740,
  armament: "七粍七機銃 二挺、六十粁爆彈 二發",
  crew: 2,
  status: "現役（戰艦・巡洋艦搭載）",
  _comment: "砲撃觀測及ビ近距離偵察ニ用ヰル複葉水上機。",
});

// ============================================================
//  飛行艇（Flying Boat）
// ============================================================

export const H6K: Aircraft = Object.freeze({
  id: "h6k",
  designation: "九七式飛行艇",
  name: "九七式大艇",
  nameReading: "キウナナシキダイテイ",
  role: "飛行艇",
  manufacturer: "川西航空機",
  firstFlight: "1937年",
  speed: 331,
  range: 6770,
  armament: "二十粍機銃 一挺、七粍七機銃 四挺、魚雷又ハ爆彈",
  crew: 9,
  status: "現役（索敵・哨戒）",
  _comment: "驚異的航續力ヲ誇ル四發大型飛行艇。南方方面ノ長距離哨戒ニ不可缺ナリ。",
});

export const H8K: Aircraft = Object.freeze({
  id: "h8k",
  designation: "二式飛行艇",
  name: "二式大艇",
  nameReading: "ニシキダイテイ",
  role: "飛行艇",
  manufacturer: "川西航空機",
  firstFlight: "1941年",
  speed: 465,
  range: 7150,
  armament: "二十粍機銃 五挺、魚雷二本又ハ爆彈",
  crew: 10,
  status: "配備中（新鋭哨戒飛行艇）",
  _comment: "世界最高性能ノ飛行艇ト稱セラル。防禦力・航續力共ニ桁違ヒノ性能ヲ有ス。",
});

// ============================================================
//  陸上攻撃機（Land-based Attack Bomber）
// ============================================================

export const G3M: Aircraft = Object.freeze({
  id: "g3m",
  designation: "九六式陸上攻撃機",
  name: "九六式陸攻",
  nameReading: "キウロクシキリクジヤウコウゲキキ",
  role: "陸上攻撃機",
  manufacturer: "三菱重工業",
  firstFlight: "1935年",
  speed: 373,
  range: 4380,
  armament: "航空魚雷一本 又ハ八百粁爆彈",
  crew: 7,
  status: "現役（各航空隊ニ配備）",
  _comment: "世界初ノ渡洋爆撃ヲ實施セル陸上攻撃機。支那事變ニテ長距離攻撃能力ヲ實證ス。",
});

export const G4M: Aircraft = Object.freeze({
  id: "g4m",
  designation: "一式陸上攻撃機",
  name: "一式陸攻",
  nameReading: "イッシキリクジヤウコウゲキキ",
  role: "陸上攻撃機",
  manufacturer: "三菱重工業",
  firstFlight: "1939年",
  speed: 428,
  range: 4335,
  armament: "航空魚雷一本 又ハ八百粁爆彈、二十粍機銃及ビ七粍七機銃",
  crew: 7,
  status: "主力陸攻（全基地航空隊ニ配備中）",
  _comment: "九六式陸攻ノ後繼。長大ナル航續距離ヲ誇ルモ防彈性ニ難アリトノ聲モ。",
});

export const P1Y: Aircraft = Object.freeze({
  id: "p1y",
  designation: "銀河",
  name: "銀河",
  nameReading: "ギンガ",
  role: "陸上爆撃機",
  manufacturer: "中島飛行機",
  firstFlight: "【極秘】1943年頃",
  speed: 546,
  range: 5370,
  armament: "八百粁爆彈又ハ航空魚雷一本",
  crew: 3,
  status: "【極秘】新鋭陸上爆撃機。少數配備開始ノ風聞",
  _comment: "高速雙發陸上爆撃機。一式陸攻ノ後繼トシテ期待サルル由ナルモ詳細不明。",
});

// ============================================================
//  陸上戰鬪機（Land-based Interceptor）
// ============================================================

export const J2M: Aircraft = Object.freeze({
  id: "j2m",
  designation: "雷電",
  name: "雷電",
  nameReading: "ライデン",
  role: "陸上戰鬪機",
  manufacturer: "三菱重工業",
  firstFlight: "【極秘】1942年頃",
  speed: 596,
  range: 1890,
  armament: "二十粍機銃 四挺",
  crew: 1,
  status: "【極秘】局地戰鬪機トシテ少數配備開始ノ風聞",
  _comment: "高高度迎撃ヲ主任務トスル局地戰鬪機。速力・上昇力ニ優レルモ開發難航ノ噂アリ。",
});

// ============================================================
//  練習機（Trainer）
// ============================================================

export const K5Y: Aircraft = Object.freeze({
  id: "k5y",
  designation: "九三式中間練習機",
  name: "赤トンボ",
  nameReading: "アカトンボ",
  role: "練習機",
  manufacturer: "川崎航空機",
  firstFlight: "1933年",
  speed: 210,
  range: 1040,
  armament: "（練習用。通常武裝ナシ）",
  crew: 2,
  status: "現役（全航空隊練習部隊ニ配備）",
  _comment: "橙色ノ塗裝ヨリ「赤トンボ」ト呼バル。帝國海軍搭乘員ノ殆ド全員ガ本機ニテ飛行ヲ學ビタリ。",
});

// ============================================================
//  初期ノ航空機（1917年代〜六十年代）
// ============================================================

export const TYPE_10_CARRIER_RECON: Aircraft = Object.freeze({
  id: "type-10-recon",
  designation: "十年式艦上偵察機",
  name: "十年式艦偵",
  nameReading: "ジフネンシキカンジヤウテイサツキ",
  role: "艦上偵察機",
  manufacturer: "三菱内燃機",
  firstFlight: "1921年",
  speed: 203,
  range: 600,
  armament: "七粍七機銃 一挺",
  crew: 2,
  status: "退役",
  _comment: "帝國海軍航空隊黎明期ノ艦上偵察機。鳳翔搭載ノ初期航空機ノ一ナリ。",
});

export const A1N: Aircraft = Object.freeze({
  id: "a1n",
  designation: "三式艦上戰鬪機",
  name: "三式艦戰",
  nameReading: "サンシキカンジヤウセントウキ",
  role: "艦上戰鬪機",
  manufacturer: "中島飛行機",
  firstFlight: "1928年",
  speed: 241,
  range: 580,
  armament: "七粍七機銃 二挺",
  crew: 1,
  status: "退役",
  _comment: "帝國海軍初ノ制式艦上戰鬪機。複葉機ナガラ優秀ナ格鬪性能ヲ有セリ。",
});

export const A2N: Aircraft = Object.freeze({
  id: "a2n",
  designation: "九〇式艦上戰鬪機",
  name: "九〇式艦戰",
  nameReading: "キウジフシキカンジヤウセントウキ",
  role: "艦上戰鬪機",
  manufacturer: "中島飛行機",
  firstFlight: "1932年",
  speed: 287,
  range: 600,
  armament: "七粍七機銃 二挺",
  crew: 1,
  status: "退役",
  _comment: "九六式艦戰ノ前身タル複葉戰鬪機。曲技飛行ニモ優レ搭乗員ニ愛サレタリ。",
});

export const B1M: Aircraft = Object.freeze({
  id: "b1m",
  designation: "十三式艦上攻撃機",
  name: "十三式艦攻",
  nameReading: "ジフサンシキカンジヤウコウゲキキ",
  role: "艦上攻撃機",
  manufacturer: "三菱内燃機",
  firstFlight: "1924年",
  speed: 210,
  range: 800,
  armament: "航空魚雷一本 又ハ爆彈",
  crew: 3,
  status: "退役",
  _comment: "帝國海軍初ノ制式艦上攻撃機。航空魚雷攻撃ノ先驅ヲ成ス。",
});

export const B2M: Aircraft = Object.freeze({
  id: "b2m",
  designation: "八九式艦上攻撃機",
  name: "八九式艦攻",
  nameReading: "ハチキウシキカンジヤウコウゲキキ",
  role: "艦上攻撃機",
  manufacturer: "三菱重工業",
  firstFlight: "1929年",
  speed: 213,
  range: 950,
  armament: "航空魚雷一本 又ハ爆彈",
  crew: 3,
  status: "退役",
  _comment: "十三式艦攻ノ後繼。赤城・加賀等ニ搭載サレ艦隊航空戰力ノ中核ヲ擔ヒタリ。",
});

export const D1A: Aircraft = Object.freeze({
  id: "d1a",
  designation: "九四式艦上爆撃機",
  name: "九四式艦爆",
  nameReading: "キウシシキカンジヤウバクゲキキ",
  role: "艦上爆撃機",
  manufacturer: "愛知航空機",
  firstFlight: "1934年",
  speed: 310,
  range: 925,
  armament: "二百五十粁爆彈 一發",
  crew: 2,
  status: "退役",
  _comment: "帝國海軍初ノ制式急降下爆撃機。複葉機ナレドモ急降下爆撃ノ技術ヲ確立セリ。",
});

export const E7K: Aircraft = Object.freeze({
  id: "e7k",
  designation: "九四式水上偵察機",
  name: "九四式水偵",
  nameReading: "キウシシキスイジヤウテイサツキ",
  role: "水上偵察機",
  manufacturer: "川西航空機",
  firstFlight: "1934年",
  speed: 275,
  range: 1850,
  armament: "七粍七機銃 一挺",
  crew: 3,
  status: "現役（練習・哨戒）",
  _comment: "複葉ノ水上偵察機。長ク巡洋艦・戰艦ノ偵察機トシテ活躍セリ。",
});

export const E8N: Aircraft = Object.freeze({
  id: "e8n",
  designation: "九五式水上偵察機",
  name: "九五式水偵",
  nameReading: "キウゴシキスイジヤウテイサツキ",
  role: "水上偵察機",
  manufacturer: "中島飛行機",
  firstFlight: "1935年",
  speed: 300,
  range: 900,
  armament: "七粍七機銃 二挺、六十粁爆彈 二發",
  crew: 2,
  status: "現役",
  _comment: "小型ノ複葉水上偵察機。驅逐艦以外ノ殆ド全テノ艦艇ニ搭載サレタリ。",
});

// ============================================================
//  艦上偵察機（新型）
// ============================================================

export const C6N: Aircraft = Object.freeze({
  id: "c6n",
  designation: "彩雲",
  name: "彩雲",
  nameReading: "サイウン",
  role: "艦上偵察機",
  manufacturer: "中島飛行機",
  firstFlight: "【極秘】1943年頃",
  speed: 610,
  range: 3300,
  armament: "七粍七機銃 一挺（後方防禦）",
  crew: 3,
  status: "【極秘】試作中（高速艦上偵察機）",
  _comment: "敵戰鬪機ヲモ振リ切ル高速偵察機。「我ニ追イ付ク敵機無シ」ノ打電ハ夙ニ有名。試作段階ノ情報ナリ。",
});

// ============================================================
//  艦上攻撃機（新型）
// ============================================================

export const B7A: Aircraft = Object.freeze({
  id: "b7a",
  designation: "流星",
  name: "流星",
  nameReading: "リウセイ",
  role: "艦上攻撃機",
  manufacturer: "愛知航空機",
  firstFlight: "【極秘】1942年頃",
  speed: 566,
  range: 1850,
  armament: "航空魚雷一本 又ハ八百粁爆彈、二十粍機銃 二挺",
  crew: 2,
  status: "【極秘】試作中（爆撃・雷撃兼用ノ新型攻撃機）",
  _comment: "艦攻ト艦爆ヲ統合セル畫期的攻撃機。一機種ニテ雷撃・急降下爆撃ノ雙方ヲ遂行ス。試作段階。",
});

// ============================================================
//  水上戰鬪機・水上攻撃機
// ============================================================

export const A6M2_N: Aircraft = Object.freeze({
  id: "a6m2-n",
  designation: "二式水上戰鬪機",
  name: "二式水戰",
  nameReading: "ニシキスイジヤウセントウキ",
  role: "水上戰鬪機",
  manufacturer: "中島飛行機",
  firstFlight: "1941年",
  speed: 437,
  range: 1782,
  armament: "二十粍機銃 二挺、七粍七機銃 二挺",
  crew: 1,
  status: "現役（前線基地防空）",
  _comment: "零戰ニ浮舟ヲ取付ケタル水上戰鬪機。飛行場ナキ前線基地ノ防空ニ用ヰル。",
});

export const N1K1: Aircraft = Object.freeze({
  id: "n1k1-float",
  designation: "強風",
  name: "強風",
  nameReading: "キヤウフウ",
  role: "水上戰鬪機",
  manufacturer: "川西航空機",
  firstFlight: "1942年",
  speed: 489,
  range: 1690,
  armament: "二十粍機銃 二挺、七粍七機銃 二挺",
  crew: 1,
  status: "試作中（高性能水上戰鬪機）",
  _comment: "二式水戰ノ後繼タル高性能水上戰鬪機。紫電改ノ母體トナリタル機體ノ由。",
});

export const E16A: Aircraft = Object.freeze({
  id: "e16a",
  designation: "瑞雲",
  name: "瑞雲",
  nameReading: "ズイウン",
  role: "水上爆撃機",
  manufacturer: "愛知航空機",
  firstFlight: "1942年頃",
  speed: 428,
  range: 2535,
  armament: "二十粍機銃 二挺、二百五十粁爆彈 一發",
  crew: 2,
  status: "試作中（急降下爆撃可能ナル水上機）",
  _comment: "水上機ナレドモ急降下爆撃能力ヲ有スル畫期的設計。航空戰艦搭載ヲ企圖ス。",
});

// ============================================================
//  陸上戰鬪機（追加）
// ============================================================

export const J1N: Aircraft = Object.freeze({
  id: "j1n",
  designation: "月光",
  name: "月光",
  nameReading: "ゲツコウ",
  role: "夜間戰鬪機",
  manufacturer: "中島飛行機",
  firstFlight: "1941年",
  speed: 507,
  range: 2545,
  armament: "二十粍斜銃 四挺",
  crew: 2,
  status: "現役（夜間戰鬪機ニ改裝中）",
  _comment: "當初偵察機トシテ開發サルルモ、上向キ斜銃ヲ搭載シ夜間戰鬪機ニ轉用。",
});

export const N1K1J: Aircraft = Object.freeze({
  id: "n1k1j",
  designation: "紫電",
  name: "紫電",
  nameReading: "シデン",
  role: "陸上戰鬪機",
  manufacturer: "川西航空機",
  firstFlight: "1942年頃",
  speed: 583,
  range: 1430,
  armament: "二十粍機銃 四挺",
  crew: 1,
  status: "配備開始ノ風聞",
  _comment: "水上戰鬪機「強風」ヲ陸上機ニ改設計セルモノ。紫電改ノ前身ナリ。",
});

// ============================================================
//  陸上哨戒機
// ============================================================

export const Q1W: Aircraft = Object.freeze({
  id: "q1w",
  designation: "東海",
  name: "東海",
  nameReading: "トウカイ",
  role: "陸上哨戒機",
  manufacturer: "九州飛行機",
  firstFlight: "【極秘】1944年頃",
  speed: 322,
  range: 1340,
  armament: "二百五十粁爆彈又ハ爆雷二發",
  crew: 3,
  status: "【極秘】對潜哨戒機トシテ計畫中",
  _comment: "潜水艦狩リヲ專門トスル陸上哨戒機。磁氣探知機搭載ノ由。詳細ハ軍機。",
});

// ============================================================
//  試作機・實驗機（極秘計畫）
// ============================================================

export const A7M: Aircraft = Object.freeze({
  id: "a7m",
  designation: "烈風",
  name: "烈風",
  nameReading: "レップウ",
  role: "艦上戰鬪機",
  manufacturer: "三菱重工業",
  firstFlight: "【極秘】試作中",
  speed: 628,
  range: 2500,
  armament: "二十粍機銃 四挺（計畫）",
  crew: 1,
  status: "【極秘】次期主力艦戰トシテ試作中。零戰ノ後繼。",
  _comment: "零戰ノ後繼トナルベキ次期主力艦上戰鬪機。大馬力發動機ニテ速力・上昇力共ニ飛躍的向上ヲ企圖ス。",
});

export const KIKKA: Aircraft = Object.freeze({
  id: "kikka",
  designation: "橘花",
  name: "橘花",
  nameReading: "キッカ",
  role: "特殊攻撃機",
  manufacturer: "中島飛行機",
  firstFlight: "【極秘】設計中",
  speed: 696,
  range: 948,
  armament: "五百粁爆彈又ハ八百粁爆彈",
  crew: 1,
  status: "【極秘】噴進式（ジェット）攻撃機。設計段階ノ噂。",
  _comment: "噴進式推進裝置ヲ用ヰル畫期的攻撃機。獨逸ヨリノ技術情報ヲ基ニ開發中ト傳ヘラルルモ確認不能。",
});

export const SHINDEN: Aircraft = Object.freeze({
  id: "shinden",
  designation: "震電",
  name: "震電",
  nameReading: "シンデン",
  role: "陸上戰鬪機",
  manufacturer: "九州飛行機",
  firstFlight: "【極秘】設計中",
  speed: 750,
  range: 1500,
  armament: "三十粍機銃 四挺（計畫）",
  crew: 1,
  status: "【極秘】前翼型迎撃機。設計段階ノ噂。",
  _comment: "先尾翼・推進式ノ革新的局地戰鬪機。750粁ノ速力ヲ目指ス由ナルモ實現性ハ未知數。",
});

export const KEIUN: Aircraft = Object.freeze({
  id: "keiun",
  designation: "景雲",
  name: "景雲",
  nameReading: "ケイウン",
  role: "艦上偵察機",
  manufacturer: "愛知航空機",
  firstFlight: "【極秘】設計中",
  speed: 640,
  range: 2500,
  armament: "（偵察專用。武裝ナシノ計畫）",
  crew: 2,
  status: "【極秘】高速偵察機。設計段階。",
  _comment: "彩雲ヲ上廻ル高速偵察機トシテ計畫サルルモ、實現ノ見通シハ不透明。",
});

export const M6A: Aircraft = Object.freeze({
  id: "m6a",
  designation: "晴嵐",
  name: "晴嵐",
  nameReading: "セイラン",
  role: "特殊攻撃機",
  manufacturer: "愛知航空機",
  firstFlight: "【極秘】試作中",
  speed: 474,
  range: 1540,
  armament: "八百粁爆彈又ハ航空魚雷一本",
  crew: 2,
  status: "【極秘】伊四百型潜水艦搭載用水上攻撃機。試作中。",
  _comment: "伊四百型潜水艦ノ格納筒ニ收容可能ナル折疊翼攻撃機。潜水艦ヨリ發進シ奇襲攻撃ヲ行フ構想。",
});

// ============================================================
//  未確認航空機（戰時情報部蒐集資料）
//
//  以下ノ航空機ハ、計畫圖面ノ斷片・傳聞・風聞等ヨリ
//  其ノ存在ガ推測サルルモ、軍令部トシテハ公式ニ確認シ得ズ。
//  參考資料トシテ附記ス。信憑性ハ甲乙丙丁ニテ評價ス。
//  出典: 海上護衛總司令部 戰時情報集積所
// ============================================================

export const N1K2J_KAI: Aircraft = Object.freeze({
  id: "n1k2j-kai",
  designation: "紫電改二",
  name: "紫電改二",
  nameReading: "シデンカイニ",
  role: "局地戰鬪機",
  manufacturer: "川西航空機（推定）",
  firstFlight: "【未確認】1944年以降（推定）",
  speed: 630,
  range: 1800,
  armament: "二十粍機銃 四挺（推定）",
  crew: 1,
  status: "【未確認】試作機ノ存在スラ不明",
  _comment: "川西航空機ガ紫電改ヲ更ニ發展セシメタトスル究極ノ局地戰鬪機。三四三海軍航空隊ノ紫電改隊ノ活躍ニ觸發サレ、其ノ發展型ヲ求ムル聲アリタリト云フ。發動機出力增強・空力改善ニ依リ速力・上昇力共ニ向上セリトノ風聞。信憑性: 丁",
});

export const A7M_KAI: Aircraft = Object.freeze({
  id: "a7m-kai",
  designation: "烈風改",
  name: "烈風改",
  nameReading: "レップウカイ",
  role: "艦上戰鬪機",
  manufacturer: "三菱重工業（推定）",
  firstFlight: "【未確認】1944年以降（推定）",
  speed: 650,
  range: 2600,
  armament: "二十粍機銃 四挺（推定）",
  crew: 1,
  status: "【未確認】烈風自體ノ量產すら未確認",
  _comment: "零式艦上戰鬪機ノ後繼タルベキ次期主力艦戰「烈風」。其ノ改良型ノ構想ハ帝國海軍航空隊ノ悲願ナリシモ、原型ノ烈風すら量產ニ至リシヤ否ヤ不明。誉二一型發動機搭載ニ依リ更ナル性能向上ヲ企圖セシト云フ。信憑性: 丁",
});

export const J8M_SHUUSUI: Aircraft = Object.freeze({
  id: "j8m-shuusui",
  designation: "秋水",
  name: "試製秋水",
  nameReading: "シセイシウスイ",
  role: "局地戰鬪機",
  manufacturer: "三菱重工業・横須賀海軍工廠",
  firstFlight: "【未確認】1945年（推定）",
  speed: 900,
  range: 100,
  armament: "三十粍機銃 二挺（計畫）",
  crew: 1,
  status: "【未確認】試驗飛行段階カ",
  _comment: "獨逸ヨリ潛水艦ニテ齎サレタル技術資料ヲ基ニ開發サレタトスルロケット戰鬪機。B-29邀擊ノ切札トシテ期待サレタリト云フモ、滯空時間僅カ數分。實用化ニ至リシヤ否ヤ一切不明。信憑性: 乙",
});

export const G10N_FUGAKU: Aircraft = Object.freeze({
  id: "g10n-fugaku",
  designation: "富嶽",
  name: "富嶽",
  nameReading: "フガク",
  role: "陸上爆撃機",
  manufacturer: "中島飛行機（推定）",
  firstFlight: "【未確認】計畫段階。試作機ノ建造スラ未確認",
  speed: 680,
  range: 19400,
  armament: "二十粍機銃 多數、爆彈搭載量20000kg（推定）",
  crew: 10,
  status: "【未確認】中島知久平ノ構想ニ基ヅク超重爆計畫ノ噂",
  _comment: "中島知久平ガ「Z飛行機」ノ名ノ下ニ構想セシトサルル六發超重爆撃機。航續距離一萬九千四百粁、米國本土ヲ直接爆撃シ得ルトノ壮大ナル構想ナリ。陸海軍合同計畫トシテ推進サレタル由ナルモ、六基ノ大馬力發動機ノ實現スラ覺束ナク、計畫全體ガ夢想ノ域ヲ出デズ。富士山ニ因ミ「富嶽」ト命名サレタト云フ。信憑性: 丁",
});

// ============================================================
//  全航空機一覽
// ============================================================

export const ALL_AIRCRAFT: Aircraft[] = [
  // 初期ノ航空機
  TYPE_10_CARRIER_RECON, A1N, A2N, B1M, B2M, D1A, E7K, E8N,
  // 艦上戰鬪機
  A5M, A6M, N1K,
  // 艦上攻撃機
  B5N, B6N, B7A,
  // 艦上爆撃機
  D3A, D4Y,
  // 艦上偵察機
  C6N,
  // 水上偵察機・觀測機
  E13A, F1M,
  // 水上戰鬪機・水上攻撃機
  A6M2_N, N1K1, E16A,
  // 飛行艇
  H6K, H8K,
  // 陸上攻撃機・爆撃機
  G3M, G4M, P1Y,
  // 陸上戰鬪機・夜間戰鬪機
  J2M, J1N, N1K1J,
  // 陸上哨戒機
  Q1W,
  // 練習機
  K5Y,
  // 特殊攻撃機・潜水艦搭載機
  M6A,
  // 試作機・實驗機（極秘）
  A7M, KIKKA, SHINDEN, KEIUN,
  // 未確認航空機（戰時情報部蒐集資料）
  N1K2J_KAI, A7M_KAI, J8M_SHUUSUI, G10N_FUGAKU,
];
