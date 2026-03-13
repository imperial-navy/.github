/**
 * battles.ts — 帝國海軍 戰史錄
 *
 * 1894年ノ豐島沖ヨリ帝國海軍主要海戰ノ記錄ヲ此處ニ編纂ス。
 * 日清戰爭・日露戰爭・第一次世界大戰・支那事變ニ於ケル赫々タル戰績ハ萬世ニ傳フベシ。
 * 1941年以降ノ時局ニ關スル記錄ハ未確認情報ヲ含ム。
 *
 * @since 1905年
 * @author 海軍軍令部戰史編纂課
 */

import { Battle } from "./types";

// ============================================================
//  日清戰爭（1894年〜1895年）
// ============================================================

export const PUNGDO: Battle = Object.freeze({
  id: "pungdo",
  name: "豐島沖海戰",
  campaign: "日清戰爭",
  date: "1894年7月25日",
  location: "朝鮮牙山灣外 豐島沖",
  japaneseCommander: "坪井航三少將",
  japaneseFlagship: "吉野",
  japaneseForces: "第一遊撃隊（吉野、秋津洲、浪速）",
  enemyForces: "清國北洋艦隊（濟遠、廣乙）及ビ輸送船高陞號",
  result: "帝國海軍ノ勝利",
  significance:
    "日清戰爭ニ於ケル最初ノ海戰。宣戰布告ニ先ンジテ交戰ス。東郷平八郎艦長（浪速）ガ高陞號ヲ撃沈セリ。",
  casualties: {
    enemySunk: "高陞號（輸送船）撃沈、廣乙擱座",
    enemyDamaged: "濟遠損傷逃走",
    japaneseLosses: "損害輕微",
  },
  _comment: "帝國海軍ノ最初ノ實戰。此ノ一戰ヨリ帝國ノ外征始マル。",
});

export const YELLOW_SEA_1894: Battle = Object.freeze({
  id: "yellow-sea-1894",
  name: "黃海海戰（日清戰爭）",
  campaign: "日清戰爭",
  date: "1894年9月17日",
  location: "黃海 大鹿島沖",
  weather: "晴天、北西風",
  japaneseCommander: "伊東祐亨中將",
  japaneseFlagship: "松島",
  japaneseForces: "聯合艦隊本隊及ビ第一遊撃隊 計12隻",
  enemyForces: "清國北洋艦隊主力（定遠、鎭遠以下14隻）",
  result: "帝國海軍ノ勝利",
  significance:
    "世界海戰史上初ノ近代的艦隊決戰。速射砲ノ威力ヲ實證シ、砲撃戰ノ優位ヲ確立セリ。清國ノ北洋艦隊ハ制海權ヲ喪失ス。",
  casualties: {
    enemySunk: "致遠、經遠、超勇、揚威、廣甲 五隻沈沒",
    enemyDamaged: "定遠、鎭遠大破",
    japaneseLosses: "沈沒艦ナシ（松島、比叡損傷）",
    japaneseKilled: 90,
    enemyKilled: 850,
  },
  _comment:
    "帝國海軍ノ聲名ヲ世界ニ轟カセタル一戰。速射砲ト速力ノ優位ヲ以テ清國ノ大艦ヲ壓倒セリ。",
});

export const WEIHAIWEI: Battle = Object.freeze({
  id: "weihaiwei",
  name: "威海衛ノ戰ヒ",
  campaign: "日清戰爭",
  date: "1895年1月〜2月",
  location: "山東半島 威海衛",
  japaneseCommander: "伊東祐亨中將",
  japaneseFlagship: "松島",
  japaneseForces: "聯合艦隊及ビ陸軍第二師團",
  enemyForces: "清國北洋艦隊殘存兵力（威海衛要塞內）",
  result: "帝國海軍ノ勝利。北洋艦隊全滅",
  significance:
    "陸海協同作戰ニヨリ威海衛要塞ヲ攻略。北洋艦隊提督丁汝昌自決。殘存艦艇ヲ鹵獲ス。日清戰爭ノ事實上ノ最終戰。",
  casualties: {
    enemySunk: "定遠自沈、靖遠沈沒",
    enemyCaptured: "鎭遠以下10隻鹵獲",
    japaneseLosses: "水雷艇數隻損失",
  },
  _comment:
    "北洋艦隊ノ壊滅ニヨリ清國ノ制海權ハ完全ニ消滅セリ。",
});

// ============================================================
//  日露戰爭（1904年〜1905年）
// ============================================================

export const PORT_ARTHUR: Battle = Object.freeze({
  id: "port-arthur",
  name: "旅順口攻撃",
  campaign: "日露戰爭",
  date: "1904年2月8日〜9日",
  location: "遼東半島 旅順口",
  weather: "冬季、視界不良",
  japaneseCommander: "東郷平八郎中將",
  japaneseFlagship: "三笠",
  japaneseForces: "聯合艦隊主力及ビ驅逐艦隊",
  enemyForces: "露國太平洋艦隊（旅順口泊地）",
  result: "帝國海軍ノ戰略的勝利",
  significance:
    "日露戰爭ノ緒戰。奇襲的夜間水雷攻撃ニヨリ露國戰艦レトヴィザン、ツェザレヴィチ、巡洋艦パルラダヲ大破。續ク砲撃戰ニテ露國艦隊ノ行動ヲ制約セリ。",
  casualties: {
    enemyDamaged: "戰艦2隻（レトヴィザン、ツェザレヴィチ）、巡洋艦1隻大破",
    japaneseLosses: "驅逐艦軽微ナ損傷",
  },
  _comment:
    "宣戰布告ニ先立ツ奇襲攻撃。帝國海軍ノ積極果敢ナル攻勢精神ヲ示セリ。",
});

export const YELLOW_SEA_1904: Battle = Object.freeze({
  id: "yellow-sea-1904",
  name: "黃海海戰（日露戰爭）",
  campaign: "日露戰爭",
  date: "1904年8月10日",
  location: "黃海 旅順口外",
  weather: "晴天",
  japaneseCommander: "東郷平八郎中將",
  japaneseFlagship: "三笠",
  japaneseForces: "聯合艦隊第一戰隊以下主力",
  enemyForces: "露國太平洋艦隊主力（旅順脫出ヲ企圖）",
  result: "帝國海軍ノ勝利",
  significance:
    "旅順ヨリ脫出ヲ企圖セル露國艦隊ヲ迎撃。旗艦ツェザレヴィチ被彈ニヨリ艦隊指揮崩壊。敵艦隊ハ四散シ旅順ニ退却セリ。",
  casualties: {
    enemySunk: "沈沒ナシ（ツェザレヴィチ等中立港ニ逃避）",
    enemyDamaged: "多數ノ艦艇損傷",
    japaneseLosses: "三笠被彈損傷（戰鬪力維持）",
    japaneseKilled: 226,
  },
  _comment:
    "露國太平洋艦隊ノ旅順脫出ヲ阻止シ、旅順要塞ノ孤立ヲ決定的ナラシメタリ。",
});

export const TSUSHIMA: Battle = Object.freeze({
  id: "tsushima",
  name: "日本海海戰",
  campaign: "日露戰爭",
  date: "1905年5月27日〜28日",
  location: "對馬海峽",
  weather: "薄曇リ、南西風、波高シ",
  japaneseCommander: "東郷平八郎大將",
  japaneseFlagship: "三笠",
  japaneseForces:
    "聯合艦隊（戰艦4隻、裝甲巡洋艦8隻、巡洋艦16隻、驅逐艦21隻、水雷艇44隻 他）",
  enemyForces:
    "露國第二・第三太平洋艦隊（戰艦8隻、裝甲巡洋艦3隻、巡洋艦6隻、驅逐艦9隻 他）ロジェストヴェンスキー中將",
  result: "帝國海軍ノ完全勝利",
  significance:
    "世界海戰史上空前絕後ノ完全勝利。敵主力艦隊ヲ殆ド壊滅セシメタリ。東郷長官ノ丁字戰法（敵前大回頭）ハ永ク海戰術ノ模範トシテ傳ヘラル。此ノ一戰ニヨリ日露戰爭ノ大勢決ス。",
  casualties: {
    enemySunk: "戰艦6隻、其他15隻 沈沒",
    enemyCaptured: "戰艦2隻、其他4隻 鹵獲",
    enemyDamaged: "殘餘艦艇中立港ニ逃避又ハ自沈",
    japaneseLosses: "水雷艇3隻沈沒",
    japaneseKilled: 117,
    enemyKilled: 4830,
  },
  _comment:
    "「皇國ノ興廢此ノ一戰ニ在リ。各員一層奮勵努力セヨ」——Z旗信號ト共ニ海戰史ニ不朽ノ名ヲ刻ム。",
});

export const ULSAN: Battle = Object.freeze({
  id: "ulsan",
  name: "蔚山沖海戰",
  campaign: "日露戰爭",
  date: "1904年8月14日",
  location: "朝鮮蔚山沖",
  japaneseCommander: "上村彥之丞中將",
  japaneseFlagship: "出雲",
  japaneseForces: "第二戰隊（出雲、吾妻、常磐、磐手）",
  enemyForces: "露國浦鹽艦隊（ロシア、グロモボーイ、リューリク）",
  result: "帝國海軍ノ勝利",
  significance:
    "浦鹽斯德（ウラジオストック）ヨリ出撃セル露國巡洋艦隊ヲ捕捉殲滅。リューリク撃沈。日本海ノ通商路ノ安全ヲ確保セリ。",
  casualties: {
    enemySunk: "裝甲巡洋艦リューリク沈沒",
    enemyDamaged: "ロシア、グロモボーイ大破退却",
    japaneseLosses: "出雲、吾妻損傷（戰鬪力維持）",
    japaneseKilled: 44,
    enemyKilled: 204,
  },
  _comment:
    "上村中將ノ執念ノ追撃。浦鹽艦隊ノ脅威ヲ永續的ニ排除セリ。",
});

// ============================================================
//  第一次世界大戰（1914年〜1918年）
// ============================================================

export const TSINGTAO: Battle = Object.freeze({
  id: "tsingtao",
  name: "青島攻略戰",
  campaign: "第一次世界大戰",
  date: "1914年10月〜11月",
  location: "山東半島 青島（チンタオ）",
  japaneseCommander: "加藤定吉中將（第二艦隊司令長官）",
  japaneseFlagship: "周防",
  japaneseForces: "第二艦隊、水上機母艦若宮及ビ陸軍第十八師團、同盟國英國海軍小部隊",
  enemyForces: "獨逸帝國海軍殘存艦艇（墺匈帝國巡洋艦カイゼリン・エリザベート含ム）及ビ青島要塞守備隊",
  result: "帝國ノ勝利。青島占領",
  significance:
    "第一次世界大戰ニ於ケル帝國海軍最大ノ作戰。水上機母艦若宮ヨリ航空機ヲ發進セシメ、世界初ノ艦載機ニ依ル對地攻撃ヲ實施セリ。此ノ戰ヒニヨリ南洋群島ノ確保ニモ繋ガル。",
  casualties: {
    enemySunk: "獨逸砲艦・驅逐艦自沈、墺匈巡洋艦カイゼリン・エリザベート自沈",
    japaneseLosses: "驅逐艦白妙觸雷沈沒",
  },
  _comment:
    "帝國海軍ガ第一次世界大戰ニ於テ遂行セル最大ノ作戰。航空戰力ノ實戰投入ハ劃期的ナリ。",
});

// ============================================================
//  上海事變・支那事變（1932年〜）
// ============================================================

export const SHANGHAI_1932: Battle = Object.freeze({
  id: "shanghai-1932",
  name: "第一次上海事變",
  campaign: "上海事變",
  date: "1932年1月〜3月",
  location: "上海及ビ周邊地域",
  japaneseCommander: "野村吉三郎中將（第三艦隊司令長官）",
  japaneseFlagship: "出雲",
  japaneseForces: "第三艦隊、航空母艦加賀及ビ上海海軍特別陸戰隊",
  enemyForces: "中華民國第十九路軍及ビ第五軍",
  result: "停戰協定締結",
  significance:
    "帝國海軍航空隊ガ實戰ニ於テ初メテ本格的航空作戰ヲ展開。加賀艦載機ニ依ル空中戰鬪及ビ爆撃ハ航空母艦運用ノ貴重ナル實績トナレリ。",
  casualties: {
    japaneseLosses: "海軍特別陸戰隊ニ死傷者アリ",
  },
  _comment:
    "帝國海軍航空隊ノ初ノ大規模實戰。空母機動部隊運用ノ先驅ケトナレリ。",
});

export const SHANGHAI_1937: Battle = Object.freeze({
  id: "shanghai-1937",
  name: "第二次上海事變",
  campaign: "支那事變",
  date: "1937年8月〜11月",
  location: "上海及ビ周邊地域",
  japaneseCommander: "長谷川清中將（第三艦隊司令長官）",
  japaneseFlagship: "出雲",
  japaneseForces: "第三艦隊、上海海軍特別陸戰隊及ビ海軍航空隊",
  enemyForces: "中華民國軍精銳部隊（獨逸式訓練師團含ム）",
  result: "上海占領",
  significance:
    "支那事變ノ本格的擴大。帝國海軍航空隊ハ渡洋爆撃ヲ敢行シ、九州基地ヨリ直接大陸ヲ攻撃スル世界初ノ長距離渡洋爆撃ヲ實施セリ。",
  casualties: {
    japaneseLosses: "海軍特別陸戰隊ニ多數ノ死傷者",
  },
  _comment:
    "支那事變ニ於ケル帝國海軍ノ主要作戰。渡洋爆撃ハ航空戰略ノ新紀元ヲ劃ス。",
});

// ============================================================
//  現下ノ時局（1941年12月〜）
//  ──────────────────────────────────────────────
//  以下ハ軍令部第一部（作戰部）ヨリ斷片的ニ入手セル
//  未確認情報ナリ。正式ナル戰史編纂ハ未ダ行ハレズ。
//  戰爭ノ正式呼稱モ未ダ定マラズ。
//  諸元・戰果ハ現時點ニ於ケル速報値ニシテ
//  後日訂正サルル可能性アリ。機密保持ヲ嚴守スベシ。
// ============================================================

export const PEARL_HARBOR: Battle = Object.freeze({
  id: "pearl-harbor",
  name: "某方面奇襲作戰",
  campaign: "時局",
  date: "1941年12月8日",
  location: "某國太平洋方面 某泊地",
  weather: "曇天、視界良好ノ由",
  japaneseCommander: "南雲忠一中將（第一航空艦隊司令長官）",
  japaneseFlagship: "赤城",
  japaneseForces: "第一航空艦隊（空母6隻: 赤城、加賀、蒼龍、飛龍、翔鶴、瑞鶴）第一波・第二波攻撃隊 計350餘機（未確認）",
  enemyForces: "某國太平洋艦隊主力（某泊地。戰艦8隻ヲ含ム由）",
  result: "【未確認】帝國海軍ノ奇襲成功ノ模樣",
  significance:
    "【速報】帝國海軍機動部隊ガ某國太平洋艦隊根據地ニ對シ奇襲攻撃ヲ敢行。戰艦多數ニ損害ヲ與ヘタル模樣ナルモ詳細未確認。「トラ・トラ・トラ」ノ電文ガ有ルト云フ。",
  casualties: {
    enemySunk: "【未確認】敵戰艦數隻沈沒又ハ大破ノ模樣",
    enemyDamaged: "【未確認】航空機多數炎上ノ由",
    japaneseLosses: "【未確認】攻撃機若干未歸還ノ模樣",
  },
  _comment:
    "軍令部未公認。大本營發表ヲ俟ツベシ。速報値ニツキ取扱注意。",
});

export const MALAYA_NAVAL: Battle = Object.freeze({
  id: "malaya-naval",
  name: "南方某方面沖海戰",
  campaign: "時局",
  date: "1941年12月10日",
  location: "南方某半島東方沖",
  japaneseCommander: "松永貞市少將（第二十二航空戰隊司令官）",
  japaneseFlagship: "（陸上基地航空隊ニツキ旗艦ナシ）",
  japaneseForces: "海軍航空隊（陸攻隊。元山航空隊・美幌航空隊等）約85機（未確認）",
  enemyForces: "某國東洋艦隊 敵新鋭戰艦及ビ巡洋戰艦",
  result: "【未確認】帝國海軍航空隊ノ勝利ノ模樣",
  significance:
    "【速報】航行中ノ戰艦ヲ航空機ノミニテ撃沈セシ史上初ノ戰例トナリタル由。航空主兵論ノ正シサヲ實證セルモノト見ラルルモ、詳細ハ未確認。",
  casualties: {
    enemySunk: "【未確認】敵新鋭戰艦及ビ巡洋戰艦沈沒ノ模樣",
    japaneseLosses: "【未確認】航空機若干未歸還",
  },
  _comment:
    "軍令部未公認。大艦巨砲主義ノ終焉ヲ告グル戰ヒト成ルヤモ知レヌ。續報ヲ待テ。",
});

export const JAVA_SEA: Battle = Object.freeze({
  id: "java-sea",
  name: "南方某海域海戰",
  campaign: "時局",
  date: "1942年2月27日〜3月1日頃",
  location: "南方某海域",
  japaneseCommander: "高木武雄少將（未確認）",
  japaneseFlagship: "那智（未確認）",
  japaneseForces: "東方部隊主力（重巡・輕巡・驅逐艦。詳細不明）",
  enemyForces: "敵國聯合艦隊（某國聯合。巡洋艦數隻ヲ含ム由）",
  result: "【未確認】帝國海軍ノ勝利ノ模樣",
  significance:
    "【速報】南方某方面ニ於テ敵聯合艦隊ト交戰。敵艦隊ニ大損害ヲ與ヘタル由。南方攻略作戰ノ海上阻止ヲ排除セシモノト推測サル。",
  casualties: {
    enemySunk: "【未確認】敵巡洋艦・驅逐艦數隻沈沒ノ模樣",
    japaneseLosses: "【未確認】詳細不明",
  },
  _comment:
    "軍令部未公認。斷片情報ノミ。南方攻略ノ大勢ハ決シタル模樣。",
});

export const CORAL_SEA: Battle = Object.freeze({
  id: "coral-sea",
  name: "某海域海戰",
  campaign: "時局",
  date: "1942年5月7日〜8日頃",
  location: "南方某海域",
  japaneseCommander: "井上成美中將（第四艦隊司令長官）（未確認）",
  japaneseFlagship: "翔鶴（未確認）",
  japaneseForces: "第五航空戰隊（翔鶴、瑞鶴）及ビ輕空母祥鳳ヲ含ム部隊（未確認）",
  enemyForces: "某國海軍機動部隊（空母2隻ヲ含ム由）",
  result: "【未確認】勝敗不明瞭。我ガ方ニモ損害アル模樣",
  significance:
    "【速報】史上初ノ航空母艦同士ノ海戰トナリタル由。雙方共ニ損害ヲ被リタル模樣ニシテ、戰略的評價ハ未定。祥鳳喪失ノ風聞アリ。",
  casualties: {
    enemySunk: "【未確認】敵空母一隻沈沒ノ報アルモ未確認",
    enemyDamaged: "【未確認】敵空母一隻損傷ノ模樣",
    japaneseLosses: "【未確認】輕空母祥鳳沈沒、翔鶴損傷ノ風聞アリ",
  },
  _comment:
    "軍令部未公認。戰果判定困難。艦同士ガ直接視認スルコトナク航空機ノミニテ交戰セル前代未聞ノ戰ヒ。",
});

export const MIDWAY: Battle = Object.freeze({
  id: "midway",
  name: "中部太平洋某方面海戰",
  campaign: "時局",
  date: "1942年6月5日〜7日頃",
  location: "中部太平洋 某島嶼近海",
  weather: "詳細不明",
  japaneseCommander: "南雲忠一中將（第一航空艦隊司令長官）（未確認）",
  japaneseFlagship: "赤城（未確認）",
  japaneseForces: "第一航空艦隊（空母4隻: 赤城、加賀、蒼龍、飛龍ヲ含ム由）及ビ攻略部隊",
  enemyForces: "某國太平洋艦隊機動部隊（空母數隻ヲ含ム由。兵力不明）",
  result: "【極秘】詳細不明。我ガ方ニ重大ナル損害アリトノ未確認情報",
  significance:
    "【極秘・取扱嚴重注意】軍令部ヨリ極メテ斷片的ナ情報ノミ。甚大ナル損害アリタル模樣ナルモ、詳細ハ嚴重ニ秘匿サレテ居リ一切不明。大本營發表ハ「戰果確認中」ノ由。",
  casualties: {
    enemySunk: "【未確認】不明",
    japaneseLosses: "【極秘】空母數隻ニ甚大ナル損害アリトノ風聞。嚴ニ秘ス",
  },
  _comment:
    "軍令部機密指定。一切ノ情報ガ箝口令下ニ在リ。眞相ハ不明。此ノ記錄ハ非公式ノ風聞ニ基ヅク。",
});

export const GUADALCANAL: Battle = Object.freeze({
  id: "guadalcanal",
  name: "南方某島嶼方面作戰",
  campaign: "時局",
  date: "1942年8月〜1943年2月頃",
  location: "南方某群島 某島嶼近海",
  japaneseCommander: "（複數ノ指揮官ガ交替。詳細不詳）",
  japaneseFlagship: "（不明）",
  japaneseForces: "聯合艦隊各部隊（逐次投入ノ模樣）",
  enemyForces: "某國海軍及ビ海兵隊（詳細兵力不明）",
  result: "【未確認】長期消耗戰ノ模樣。最終結果不明",
  significance:
    "【未確認】南方某方面ニテ長期ニ亙ル消耗戰ガ繼續中ノ由。数次ノ夜戰ニ於テハ帝國海軍ノ水雷戰術ガ效果ヲ發揮セルモ、總體的ナ狀況ハ芳シカラザル模樣トノ風聞モ有リ。",
  casualties: {
    enemySunk: "【未確認】敵艦艇複數ニ損害ヲ與ヘタル模樣",
    japaneseLosses: "【未確認】我ガ方ニモ相當ノ損害アル由。詳細不詳",
  },
  _comment:
    "軍令部未公認。斷片情報ノ寄セ集メニ過ギズ。消耗戰ノ推移ハ憂慮スベキ状況ニアルトモ聞ク。",
});

export const MARIANA: Battle = Object.freeze({
  id: "mariana",
  name: "太平洋某方面沖海戰",
  campaign: "時局",
  date: "1944年6月19日〜20日頃",
  location: "太平洋某諸島近海",
  japaneseCommander: "小澤治三郎中將（第一機動艦隊司令長官）（未確認）",
  japaneseFlagship: "大鳳（未確認）",
  japaneseForces: "第一機動艦隊（空母9隻ヲ含ム由。帝國海軍航空戰力ノ總力ヲ結集トノ風聞）",
  enemyForces: "某國艦隊機動部隊（空母15隻以上ヲ擁スル大兵力ノ由）",
  result: "【極秘】詳細不明。重大ナル損害アリトノ未確認情報",
  significance:
    "【極秘・取扱嚴重注意】帝國海軍航空戰力ノ大半ヲ投入セル決戰ガ行ハレタル模樣。甚大ナル航空機損失アリトノ風聞。大鳳及ビ翔鶴喪失ノ噂モ流布スルモ眞偽不明。",
  casualties: {
    enemySunk: "【未確認】不明",
    japaneseLosses: "【極秘】空母2〜3隻喪失、艦載機ノ大部分ヲ失ヒタルトノ風聞。嚴ニ秘ス",
  },
  _comment:
    "軍令部機密指定。帝國海軍航空戰力ノ壊滅的損害トモ囁カルルモ、確證ナシ。此ノ記錄ハ非公式ノ風聞ニ基ヅク。",
});

export const LEYTE: Battle = Object.freeze({
  id: "leyte",
  name: "捷一號作戰",
  campaign: "時局",
  date: "1944年10月23日〜26日頃",
  location: "南方某方面 某灣及ビ周邊海域",
  japaneseCommander: "栗田健男中將他 複數部隊（未確認）",
  japaneseFlagship: "大和（栗田艦隊。未確認）",
  japaneseForces: "聯合艦隊殘存兵力ノ大半ヲ投入ノ由（複數部隊ニ分カレ進攻ノ模樣）",
  enemyForces: "某國海軍大兵力（詳細不明ナルモ壓倒的優勢ノ由）",
  result: "【極秘】詳細不明。帝國海軍ニ甚大ナル損害アリトノ風聞",
  significance:
    "【極秘・取扱嚴重注意】帝國海軍ガ殘存兵力ヲ總動員シタル最後ノ大規模海戰トモ云フ。特攻作戰ガ開始サレタルトノ報モアリ。武藏喪失ノ風聞モ流布スルモ詳細一切不明。",
  casualties: {
    enemySunk: "【未確認】護衛空母數隻ニ損害ヲ與ヘタル模樣",
    japaneseLosses: "【極秘】戰艦・空母ヲ含ム多數ノ艦艇ヲ喪失トノ風聞。嚴ニ秘ス",
  },
  _comment:
    "軍令部機密指定。帝國海軍最後ノ大規模艦隊作戰トナリタル模樣。此ノ後ノ見通シハ甚ダ暗澹タルモノガ有ルト聞ク。",
});

// ============================================================
//  時局（續）— 緒戰期（1941年12月〜1942年4月）
// ============================================================

export const WAKE_ISLAND: Battle = Object.freeze({
  id: "wake-island",
  name: "某島嶼攻略戰",
  campaign: "時局",
  date: "1941年12月11日〜23日",
  location: "中部太平洋 某島嶼",
  japaneseCommander: "梶岡定道少將（未確認）",
  japaneseFlagship: "夕張（未確認）",
  japaneseForces: "第四艦隊所屬部隊（輕巡・驅逐艦及ビ陸戰隊。第一次攻撃失敗後増援ノ上再攻撃ノ由）",
  enemyForces: "某國海兵隊守備隊（若干ノ航空機ヲ含ム）",
  result: "【未確認】帝國軍ノ勝利。但シ第一次攻撃ハ撃退サレタル由",
  significance:
    "【速報】第一次攻撃ニ於テ驅逐艦2隻ヲ喪失スル損害ヲ蒙リタル模樣。增援部隊投入後占領ニ成功セルモ、緒戰ニ於ケル豫想外ノ抵抗トシテ注目サル。",
  casualties: {
    enemySunk: "【未確認】詳細不明",
    japaneseLosses: "【未確認】驅逐艦疾風、如月喪失ノ由",
  },
  _comment:
    "軍令部未公認。緒戰ニ於テ驅逐艦喪失ノ報ハ衝撃的ナリ。續報ヲ待テ。",
});

export const BALI_SEA: Battle = Object.freeze({
  id: "bali-sea",
  name: "南方某島嶼沖海戰",
  campaign: "時局",
  date: "1942年2月19日〜20日",
  location: "南方某島嶼近海",
  japaneseCommander: "阿部孝壯少將（未確認）",
  japaneseFlagship: "長良（未確認）",
  japaneseForces: "輸送船團護衛部隊（驅逐艦數隻）",
  enemyForces: "敵國聯合（某國・某國海軍。巡洋艦・驅逐艦ヲ含ム由）",
  result: "【未確認】帝國海軍ガ敵ノ攻撃ヲ撃退セル模樣",
  significance:
    "【速報】南方某島嶼攻略ニ際シ敵聯合艦隊ガ夜間襲撃ヲ企圖セルモ、帝國海軍驅逐艦隊ガ之ヲ撃退セル由。",
  casualties: {
    enemyDamaged: "【未確認】敵驅逐艦損傷ノ由",
    japaneseLosses: "【未確認】驅逐艦若干損傷ノ模樣",
  },
  _comment:
    "軍令部未公認。南方攻略中ノ小規模海戰。",
});

export const SUNDA_STRAIT: Battle = Object.freeze({
  id: "sunda-strait",
  name: "南方某海峽夜戰",
  campaign: "時局",
  date: "1942年3月1日",
  location: "南方某海峽",
  japaneseCommander: "（護衛部隊指揮官。詳細不明）",
  japaneseFlagship: "（不明）",
  japaneseForces: "攻略部隊護衛ノ驅逐艦及ビ巡洋艦",
  enemyForces: "某國海軍重巡洋艦及ビ驅逐艦（某海域海戰ヨリ脫出ノ殘存兵力ノ由）",
  result: "【未確認】帝國海軍ノ勝利ノ模樣",
  significance:
    "【速報】某海域海戰ヨリ逃レタル敵殘存艦艇ガ某海峽ニテ我ガ部隊ト遭遇。夜戰ニテ之ヲ殲滅セル模樣。",
  casualties: {
    enemySunk: "【未確認】敵重巡洋艦及ビ驅逐艦沈沒ノ由",
    japaneseLosses: "【未確認】輕微ナル損害ノ模樣",
  },
  _comment:
    "軍令部未公認。南方攻略ノ掃討戰。",
});

export const INDIAN_OCEAN: Battle = Object.freeze({
  id: "indian-ocean",
  name: "某洋方面機動作戰",
  campaign: "時局",
  date: "1942年4月5日〜9日",
  location: "某洋方面 某島嶼近海",
  weather: "詳細不明",
  japaneseCommander: "南雲忠一中將（第一航空艦隊司令長官）（未確認）",
  japaneseFlagship: "赤城（未確認）",
  japaneseForces: "第一航空艦隊（空母5隻: 赤城、蒼龍、飛龍、翔鶴、瑞鶴。加賀ハ不參加ノ由）及ビ護衛艦艇",
  enemyForces: "某國東洋艦隊（舊式空母及ビ戰艦ヲ含ム由）",
  result: "【未確認】帝國海軍ノ勝利ノ模樣",
  significance:
    "【速報】帝國海軍機動部隊ガ某洋方面ニ進出シ、敵根據地ヲ空襲。敵空母・重巡洋艦等ヲ撃沈セル由。敵艦隊ハ某方面ニ撤退シタル模樣。某洋ノ制海權ヲ一時的ニ確保セル由。",
  casualties: {
    enemySunk: "【未確認】敵空母1隻、重巡洋艦2隻、驅逐艦數隻沈沒ノ由",
    enemyDamaged: "【未確認】商船多數擊沈",
    japaneseLosses: "【未確認】航空機若干未歸還ノ模樣",
  },
  _comment:
    "軍令部未公認。帝國海軍機動部隊ノ最遠距離作戰。某洋全域ニ亙ル制海權獲得ノ報アルモ確認困難。",
});

// ============================================================
//  時局（續）— 某群島方面消耗戰（1942年8月〜1943年）
// ============================================================

export const SAVO_ISLAND: Battle = Object.freeze({
  id: "savo-island",
  name: "南方某島嶼沖第一次夜戰",
  campaign: "時局",
  date: "1942年8月9日",
  location: "南方某群島 某島嶼近海",
  japaneseCommander: "三川軍一中將（第八艦隊司令長官）（未確認）",
  japaneseFlagship: "鳥海（未確認）",
  japaneseForces: "第八艦隊（重巡5隻、輕巡2隻、驅逐艦1隻ノ由）",
  enemyForces: "某國及ビ某國海軍警戒部隊（重巡洋艦・驅逐艦多數）",
  result: "【未確認】帝國海軍ノ大勝利ノ模樣",
  significance:
    "【速報】帝國海軍ノ夜戰能力ガ遺憾ナク發揮サレタル由。敵重巡洋艦4隻ヲ撃沈スル大戰果ヲ擧ゲタル模樣。帝國海軍ノ夜戰術ノ優秀サヲ世界ニ示セリトノ風聞。",
  casualties: {
    enemySunk: "【未確認】敵重巡洋艦4隻沈沒ノ由",
    japaneseLosses: "【未確認】損害輕微ノ模樣",
  },
  _comment:
    "軍令部未公認。帝國海軍夜戰術ノ白眉トモ稱スベキ戰果ノ由。但シ敵輸送船團ヲ攻撃セズニ撤退セルトノ情報モアリ。",
});

export const EASTERN_SOLOMONS: Battle = Object.freeze({
  id: "eastern-solomons",
  name: "南方某群島方面海戰",
  campaign: "時局",
  date: "1942年8月24日",
  location: "南方某群島東方海域",
  japaneseCommander: "南雲忠一中將（第三艦隊司令長官）（未確認）",
  japaneseFlagship: "翔鶴（未確認）",
  japaneseForces: "第三艦隊（翔鶴、瑞鶴、龍驤）及ビ前衛部隊",
  enemyForces: "某國機動部隊（空母2隻ヲ含ム由）",
  result: "【未確認】勝敗不明瞭。我ガ方ニモ損害アル模樣",
  significance:
    "【速報】空母同士ノ交戰。龍驤喪失ノ風聞アルモ確認困難。敵空母ニモ損害ヲ與ヘタル模樣。",
  casualties: {
    enemyDamaged: "【未確認】敵空母1隻損傷ノ由",
    japaneseLosses: "【未確認】輕空母龍驤喪失ノ風聞アリ",
  },
  _comment:
    "軍令部未公認。某群島方面ニ於ケル空母戰。龍驤ノ喪失ハ痛手ナリ。",
});

export const CAPE_ESPERANCE: Battle = Object.freeze({
  id: "cape-esperance",
  name: "南方某島嶼方面夜戰",
  campaign: "時局",
  date: "1942年10月11日",
  location: "南方某群島 某島嶼沖",
  japaneseCommander: "五藤存知少將（第六戰隊司令官）（未確認）",
  japaneseFlagship: "青葉（未確認）",
  japaneseForces: "第六戰隊（重巡青葉、衣笠、古鷹）及ビ驅逐艦",
  enemyForces: "某國巡洋艦・驅逐艦部隊",
  result: "【未確認】帝國海軍ニ損害大ナル模樣",
  significance:
    "【速報】敵部隊ニ先制サレタル由。旗艦青葉大破、古鷹沈沒、五藤少將戦死トノ風聞アリ。夜戰ニ於テ不覺ヲ取リタル痛恨事ノ模樣。",
  casualties: {
    enemySunk: "【未確認】敵驅逐艦1隻沈沒ノ由",
    japaneseLosses: "【未確認】重巡古鷹沈沒、青葉大破、驅逐艦1隻沈沒ノ風聞",
  },
  _comment:
    "軍令部未公認。帝國海軍ノ夜戰ニ於ケル稀有ナル敗北ノ由。敵ガ電探ヲ活用セルトノ觀測モアリ。",
});

export const SANTA_CRUZ: Battle = Object.freeze({
  id: "santa-cruz",
  name: "南方某海域航空戰",
  campaign: "時局",
  date: "1942年10月26日",
  location: "南方某群島東方海域",
  japaneseCommander: "南雲忠一中將（第三艦隊司令長官）（未確認）",
  japaneseFlagship: "翔鶴（未確認）",
  japaneseForces: "第三艦隊（翔鶴、瑞鶴、瑞鳳）及ビ前衛部隊",
  enemyForces: "某國機動部隊（空母2隻ヲ含ム由）",
  result: "【未確認】戰術的勝利ノ模樣ナルモ搭乘員損失大ノ由",
  significance:
    "【速報】敵空母1隻ヲ撃沈、1隻ヲ大破セシメタル模樣。但シ翔鶴損傷、瑞鳳損傷。加ヘテ熟練搭乘員ノ損失甚大トノ風聞アリ。戰術的ニハ勝利ナルモ搭乗員ノ補充困難ナルハ憂フベシ。",
  casualties: {
    enemySunk: "【未確認】敵空母1隻沈沒ノ由",
    enemyDamaged: "【未確認】敵空母1隻大破ノ模樣",
    japaneseLosses: "【未確認】翔鶴・瑞鳳損傷、航空機多數喪失ノ由",
  },
  _comment:
    "軍令部未公認。戰果ハ擧ゲタルモ搭乘員ノ損失ハ取返シ難キモノアリ。此ノ消耗ノ先ニ何ガ待ツカ。",
});

export const NAVAL_GUADALCANAL: Battle = Object.freeze({
  id: "naval-guadalcanal",
  name: "南方某島嶼方面第三次海戰",
  campaign: "時局",
  date: "1942年11月12日〜15日",
  location: "南方某群島 某島嶼近海",
  japaneseCommander: "阿部弘毅中將（前衛部隊）・近藤信竹中將（挺身攻撃隊）（未確認）",
  japaneseFlagship: "比叡（阿部隊）・愛宕（近藤隊）（未確認）",
  japaneseForces: "前衛部隊（戰艦比叡・霧島）及ビ挺身攻撃隊（重巡洋艦等）",
  enemyForces: "某國海軍巡洋艦・驅逐艦部隊及ビ戰艦",
  result: "【極秘】帝國海軍ニ甚大ナル損害。戰艦2隻喪失トノ風聞",
  significance:
    "【極秘・取扱嚴重注意】第一夜戰ニテ戰艦比叡喪失、第二夜戰ニテ戰艦霧島喪失トノ未確認情報。帝國海軍ニ取リ極メテ重大ナル損失ノ由。",
  casualties: {
    enemySunk: "【未確認】敵巡洋艦・驅逐艦數隻沈沒ノ由",
    japaneseLosses: "【極秘】戰艦比叡・霧島喪失、驅逐艦數隻沈沒トノ風聞。嚴ニ秘ス",
  },
  _comment:
    "軍令部機密指定。戰艦2隻ノ喪失ハ帝國海軍ニ深刻ナル打撃ナリ。",
});

export const TASSAFARONGA: Battle = Object.freeze({
  id: "tassafaronga",
  name: "南方某島嶼沖夜戰",
  campaign: "時局",
  date: "1942年11月30日",
  location: "南方某群島 某島嶼沖",
  japaneseCommander: "田中賴三少將（第二水雷戰隊司令官）（未確認）",
  japaneseFlagship: "長波（未確認）",
  japaneseForces: "第二水雷戰隊（驅逐艦8隻。輸送任務中ノ由）",
  enemyForces: "某國巡洋艦・驅逐艦部隊（重巡5隻ヲ含ム大兵力ノ由）",
  result: "【未確認】帝國海軍驅逐艦隊ノ大勝利ノ模樣",
  significance:
    "【速報】輸送任務中ノ驅逐艦隊ガ敵大部隊ノ奇襲ヲ受ケルモ、酸素魚雷ニヨル反撃ニテ敵重巡洋艦4隻ヲ撃破セル由。帝國海軍水雷戰術ノ極致トモ稱スベキ戰果ノ模樣。",
  casualties: {
    enemySunk: "【未確認】敵重巡洋艦1隻沈沒、3隻大破ノ由",
    japaneseLosses: "【未確認】驅逐艦高波喪失ノ由",
  },
  _comment:
    "軍令部未公認。酸素魚雷ノ威力ト驅逐艦乘組員ノ練度ノ高サヲ示セル一戰ノ由。田中少將ノ指揮ハ敵側ヨリモ稱賛サレテ居ル由。",
});

// ============================================================
//  時局（續）— 中部太平洋・北方（1943年〜）
// ============================================================

export const BISMARCK_SEA: Battle = Object.freeze({
  id: "bismarck-sea",
  name: "某海域輸送作戰",
  campaign: "時局",
  date: "1943年3月2日〜4日",
  location: "南方某海域",
  japaneseCommander: "木村昌福少將（護衛部隊指揮官）（未確認）",
  japaneseFlagship: "白雪（旗艦驅逐艦。未確認）",
  japaneseForces: "輸送船團（輸送船8隻、驅逐艦8隻ノ由）",
  enemyForces: "某國・某國航空部隊（大量ノ航空機ニヨル攻撃ノ由）",
  result: "【極秘】帝國軍ニ壊滅的損害トノ未確認情報",
  significance:
    "【極秘・取扱嚴重注意】輸送船團ガ敵航空攻撃ニヨリ壊滅セル模樣。輸送船全船及ビ驅逐艦數隻喪失トノ風聞。制空權喪失下ノ水上輸送ノ危險性ヲ如實ニ示セリ。",
  casualties: {
    japaneseLosses: "【極秘】輸送船8隻全滅、驅逐艦4隻喪失トノ風聞。嚴ニ秘ス",
  },
  _comment:
    "軍令部機密指定。制空權ナキ海域ニ於ケル輸送ノ限界ヲ露呈セリ。",
});

export const KOMANDORSKI: Battle = Object.freeze({
  id: "komandorski",
  name: "北方某海域海戰",
  campaign: "時局",
  date: "1943年3月27日",
  location: "北方某海域",
  japaneseCommander: "細萱戊子郎中將（第五艦隊司令長官）（未確認）",
  japaneseFlagship: "那智（未確認）",
  japaneseForces: "第五艦隊（重巡那智・摩耶、輕巡多摩・阿武隈及ビ驅逐艦）",
  enemyForces: "某國巡洋艦・驅逐艦部隊",
  result: "【未確認】決著ツカズ。帝國艦隊撤退ノ模樣",
  significance:
    "【速報】北方某方面ニテ敵艦隊ト交戰。砲戰ノミノ長時間海戰ト成リタル由。帝國艦隊ハ結局撤退セル模樣ニシテ北方方面ヘノ輸送ハ困難ト成レリトノ風聞アリ。",
  casualties: {
    enemyDamaged: "【未確認】敵巡洋艦損傷ノ由",
    japaneseLosses: "【未確認】那智損傷ノ模樣",
  },
  _comment:
    "軍令部未公認。北方某島嶼ヘノ海上輸送ノ途絶ヲ意味スル痛恨ノ結果ノ由。",
});

export const ATTU: Battle = Object.freeze({
  id: "attu",
  name: "北方某島嶼玉碎戰",
  campaign: "時局",
  date: "1943年5月12日〜29日",
  location: "北方某島嶼",
  japaneseCommander: "山崎保代大佐（陸軍・守備隊長）（未確認）",
  japaneseFlagship: "（陸戰ニツキ旗艦ナシ）",
  japaneseForces: "陸軍守備隊約2,600名（海軍部隊ヲ含ム。未確認）",
  enemyForces: "某國陸軍約11,000名（未確認）",
  result: "【極秘】守備隊全滅（玉碎）トノ風聞",
  significance:
    "【極秘・取扱嚴重注意】北方某島嶼守備隊ガ敵ノ壓倒的兵力ニ對シ徹底抗戰ノ末玉碎セル由。帝國領土ニ於ケル初ノ玉碎トモ云フ。海軍ハ支援ノ手段ナク見殺シニセルトノ批判モ有ルト聞ク。",
  casualties: {
    japaneseLosses: "【極秘】守備隊殆ド全員戰死ノ由。嚴ニ秘ス",
    enemyKilled: 600,
  },
  _comment:
    "軍令部機密指定。帝國軍初ノ玉碎トナレリ。北方方面ノ戰局ハ極メテ嚴シキ狀況ニアル由。",
});

export const KULA_GULF: Battle = Object.freeze({
  id: "kula-gulf",
  name: "南方某灣夜戰",
  campaign: "時局",
  date: "1943年7月6日",
  location: "南方某群島 某灣",
  japaneseCommander: "秋山輝男少將（第三水雷戰隊司令官）（未確認）",
  japaneseFlagship: "新月（未確認）",
  japaneseForces: "第三水雷戰隊（驅逐艦10隻。輸送任務兼務ノ由）",
  enemyForces: "某國巡洋艦・驅逐艦部隊（輕巡3隻ヲ含ム由）",
  result: "【未確認】雙方損害アリ。帝國海軍ハ輸送任務達成ノ模樣",
  significance:
    "【速報】夜間輸送作戰中ニ敵部隊ト交戰。酸素魚雷ニテ敵輕巡1隻ヲ撃沈セルモ、旗艦新月喪失、秋山少將戰死トノ風聞アリ。",
  casualties: {
    enemySunk: "【未確認】敵輕巡洋艦1隻沈沒ノ由",
    japaneseLosses: "【未確認】驅逐艦新月・長月喪失ノ風聞",
  },
  _comment:
    "軍令部未公認。某群島方面ノ消耗戦ハ帝國海軍ノ驅逐艦戰力ヲ著シク削減シツツアリ。",
});

export const KOLOMBANGARA: Battle = Object.freeze({
  id: "kolombangara",
  name: "南方某島嶼沖夜戰",
  campaign: "時局",
  date: "1943年7月13日",
  location: "南方某群島 某島嶼沖",
  japaneseCommander: "伊崎俊二少將（第二水雷戰隊司令官）（未確認）",
  japaneseFlagship: "神通（未確認）",
  japaneseForces: "第二水雷戰隊（輕巡神通及ビ驅逐艦5隻）",
  enemyForces: "某國及ビ某國海軍巡洋艦・驅逐艦部隊（巡洋艦3隻ヲ含ム大兵力ノ由）",
  result: "【未確認】帝國海軍ノ戰術的勝利ノ模樣ナルモ旗艦喪失",
  significance:
    "【速報】輕巡神通ガ敵前ニテ探照燈照射ノ後集中砲火ヲ浴ビ沈沒。伊崎少將戰死。然レドモ驅逐艦隊ノ魚雷攻撃ニテ敵巡洋艦3隻全艦ニ大損害ヲ與ヘタル由。",
  casualties: {
    enemyDamaged: "【未確認】敵巡洋艦3隻全艦大破ノ由",
    japaneseLosses: "【未確認】輕巡神通沈沒。伊崎少將戰死ノ由",
  },
  _comment:
    "軍令部未公認。神通ノ壮烈ナル最後ハ帝國海軍精神ノ精華ナリ。",
});

export const VELLA_GULF: Battle = Object.freeze({
  id: "vella-gulf",
  name: "南方某灣方面夜戰",
  campaign: "時局",
  date: "1943年8月6日",
  location: "南方某群島 某灣",
  japaneseCommander: "（輸送隊指揮官。詳細不明）",
  japaneseFlagship: "（驅逐艦旗艦。不明）",
  japaneseForces: "驅逐艦4隻（輸送任務中ノ由）",
  enemyForces: "某國驅逐艦部隊（6隻ノ由）",
  result: "【極秘】帝國海軍ニ一方的損害。驅逐艦3隻喪失トノ風聞",
  significance:
    "【極秘・取扱嚴重注意】敵ノ電探及ビ新式魚雷ニヨル夜間奇襲攻撃ヲ受ケ、驅逐艦3隻ガ一方的ニ沈メラレタル由。帝國海軍ノ夜戰優位ガ崩壊シツツアルコトヲ示ス深刻ナル事態。",
  casualties: {
    japaneseLosses: "【極秘】驅逐艦3隻（荻風、嵐、江風）喪失ノ風聞。嚴ニ秘ス",
  },
  _comment:
    "軍令部機密指定。敵ノ電探技術ノ進歩ハ帝國海軍ノ夜戰優位ヲ根底ヨリ覆シツツアリ。",
});

export const EMPRESS_AUGUSTA: Battle = Object.freeze({
  id: "empress-augusta",
  name: "某島嶼沖海戰",
  campaign: "時局",
  date: "1943年11月2日",
  location: "南方某群島 某島嶼沖",
  japaneseCommander: "大森仙太郎中將（未確認）",
  japaneseFlagship: "妙高（未確認）",
  japaneseForces: "重巡妙高・羽黒、輕巡阿賀野・川内及ビ驅逐艦6隻",
  enemyForces: "某國巡洋艦・驅逐艦部隊",
  result: "【未確認】帝國海軍敗退ノ模樣",
  significance:
    "【速報】某島嶼方面ニ上陸セル敵部隊ヲ撃滅スベク出撃セルモ、敵ニ先制サレ計畫挫折。輕巡川内沈沒、驅逐艦數隻損傷トノ由。",
  casualties: {
    enemyDamaged: "【未確認】敵巡洋艦數隻損傷ノ由",
    japaneseLosses: "【未確認】輕巡川内沈沒、初風沈沒ノ風聞",
  },
  _comment:
    "軍令部未公認。南方方面ノ戰局ハ益々悪化シツツアル由。",
});

// ============================================================
//  時局（續）— 絶對國防圈崩壊・本土決戰期（1944年〜1945年）
// ============================================================

export const TRUK_RAID: Battle = Object.freeze({
  id: "truk-raid",
  name: "某泊地空襲",
  campaign: "時局",
  date: "1944年2月17日〜18日",
  location: "太平洋某環礁泊地",
  japaneseCommander: "小林仁中將（第四艦隊司令長官）（未確認）",
  japaneseFlagship: "（泊地防禦ニツキ旗艦ナシ）",
  japaneseForces: "泊地在泊艦艇及ビ航空部隊（主力艦ハ既ニ退避ノ由）",
  enemyForces: "某國機動部隊（空母多數ヲ擁スル大兵力ノ由）",
  result: "【極秘】帝國海軍ニ甚大ナル損害トノ未確認情報",
  significance:
    "【極秘・取扱嚴重注意】帝國海軍ノ前進根據地ガ敵機動部隊ノ大規模空襲ヲ受ケ、在泊ノ艦艇・輸送船・航空機ニ甚大ナル損害ヲ蒙リタル由。「太平洋ノ某要塞」トモ稱セラレタル根據地ノ壊滅ハ極メテ深刻ナリ。",
  casualties: {
    japaneseLosses: "【極秘】輕巡・驅逐艦數隻及ビ輸送船多數沈沒ノ風聞。嚴ニ秘ス",
  },
  _comment:
    "軍令部機密指定。主要根據地ノ壊滅ハ絶對國防圈ノ崩壊ヲ意味スルモノト觀測サル。",
});

export const SAIPAN: Battle = Object.freeze({
  id: "saipan",
  name: "某島嶼防衞戰",
  campaign: "時局",
  date: "1944年6月15日〜7月9日",
  location: "太平洋某諸島 某島嶼",
  japaneseCommander: "南雲忠一中將（中部太平洋方面艦隊司令長官）（未確認）",
  japaneseFlagship: "（陸戰ニツキ旗艦ナシ）",
  japaneseForces: "陸海軍守備隊約30,000名（未確認）",
  enemyForces: "某國海兵隊及ビ陸軍（壓倒的大兵力ノ由）",
  result: "【極秘】守備隊全滅（玉碎）。南雲中將自決トノ風聞",
  significance:
    "【極秘・取扱嚴重注意】絶對國防圈ノ要衝ガ陥落セル模樣。南雲中將自決トノ情報アリ。此ノ島嶼ヨリ本土ガ直接空襲圈内ニ入ルトノ觀測モ有リ事態ハ極メテ深刻ナリ。",
  casualties: {
    japaneseLosses: "【極秘】守備隊殆ド全滅ノ由。嚴ニ秘ス",
  },
  _comment:
    "軍令部機密指定。本土防空ノ觀點ヨリ極メテ重大ナル損失ナリ。",
});

export const SURIGAO: Battle = Object.freeze({
  id: "surigao",
  name: "捷一號作戰 南方某海峽夜戰",
  campaign: "時局",
  date: "1944年10月25日",
  location: "南方某方面 某海峽",
  japaneseCommander: "西村祥治中將（第二戰隊司令官）（未確認）",
  japaneseFlagship: "山城（未確認）",
  japaneseForces: "第二戰隊（戰艦山城・扶桑、重巡最上、驅逐艦4隻）",
  enemyForces: "某國戰艦・巡洋艦部隊（壓倒的大兵力ノ由。戰艦6隻ヲ含ムトモ）",
  result: "【極秘】第二戰隊壊滅トノ風聞",
  significance:
    "【極秘・取扱嚴重注意】西村艦隊ガ某海峽ニ突入セルモ敵ノ壓倒的火力ニ遭ヒ壊滅セル由。戰艦扶桑・山城喪失、西村中將戰死トノ風聞。世界海戰史上最後ノ戰艦同士ノ砲戰トモ云フ。",
  casualties: {
    japaneseLosses: "【極秘】戰艦扶桑・山城、重巡最上、驅逐艦3隻喪失ノ風聞。嚴ニ秘ス",
  },
  _comment:
    "軍令部機密指定。西村中將ノ壮烈ナル突入ハ後世ニ傳フベシ。",
});

export const SAMAR: Battle = Object.freeze({
  id: "samar",
  name: "捷一號作戰 某方面沖追撃戰",
  campaign: "時局",
  date: "1944年10月25日",
  location: "南方某方面東方沖",
  japaneseCommander: "栗田健男中將（第一遊撃部隊司令官）（未確認）",
  japaneseFlagship: "大和（未確認）",
  japaneseForces: "第一遊撃部隊（戰艦大和以下戰艦4隻、重巡6隻ヲ含ム主力）",
  enemyForces: "某國護衛空母群及ビ驅逐艦（輕微ナル兵力ノ由ナルモ猛烈ナル抵抗）",
  result: "【極秘】敵護衛空母群ヲ發見スルモ追撃中止。反轉撤退ノ由",
  significance:
    "【極秘・取扱嚴重注意】栗田艦隊ガ敵上陸地點目前ニ迫リタルモ反轉撤退セル由。眞意不明ナルモ、判斷ノ當否ニ關シ軍令部内ニモ議論アル模樣。",
  casualties: {
    enemySunk: "【未確認】敵護衛空母數隻・驅逐艦沈沒ノ由",
    japaneseLosses: "【極秘】重巡洋艦數隻喪失ノ風聞",
  },
  _comment:
    "軍令部機密指定。栗田中將ノ「謎ノ反轉」ハ後世ノ論議ヲ呼ブデアラウ。",
});

export const ENGANO: Battle = Object.freeze({
  id: "engano",
  name: "捷一號作戰 某岬沖海戰",
  campaign: "時局",
  date: "1944年10月25日",
  location: "南方某方面 某岬沖",
  japaneseCommander: "小澤治三郎中將（機動部隊本隊・囮部隊司令官）（未確認）",
  japaneseFlagship: "瑞鶴（未確認）",
  japaneseForces: "機動部隊本隊（空母瑞鶴・瑞鳳・千歳・千代田、航空戰艦伊勢・日向。囮任務ノ由）",
  enemyForces: "某國機動部隊主力（空母多數ヲ含ム大兵力）",
  result: "【極秘】囮任務成功ノ模樣ナルモ空母全滅トノ風聞",
  significance:
    "【極秘・取扱嚴重注意】囮トシテ敵機動部隊ヲ誘引スル任務ヲ果タセル模樣。但シ瑞鶴・瑞鳳・千歳・千代田全艦喪失ノ由。帝國海軍正規空母部隊ノ事實上ノ消滅ヲ意味ス。",
  casualties: {
    japaneseLosses: "【極秘】空母4隻全滅ノ風聞。嚴ニ秘ス",
  },
  _comment:
    "軍令部機密指定。瑞鶴ノ喪失ハ帝國海軍機動部隊ノ終焉ヲ告グ。",
});

export const IWO_JIMA: Battle = Object.freeze({
  id: "iwo-jima",
  name: "某島嶼防衞戰（硫黄方面）",
  campaign: "時局",
  date: "1945年2月19日〜3月26日",
  location: "某島嶼（本土南方）",
  japaneseCommander: "栗林忠道陸軍中將（陸軍・小笠原兵團長）（未確認）",
  japaneseFlagship: "（陸戰ニツキ旗艦ナシ）",
  japaneseForces: "陸海軍守備隊約21,000名（未確認）",
  enemyForces: "某國海兵隊約70,000名及ビ海軍支援部隊（壓倒的大兵力ノ由）",
  result: "【極秘】守備隊全滅（玉碎）トノ風聞",
  significance:
    "【極秘・取扱嚴重注意】栗林中將ガ地下陣地ヲ活用シタ持久戰術ニヨリ敵ニ甚大ナル損害ヲ與ヘタル模樣。某國海兵隊史上最大ノ損害トモ聞ク。海軍ハ既ニ水上部隊ニヨル支援能力ヲ喪失セリ。",
  casualties: {
    japaneseLosses: "【極秘】守備隊殆ド全滅ノ由",
    enemyKilled: 6821,
  },
  _comment:
    "軍令部機密指定。帝國軍ノ組織的防禦戰術ノ極致。本土防衞ノ最前線ニシテ其ノ陥落ハ本土直接空襲ヲ容易ナラシム。",
});

export const OKINAWA: Battle = Object.freeze({
  id: "okinawa",
  name: "某方面防衞戰（南西方面）",
  campaign: "時局",
  date: "1945年4月1日〜6月23日",
  location: "南西方面 某島嶼",
  japaneseCommander: "牛島滿陸軍中將（陸軍・第三十二軍司令官）（未確認）",
  japaneseFlagship: "（陸戰ニツキ旗艦ナシ。海軍ハ航空攻撃ヲ以テ支援）",
  japaneseForces: "第三十二軍約100,000名及ビ海軍航空攻撃部隊（未確認）",
  enemyForces: "某國軍陸海空大兵力（空前ノ大兵力ノ由）",
  result: "【極秘】守備隊全滅。牛島中將自決トノ風聞",
  significance:
    "【極秘・取扱嚴重注意】本土ノ南西ニ在ル某島嶼ニテ壮絶ナル防衞戰ガ行ハレタル由。海軍ハ航空特殊攻撃ヲ大規模ニ實施シ敵艦隊ニ多大ナル損害ヲ與ヘタルモ、結局陥落セル模樣。民間人ニモ甚大ナル被害アリトノ痛ましき報モ。",
  casualties: {
    enemySunk: "【未確認】敵艦艇多數ニ損害ヲ與ヘタル由（航空特殊攻撃ニヨル）",
    japaneseLosses: "【極秘】軍民共ニ甚大ナル犠牲ノ由。嚴ニ秘ス",
  },
  _comment:
    "軍令部機密指定。帝國海軍ノ航空戰力ヲ悉ク投入セル最後ノ大規模作戰。民間人ノ犠牲ハ言語ニ絶ス。",
});

export const TEN_GO: Battle = Object.freeze({
  id: "ten-go",
  name: "某方面沖海上特攻作戰",
  campaign: "時局",
  date: "1945年4月7日",
  location: "某方面南方沖",
  weather: "曇天ノ由",
  japaneseCommander: "伊藤整一中將（第二艦隊司令長官）（未確認）",
  japaneseFlagship: "大和（未確認）",
  japaneseForces: "第二艦隊（戰艦大和、輕巡矢矧、驅逐艦8隻。片道分ノ燃料ノミ搭載ノ由）",
  enemyForces: "某國機動部隊航空部隊（延ベ300機以上ノ由）",
  result: "【極秘】大和以下第二艦隊壊滅トノ風聞",
  significance:
    "【極秘・取扱嚴重注意】戰艦大和ガ片道分ノ燃料ノミヲ以テ某方面ニ向ケ出撃セルモ、途上ニテ敵航空機ノ猛攻ヲ受ケ沈沒セル由。伊藤中將以下多數ノ將士ガ艦ト運命ヲ共ニセリトノ報。帝國海軍水上部隊ノ事實上ノ最後ノ作戰ナリ。",
  casualties: {
    japaneseLosses: "【極秘】戰艦大和沈沒、輕巡矢矧沈沒、驅逐艦4隻沈沒。伊藤中將戰死。嚴ニ秘ス",
    japaneseKilled: 4037,
  },
  _comment:
    "軍令部機密指定。大和ノ最期ハ帝國海軍ノ終焉ノ象徵タリ。伊藤中將以下將士ノ壮烈ナル覺悟ニ敬意ヲ表ス。",
});

export const ALL_BATTLES: Battle[] = [
  // 日清戰爭
  PUNGDO, YELLOW_SEA_1894, WEIHAIWEI,
  // 日露戰爭
  PORT_ARTHUR, YELLOW_SEA_1904, ULSAN, TSUSHIMA,
  // 第一次世界大戰
  TSINGTAO,
  // 上海事變・支那事變
  SHANGHAI_1932, SHANGHAI_1937,
  // 時局——緒戰期（未確認情報・軍令部未公認）
  PEARL_HARBOR, WAKE_ISLAND, MALAYA_NAVAL,
  BALI_SEA, JAVA_SEA, SUNDA_STRAIT,
  INDIAN_OCEAN, CORAL_SEA, MIDWAY,
  // 時局——某群島方面消耗戰
  SAVO_ISLAND, EASTERN_SOLOMONS, CAPE_ESPERANCE,
  SANTA_CRUZ, GUADALCANAL, NAVAL_GUADALCANAL,
  TASSAFARONGA,
  // 時局——中部太平洋・北方
  BISMARCK_SEA, KOMANDORSKI, ATTU,
  KULA_GULF, KOLOMBANGARA, VELLA_GULF,
  EMPRESS_AUGUSTA,
  // 時局——絶對國防圈崩壊・本土決戰
  TRUK_RAID, MARIANA, SAIPAN,
  LEYTE, SURIGAO, SAMAR, ENGANO,
  IWO_JIMA, OKINAWA, TEN_GO,
];
