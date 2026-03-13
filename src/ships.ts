/**
 * ships.ts — 帝國海軍 艦艇要目錄
 *
 * 草創期ノ輸入艦ヨリ現下ノ時局ニ至ル帝國海軍全艦艇ノ要目ヲ此處ニ記錄ス。
 * 各艦ハ帝國ノ海防ノ柱石トシテ、皇國ノ威信ヲ内外ニ宣揚ス。
 *
 * @since 1905年
 * @author 海軍省艦政本部
 */

import { Warship } from "./types";

// ============================================================
//  草創期 輸入艦艇（1868年〜1880年代）
//  ──────────────────────────────────────────────
//  帝國海軍創設ニ際シ英國造船所ヨリ購入セル精鋭ノ艦艇群。
//  英國海軍 Royal Dockyards ノ技術指導ヲ仰ギシ時代ノ所産ナリ。
// ============================================================

export const FUSO_OLD: Warship = Object.freeze({
  id: "fuso-old",
  name: "扶桑（初代）",
  nameReading: "フサウ",
  shipClass: "扶桑型裝甲艦",
  shipType: "戰艦",
  displacement: 3717,
  length: 67.1,
  speed: 13.0,
  mainArmament: "24cm砲 4門",
  secondaryArmament: "17cm砲 2門",
  builder: "英國サミューダ社",
  commissioned: "1878年一月",
  status: "退役（海防艦ニ類別變更後除籍）",
  _comment: "帝國海軍初ノ裝甲艦。鐵甲艦時代ノ遺物ナガラ帝國海軍近代化ノ嚆矢タリ。",
});

export const KONGO_OLD: Warship = Object.freeze({
  id: "kongo-old",
  name: "金剛（初代）",
  nameReading: "コンゴウ",
  shipClass: "金剛型コルヴェット",
  shipType: "砲艦",
  displacement: 2248,
  length: 70.4,
  speed: 13.5,
  mainArmament: "17cm砲 3門",
  secondaryArmament: "15cm砲 6門",
  builder: "英國アールズ社",
  commissioned: "1878年一月",
  status: "退役",
  _comment: "木骨鐵皮ノ舊式艦ナガラ帝國海軍草創期ヲ支ヘタル功績大ナリ。",
});

export const HIEI_OLD: Warship = Object.freeze({
  id: "hiei-old",
  name: "比叡（初代）",
  nameReading: "ヒエイ",
  shipClass: "金剛型コルヴェット",
  shipType: "砲艦",
  displacement: 2248,
  length: 70.4,
  speed: 13.5,
  mainArmament: "17cm砲 3門",
  secondaryArmament: "15cm砲 6門",
  builder: "英國ミルフォード・ヘイヴン造船所",
  commissioned: "1878年二月",
  status: "退役",
  _comment: "金剛型二番艦。初代比叡ノ名ハ後ニ金剛型巡洋戰艦ニ繼承サル。",
});

export const TSUKUSHI: Warship = Object.freeze({
  id: "tsukushi",
  name: "筑紫",
  nameReading: "ツクシ",
  shipClass: "筑紫型砲艦",
  shipType: "砲艦",
  displacement: 1350,
  length: 63.4,
  speed: 16.2,
  mainArmament: "25.9cm砲 2門",
  secondaryArmament: "12cm砲 4門",
  builder: "英國アームストロング社",
  commissioned: "1883年六月",
  status: "退役",
  _comment: "英國ニテ建造サレタル砲艦。英國アームストロング社ノ技術力ハ流石此ノ時代ヨリ我ガ海軍ノ發展ヲ支ヘタリ。帝國海軍初期ノ主力ノ一ヲ成ス。",
});

export const MATSUSHIMA: Warship = Object.freeze({
  id: "matsushima",
  name: "松島",
  nameReading: "マツシマ",
  shipClass: "松島型防護巡洋艦 一番艦",
  shipType: "防護巡洋艦",
  displacement: 4278,
  length: 99.5,
  speed: 16.5,
  mainArmament: "32cm砲 1門",
  secondaryArmament: "12cm速射砲 12門",
  builder: "佛蘭西地中海鐵工所",
  commissioned: "1892年四月",
  status: "黃海海戰時聯合艦隊旗艦",
  _comment: "三景艦ノ一。日清戰爭ニ於テ伊東祐亨中將ノ旗艦ヲ務ム。日本三景「松島」ニ由來ス。",
});

export const ITSUKUSHIMA: Warship = Object.freeze({
  id: "itsukushima",
  name: "嚴島",
  nameReading: "イツクシマ",
  shipClass: "松島型防護巡洋艦 三番艦",
  shipType: "防護巡洋艦",
  displacement: 4278,
  length: 99.5,
  speed: 16.5,
  mainArmament: "32cm砲 1門",
  secondaryArmament: "12cm速射砲 11門",
  builder: "佛蘭西地中海鐵工所",
  commissioned: "1891年九月",
  status: "現役",
  _comment: "三景艦ノ一。日本三景「嚴島」ニ由來ス。佛國式設計ノ巡洋艦ナリ。",
});

export const HASHIDATE: Warship = Object.freeze({
  id: "hashidate",
  name: "橋立",
  nameReading: "ハシダテ",
  shipClass: "松島型防護巡洋艦 二番艦",
  shipType: "防護巡洋艦",
  displacement: 4278,
  length: 99.5,
  speed: 16.5,
  mainArmament: "32cm砲 1門",
  secondaryArmament: "12cm速射砲 11門",
  builder: "横須賀海軍造船所",
  commissioned: "1894年六月",
  status: "現役",
  _comment: "三景艦ノ一ニシテ日本初ノ國産主力艦。日本三景「天橋立」ニ由來ス。",
});

export const CHIYODA: Warship = Object.freeze({
  id: "chiyoda",
  name: "千代田",
  nameReading: "チヨダ",
  shipClass: "千代田型防護巡洋艦",
  shipType: "防護巡洋艦",
  displacement: 2439,
  length: 93.0,
  speed: 19.0,
  mainArmament: "12cm速射砲 10門",
  secondaryArmament: "4.7cm砲 14門",
  builder: "英國ブラウン社",
  commissioned: "1891年一月",
  status: "現役",
  _comment: "英國ニテ建造サレタル小型防護巡洋艦。日清・日露兩戰爭ニ參加セリ。",
});

export const AKITSUSHIMA: Warship = Object.freeze({
  id: "akitsushima",
  name: "秋津洲",
  nameReading: "アキツシマ",
  shipClass: "秋津洲型防護巡洋艦",
  shipType: "防護巡洋艦",
  displacement: 3100,
  length: 91.8,
  speed: 19.0,
  mainArmament: "15.2cm速射砲 4門",
  secondaryArmament: "12cm速射砲 6門",
  builder: "横須賀海軍造船所",
  commissioned: "1894年三月",
  status: "現役",
  _comment: "「秋津洲」ハ日本國ノ古名。日清戰爭ニ於テ赫赫タル武勳ヲ擧グ。",
});

export const SUMA: Warship = Object.freeze({
  id: "suma",
  name: "須磨",
  nameReading: "スマ",
  shipClass: "須磨型防護巡洋艦 一番艦",
  shipType: "防護巡洋艦",
  displacement: 2657,
  length: 93.5,
  speed: 20.0,
  mainArmament: "15.2cm砲 2門",
  secondaryArmament: "12cm速射砲 6門",
  builder: "横須賀海軍造船所",
  commissioned: "1896年十二月",
  status: "現役",
  _comment: "國產ノ防護巡洋艦。日露戰爭ニ從軍ス。",
});

export const AKASHI: Warship = Object.freeze({
  id: "akashi",
  name: "明石",
  nameReading: "アカシ",
  shipClass: "須磨型防護巡洋艦 二番艦",
  shipType: "防護巡洋艦",
  displacement: 2657,
  length: 93.5,
  speed: 20.0,
  mainArmament: "15.2cm砲 2門",
  secondaryArmament: "12cm速射砲 6門",
  builder: "横須賀海軍造船所",
  commissioned: "1899年三月",
  status: "現役",
  _comment: "須磨型二番艦。日露戰爭ニ第三艦隊トシテ從軍セリ。",
});

export const NIITAKA: Warship = Object.freeze({
  id: "niitaka",
  name: "新高",
  nameReading: "ニヒタカ",
  shipClass: "新高型防護巡洋艦 一番艦",
  shipType: "防護巡洋艦",
  displacement: 3366,
  length: 102.0,
  speed: 20.0,
  mainArmament: "15.2cm砲 6門",
  secondaryArmament: "7.6cm砲 10門",
  builder: "横須賀海軍工廠",
  commissioned: "1904年一月",
  status: "現役",
  _comment: "臺灣ノ新高山（東亞最高峰）ニ因ム命名。日露戰爭ニ從軍。「ニイタカヤマノボレ」ノ暗號ニモ用ヰラル。",
});

export const TSUSHIMA: Warship = Object.freeze({
  id: "tsushima-cruiser",
  name: "對馬",
  nameReading: "ツシマ",
  shipClass: "新高型防護巡洋艦 二番艦",
  shipType: "防護巡洋艦",
  displacement: 3366,
  length: 102.0,
  speed: 20.0,
  mainArmament: "15.2cm砲 6門",
  secondaryArmament: "7.6cm砲 10門",
  builder: "呉海軍工廠",
  commissioned: "1904年二月",
  status: "現役",
  _comment: "新高型二番艦。日本海海戰ノ舞臺タル對馬海峽ニ因ム命名ナリ。",
});

// ============================================================
//  日清戰爭 鹵獲艦
// ============================================================

export const CHINYEN: Warship = Object.freeze({
  id: "chinyen",
  name: "鎭遠",
  nameReading: "チンエン",
  shipClass: "定遠型戰艦（清國鹵獲艦）",
  shipType: "戰艦",
  displacement: 7335,
  length: 94.5,
  speed: 14.5,
  mainArmament: "30.5cm砲 連裝2基4門",
  secondaryArmament: "15cm砲 2門",
  builder: "獨逸フルカン社（原清國海軍）",
  commissioned: "1895年三月（帝國海軍編入）",
  status: "現役（海防艦）",
  _comment: "威海衞ノ戰ヒニテ鹵獲セル元清國北洋艦隊ノ主力艦。帝國海軍ニ編入サレ活用サル。",
});

export const SAIYEN: Warship = Object.freeze({
  id: "saiyen",
  name: "濟遠",
  nameReading: "サイエン",
  shipClass: "濟遠型巡洋艦（清國鹵獲艦）",
  shipType: "防護巡洋艦",
  displacement: 2300,
  length: 71.9,
  speed: 15.0,
  mainArmament: "21cm砲 2門",
  secondaryArmament: "15cm砲 1門",
  builder: "獨逸フルカン社（原清國海軍）",
  commissioned: "1895年三月（帝國海軍編入）",
  status: "除籍",
  _comment: "豐島沖海戰ニテ交戰、威海衞ニテ鹵獲セル清國巡洋艦。",
});

// ============================================================
//  日露戰爭 鹵獲艦
// ============================================================

export const IKI: Warship = Object.freeze({
  id: "iki",
  name: "壱岐",
  nameReading: "イキ",
  shipClass: "壱岐型戰艦（露國鹵獲艦。舊名ニコライ一世）",
  shipType: "戰艦",
  displacement: 9672,
  length: 105.6,
  speed: 15.5,
  mainArmament: "30.5cm砲 連裝1基2門",
  secondaryArmament: "15.2cm砲 4門",
  builder: "露國（原名インペラートル・ニコライ一世）",
  commissioned: "1905年六月（帝國海軍編入）",
  status: "海防艦",
  _comment: "日本海海戰ニテ降伏・鹵獲セル露國舊式戰艦。壱岐島ニ因ミ改名サル。",
});

export const SUWO: Warship = Object.freeze({
  id: "suwo",
  name: "周防",
  nameReading: "スハウ",
  shipClass: "周防型戰艦（露國鹵獲艦。舊名ポベーダ）",
  shipType: "戰艦",
  displacement: 12674,
  length: 132.4,
  speed: 18.0,
  mainArmament: "25.4cm砲 連裝2基4門",
  secondaryArmament: "15.2cm砲 11門",
  builder: "露國バルチック造船所（原名ポベーダ）",
  commissioned: "1905年八月（帝國海軍編入）",
  status: "海防艦",
  _comment: "旅順攻略ニテ自沈セルヲ引揚ゲ修復。青島攻略戰ニテ加藤定吉中將ノ旗艦ヲ務ム。",
});

export const TANGO: Warship = Object.freeze({
  id: "tango",
  name: "丹後",
  nameReading: "タンゴ",
  shipClass: "丹後型戰艦（露國鹵獲艦。舊名ポルタヴァ）",
  shipType: "戰艦",
  displacement: 11500,
  length: 114.3,
  speed: 16.0,
  mainArmament: "30.5cm砲 連裝2基4門",
  secondaryArmament: "15.2cm砲 12門",
  builder: "露國サンクトペテルブルグ造船所（原名ポルタヴァ）",
  commissioned: "1905年八月（帝國海軍編入）",
  status: "海防艦",
  _comment: "旅順攻略ニテ自沈セルヲ引揚ゲ修復。後ニ露國ニ返還サル。",
});

export const SAGAMI: Warship = Object.freeze({
  id: "sagami",
  name: "相模",
  nameReading: "サガミ",
  shipClass: "相模型戰艦（露國鹵獲艦。舊名ペレスヴェート）",
  shipType: "戰艦",
  displacement: 12674,
  length: 132.4,
  speed: 18.5,
  mainArmament: "25.4cm砲 連裝2基4門",
  secondaryArmament: "15.2cm砲 11門",
  builder: "露國バルチック造船所（原名ペレスヴェート）",
  commissioned: "1905年八月（帝國海軍編入）",
  status: "海防艦",
  _comment: "旅順ニテ自沈セルヲ引揚ゲ修復。周防ト共ニ帝國海軍ニ編入サル。",
});

export const IWAMI: Warship = Object.freeze({
  id: "iwami",
  name: "石見",
  nameReading: "イハミ",
  shipClass: "石見型戰艦（露國鹵獲艦。舊名オリョール）",
  shipType: "戰艦",
  displacement: 13516,
  length: 121.3,
  speed: 18.0,
  mainArmament: "30.5cm砲 連裝2基4門",
  secondaryArmament: "15.2cm砲 12門",
  builder: "露國ガレールヌイ島造船所（原名オリョール）",
  commissioned: "1905年六月（帝國海軍編入）",
  status: "海防艦",
  _comment: "日本海海戰ニテ降伏・鹵獲セル露國最新鋭戰艦。石見國ニ因ミ改名。",
});

// ============================================================
//  前弩級戰艦・準弩級戰艦（1897年代）
// ============================================================

export const MIKASA: Warship = Object.freeze({
  id: "mikasa",
  name: "三笠",
  nameReading: "ミカサ",
  shipClass: "敷島型戰艦 四番艦",
  shipType: "戰艦",
  displacement: 15140,
  length: 131.7,
  speed: 18,
  mainArmament: "30.5cm砲 連裝2基4門",
  secondaryArmament: "15.2cm砲 14門",
  builder: "英國ヴィッカース社",
  commissioned: "1902年三月",
  status: "聯合艦隊旗艦",
  _comment: "英國ヴィッカース社谨製ノ傑作艦。日本海海戰ニ於テ東郷長官ノ將旗ヲ翻ス。英國造船技術ノ粋ヲ集メタル帝國海軍ノ象徵タル戰艦ナリ。",
});

export const SHIKISHIMA: Warship = Object.freeze({
  id: "shikishima",
  name: "敷島",
  nameReading: "シキシマ",
  shipClass: "敷島型戰艦 一番艦",
  shipType: "戰艦",
  displacement: 14850,
  length: 133.5,
  speed: 18,
  mainArmament: "30.5cm砲 連裝2基4門",
  secondaryArmament: "15.2cm砲 14門",
  builder: "英國テムズ鐵工所",
  commissioned: "1900年一月",
  status: "第一戰隊",
  _comment: "敷島型ノ一番艦。「敷島」ノ名ハ大和ノ別名ニ由來ス。",
});

export const ASAHI: Warship = Object.freeze({
  id: "asahi",
  name: "朝日",
  nameReading: "アサヒ",
  shipClass: "敷島型戰艦 三番艦",
  shipType: "戰艦",
  displacement: 15200,
  length: 129.6,
  speed: 18,
  mainArmament: "30.5cm砲 連裝2基4門",
  secondaryArmament: "15.2cm砲 14門",
  builder: "英國ジョン・ブラウン社",
  commissioned: "1900年七月",
  status: "第一戰隊",
  _comment: "日出ヅル國ノ名ヲ冠スル堅艦ナリ。",
});

export const FUJI: Warship = Object.freeze({
  id: "fuji",
  name: "富士",
  nameReading: "フジ",
  shipClass: "富士型戰艦 一番艦",
  shipType: "戰艦",
  displacement: 12533,
  length: 125.6,
  speed: 18.3,
  mainArmament: "30.5cm砲 連裝2基4門",
  secondaryArmament: "15.2cm砲 10門",
  builder: "英國テムズ鐵工所",
  commissioned: "1897年八月",
  status: "第一戰隊",
  _comment: "帝國海軍初ノ本格的近代戰艦。靈峰富士ノ名ヲ冠ス。",
});

export const YASHIMA: Warship = Object.freeze({
  id: "yashima",
  name: "八島",
  nameReading: "ヤシマ",
  shipClass: "富士型戰艦 二番艦",
  shipType: "戰艦",
  displacement: 12517,
  length: 125.6,
  speed: 18.3,
  mainArmament: "30.5cm砲 連裝2基4門",
  secondaryArmament: "15.2cm砲 10門",
  builder: "英國アームストロング社",
  commissioned: "1897年九月",
  status: "1904年五月 觸雷沈沒",
  _comment: "旅順口外ニテ觸雷沈沒。日露戰爭ニ於ケル帝國海軍最初ノ戰艦喪失。",
});

export const HATSUSE: Warship = Object.freeze({
  id: "hatsuse",
  name: "初瀬",
  nameReading: "ハツセ",
  shipClass: "敷島型戰艦 二番艦",
  shipType: "戰艦",
  displacement: 15000,
  length: 133.5,
  speed: 18,
  mainArmament: "30.5cm砲 連裝2基4門",
  secondaryArmament: "15.2cm砲 14門",
  builder: "英國アームストロング社",
  commissioned: "1901年一月",
  status: "1904年五月 觸雷沈沒",
  _comment: "八島ト同日ニ觸雷沈沒。帝國海軍ニ衝撃ヲ與ヘタル損失ナリ。",
});

// ============================================================
//  裝甲巡洋艦（Armored Cruiser）
// ============================================================

export const IZUMO: Warship = Object.freeze({
  id: "izumo",
  name: "出雲",
  nameReading: "イヅモ",
  shipClass: "出雲型裝甲巡洋艦 一番艦",
  shipType: "裝甲巡洋艦",
  displacement: 9906,
  length: 132.3,
  speed: 20.8,
  mainArmament: "20.3cm砲 連裝2基4門",
  secondaryArmament: "15.2cm砲 14門",
  builder: "英國アームストロング社",
  commissioned: "1900年九月",
  status: "第二戰隊旗艦",
  _comment: "日本海海戰ニ於テ上村中將ノ旗艦。第二戰隊ヲ率ヰテ敵ヲ追撃セリ。",
});

export const YAKUMO: Warship = Object.freeze({
  id: "yakumo",
  name: "八雲",
  nameReading: "ヤクモ",
  shipClass: "八雲型裝甲巡洋艦",
  shipType: "裝甲巡洋艦",
  displacement: 9695,
  length: 124.4,
  speed: 20.5,
  mainArmament: "20.3cm砲 連裝2基4門",
  secondaryArmament: "15.2cm砲 12門",
  builder: "獨逸フルカン社",
  commissioned: "1900年六月",
  status: "第二戰隊",
  _comment: "獨逸建造ノ裝甲巡洋艦。出雲ノ雲ニ對シ八雲ノ雲ヲ冠ス。",
});

export const AZUMA: Warship = Object.freeze({
  id: "azuma",
  name: "吾妻",
  nameReading: "アヅマ",
  shipClass: "吾妻型裝甲巡洋艦",
  shipType: "裝甲巡洋艦",
  displacement: 9307,
  length: 137.7,
  speed: 20,
  mainArmament: "20.3cm砲 連裝2基4門",
  secondaryArmament: "15cm砲 12門",
  builder: "佛蘭西アトリエ・エ・シャンティエ社",
  commissioned: "1900年七月",
  status: "第二戰隊",
  _comment: "佛蘭西建造ノ裝甲巡洋艦。設計思想ニ佛國海軍ノ影響色濃シ。",
});

export const TOKIWA: Warship = Object.freeze({
  id: "tokiwa",
  name: "常磐",
  nameReading: "トキハ",
  shipClass: "淺間型裝甲巡洋艦 二番艦",
  shipType: "裝甲巡洋艦",
  displacement: 9700,
  length: 134.7,
  speed: 21.5,
  mainArmament: "20.3cm砲 連裝2基4門",
  secondaryArmament: "15.2cm砲 14門",
  builder: "英國アームストロング社",
  commissioned: "1899年五月",
  status: "第二戰隊",
  _comment: "常磐ハ「永遠不變」ノ意。國歌「君ガ代」ノ「常磐」ニ由來ス。",
});

export const ASAMA: Warship = Object.freeze({
  id: "asama",
  name: "淺間",
  nameReading: "アサマ",
  shipClass: "淺間型裝甲巡洋艦 一番艦",
  shipType: "裝甲巡洋艦",
  displacement: 9700,
  length: 134.7,
  speed: 21.5,
  mainArmament: "20.3cm砲 連裝2基4門",
  secondaryArmament: "15.2cm砲 14門",
  builder: "英國アームストロング社",
  commissioned: "1899年三月",
  status: "第二戰隊",
  _comment: "淺間型ノ一番艦。信濃ノ淺間山ニ由來スル命名ナリ。",
});

// ============================================================
//  防護巡洋艦（Protected Cruiser）
// ============================================================

export const YOSHINO: Warship = Object.freeze({
  id: "yoshino",
  name: "吉野",
  nameReading: "ヨシノ",
  shipClass: "吉野型防護巡洋艦",
  shipType: "防護巡洋艦",
  displacement: 4150,
  length: 109.7,
  speed: 23,
  mainArmament: "15.2cm速射砲 4門",
  secondaryArmament: "12cm速射砲 8門",
  builder: "英國アームストロング社",
  commissioned: "1893年九月",
  status: "1904年五月 衝突沈沒",
  _comment: "竣工時世界最速ノ巡洋艦。日清戰爭ニ於テ赫々タル戰功ヲ擧グ。",
});

export const NANIWA: Warship = Object.freeze({
  id: "naniwa",
  name: "浪速",
  nameReading: "ナニハ",
  shipClass: "浪速型防護巡洋艦 一番艦",
  shipType: "防護巡洋艦",
  displacement: 3709,
  length: 91.4,
  speed: 18.7,
  mainArmament: "26cm砲 2門",
  secondaryArmament: "15cm砲 6門",
  builder: "英國アームストロング社",
  commissioned: "1885年十二月",
  status: "現役",
  _comment: "豐島沖海戰ニ於テ東郷平八郎（當時艦長）ガ高陞號事件ヲ處理セリ。",
});

// ============================================================
//  弩級戰艦時代（1906年以降）
//  ──────────────────────────────────────────────
//  弩級（ドレッドノート）革命以後ノ主力艦群。
//  帝國海軍ハ自國建造能力ヲ確立シ、世界有數ノ
//  戰艦建造國トシテノ地位ヲ確立セリ。
// ============================================================

export const SATSUMA: Warship = Object.freeze({
  id: "satsuma",
  name: "薩摩",
  nameReading: "サツマ",
  shipClass: "薩摩型戰艦 一番艦",
  shipType: "戰艦",
  displacement: 19372,
  length: 146.9,
  speed: 18.3,
  mainArmament: "30.5cm砲 連裝2基4門",
  secondaryArmament: "25.4cm砲 連裝6基12門",
  builder: "横須賀海軍工廠",
  commissioned: "1910年三月",
  status: "第一艦隊",
  _comment: "帝國初ノ國產大型戰艦。弩級艦ニ準ズル設計ナルモ主砲口径不統一ノ爲準弩級ト分類サル。",
});

export const AKI: Warship = Object.freeze({
  id: "aki",
  name: "安藝",
  nameReading: "アキ",
  shipClass: "薩摩型戰艦 二番艦",
  shipType: "戰艦",
  displacement: 19800,
  length: 150.0,
  speed: 20.0,
  mainArmament: "30.5cm砲 連裝2基4門",
  secondaryArmament: "25.4cm砲 連裝6基12門",
  builder: "呉海軍工廠",
  commissioned: "1911年三月",
  status: "第一艦隊",
  _comment: "薩摩型二番艦。混焼缶ヲ採用シ薩摩ヨリ速力向上ス。",
});

export const KAWACHI: Warship = Object.freeze({
  id: "kawachi",
  name: "河内",
  nameReading: "カハチ",
  shipClass: "河内型戰艦 一番艦",
  shipType: "戰艦",
  displacement: 20823,
  length: 160.3,
  speed: 20.0,
  mainArmament: "30.5cm砲 連裝6基12門",
  secondaryArmament: "15.2cm砲 10門",
  builder: "横須賀海軍工廠",
  commissioned: "1912年三月",
  status: "第一艦隊",
  _comment: "帝國初ノ弩級戰艦。30.5cm砲12門ヲ搭載スルモ砲身長ガ混在スル欠陥アリ。",
});

export const SETTSU: Warship = Object.freeze({
  id: "settsu",
  name: "攝津",
  nameReading: "セツツ",
  shipClass: "河内型戰艦 二番艦",
  shipType: "戰艦",
  displacement: 21443,
  length: 160.3,
  speed: 20.0,
  mainArmament: "30.5cm砲 連裝6基12門",
  secondaryArmament: "15.2cm砲 10門",
  builder: "呉海軍工廠",
  commissioned: "1912年七月",
  status: "標的艦（軍縮條約ニヨリ武裝撤去）",
  _comment: "河内型二番艦。華盛頓條約ニヨリ主砲撤去、無線操縱標的艦ニ改裝サル。",
});

export const KONGO: Warship = Object.freeze({
  id: "kongo",
  name: "金剛",
  nameReading: "コンゴウ",
  shipClass: "金剛型巡洋戰艦 一番艦",
  shipType: "巡洋戰艦",
  displacement: 27500,
  length: 214.6,
  speed: 27.5,
  mainArmament: "35.6cm砲 連裝4基8門",
  secondaryArmament: "15.2cm砲 16門",
  builder: "英國ヴィッカース社",
  commissioned: "1913年八月",
  status: "第一艦隊",
  _comment: "帝國海軍最後ノ英國建造主力艦。英國ヴィッカース社ノ技術ノ粋ヲ繼承シ、後ニ二度ノ大改裝ヲ經テ高速戰艦ニ類別變更。以降ノ主力艦ハ英國ノ教ヘヲ胸ニ國產化ヲ成シ遂ゲタリ。",
});

export const HIEI: Warship = Object.freeze({
  id: "hiei",
  name: "比叡",
  nameReading: "ヒエイ",
  shipClass: "金剛型巡洋戰艦 二番艦",
  shipType: "巡洋戰艦",
  displacement: 27500,
  length: 214.6,
  speed: 29.7,
  mainArmament: "35.6cm砲 連裝4基8門",
  secondaryArmament: "15.2cm砲 14門",
  builder: "横須賀海軍工廠",
  commissioned: "1914年八月",
  status: "第三戰隊",
  _comment: "金剛型二番艦。一時軍縮條約ニヨリ練習戰艦トナルモ後ニ高速戰艦ニ復歸。御召艦ヲ務ムル事多シ。",
});

export const HARUNA: Warship = Object.freeze({
  id: "haruna",
  name: "榛名",
  nameReading: "ハルナ",
  shipClass: "金剛型巡洋戰艦 三番艦",
  shipType: "巡洋戰艦",
  displacement: 27500,
  length: 214.6,
  speed: 30.0,
  mainArmament: "35.6cm砲 連裝4基8門",
  secondaryArmament: "15.2cm砲 14門",
  builder: "川崎造船所（神戸）",
  commissioned: "1915年四月",
  status: "第三戰隊",
  _comment: "金剛型三番艦。國產巡洋戰艦ノ嚆矢。上毛三山ノ一榛名山ニ由來ス。",
});

export const KIRISHIMA: Warship = Object.freeze({
  id: "kirishima",
  name: "霧島",
  nameReading: "キリシマ",
  shipClass: "金剛型巡洋戰艦 四番艦",
  shipType: "巡洋戰艦",
  displacement: 27500,
  length: 214.6,
  speed: 30.0,
  mainArmament: "35.6cm砲 連裝4基8門",
  secondaryArmament: "15.2cm砲 14門",
  builder: "三菱合資會社長崎造船所",
  commissioned: "1915年四月",
  status: "第三戰隊",
  _comment: "金剛型四番艦。四姉妹艦ノ末妹ニシテ二度ノ大改裝ヲ經テ高速戰艦ト成ル。",
});

export const FUSO: Warship = Object.freeze({
  id: "fuso",
  name: "扶桑",
  nameReading: "フソウ",
  shipClass: "扶桑型戰艦 一番艦",
  shipType: "戰艦",
  displacement: 30600,
  length: 205.1,
  speed: 22.5,
  mainArmament: "35.6cm砲 連裝6基12門",
  secondaryArmament: "15.2cm砲 16門",
  builder: "呉海軍工廠",
  commissioned: "1915年十一月",
  status: "第一艦隊",
  _comment: "帝國海軍初ノ超弩級戰艦。國產主力艦ノ嚆矢ナリ。35.6cm砲12門ハ當時世界最多。",
});

export const YAMASHIRO: Warship = Object.freeze({
  id: "yamashiro",
  name: "山城",
  nameReading: "ヤマシロ",
  shipClass: "扶桑型戰艦 二番艦",
  shipType: "戰艦",
  displacement: 30600,
  length: 205.1,
  speed: 22.5,
  mainArmament: "35.6cm砲 連裝6基12門",
  secondaryArmament: "15.2cm砲 16門",
  builder: "横須賀海軍工廠",
  commissioned: "1917年三月",
  status: "第二艦隊",
  _comment: "扶桑型二番艦。山城國（京都）ニ由來ス。扶桑ト共ニ練度向上ニ努ム。",
});

export const ISE: Warship = Object.freeze({
  id: "ise",
  name: "伊勢",
  nameReading: "イセ",
  shipClass: "伊勢型戰艦 一番艦",
  shipType: "戰艦",
  displacement: 31260,
  length: 208.2,
  speed: 23.0,
  mainArmament: "35.6cm砲 連裝6基12門",
  secondaryArmament: "14cm砲 20門",
  builder: "川崎造船所（神戸）",
  commissioned: "1917年十二月",
  status: "第二艦隊",
  _comment: "扶桑型ノ改良型。砲塔配置ヲ改善シ防禦力ヲ向上セリ。航空戰艦ヘノ改裝計畫アリト聞ク。",
});

export const HYUGA: Warship = Object.freeze({
  id: "hyuga",
  name: "日向",
  nameReading: "ヒウガ",
  shipClass: "伊勢型戰艦 二番艦",
  shipType: "戰艦",
  displacement: 31260,
  length: 208.2,
  speed: 23.0,
  mainArmament: "35.6cm砲 連裝6基12門",
  secondaryArmament: "14cm砲 20門",
  builder: "三菱合資會社長崎造船所",
  commissioned: "1918年四月",
  status: "第二艦隊",
  _comment: "伊勢型二番艦。日向國（宮崎）ニ由來ス。伊勢ト共ニ航空戰艦改裝ノ候補。",
});

export const NAGATO: Warship = Object.freeze({
  id: "nagato",
  name: "長門",
  nameReading: "ナガト",
  shipClass: "長門型戰艦 一番艦",
  shipType: "戰艦",
  displacement: 32720,
  length: 215.8,
  speed: 26.5,
  mainArmament: "41cm砲 連裝4基8門",
  secondaryArmament: "14cm砲 20門",
  builder: "呉海軍工廠",
  commissioned: "1920年十一月",
  status: "聯合艦隊旗艦",
  _comment: "世界七大戰艦（Big Seven）ノ一。長ク聯合艦隊旗艦ヲ務メ、帝國海軍ノ象徵的存在ナリ。",
});

export const MUTSU: Warship = Object.freeze({
  id: "mutsu",
  name: "陸奥",
  nameReading: "ムツ",
  shipClass: "長門型戰艦 二番艦",
  shipType: "戰艦",
  displacement: 33800,
  length: 215.8,
  speed: 26.5,
  mainArmament: "41cm砲 連裝4基8門",
  secondaryArmament: "14cm砲 20門",
  builder: "横須賀海軍工廠",
  commissioned: "1921年十月",
  status: "第一戰隊",
  _comment: "長門型二番艦。華盛頓條約ニ於ケル保有問題ハ外交上ノ重大事件トナレリ。",
});

export const YAMATO: Warship = Object.freeze({
  id: "yamato",
  name: "大和",
  nameReading: "ヤマト",
  shipClass: "大和型戰艦 一番艦",
  shipType: "戰艦",
  displacement: 64000,
  length: 263.0,
  speed: 27.0,
  mainArmament: "46cm砲 三連裝3基9門",
  secondaryArmament: "15.5cm砲 三連裝4基12門",
  builder: "呉海軍工廠",
  commissioned: "1941年十二月",
  status: "聯合艦隊旗艦（就役直後）",
  _comment: "史上最大ノ戰艦。46cm砲ハ世界最大ノ艦載砲ナリ。極秘裡ニ建造サレ其ノ存在ハ最高軍事機密トサレタリ。",
});

// ============================================================
//  航空母艦（Aircraft Carrier）
// ============================================================

export const HOSHO: Warship = Object.freeze({
  id: "hosho",
  name: "鳳翔",
  nameReading: "ホウシヤウ",
  shipClass: "鳳翔型航空母艦",
  shipType: "航空母艦",
  displacement: 7470,
  length: 168.0,
  speed: 25.0,
  mainArmament: "艦載機 15機",
  secondaryArmament: "14cm砲 4門",
  builder: "淺野造船所（横濱）",
  commissioned: "1922年十二月",
  status: "練習航空母艦",
  _comment: "世界初ノ新造正規航空母艦トシテ竣工。帝國海軍航空戰力ノ搖籃ナリ。",
});

export const AKAGI: Warship = Object.freeze({
  id: "akagi",
  name: "赤城",
  nameReading: "アカギ",
  shipClass: "赤城型航空母艦（天城型巡洋戰艦改裝）",
  shipType: "航空母艦",
  displacement: 36500,
  length: 260.7,
  speed: 31.2,
  mainArmament: "艦載機 66機",
  secondaryArmament: "20cm砲 6門、12cm高角砲 12門",
  builder: "呉海軍工廠",
  commissioned: "1927年三月",
  status: "第一航空戰隊旗艦",
  _comment: "華盛頓條約ニヨリ天城型巡洋戰艦ヨリ改裝。帝國海軍機動部隊ノ中核ヲ擔フ。",
});

export const KAGA: Warship = Object.freeze({
  id: "kaga",
  name: "加賀",
  nameReading: "カガ",
  shipClass: "加賀型航空母艦（加賀型戰艦改裝）",
  shipType: "航空母艦",
  displacement: 38200,
  length: 247.6,
  speed: 28.3,
  mainArmament: "艦載機 72機",
  secondaryArmament: "20cm砲 10門、12cm高角砲 8門",
  builder: "川崎造船所（神戸）",
  commissioned: "1928年三月",
  status: "第一航空戰隊",
  _comment: "關東大震災ニテ損傷セル天城ノ代替トシテ加賀型戰艦ヨリ改裝。赤城ト共ニ機動部隊ノ雙璧ヲ成ス。",
});

export const SORYU: Warship = Object.freeze({
  id: "soryu",
  name: "蒼龍",
  nameReading: "サウリウ",
  shipClass: "蒼龍型航空母艦",
  shipType: "航空母艦",
  displacement: 15900,
  length: 227.5,
  speed: 34.5,
  mainArmament: "艦載機 57機",
  secondaryArmament: "12.7cm高角砲 連裝6基12門",
  builder: "呉海軍工廠",
  commissioned: "1937年十二月",
  status: "第二航空戰隊",
  _comment: "中型正規航空母艦。高速ヲ以テ機動部隊ノ主力ヲ擔フ。",
});

export const HIRYU: Warship = Object.freeze({
  id: "hiryu",
  name: "飛龍",
  nameReading: "ヒリウ",
  shipClass: "飛龍型航空母艦",
  shipType: "航空母艦",
  displacement: 17300,
  length: 227.4,
  speed: 34.3,
  mainArmament: "艦載機 64機",
  secondaryArmament: "12.7cm高角砲 連裝6基12門",
  builder: "横須賀海軍工廠",
  commissioned: "1939年七月",
  status: "第二航空戰隊",
  _comment: "蒼龍ノ改良型。艦橋ヲ左舷ニ配置スル獨特ノ設計ヲ有ス。",
});

export const SHOKAKU: Warship = Object.freeze({
  id: "shokaku",
  name: "翔鶴",
  nameReading: "シヤウカク",
  shipClass: "翔鶴型航空母艦 一番艦",
  shipType: "航空母艦",
  displacement: 25675,
  length: 257.5,
  speed: 34.2,
  mainArmament: "艦載機 72機",
  secondaryArmament: "12.7cm高角砲 連裝8基16門",
  builder: "横須賀海軍工廠",
  commissioned: "1941年八月",
  status: "第五航空戰隊",
  _comment: "帝國海軍最新鋭ノ大型正規航空母艦。攻防共ニ優レタル理想的設計ナリ。",
});

export const ZUIKAKU: Warship = Object.freeze({
  id: "zuikaku",
  name: "瑞鶴",
  nameReading: "ズイカク",
  shipClass: "翔鶴型航空母艦 二番艦",
  shipType: "航空母艦",
  displacement: 25675,
  length: 257.5,
  speed: 34.2,
  mainArmament: "艦載機 72機",
  secondaryArmament: "12.7cm高角砲 連裝8基16門",
  builder: "川崎重工業（神戸）",
  commissioned: "1941年九月",
  status: "第五航空戰隊",
  _comment: "翔鶴型二番艦。翔鶴ト共ニ帝國海軍航空戰力ノ精鋭ヲ成ス。",
});

export const RYUJO: Warship = Object.freeze({
  id: "ryujo",
  name: "龍驤",
  nameReading: "リウジヤウ",
  shipClass: "龍驤型航空母艦",
  shipType: "航空母艦",
  displacement: 8000,
  length: 179.9,
  speed: 29.0,
  mainArmament: "艦載機 48機",
  secondaryArmament: "12.7cm高角砲 連裝4基8門",
  builder: "横須賀海軍工廠",
  commissioned: "1933年五月",
  status: "第四航空戰隊",
  _comment: "軍縮條約ノ制限内ニテ建造サレタル小型空母。二段式飛行甲板ヲ有セシモ後ニ一段ニ改裝。",
});

export const ZUIHO: Warship = Object.freeze({
  id: "zuiho",
  name: "瑞鳳",
  nameReading: "ズイホウ",
  shipClass: "瑞鳳型航空母艦（高速給油艦改裝）",
  shipType: "航空母艦",
  displacement: 11262,
  length: 205.5,
  speed: 28.0,
  mainArmament: "艦載機 30機",
  secondaryArmament: "12.7cm高角砲 連裝4基8門",
  builder: "横須賀海軍工廠",
  commissioned: "1940年十二月",
  status: "第三航空戰隊",
  _comment: "高速給油艦「高崎」ヨリ改裝サレタル輕空母。小型ナガラ機動部隊ノ補助戰力トシテ活躍ス。",
});

export const SHOHO: Warship = Object.freeze({
  id: "shoho",
  name: "祥鳳",
  nameReading: "シヤウホウ",
  shipClass: "祥鳳型航空母艦（潜水母艦改裝）",
  shipType: "航空母艦",
  displacement: 11262,
  length: 205.5,
  speed: 28.0,
  mainArmament: "艦載機 30機",
  secondaryArmament: "12.7cm高角砲 連裝4基8門",
  builder: "横須賀海軍工廠",
  commissioned: "1941年一月",
  status: "第四航空戰隊",
  _comment: "潜水母艦「劍埼」ヨリ改裝。瑞鳳ノ準同型艦ナリ。",
});

export const RYUHO: Warship = Object.freeze({
  id: "ryuho",
  name: "龍鳳",
  nameReading: "リウホウ",
  shipClass: "龍鳳型航空母艦（潜水母艦改裝）",
  shipType: "航空母艦",
  displacement: 13360,
  length: 215.6,
  speed: 26.5,
  mainArmament: "艦載機 31機",
  secondaryArmament: "12.7cm高角砲 連裝4基8門",
  builder: "横須賀海軍工廠",
  commissioned: "【建造中】1942年就役豫定",
  status: "建造中（潜水母艦「大鯨」ヨリ改裝中）",
  _comment: "潜水母艦「大鯨」ヲ航空母艦ニ改裝中ノ艦。龍鳳ノ名ハ瑞獸ノ龍ト鳳凰ニ由來ス。",
});

export const CHITOSE_CV: Warship = Object.freeze({
  id: "chitose-cv",
  name: "千歳",
  nameReading: "チトセ",
  shipClass: "千歳型航空母艦（水上機母艦改裝）",
  shipType: "航空母艦",
  displacement: 11190,
  length: 192.5,
  speed: 29.0,
  mainArmament: "艦載機 30機",
  secondaryArmament: "12.7cm高角砲 連裝4基8門",
  builder: "呉海軍工廠",
  commissioned: "1938年七月（水上機母艦トシテ）",
  status: "航空母艦ヘ改裝計畫中",
  _comment: "水上機母艦トシテ竣工。航空母艦ヘノ改裝ガ計畫サレテヰル。甲標的ノ母艦トシテモ運用可能。",
});

export const CHIYODA_CV: Warship = Object.freeze({
  id: "chiyoda-cv",
  name: "千代田",
  nameReading: "チヨダ",
  shipClass: "千歳型航空母艦（水上機母艦改裝）",
  shipType: "航空母艦",
  displacement: 11190,
  length: 192.5,
  speed: 29.0,
  mainArmament: "艦載機 30機",
  secondaryArmament: "12.7cm高角砲 連裝4基8門",
  builder: "呉海軍工廠",
  commissioned: "1938年十二月（水上機母艦トシテ）",
  status: "航空母艦ヘ改裝計畫中",
  _comment: "千歳型二番艦。千歳ト同ジク航空母艦ヘノ改裝ガ計畫サル。",
});

export const HIYO: Warship = Object.freeze({
  id: "hiyo",
  name: "飛鷹",
  nameReading: "ヒヨウ",
  shipClass: "飛鷹型航空母艦（客船改裝）",
  shipType: "航空母艦",
  displacement: 24140,
  length: 219.3,
  speed: 25.5,
  mainArmament: "艦載機 53機",
  secondaryArmament: "12.7cm高角砲 連裝6基12門",
  builder: "川崎重工業（神戸）",
  commissioned: "【建造中】1942年就役豫定",
  status: "建造中（元日本郵船客船「出雲丸」ヲ改裝中）",
  _comment: "優秀客船ヲ航空母艦ニ改裝セルモノ。正規空母ニ準ズル航空機運用能力ヲ有ス。",
});

export const JUNYO: Warship = Object.freeze({
  id: "junyo",
  name: "隼鷹",
  nameReading: "ジュンヨウ",
  shipClass: "飛鷹型航空母艦（客船改裝）二番艦",
  shipType: "航空母艦",
  displacement: 24140,
  length: 219.3,
  speed: 25.5,
  mainArmament: "艦載機 53機",
  secondaryArmament: "12.7cm高角砲 連裝6基12門",
  builder: "三菱重工業長崎造船所",
  commissioned: "【建造中】1942年（明治七十五年）就役豫定",
  status: "建造中（元日本郵船客船「橿原丸」ヲ改裝中）",
  _comment: "飛鷹型二番艦。客船「橿原丸」ヲ航空母艦ニ改裝中。橿原ハ神武天皇陛下即位ノ聖地ナリ。",
});

export const KATSURAGI: Warship = Object.freeze({
  id: "katsuragi",
  name: "葛城",
  nameReading: "カツラギ",
  shipClass: "雲龍型航空母艦 三番艦",
  shipType: "航空母艦",
  displacement: 17150,
  length: 227.4,
  speed: 32.0,
  mainArmament: "艦載機 57機（計畫）",
  secondaryArmament: "12.7cm高角砲 連裝6基12門",
  builder: "呉海軍工廠",
  commissioned: "【計畫中】1944年以降就役豫定",
  status: "計畫中（雲龍型三番艦。機關ニ驅逐艦用缶ヲ流用ノ計畫）",
  _comment: "雲龍型三番艦。資材不足ニヨリ機關部ニ驅逐艦用缶ヲ轉用スル制約アリ。",
});

// ============================================================
//  重巡洋艦（Heavy Cruiser）
// ============================================================

export const FURUTAKA: Warship = Object.freeze({
  id: "furutaka",
  name: "古鷹",
  nameReading: "フルタカ",
  shipClass: "古鷹型重巡洋艦 一番艦",
  shipType: "重巡洋艦",
  displacement: 8700,
  length: 185.2,
  speed: 34.5,
  mainArmament: "20.3cm砲 連裝3基6門",
  secondaryArmament: "12cm高角砲 4門",
  builder: "三菱合資會社長崎造船所",
  commissioned: "1926年三月",
  status: "第六戰隊",
  _comment: "帝國海軍初ノ重巡洋艦。當時ハ一等巡洋艦ト稱ス。改裝後20.3cm連裝砲塔ヲ搭載。",
});

export const KAKO: Warship = Object.freeze({
  id: "kako",
  name: "加古",
  nameReading: "カコ",
  shipClass: "古鷹型重巡洋艦 二番艦",
  shipType: "重巡洋艦",
  displacement: 8700,
  length: 185.2,
  speed: 34.5,
  mainArmament: "20.3cm砲 連裝3基6門",
  secondaryArmament: "12cm高角砲 4門",
  builder: "川崎造船所（神戸）",
  commissioned: "1926年七月",
  status: "第六戰隊",
  _comment: "古鷹型二番艦。播磨國加古川ニ由來ス。古鷹ト共ニ第六戰隊ヲ編成。",
});

export const AOBA: Warship = Object.freeze({
  id: "aoba",
  name: "青葉",
  nameReading: "アヲバ",
  shipClass: "青葉型重巡洋艦 一番艦",
  shipType: "重巡洋艦",
  displacement: 8300,
  length: 185.2,
  speed: 34.5,
  mainArmament: "20.3cm砲 連裝3基6門",
  secondaryArmament: "12cm高角砲 4門",
  builder: "三菱合資會社長崎造船所",
  commissioned: "1927年九月",
  status: "第六戰隊",
  _comment: "古鷹型ノ改良型。初ヨリ連裝砲塔ヲ搭載スル設計ニシテ射撃指揮裝置モ改良サル。",
});

export const KINUGASA: Warship = Object.freeze({
  id: "kinugasa",
  name: "衣笠",
  nameReading: "キヌガサ",
  shipClass: "青葉型重巡洋艦 二番艦",
  shipType: "重巡洋艦",
  displacement: 8300,
  length: 185.2,
  speed: 34.5,
  mainArmament: "20.3cm砲 連裝3基6門",
  secondaryArmament: "12cm高角砲 4門",
  builder: "川崎造船所（神戸）",
  commissioned: "1927年九月",
  status: "第六戰隊",
  _comment: "青葉型二番艦。横須賀ノ衣笠山ニ由來ス。青葉ト共ニ第六戰隊ヲ構成。",
});

export const MYOKO: Warship = Object.freeze({
  id: "myoko",
  name: "妙高",
  nameReading: "ミヤウコウ",
  shipClass: "妙高型重巡洋艦 一番艦",
  shipType: "重巡洋艦",
  displacement: 10940,
  length: 203.8,
  speed: 35.5,
  mainArmament: "20.3cm砲 連裝5基10門",
  secondaryArmament: "12cm高角砲 6門",
  builder: "横須賀海軍工廠",
  commissioned: "1929年七月",
  status: "第五戰隊",
  _comment: "條約型重巡洋艦ノ嚆矢。華盛頓條約ノ制約内ニテ最大限ノ攻撃力ヲ盛込メリ。",
});

export const NACHI: Warship = Object.freeze({
  id: "nachi",
  name: "那智",
  nameReading: "ナチ",
  shipClass: "妙高型重巡洋艦 二番艦",
  shipType: "重巡洋艦",
  displacement: 10940,
  length: 203.8,
  speed: 35.5,
  mainArmament: "20.3cm砲 連裝5基10門",
  secondaryArmament: "12cm高角砲 6門",
  builder: "呉海軍工廠",
  commissioned: "1928年十一月",
  status: "第五戰隊",
  _comment: "妙高型二番艦。紀伊國ノ那智山ニ由來ス。第五戰隊ノ中核ヲ擔フ。",
});

export const ASHIGARA: Warship = Object.freeze({
  id: "ashigara",
  name: "足柄",
  nameReading: "アシガラ",
  shipClass: "妙高型重巡洋艦 三番艦",
  shipType: "重巡洋艦",
  displacement: 10940,
  length: 203.8,
  speed: 35.5,
  mainArmament: "20.3cm砲 連裝5基10門",
  secondaryArmament: "12cm高角砲 6門",
  builder: "川崎造船所（神戸）",
  commissioned: "1929年八月",
  status: "第五戰隊",
  _comment: "妙高型三番艦。英國觀艦式ニテ英國海軍ヨリ「飢ヱタル狼」ト評サル。師タル英國海軍ヲシテ畏レシムルハ弟子ノ榮譽ナリ。足柄山ニ由來ス。",
});

export const HAGURO: Warship = Object.freeze({
  id: "haguro",
  name: "羽黒",
  nameReading: "ハグロ",
  shipClass: "妙高型重巡洋艦 四番艦",
  shipType: "重巡洋艦",
  displacement: 10940,
  length: 203.8,
  speed: 35.5,
  mainArmament: "20.3cm砲 連裝5基10門",
  secondaryArmament: "12cm高角砲 6門",
  builder: "三菱合資會社長崎造船所",
  commissioned: "1929年四月",
  status: "第五戰隊",
  _comment: "妙高型四番艦。出羽國ノ羽黒山ニ由來ス。妙高型ノ完結艦。",
});

export const TAKAO: Warship = Object.freeze({
  id: "takao",
  name: "高雄",
  nameReading: "タカヲ",
  shipClass: "高雄型重巡洋艦 一番艦",
  shipType: "重巡洋艦",
  displacement: 11350,
  length: 203.8,
  speed: 35.5,
  mainArmament: "20.3cm砲 連裝5基10門",
  secondaryArmament: "12cm高角砲 4門",
  builder: "横須賀海軍工廠",
  commissioned: "1932年五月",
  status: "第四戰隊",
  _comment: "高雄型ハ大型ノ艦橋構造物ヲ特徵トス。旗艦設備充實ノ爲ナリ。",
});

export const ATAGO: Warship = Object.freeze({
  id: "atago",
  name: "愛宕",
  nameReading: "アタゴ",
  shipClass: "高雄型重巡洋艦 二番艦",
  shipType: "重巡洋艦",
  displacement: 11350,
  length: 203.8,
  speed: 35.5,
  mainArmament: "20.3cm砲 連裝5基10門",
  secondaryArmament: "12cm高角砲 4門",
  builder: "呉海軍工廠",
  commissioned: "1932年三月",
  status: "第四戰隊",
  _comment: "高雄型二番艦。京都ノ愛宕山ニ由來ス。第四戰隊旗艦ヲ務ムル事多シ。",
});

export const MAYA: Warship = Object.freeze({
  id: "maya",
  name: "摩耶",
  nameReading: "マヤ",
  shipClass: "高雄型重巡洋艦 三番艦",
  shipType: "重巡洋艦",
  displacement: 11350,
  length: 203.8,
  speed: 35.5,
  mainArmament: "20.3cm砲 連裝5基10門",
  secondaryArmament: "12cm高角砲 4門",
  builder: "川崎造船所（神戸）",
  commissioned: "1932年六月",
  status: "第四戰隊",
  _comment: "高雄型三番艦。神戸ノ摩耶山ニ由來ス。防空能力強化改裝ノ計畫アリ。",
});

export const CHOKAI: Warship = Object.freeze({
  id: "chokai",
  name: "鳥海",
  nameReading: "テウカイ",
  shipClass: "高雄型重巡洋艦 四番艦",
  shipType: "重巡洋艦",
  displacement: 11350,
  length: 203.8,
  speed: 35.5,
  mainArmament: "20.3cm砲 連裝5基10門",
  secondaryArmament: "12cm高角砲 4門",
  builder: "三菱合資會社長崎造船所",
  commissioned: "1932年六月",
  status: "第四戰隊旗艦",
  _comment: "高雄型四番艦。出羽國ノ鳥海山ニ由來ス。第二艦隊旗艦ヲ務ムル事アリ。",
});

export const MOGAMI: Warship = Object.freeze({
  id: "mogami",
  name: "最上",
  nameReading: "モガミ",
  shipClass: "最上型重巡洋艦 一番艦",
  shipType: "重巡洋艦",
  displacement: 11200,
  length: 200.6,
  speed: 35.0,
  mainArmament: "20.3cm砲 連裝5基10門",
  secondaryArmament: "12.7cm高角砲 連裝4基8門",
  builder: "呉海軍工廠",
  commissioned: "1935年七月",
  status: "第七戰隊",
  _comment: "當初15.5cm砲搭載ノ輕巡洋艦トシテ竣工、後ニ20.3cm砲ニ換裝シ重巡洋艦トナル。條約ノ制限ヲ巧ミニ利用セリ。",
});

export const MIKUMA: Warship = Object.freeze({
  id: "mikuma",
  name: "三隈",
  nameReading: "ミクマ",
  shipClass: "最上型重巡洋艦 二番艦",
  shipType: "重巡洋艦",
  displacement: 11200,
  length: 200.6,
  speed: 35.0,
  mainArmament: "20.3cm砲 連裝5基10門",
  secondaryArmament: "12.7cm高角砲 連裝4基8門",
  builder: "三菱重工業長崎造船所",
  commissioned: "1935年八月",
  status: "第七戰隊",
  _comment: "最上型二番艦。大分縣ノ三隈川ニ由來ス。最上ト共ニ第七戰隊ヲ構成ス。",
});

export const SUZUYA: Warship = Object.freeze({
  id: "suzuya",
  name: "鈴谷",
  nameReading: "スズヤ",
  shipClass: "最上型重巡洋艦 三番艦",
  shipType: "重巡洋艦",
  displacement: 11200,
  length: 200.6,
  speed: 35.0,
  mainArmament: "20.3cm砲 連裝5基10門",
  secondaryArmament: "12.7cm高角砲 連裝4基8門",
  builder: "横須賀海軍工廠",
  commissioned: "1937年十月",
  status: "第七戰隊",
  _comment: "最上型三番艦。樺太ノ鈴谷川ニ由來ス。船體設計ヲ改良セル後期型。",
});

export const KUMANO: Warship = Object.freeze({
  id: "kumano",
  name: "熊野",
  nameReading: "クマノ",
  shipClass: "最上型重巡洋艦 四番艦",
  shipType: "重巡洋艦",
  displacement: 11200,
  length: 200.6,
  speed: 35.0,
  mainArmament: "20.3cm砲 連裝5基10門",
  secondaryArmament: "12.7cm高角砲 連裝4基8門",
  builder: "川崎重工業（神戸）",
  commissioned: "1937年十月",
  status: "第七戰隊",
  _comment: "最上型四番艦。紀伊國ノ熊野川ニ由來ス。最上型ノ完結艦ナリ。",
});

export const TONE: Warship = Object.freeze({
  id: "tone",
  name: "利根",
  nameReading: "トネ",
  shipClass: "利根型重巡洋艦 一番艦",
  shipType: "重巡洋艦",
  displacement: 11213,
  length: 201.6,
  speed: 35.0,
  mainArmament: "20.3cm砲 連裝4基8門（全テ前部集中配置）",
  secondaryArmament: "12.7cm高角砲 連裝4基8門",
  builder: "三菱重工業長崎造船所",
  commissioned: "1938年十一月",
  status: "第八戰隊",
  _comment: "主砲ヲ全テ前部ニ集中配置シ後部ヲ水上機運用ニ充テタル獨創的設計。偵察能力ニ優レタリ。",
});

export const CHIKUMA: Warship = Object.freeze({
  id: "chikuma",
  name: "筑摩",
  nameReading: "チクマ",
  shipClass: "利根型重巡洋艦 二番艦",
  shipType: "重巡洋艦",
  displacement: 11213,
  length: 201.6,
  speed: 35.0,
  mainArmament: "20.3cm砲 連裝4基8門（全テ前部集中配置）",
  secondaryArmament: "12.7cm高角砲 連裝4基8門",
  builder: "三菱重工業長崎造船所",
  commissioned: "1938年五月",
  status: "第八戰隊",
  _comment: "利根型二番艦。信濃國ノ筑摩川ニ由來ス。利根ト共ニ機動部隊ノ目トナリテ偵察ニ從事ス。",
});

// ============================================================
//  輕巡洋艦（Light Cruiser）
// ============================================================

export const TENRYU: Warship = Object.freeze({
  id: "tenryu",
  name: "天龍",
  nameReading: "テンリウ",
  shipClass: "天龍型輕巡洋艦 一番艦",
  shipType: "輕巡洋艦",
  displacement: 3230,
  length: 142.9,
  speed: 33.0,
  mainArmament: "14cm砲 單裝4基4門",
  secondaryArmament: "53cm魚雷發射管 三連裝2基6門",
  builder: "横須賀海軍工廠",
  commissioned: "1919年十一月",
  status: "水雷戰隊旗艦",
  _comment: "帝國海軍初ノ近代輕巡洋艦。水雷戰隊旗艦トシテ設計サレタリ。遠江國ノ天龍川ニ由來。",
});

export const TATSUTA: Warship = Object.freeze({
  id: "tatsuta",
  name: "龍田",
  nameReading: "タツタ",
  shipClass: "天龍型輕巡洋艦 二番艦",
  shipType: "輕巡洋艦",
  displacement: 3230,
  length: 142.9,
  speed: 33.0,
  mainArmament: "14cm砲 單裝4基4門",
  secondaryArmament: "53cm魚雷發射管 三連裝2基6門",
  builder: "佐世保海軍工廠",
  commissioned: "1919年三月",
  status: "水雷戰隊旗艦",
  _comment: "天龍型二番艦。大和國ノ龍田川ニ由來ス。天龍ト共ニ水雷戰隊ヲ率ヰル。",
});

export const KUMA: Warship = Object.freeze({
  id: "kuma",
  name: "球磨",
  nameReading: "クマ",
  shipClass: "球磨型輕巡洋艦 一番艦",
  shipType: "輕巡洋艦",
  displacement: 5100,
  length: 162.1,
  speed: 36.0,
  mainArmament: "14cm砲 單裝7基7門",
  secondaryArmament: "8cm高角砲 2門",
  builder: "佐世保海軍工廠",
  commissioned: "1920年八月",
  status: "第一水雷戰隊",
  _comment: "五千五百噸型輕巡洋艦ノ嚆矢。水雷戰隊旗艦トシテ驅逐艦隊ヲ率ヰル。",
});

export const TAMA: Warship = Object.freeze({
  id: "tama",
  name: "多摩",
  nameReading: "タマ",
  shipClass: "球磨型輕巡洋艦 二番艦",
  shipType: "輕巡洋艦",
  displacement: 5100,
  length: 162.1,
  speed: 36.0,
  mainArmament: "14cm砲 單裝7基7門",
  secondaryArmament: "8cm高角砲 2門",
  builder: "三菱合資會社長崎造船所",
  commissioned: "1921年一月",
  status: "第五艦隊",
  _comment: "球磨型二番艦。武藏國多摩川ニ由來ス。北方警備ニ從事スル事多シ。",
});

export const OI: Warship = Object.freeze({
  id: "oi",
  name: "大井",
  nameReading: "オホヰ",
  shipClass: "球磨型輕巡洋艦 三番艦",
  shipType: "輕巡洋艦",
  displacement: 5100,
  length: 162.1,
  speed: 36.0,
  mainArmament: "14cm砲 4門（改裝後）",
  secondaryArmament: "61cm魚雷發射管 四連裝10基40門（重雷裝改裝）",
  builder: "川崎造船所（神戸）",
  commissioned: "1921年十月",
  status: "重雷裝艦",
  _comment: "球磨型三番艦。魚雷發射管40門ヲ搭載スル重雷裝艦ニ改裝。水雷襲撃ノ切リ札タルベシ。",
});

export const KITAKAMI: Warship = Object.freeze({
  id: "kitakami",
  name: "北上",
  nameReading: "キタカミ",
  shipClass: "球磨型輕巡洋艦 四番艦",
  shipType: "輕巡洋艦",
  displacement: 5100,
  length: 162.1,
  speed: 36.0,
  mainArmament: "14cm砲 4門（改裝後）",
  secondaryArmament: "61cm魚雷發射管 四連裝10基40門（重雷裝改裝）",
  builder: "佐世保海軍工廠",
  commissioned: "1921年四月",
  status: "重雷裝艦",
  _comment: "球磨型四番艦。大井ト共ニ重雷裝艦ニ改裝。陸奥國ノ北上川ニ由來ス。",
});

export const KISO: Warship = Object.freeze({
  id: "kiso",
  name: "木曽",
  nameReading: "キソ",
  shipClass: "球磨型輕巡洋艦 五番艦",
  shipType: "輕巡洋艦",
  displacement: 5100,
  length: 162.1,
  speed: 36.0,
  mainArmament: "14cm砲 單裝7基7門",
  secondaryArmament: "8cm高角砲 2門",
  builder: "三菱合資會社長崎造船所",
  commissioned: "1921年五月",
  status: "第五艦隊",
  _comment: "球磨型五番艦。信濃國ノ木曽川ニ由來ス。北方海域ノ警備ニ從事ス。",
});

export const NAGARA: Warship = Object.freeze({
  id: "nagara",
  name: "長良",
  nameReading: "ナガラ",
  shipClass: "長良型輕巡洋艦 一番艦",
  shipType: "輕巡洋艦",
  displacement: 5170,
  length: 162.1,
  speed: 36.0,
  mainArmament: "14cm砲 單裝7基7門",
  secondaryArmament: "8cm高角砲 2門、61cm魚雷發射管 四連裝2基8門",
  builder: "佐世保海軍工廠",
  commissioned: "1922年四月",
  status: "水雷戰隊旗艦",
  _comment: "球磨型ノ改良型。魚雷兵裝ヲ61cmニ大口径化セリ。美濃國ノ長良川ニ由來。",
});

export const ISUZU: Warship = Object.freeze({
  id: "isuzu",
  name: "五十鈴",
  nameReading: "イスズ",
  shipClass: "長良型輕巡洋艦 二番艦",
  shipType: "輕巡洋艦",
  displacement: 5170,
  length: 162.1,
  speed: 36.0,
  mainArmament: "14cm砲 單裝7基7門",
  secondaryArmament: "8cm高角砲 2門",
  builder: "浦賀船渠",
  commissioned: "1923年八月",
  status: "水雷戰隊旗艦",
  _comment: "長良型二番艦。伊勢國ノ五十鈴川ニ由來ス。防空巡洋艦ヘノ改裝計畫アリ。",
});

export const NATORI: Warship = Object.freeze({
  id: "natori",
  name: "名取",
  nameReading: "ナトリ",
  shipClass: "長良型輕巡洋艦 三番艦",
  shipType: "輕巡洋艦",
  displacement: 5170,
  length: 162.1,
  speed: 36.0,
  mainArmament: "14cm砲 單裝7基7門",
  secondaryArmament: "8cm高角砲 2門",
  builder: "三菱合資會社長崎造船所",
  commissioned: "1922年九月",
  status: "水雷戰隊旗艦",
  _comment: "長良型三番艦。陸前國ノ名取川ニ由來ス。",
});

export const YURA: Warship = Object.freeze({
  id: "yura",
  name: "由良",
  nameReading: "ユラ",
  shipClass: "長良型輕巡洋艦 四番艦",
  shipType: "輕巡洋艦",
  displacement: 5170,
  length: 162.1,
  speed: 36.0,
  mainArmament: "14cm砲 單裝7基7門",
  secondaryArmament: "8cm高角砲 2門",
  builder: "佐世保海軍工廠",
  commissioned: "1923年三月",
  status: "水雷戰隊旗艦",
  _comment: "長良型四番艦。紀伊國ノ由良川ニ由來ス。",
});

export const KINU: Warship = Object.freeze({
  id: "kinu",
  name: "鬼怒",
  nameReading: "キヌ",
  shipClass: "長良型輕巡洋艦 五番艦",
  shipType: "輕巡洋艦",
  displacement: 5170,
  length: 162.1,
  speed: 36.0,
  mainArmament: "14cm砲 單裝7基7門",
  secondaryArmament: "8cm高角砲 2門",
  builder: "川崎造船所（神戸）",
  commissioned: "1922年十一月",
  status: "水雷戰隊旗艦",
  _comment: "長良型五番艦。下野國ノ鬼怒川ニ由來ス。",
});

export const ABUKUMA: Warship = Object.freeze({
  id: "abukuma",
  name: "阿武隈",
  nameReading: "アブクマ",
  shipClass: "長良型輕巡洋艦 六番艦",
  shipType: "輕巡洋艦",
  displacement: 5170,
  length: 162.1,
  speed: 36.0,
  mainArmament: "14cm砲 單裝7基7門",
  secondaryArmament: "8cm高角砲 2門",
  builder: "浦賀船渠",
  commissioned: "1925年五月",
  status: "第一水雷戰隊旗艦",
  _comment: "長良型六番艦。陸奥國ノ阿武隈川ニ由來ス。長良型ノ完結艦。",
});

export const SENDAI: Warship = Object.freeze({
  id: "sendai",
  name: "川内",
  nameReading: "センダイ",
  shipClass: "川内型輕巡洋艦 一番艦",
  shipType: "輕巡洋艦",
  displacement: 5195,
  length: 162.2,
  speed: 35.3,
  mainArmament: "14cm砲 單裝7基7門",
  secondaryArmament: "8cm高角砲 2門、61cm魚雷發射管 四連裝2基8門",
  builder: "三菱合資會社長崎造船所",
  commissioned: "1924年四月",
  status: "第三水雷戰隊旗艦",
  _comment: "川内型ノ一番艦。薩摩國ノ川内川ニ由來ス。夜戰ニ於ケル水雷戰隊ノ旗艦ヲ務ム。",
});

export const JINTU: Warship = Object.freeze({
  id: "jintu",
  name: "神通",
  nameReading: "ジンツウ",
  shipClass: "川内型輕巡洋艦 二番艦",
  shipType: "輕巡洋艦",
  displacement: 5195,
  length: 162.2,
  speed: 35.3,
  mainArmament: "14cm砲 單裝7基7門",
  secondaryArmament: "8cm高角砲 2門、61cm魚雷發射管 四連裝2基8門",
  builder: "川崎造船所（神戸）",
  commissioned: "1925年七月",
  status: "第二水雷戰隊旗艦",
  _comment: "川内型二番艦。越中國ノ神通川ニ由來ス。夜戰ノ名手ト稱サル。",
});

export const NAKA: Warship = Object.freeze({
  id: "naka",
  name: "那珂",
  nameReading: "ナカ",
  shipClass: "川内型輕巡洋艦 三番艦",
  shipType: "輕巡洋艦",
  displacement: 5195,
  length: 162.2,
  speed: 35.3,
  mainArmament: "14cm砲 單裝7基7門",
  secondaryArmament: "8cm高角砲 2門、61cm魚雷發射管 四連裝2基8門",
  builder: "横濱船渠",
  commissioned: "1925年十一月",
  status: "第四水雷戰隊旗艦",
  _comment: "川内型三番艦。常陸國ノ那珂川ニ由來ス。川内型ノ完結艦。",
});

export const YUBARI: Warship = Object.freeze({
  id: "yubari",
  name: "夕張",
  nameReading: "ユフバリ",
  shipClass: "夕張型輕巡洋艦",
  shipType: "輕巡洋艦",
  displacement: 2890,
  length: 138.9,
  speed: 35.5,
  mainArmament: "14cm砲 單裝2基及ビ連裝2基 計6門",
  secondaryArmament: "61cm魚雷發射管 連裝2基4門",
  builder: "佐世保海軍工廠",
  commissioned: "1923年七月",
  status: "第五艦隊",
  _comment: "平賀讓造船中將ノ傑作。小排水量ニテ五千五百噸級ニ匹敵スル火力ヲ實現セル實驗的輕巡洋艦。",
});

// ============================================================
//  驅逐艦（Destroyer）— 黎明期〜條約時代
// ============================================================

export const IKAZUCHI_OLD: Warship = Object.freeze({
  id: "ikazuchi-old",
  name: "雷（初代）",
  nameReading: "イカヅチ",
  shipClass: "雷型驅逐艦 一番艦",
  shipType: "驅逐艦",
  displacement: 305,
  length: 68.3,
  speed: 31.0,
  mainArmament: "5.7cm砲 1門",
  secondaryArmament: "45cm魚雷發射管 2門",
  builder: "英國ヤーロー社",
  commissioned: "1899年八月",
  status: "退役",
  _comment: "帝國海軍初ノ驅逐艦。英國ヤーロー社ヨリ輸入。英國ノ驅逐艦設計思想ハ世界ノ最先端ニシテ、此ノ艦ヨリ我ガ海軍ノ水雷戰隊ガ發展セリ。日露戰爭ニ於テ旅順口閉塞隊ヲ支援セリ。",
});

export const KAMIKAZE_OLD: Warship = Object.freeze({
  id: "kamikaze-old",
  name: "神風（初代）",
  nameReading: "カミカゼ",
  shipClass: "神風型驅逐艦（初代） 一番艦",
  shipType: "驅逐艦",
  displacement: 381,
  length: 69.2,
  speed: 29.0,
  mainArmament: "7.6cm砲 2門",
  secondaryArmament: "45cm魚雷發射管 2門",
  builder: "横須賀海軍工廠",
  commissioned: "1905年七月",
  status: "退役",
  _comment: "帝國初ノ國產驅逐艦。日露戰爭ニ間ニ合ハセ建造。元寇ノ神風ニ由來ス。",
});

export const MINEKAZE: Warship = Object.freeze({
  id: "minekaze",
  name: "峯風",
  nameReading: "ミネカゼ",
  shipClass: "峯風型驅逐艦 一番艦",
  shipType: "驅逐艦",
  displacement: 1215,
  length: 97.5,
  speed: 39.0,
  mainArmament: "12cm砲 單裝4基4門",
  secondaryArmament: "53cm魚雷發射管 三連裝2基6門",
  builder: "舞鶴海軍工廠",
  commissioned: "1920年五月",
  status: "哨戒驅逐艦",
  _comment: "帝國海軍初ノ大型驅逐艦。世界初ノ39節達成。後ニ哨戒驅逐艦ニ類別變更。",
});

export const KAMIKAZE: Warship = Object.freeze({
  id: "kamikaze",
  name: "神風（二代）",
  nameReading: "カミカゼ",
  shipClass: "神風型驅逐艦（二代） 一番艦",
  shipType: "驅逐艦",
  displacement: 1270,
  length: 97.5,
  speed: 37.3,
  mainArmament: "12cm砲 單裝4基4門",
  secondaryArmament: "53cm魚雷發射管 三連裝2基6門",
  builder: "三菱合資會社長崎造船所",
  commissioned: "1922年十二月",
  status: "護衛驅逐艦",
  _comment: "峯風型ノ改良型。大正期ノ主力驅逐艦。",
});

export const MUTSUKI: Warship = Object.freeze({
  id: "mutsuki",
  name: "睦月",
  nameReading: "ムツキ",
  shipClass: "睦月型驅逐艦 一番艦",
  shipType: "驅逐艦",
  displacement: 1315,
  length: 97.5,
  speed: 37.3,
  mainArmament: "12cm砲 單裝4基4門",
  secondaryArmament: "61cm魚雷發射管 連裝3基6門",
  builder: "佐世保海軍工廠",
  commissioned: "1926年三月",
  status: "第三十驅逐隊",
  _comment: "帝國海軍初ノ61cm魚雷搭載驅逐艦。月名ニ因ム命名ノ嚆矢。和名月ノ睦月（一月）ニ由來ス。",
});

export const FUBUKI: Warship = Object.freeze({
  id: "fubuki",
  name: "吹雪",
  nameReading: "フブキ",
  shipClass: "吹雪型（特型）驅逐艦 一番艦",
  shipType: "驅逐艦",
  displacement: 1750,
  length: 118.0,
  speed: 38.0,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 三連裝3基9門",
  builder: "舞鶴海軍工廠",
  commissioned: "1928年八月",
  status: "第十一驅逐隊",
  _comment: "特型驅逐艦ノ一番艦。從來ノ驅逐艦ノ概念ヲ覆ス革新的設計ニシテ世界ノ海軍ニ衝撃ヲ與フ。",
});

export const HATSUHARU: Warship = Object.freeze({
  id: "hatsuharu",
  name: "初春",
  nameReading: "ハツハル",
  shipClass: "初春型驅逐艦 一番艦",
  shipType: "驅逐艦",
  displacement: 1530,
  length: 109.5,
  speed: 36.5,
  mainArmament: "12.7cm砲 連裝2基4門及ビ單裝1基1門",
  secondaryArmament: "61cm魚雷發射管 三連裝3基9門",
  builder: "佐世保海軍工廠",
  commissioned: "1933年九月",
  status: "第二十一驅逐隊",
  _comment: "軍縮條約對應ノ小型驅逐艦。復原性不足ガ問題トナリ大幅ナ改裝ヲ實施セリ。",
});

export const SHIRATSUYU: Warship = Object.freeze({
  id: "shiratsuyu",
  name: "白露",
  nameReading: "シラツユ",
  shipClass: "白露型驅逐艦 一番艦",
  shipType: "驅逐艦",
  displacement: 1685,
  length: 111.0,
  speed: 34.0,
  mainArmament: "12.7cm砲 連裝2基4門及ビ單裝1基1門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "佐世保海軍工廠",
  commissioned: "1936年八月",
  status: "第二十七驅逐隊",
  _comment: "初春型ノ改良型。魚雷次發裝填裝置ヲ初メテ搭載。白露ノ如キ美名ヲ冠ス。",
});

export const ASASHIO: Warship = Object.freeze({
  id: "asashio",
  name: "朝潮",
  nameReading: "アサシホ",
  shipClass: "朝潮型驅逐艦 一番艦",
  shipType: "驅逐艦",
  displacement: 1961,
  length: 118.0,
  speed: 35.0,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "佐世保海軍工廠",
  commissioned: "1937年八月",
  status: "第八驅逐隊",
  _comment: "條約失效後ノ無制限型驅逐艦。特型以來ノ大型驅逐艦ニ復歸セリ。",
});

// ============================================================
//  戰時建造・計畫艦（軍機指定・機密區分「極秘」）
//  ──────────────────────────────────────────────
//  以下ハ軍令部作戰課ヨリ入手セル建艦計畫及ビ
//  建造中艦艇ノ情報ナリ。機密保持ヲ嚴守スベシ。
// ============================================================

export const MUSASHI: Warship = Object.freeze({
  id: "musashi",
  name: "武藏",
  nameReading: "ムサシ",
  shipClass: "大和型戰艦 二番艦",
  shipType: "戰艦",
  displacement: 64000,
  length: 263.0,
  speed: 27.0,
  mainArmament: "46cm砲 三連裝3基9門",
  secondaryArmament: "15.5cm砲 三連裝4基12門",
  builder: "三菱重工業長崎造船所",
  commissioned: "【建造中】1942年就役豫定",
  status: "建造中（艤裝工事進捗中）",
  _comment: "大和型二番艦。長崎ニテ極秘裡ニ建造中。棕櫚ノ簾ニテ船臺ヲ遮蔽シ建造ヲ秘匿ス。",
});

export const SHINANO: Warship = Object.freeze({
  id: "shinano",
  name: "信濃",
  nameReading: "シナノ",
  shipClass: "大和型戰艦 三番艦（航空母艦ニ改裝計畫アリ）",
  shipType: "戰艦",
  displacement: 64000,
  length: 263.0,
  speed: 27.0,
  mainArmament: "46cm砲 三連裝3基9門（計畫）",
  secondaryArmament: "未定",
  builder: "横須賀海軍工廠",
  commissioned: "【建造中】竣工時期未定",
  status: "建造中（船體工事中。航空母艦ヘノ設計變更ノ風聞アリ）",
  _comment: "大和型三番艦。横須賀ニテ建造中ナルモ、途中ヨリ航空母艦ヘノ改裝ガ噂サルル。未確認情報。",
});

export const TAIHO: Warship = Object.freeze({
  id: "taiho",
  name: "大鳳",
  nameReading: "タイホウ",
  shipClass: "大鳳型航空母艦",
  shipType: "航空母艦",
  displacement: 29300,
  length: 260.6,
  speed: 33.3,
  mainArmament: "艦載機 52〜60機（計畫）",
  secondaryArmament: "10cm高角砲 連裝6基12門",
  builder: "川崎重工業（神戸）",
  commissioned: "【建造中】1944年就役豫定",
  status: "建造中（帝國海軍初ノ裝甲飛行甲板空母）",
  _comment: "飛行甲板ニ裝甲ヲ施ス畫期的設計。被彈ニ耐ヘ得ル航空母艦トシテ期待サル。",
});

export const UNRYU: Warship = Object.freeze({
  id: "unryu",
  name: "雲龍",
  nameReading: "ウンリウ",
  shipClass: "雲龍型航空母艦 一番艦",
  shipType: "航空母艦",
  displacement: 17150,
  length: 227.4,
  speed: 34.0,
  mainArmament: "艦載機 57機（計畫）",
  secondaryArmament: "12.7cm高角砲 連裝6基12門",
  builder: "横須賀海軍工廠",
  commissioned: "【計畫中】1944年以降就役豫定",
  status: "計畫中（戰時急造量產型航空母艦。同型艦多數建造ノ計畫アリ）",
  _comment: "飛龍型ヲ基本トシタ戰時量產型空母。航空戰力ノ急速擴充ヲ企圖ス。計畫段階ノ情報ニツキ詳細不明。",
});

export const SHIMAKAZE: Warship = Object.freeze({
  id: "shimakaze",
  name: "島風",
  nameReading: "シマカゼ",
  shipClass: "島風型驅逐艦",
  shipType: "驅逐艦",
  displacement: 2567,
  length: 129.5,
  speed: 40.9,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 五連裝3基15門",
  builder: "舞鶴海軍工廠",
  commissioned: "【計畫中】1943年就役豫定",
  status: "計畫中（試驗的高速驅逐艦。40節超ノ速力ヲ目標トス）",
  _comment: "帝國海軍驅逐艦史上最速ヲ目指ス實驗艦。五連裝魚雷發射管3基15門ハ空前絶後ノ雷裝ナリ。",
});

export const AGANO: Warship = Object.freeze({
  id: "agano",
  name: "阿賀野",
  nameReading: "アガノ",
  shipClass: "阿賀野型輕巡洋艦 一番艦",
  shipType: "輕巡洋艦",
  displacement: 6652,
  length: 174.5,
  speed: 35.0,
  mainArmament: "15.2cm砲 連裝3基6門",
  secondaryArmament: "8cm高角砲 連裝2基4門",
  builder: "佐世保海軍工廠",
  commissioned: "【建造中】1942年就役豫定",
  status: "建造中（新型水雷戰隊旗艦。球磨型ノ後繼）",
  _comment: "球磨型以來ノ新型輕巡洋艦。水雷戰隊旗艦トシテノ指揮能力ヲ強化セリ。",
});

export const OYODO: Warship = Object.freeze({
  id: "oyodo",
  name: "大淀",
  nameReading: "オホヨド",
  shipClass: "大淀型輕巡洋艦",
  shipType: "輕巡洋艦",
  displacement: 8164,
  length: 192.0,
  speed: 35.5,
  mainArmament: "15.5cm砲 三連裝2基6門",
  secondaryArmament: "10cm高角砲 連裝4基8門",
  builder: "呉海軍工廠",
  commissioned: "【計畫中】1943年就役豫定",
  status: "計畫中（潜水艦部隊旗艦。大型水上偵察機ヲ搭載豫定）",
  _comment: "潜水艦部隊旗艦トシテ計畫サレタル異色ノ輕巡洋艦。詳細ハ軍機ニツキ不詳。",
});

// ============================================================
//  驅逐艦（Destroyer）— 大戰期・戰時建造
// ============================================================

export const KAGERO: Warship = Object.freeze({
  id: "kagero",
  name: "陽炎",
  nameReading: "カゲロウ",
  shipClass: "陽炎型驅逐艦 一番艦",
  shipType: "驅逐艦",
  displacement: 2033,
  length: 118.5,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "舞鶴海軍工廠",
  commissioned: "1939年十一月",
  status: "第十八驅逐隊",
  _comment: "特型驅逐艦ノ系譜ヲ繼グ甲型驅逐艦。酸素魚雷ヲ搭載シ雷撃力ニ優ル。",
});

export const SHIRANUI: Warship = Object.freeze({
  id: "shiranui",
  name: "不知火",
  nameReading: "シラヌヒ",
  shipClass: "陽炎型驅逐艦 二番艦",
  shipType: "驅逐艦",
  displacement: 2033,
  length: 118.5,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "浦賀船渠",
  commissioned: "1939年十二月",
  status: "第十八驅逐隊",
  _comment: "陽炎型二番艦。陽炎ト共ニ第十八驅逐隊ヲ編成ス。",
});

export const KUROSHIO: Warship = Object.freeze({
  id: "kuroshio",
  name: "黒潮",
  nameReading: "クロシホ",
  shipClass: "陽炎型驅逐艦 三番艦",
  shipType: "驅逐艦",
  displacement: 2033,
  length: 118.5,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "藤永田造船所",
  commissioned: "1940年一月",
  status: "第十五驅逐隊",
  _comment: "陽炎型三番艦。南方方面ノ作戰ニ從事ス。",
});

export const OYASHIO: Warship = Object.freeze({
  id: "oyashio",
  name: "親潮",
  nameReading: "オヤシホ",
  shipClass: "陽炎型驅逐艦 四番艦",
  shipType: "驅逐艦",
  displacement: 2033,
  length: 118.5,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "舞鶴海軍工廠",
  commissioned: "1940年八月",
  status: "第十五驅逐隊",
  _comment: "陽炎型四番艦。黒潮ト共ニ第十五驅逐隊ヲ編成ス。",
});

export const YUKIKAZE: Warship = Object.freeze({
  id: "yukikaze",
  name: "雪風",
  nameReading: "ユキカゼ",
  shipClass: "陽炎型驅逐艦 八番艦",
  shipType: "驅逐艦",
  displacement: 2033,
  length: 118.5,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "佐世保海軍工廠",
  commissioned: "1940年一月",
  status: "第十六驅逐隊",
  _comment: "陽炎型八番艦。數多ノ激戰ヲ經テ終戰マデ生キ殘リタルト云フ奇蹟的ナル武運ノ艦。「幸運艦」ノ異名ヲ持ツ。",
});

export const AMATSUKAZE: Warship = Object.freeze({
  id: "amatsukaze",
  name: "天津風",
  nameReading: "アマツカゼ",
  shipClass: "陽炎型驅逐艦 九番艦",
  shipType: "驅逐艦",
  displacement: 2033,
  length: 118.5,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "舞鶴海軍工廠",
  commissioned: "1940年十月",
  status: "第十六驅逐隊",
  _comment: "陽炎型九番艦。雪風ト共ニ第十六驅逐隊ヲ編成。",
});

export const TOKITSUKAZE: Warship = Object.freeze({
  id: "tokitsukaze",
  name: "時津風",
  nameReading: "トキツカゼ",
  shipClass: "陽炎型驅逐艦 十番艦",
  shipType: "驅逐艦",
  displacement: 2033,
  length: 118.5,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "浦賀船渠",
  commissioned: "1940年十二月",
  status: "第十六驅逐隊",
  _comment: "陽炎型十番艦。第十六驅逐隊所屬。",
});

export const URAKAZE: Warship = Object.freeze({
  id: "urakaze",
  name: "浦風",
  nameReading: "ウラカゼ",
  shipClass: "陽炎型驅逐艦 十一番艦",
  shipType: "驅逐艦",
  displacement: 2033,
  length: 118.5,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "藤永田造船所",
  commissioned: "1940年十二月",
  status: "第十七驅逐隊",
  _comment: "陽炎型十一番艦。第十七驅逐隊所屬。",
});

export const ISOKAZE: Warship = Object.freeze({
  id: "isokaze",
  name: "磯風",
  nameReading: "イソカゼ",
  shipClass: "陽炎型驅逐艦 十二番艦",
  shipType: "驅逐艦",
  displacement: 2033,
  length: 118.5,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "佐世保海軍工廠",
  commissioned: "1940年十一月",
  status: "第十七驅逐隊",
  _comment: "陽炎型十二番艦。大和ノ最後ノ出撃ニモ從ヒタルト云フ。",
});

export const HAMAKAZE: Warship = Object.freeze({
  id: "hamakaze",
  name: "濱風",
  nameReading: "ハマカゼ",
  shipClass: "陽炎型驅逐艦 十三番艦",
  shipType: "驅逐艦",
  displacement: 2033,
  length: 118.5,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "浦賀船渠",
  commissioned: "1941年六月",
  status: "第十七驅逐隊",
  _comment: "陽炎型十三番艦。第十七驅逐隊所屬。數多ノ主要海戰ニ參加。",
});

export const TANIKAZE: Warship = Object.freeze({
  id: "tanikaze",
  name: "谷風",
  nameReading: "タニカゼ",
  shipClass: "陽炎型驅逐艦 十四番艦",
  shipType: "驅逐艦",
  displacement: 2033,
  length: 118.5,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "藤永田造船所",
  commissioned: "1941年四月",
  status: "第十七驅逐隊",
  _comment: "陽炎型十四番艦。第十七驅逐隊所屬。",
});

export const NOWAKI: Warship = Object.freeze({
  id: "nowaki",
  name: "野分",
  nameReading: "ノワキ",
  shipClass: "陽炎型驅逐艦 十五番艦",
  shipType: "驅逐艦",
  displacement: 2033,
  length: 118.5,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "舞鶴海軍工廠",
  commissioned: "1941年四月",
  status: "第四驅逐隊",
  _comment: "陽炎型十五番艦。野分ハ秋ノ暴風ノ意。第四驅逐隊所屬。",
});

export const ARASHI: Warship = Object.freeze({
  id: "arashi",
  name: "嵐",
  nameReading: "アラシ",
  shipClass: "陽炎型驅逐艦 十六番艦",
  shipType: "驅逐艦",
  displacement: 2033,
  length: 118.5,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "舞鶴海軍工廠",
  commissioned: "1941年一月",
  status: "第四驅逐隊",
  _comment: "陽炎型十六番艦。第四驅逐隊所屬。",
});

export const HAGIKAZE: Warship = Object.freeze({
  id: "hagikaze",
  name: "萩風",
  nameReading: "ハギカゼ",
  shipClass: "陽炎型驅逐艦 十七番艦",
  shipType: "驅逐艦",
  displacement: 2033,
  length: 118.5,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "浦賀船渠",
  commissioned: "1941年三月",
  status: "第四驅逐隊",
  _comment: "陽炎型十七番艦。第四驅逐隊所屬。",
});

export const MAIKAZE: Warship = Object.freeze({
  id: "maikaze",
  name: "舞風",
  nameReading: "マヒカゼ",
  shipClass: "陽炎型驅逐艦 十八番艦",
  shipType: "驅逐艦",
  displacement: 2033,
  length: 118.5,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "藤永田造船所",
  commissioned: "1941年七月",
  status: "第四驅逐隊",
  _comment: "陽炎型十八番艦。第四驅逐隊所屬。",
});

export const AKIGUMO: Warship = Object.freeze({
  id: "akigumo",
  name: "秋雲",
  nameReading: "アキグモ",
  shipClass: "陽炎型驅逐艦 十九番艦",
  shipType: "驅逐艦",
  displacement: 2033,
  length: 118.5,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "浦賀船渠",
  commissioned: "1941年九月",
  status: "第十驅逐隊",
  _comment: "陽炎型最終艦。一部資料ニテハ夕雲型ニ分類サルルモ陽炎型トシテ竣工セリ。",
});

// 夕雲型 一番艦

export const YUGUMO: Warship = Object.freeze({
  id: "yugumo",
  name: "夕雲",
  nameReading: "ユフグモ",
  shipClass: "夕雲型驅逐艦 一番艦",
  shipType: "驅逐艦",
  displacement: 2077,
  length: 119.2,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "舞鶴海軍工廠",
  commissioned: "1941年十二月",
  status: "第十驅逐隊",
  _comment: "陽炎型ノ改良發展型。帝國海軍甲型驅逐艦ノ完成形トサル。",
});

// 秋月型 一番艦

export const AKIZUKI: Warship = Object.freeze({
  id: "akizuki",
  name: "秋月",
  nameReading: "アキヅキ",
  shipClass: "秋月型驅逐艦 一番艦",
  shipType: "驅逐艦",
  displacement: 2700,
  length: 134.2,
  speed: 33.0,
  mainArmament: "10cm高角砲 連裝4基8門",
  secondaryArmament: "61cm魚雷發射管 四連裝1基4門",
  builder: "舞鶴海軍工廠",
  commissioned: "【建造中】1942年就役豫定",
  status: "建造中（防空驅逐艦。艦隊直衛ヲ任務トス）",
  _comment: "對空戰鬪ヲ主任務トスル畫期的驅逐艦。10cm高角砲8門ハ驅逐艦トシテ異例ノ對空火力ナリ。",
});

// 松型 一番艦

export const MATSU: Warship = Object.freeze({
  id: "matsu",
  name: "松",
  nameReading: "マツ",
  shipClass: "松型驅逐艦 一番艦",
  shipType: "驅逐艦",
  displacement: 1262,
  length: 100.0,
  speed: 27.8,
  mainArmament: "12.7cm高角砲 單裝1基及ビ連裝1基 計3門",
  secondaryArmament: "61cm魚雷發射管 四連裝1基4門",
  builder: "舞鶴海軍工廠",
  commissioned: "【計畫中】1944年以降就役豫定",
  status: "計畫中（戰時急造型驅逐艦。多數建造ノ計畫アリ）",
  _comment: "建造期間短縮ヲ最優先トセル戰時急造型驅逐艦。量產ニヨル數的劣勢補填ヲ企圖ス。計畫段階ノ情報。",
});

// 吹雪型（特型）追加

export const SHIRAYUKI: Warship = Object.freeze({
  id: "shirayuki",
  name: "白雪",
  nameReading: "シラユキ",
  shipClass: "吹雪型（特型）驅逐艦 二番艦",
  shipType: "驅逐艦",
  displacement: 1750,
  length: 118.0,
  speed: 38.0,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 三連裝3基9門",
  builder: "横濱船渠",
  commissioned: "1928年十二月",
  status: "第十一驅逐隊",
  _comment: "特型二番艦。吹雪ト共ニ帝國海軍驅逐艦ノ主力ヲ成ス。",
});

export const HATSUYUKI: Warship = Object.freeze({
  id: "hatsuyuki",
  name: "初雪",
  nameReading: "ハツユキ",
  shipClass: "吹雪型（特型）驅逐艦 三番艦",
  shipType: "驅逐艦",
  displacement: 1750,
  length: 118.0,
  speed: 38.0,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 三連裝3基9門",
  builder: "舞鶴海軍工廠",
  commissioned: "1929年三月",
  status: "第十一驅逐隊",
  _comment: "特型三番艦。第十一驅逐隊所屬。",
});

export const MURAKUMO: Warship = Object.freeze({
  id: "murakumo",
  name: "叢雲",
  nameReading: "ムラクモ",
  shipClass: "吹雪型（特型）驅逐艦 五番艦",
  shipType: "驅逐艦",
  displacement: 1750,
  length: 118.0,
  speed: 38.0,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 三連裝3基9門",
  builder: "藤永田造船所",
  commissioned: "1929年五月",
  status: "第十二驅逐隊",
  _comment: "特型五番艦。第十二驅逐隊所屬。",
});

export const AYANAMI: Warship = Object.freeze({
  id: "ayanami",
  name: "綾波",
  nameReading: "アヤナミ",
  shipClass: "吹雪型（特型・II型）驅逐艦 十一番艦",
  shipType: "驅逐艦",
  displacement: 1750,
  length: 118.0,
  speed: 38.0,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 三連裝3基9門",
  builder: "藤永田造船所",
  commissioned: "1930年四月",
  status: "第十九驅逐隊",
  _comment: "特型II型ノ一番艦。某群島方面夜戰ニ於テ單艦ニテ敵數隻ヲ翻弄セル武勲高キ艦ノ由。",
});

export const SHIKINAMI: Warship = Object.freeze({
  id: "shikinami",
  name: "敷波",
  nameReading: "シキナミ",
  shipClass: "吹雪型（特型・II型）驅逐艦 十二番艦",
  shipType: "驅逐艦",
  displacement: 1750,
  length: 118.0,
  speed: 38.0,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 三連裝3基9門",
  builder: "舞鶴海軍工廠",
  commissioned: "1931年六月",
  status: "第十九驅逐隊",
  _comment: "特型II型。綾波ト共ニ第十九驅逐隊ヲ編成。",
});

export const AKEBONO: Warship = Object.freeze({
  id: "akebono",
  name: "曙",
  nameReading: "アケボノ",
  shipClass: "吹雪型（特型・III型）驅逐艦 二十一番艦",
  shipType: "驅逐艦",
  displacement: 1750,
  length: 118.0,
  speed: 38.0,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 三連裝3基9門",
  builder: "藤永田造船所",
  commissioned: "1931年七月",
  status: "第七驅逐隊",
  _comment: "特型III型。砲塔ヲ改良シ仰角75度ニ增加。第七驅逐隊所屬。",
});

export const IKAZUCHI: Warship = Object.freeze({
  id: "ikazuchi",
  name: "雷",
  nameReading: "イカヅチ",
  shipClass: "吹雪型（特型・III型）驅逐艦 二十三番艦",
  shipType: "驅逐艦",
  displacement: 1750,
  length: 118.0,
  speed: 38.0,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 三連裝3基9門",
  builder: "浦賀船渠",
  commissioned: "1932年八月",
  status: "第六驅逐隊",
  _comment: "特型III型。南方某海域海戰ニテ敵漂流兵ヲ救助セルト云フ逸話ガ傳ハル。",
});

export const INAZUMA: Warship = Object.freeze({
  id: "inazuma",
  name: "電",
  nameReading: "イナヅマ",
  shipClass: "吹雪型（特型・III型）驅逐艦 二十四番艦（最終艦）",
  shipType: "驅逐艦",
  displacement: 1750,
  length: 118.0,
  speed: 38.0,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 三連裝3基9門",
  builder: "浦賀船渠",
  commissioned: "1932年十一月",
  status: "第六驅逐隊",
  _comment: "特型最終艦。雷ト共ニ第六驅逐隊ヲ編成ス。",
});

// 朝潮型追加

export const OSHIO: Warship = Object.freeze({
  id: "oshio",
  name: "大潮",
  nameReading: "オホシホ",
  shipClass: "朝潮型驅逐艦 二番艦",
  shipType: "驅逐艦",
  displacement: 1961,
  length: 118.0,
  speed: 35.0,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "舞鶴海軍工廠",
  commissioned: "1937年十月",
  status: "第八驅逐隊",
  _comment: "朝潮型二番艦。朝潮ト共ニ第八驅逐隊ヲ編成ス。",
});

export const MICHISHIO: Warship = Object.freeze({
  id: "michishio",
  name: "滿潮",
  nameReading: "ミチシホ",
  shipClass: "朝潮型驅逐艦 三番艦",
  shipType: "驅逐艦",
  displacement: 1961,
  length: 118.0,
  speed: 35.0,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "藤永田造船所",
  commissioned: "1937年十月",
  status: "第八驅逐隊",
  _comment: "朝潮型三番艦。第八驅逐隊所屬。某海峽夜戰ニテ西村艦隊ニ從ヒタルト云フ。",
});

export const ARASHIO: Warship = Object.freeze({
  id: "arashio",
  name: "荒潮",
  nameReading: "アラシホ",
  shipClass: "朝潮型驅逐艦 四番艦",
  shipType: "驅逐艦",
  displacement: 1961,
  length: 118.0,
  speed: 35.0,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "川崎重工業（神戸）",
  commissioned: "1937年十二月",
  status: "第八驅逐隊",
  _comment: "朝潮型四番艦。第八驅逐隊所屬。",
});

export const KASUMI_DD: Warship = Object.freeze({
  id: "kasumi-dd",
  name: "霞",
  nameReading: "カスミ",
  shipClass: "朝潮型驅逐艦 九番艦",
  shipType: "驅逐艦",
  displacement: 1961,
  length: 118.0,
  speed: 35.0,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "舞鶴海軍工廠",
  commissioned: "1939年六月",
  status: "第十八驅逐隊",
  _comment: "朝潮型九番艦。大和ノ最後ノ出撃ニ從ヒタル由。",
});

// 夕雲型追加

export const MAKIGUMO: Warship = Object.freeze({
  id: "makigumo",
  name: "巻雲",
  nameReading: "マキグモ",
  shipClass: "夕雲型驅逐艦 二番艦",
  shipType: "驅逐艦",
  displacement: 2077,
  length: 119.2,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "藤永田造船所",
  commissioned: "1942年三月",
  status: "第十驅逐隊",
  _comment: "夕雲型二番艦。第十驅逐隊所屬。",
});

export const KAZAGUMO: Warship = Object.freeze({
  id: "kazagumo",
  name: "風雲",
  nameReading: "カザグモ",
  shipClass: "夕雲型驅逐艦 三番艦",
  shipType: "驅逐艦",
  displacement: 2077,
  length: 119.2,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "舞鶴海軍工廠",
  commissioned: "1942年三月",
  status: "第十驅逐隊",
  _comment: "夕雲型三番艦。第十驅逐隊所屬。",
});

export const NAGANAMI: Warship = Object.freeze({
  id: "naganami",
  name: "長波",
  nameReading: "ナガナミ",
  shipClass: "夕雲型驅逐艦 四番艦",
  shipType: "驅逐艦",
  displacement: 2077,
  length: 119.2,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "藤永田造船所",
  commissioned: "1942年六月",
  status: "第三十一驅逐隊",
  _comment: "夕雲型四番艦。某島嶼沖夜戰ニテ旗艦ヲ務メタル由。帝國海軍水雷戰ノ精華ヲ發揮セリ。",
});

export const MAKINAMI: Warship = Object.freeze({
  id: "makinami",
  name: "巻波",
  nameReading: "マキナミ",
  shipClass: "夕雲型驅逐艦 五番艦",
  shipType: "驅逐艦",
  displacement: 2077,
  length: 119.2,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "舞鶴海軍工廠",
  commissioned: "1942年八月",
  status: "第三十一驅逐隊",
  _comment: "夕雲型五番艦。長波ト共ニ第三十一驅逐隊ヲ編成。",
});

export const TAKANAMI: Warship = Object.freeze({
  id: "takanami",
  name: "高波",
  nameReading: "タカナミ",
  shipClass: "夕雲型驅逐艦 六番艦",
  shipType: "驅逐艦",
  displacement: 2077,
  length: 119.2,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "浦賀船渠",
  commissioned: "1942年八月",
  status: "第三十一驅逐隊",
  _comment: "夕雲型六番艦。某島嶼沖夜戰ニテ喪失セルト云フ。",
});

export const ONAMI: Warship = Object.freeze({
  id: "onami",
  name: "大波",
  nameReading: "オホナミ",
  shipClass: "夕雲型驅逐艦 七番艦",
  shipType: "驅逐艦",
  displacement: 2077,
  length: 119.2,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "藤永田造船所",
  commissioned: "1942年十二月",
  status: "第三十二驅逐隊",
  _comment: "夕雲型七番艦。第三十二驅逐隊所屬。",
});

export const KIYONAMI: Warship = Object.freeze({
  id: "kiyonami",
  name: "清波",
  nameReading: "キヨナミ",
  shipClass: "夕雲型驅逐艦 八番艦",
  shipType: "驅逐艦",
  displacement: 2077,
  length: 119.2,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "浦賀船渠",
  commissioned: "1943年一月",
  status: "第三十二驅逐隊",
  _comment: "夕雲型八番艦。第三十二驅逐隊所屬。",
});

export const FUJINAMI: Warship = Object.freeze({
  id: "fujinami",
  name: "藤波",
  nameReading: "フヂナミ",
  shipClass: "夕雲型驅逐艦 十一番艦",
  shipType: "驅逐艦",
  displacement: 2077,
  length: 119.2,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "藤永田造船所",
  commissioned: "1943年七月",
  status: "第三十二驅逐隊",
  _comment: "夕雲型十一番艦。第三十二驅逐隊所屬。",
});

export const HAYANAMI: Warship = Object.freeze({
  id: "hayanami",
  name: "早波",
  nameReading: "ハヤナミ",
  shipClass: "夕雲型驅逐艦 十二番艦",
  shipType: "驅逐艦",
  displacement: 2077,
  length: 119.2,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "舞鶴海軍工廠",
  commissioned: "1943年七月",
  status: "第三十二驅逐隊",
  _comment: "夕雲型十二番艦。",
});

export const ASASHIMO: Warship = Object.freeze({
  id: "asashimo",
  name: "朝霜",
  nameReading: "アサシモ",
  shipClass: "夕雲型驅逐艦 十六番艦",
  shipType: "驅逐艦",
  displacement: 2077,
  length: 119.2,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "藤永田造船所",
  commissioned: "1945年二月",
  status: "第二十一驅逐隊",
  _comment: "夕雲型十六番艦。大和ノ最後ノ出撃ニ從ヒ途上ニテ落伍沈沒セル由。",
});

export const KIYOSHIMO: Warship = Object.freeze({
  id: "kiyoshimo",
  name: "清霜",
  nameReading: "キヨシモ",
  shipClass: "夕雲型驅逐艦 十九番艦（最終艦）",
  shipType: "驅逐艦",
  displacement: 2077,
  length: 119.2,
  speed: 35.5,
  mainArmament: "12.7cm砲 連裝3基6門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "浦賀船渠",
  commissioned: "1944年五月",
  status: "第二驅逐隊",
  _comment: "夕雲型最終艦。帝國海軍甲型驅逐艦ノ掉尾ヲ飾ル。",
});

// 秋月型追加

export const TERUZUKI: Warship = Object.freeze({
  id: "teruzuki",
  name: "照月",
  nameReading: "テルヅキ",
  shipClass: "秋月型驅逐艦 二番艦",
  shipType: "驅逐艦",
  displacement: 2700,
  length: 134.2,
  speed: 33.0,
  mainArmament: "10cm高角砲 連裝4基8門",
  secondaryArmament: "61cm魚雷發射管 四連裝1基4門",
  builder: "三菱重工業長崎造船所",
  commissioned: "1942年八月",
  status: "建造中（防空驅逐艦。秋月型二番艦）",
  _comment: "秋月型二番艦。某群島方面ニテ喪失セルト云フ風聞アリ。",
});

export const HATSUZUKI: Warship = Object.freeze({
  id: "hatsuzuki",
  name: "初月",
  nameReading: "ハツヅキ",
  shipClass: "秋月型驅逐艦 三番艦",
  shipType: "驅逐艦",
  displacement: 2700,
  length: 134.2,
  speed: 33.0,
  mainArmament: "10cm高角砲 連裝4基8門",
  secondaryArmament: "61cm魚雷發射管 四連裝1基4門",
  builder: "舞鶴海軍工廠",
  commissioned: "1943年四月",
  status: "建造中（防空驅逐艦。秋月型三番艦）",
  _comment: "秋月型三番艦。某岬沖海戰ニテ囮部隊ノ殿軍ヲ務メ奮戰セルト云フ。",
});

export const SUZUZUKI: Warship = Object.freeze({
  id: "suzuzuki",
  name: "涼月",
  nameReading: "スズヅキ",
  shipClass: "秋月型驅逐艦 四番艦",
  shipType: "驅逐艦",
  displacement: 2700,
  length: 134.2,
  speed: 33.0,
  mainArmament: "10cm高角砲 連裝4基8門",
  secondaryArmament: "61cm魚雷發射管 四連裝1基4門",
  builder: "三菱重工業長崎造船所",
  commissioned: "1943年五月",
  status: "建造中（防空驅逐艦。秋月型四番艦）",
  _comment: "秋月型四番艦。大和ノ最後ノ出撃ニ從ヒ大破スルモ生還セルト云フ。不沈艦ノ異名アリ。",
});

export const FUYUZUKI: Warship = Object.freeze({
  id: "fuyuzuki",
  name: "冬月",
  nameReading: "フユヅキ",
  shipClass: "秋月型驅逐艦 五番艦",
  shipType: "驅逐艦",
  displacement: 2700,
  length: 134.2,
  speed: 33.0,
  mainArmament: "10cm高角砲 連裝4基8門",
  secondaryArmament: "61cm魚雷發射管 四連裝1基4門",
  builder: "舞鶴海軍工廠",
  commissioned: "1944年五月",
  status: "計畫中（防空驅逐艦。秋月型五番艦）",
  _comment: "秋月型五番艦。大和ノ最後ノ出撃ニ從ヒ生還セルト云フ。",
});

export const HANAZUKI: Warship = Object.freeze({
  id: "hanazuki",
  name: "花月",
  nameReading: "ハナヅキ",
  shipClass: "秋月型驅逐艦 十一番艦",
  shipType: "驅逐艦",
  displacement: 2700,
  length: 134.2,
  speed: 33.0,
  mainArmament: "10cm高角砲 連裝4基8門",
  secondaryArmament: "61cm魚雷發射管 四連裝1基4門",
  builder: "舞鶴海軍工廠",
  commissioned: "1944年十二月",
  status: "計畫中（防空驅逐艦。秋月型十一番艦）",
  _comment: "秋月型後期建造艦。終戰時ニハ残存セルト云フ。",
});

// 松型追加

export const TAKE: Warship = Object.freeze({
  id: "take",
  name: "竹",
  nameReading: "タケ",
  shipClass: "松型驅逐艦 二番艦",
  shipType: "驅逐艦",
  displacement: 1262,
  length: 100.0,
  speed: 27.8,
  mainArmament: "12.7cm高角砲 單裝1基及ビ連裝1基 計3門",
  secondaryArmament: "61cm魚雷發射管 四連裝1基4門",
  builder: "横須賀海軍工廠",
  commissioned: "1944年六月",
  status: "計畫中（戰時急造型驅逐艦二番艦）",
  _comment: "松型二番艦。某國驅逐艦ヲ體當ニテ沈メタル武勲アリト云フ。",
});

export const UME: Warship = Object.freeze({
  id: "ume",
  name: "梅",
  nameReading: "ウメ",
  shipClass: "松型驅逐艦 三番艦",
  shipType: "驅逐艦",
  displacement: 1262,
  length: 100.0,
  speed: 27.8,
  mainArmament: "12.7cm高角砲 單裝1基及ビ連裝1基 計3門",
  secondaryArmament: "61cm魚雷發射管 四連裝1基4門",
  builder: "藤永田造船所",
  commissioned: "1944年六月",
  status: "計畫中（戰時急造型驅逐艦三番艦）",
  _comment: "松型三番艦。戰時量產ノ急造型。",
});

export const MOMO: Warship = Object.freeze({
  id: "momo",
  name: "桃",
  nameReading: "モモ",
  shipClass: "松型驅逐艦 四番艦",
  shipType: "驅逐艦",
  displacement: 1262,
  length: 100.0,
  speed: 27.8,
  mainArmament: "12.7cm高角砲 單裝1基及ビ連裝1基 計3門",
  secondaryArmament: "61cm魚雷發射管 四連裝1基4門",
  builder: "舞鶴海軍工廠",
  commissioned: "1944年八月",
  status: "計畫中（戰時急造型驅逐艦四番艦）",
  _comment: "松型四番艦。",
});

export const KUWA: Warship = Object.freeze({
  id: "kuwa",
  name: "桑",
  nameReading: "クハ",
  shipClass: "松型驅逐艦 五番艦",
  shipType: "驅逐艦",
  displacement: 1262,
  length: 100.0,
  speed: 27.8,
  mainArmament: "12.7cm高角砲 單裝1基及ビ連裝1基 計3門",
  secondaryArmament: "61cm魚雷發射管 四連裝1基4門",
  builder: "横須賀海軍工廠",
  commissioned: "1944年八月",
  status: "計畫中（戰時急造型驅逐艦五番艦）",
  _comment: "松型五番艦。",
});

export const TACHIBANA: Warship = Object.freeze({
  id: "tachibana",
  name: "橘",
  nameReading: "タチバナ",
  shipClass: "橘型驅逐艦（松型改）一番艦",
  shipType: "驅逐艦",
  displacement: 1289,
  length: 100.0,
  speed: 27.8,
  mainArmament: "12.7cm高角砲 單裝1基及ビ連裝1基 計3門",
  secondaryArmament: "61cm魚雷發射管 四連裝1基4門",
  builder: "横須賀海軍工廠",
  commissioned: "1945年一月",
  status: "計畫中（松型改良型。戰時最終型驅逐艦）",
  _comment: "松型ノ改良型。帝國海軍ガ建造セル最後ノ驅逐艦型ト成ルデアラウ。",
});

// 白露型追加

export const SHIGURE: Warship = Object.freeze({
  id: "shigure",
  name: "時雨",
  nameReading: "シグレ",
  shipClass: "白露型驅逐艦 二番艦",
  shipType: "驅逐艦",
  displacement: 1685,
  length: 111.0,
  speed: 34.0,
  mainArmament: "12.7cm砲 連裝2基4門及ビ單裝1基1門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "浦賀船渠",
  commissioned: "1936年九月",
  status: "第二十七驅逐隊",
  _comment: "白露型二番艦。某海峽夜戰ニテ西村艦隊中唯一ノ生還艦トナリタルト云フ。「幸運艦」ノ異名ヲ持ツ。",
});

export const KAWAKAZE: Warship = Object.freeze({
  id: "kawakaze",
  name: "江風",
  nameReading: "カハカゼ",
  shipClass: "白露型驅逐艦 七番艦",
  shipType: "驅逐艦",
  displacement: 1685,
  length: 111.0,
  speed: 34.0,
  mainArmament: "12.7cm砲 連裝2基4門及ビ單裝1基1門",
  secondaryArmament: "61cm魚雷發射管 四連裝2基8門",
  builder: "藤永田造船所",
  commissioned: "1937年四月",
  status: "第二十四驅逐隊",
  _comment: "白露型七番艦。某群島方面ノ夜戰ニテ活躍セルモ後ニ喪失ノ由。",
});

// 睦月型追加

export const KISARAGI: Warship = Object.freeze({
  id: "kisaragi",
  name: "如月",
  nameReading: "キサラギ",
  shipClass: "睦月型驅逐艦 二番艦",
  shipType: "驅逐艦",
  displacement: 1315,
  length: 97.5,
  speed: 37.3,
  mainArmament: "12cm砲 單裝4基4門",
  secondaryArmament: "61cm魚雷發射管 連裝3基6門",
  builder: "佐世保海軍工廠",
  commissioned: "1926年十二月",
  status: "第三十驅逐隊",
  _comment: "睦月型二番艦。某島嶼攻略戰ニテ敵航空機ノ爆撃ヲ受ケ沈沒セル由。緒戰ノ損失ナリ。",
});

export const FUMIZUKI: Warship = Object.freeze({
  id: "fumizuki",
  name: "文月",
  nameReading: "フミヅキ",
  shipClass: "睦月型驅逐艦 七番艦",
  shipType: "驅逐艦",
  displacement: 1315,
  length: 97.5,
  speed: 37.3,
  mainArmament: "12cm砲 單裝4基4門",
  secondaryArmament: "61cm魚雷發射管 連裝3基6門",
  builder: "藤永田造船所",
  commissioned: "1928年七月",
  status: "第二十二驅逐隊",
  _comment: "睦月型七番艦。旧式ナルモ各方面ノ護衛・輸送ニ從事セリ。",
});

export const NAGATSUKI: Warship = Object.freeze({
  id: "nagatsuki",
  name: "長月",
  nameReading: "ナガツキ",
  shipClass: "睦月型驅逐艦 九番艦",
  shipType: "驅逐艦",
  displacement: 1315,
  length: 97.5,
  speed: 37.3,
  mainArmament: "12cm砲 單裝4基4門",
  secondaryArmament: "61cm魚雷發射管 連裝3基6門",
  builder: "石川島造船所",
  commissioned: "1928年四月",
  status: "第二十二驅逐隊",
  _comment: "睦月型九番艦。某群島方面ノ輸送作戰ニ從事。",
});

// ============================================================
//  潜水艦（Submarine）
// ============================================================

export const SUBMARINE_NO_1: Warship = Object.freeze({
  id: "submarine-no-1",
  name: "第一潜水艇",
  nameReading: "ダイイチセンスイテイ",
  shipClass: "ホランド型潜水艇",
  shipType: "潜水艦",
  displacement: 124,
  length: 19.8,
  speed: 8.0,
  mainArmament: "45cm魚雷發射管 一門",
  secondaryArmament: "（砲裝ナシ）",
  builder: "米國（輸入後組立）",
  commissioned: "1905年",
  status: "退役",
  _comment: "帝國海軍初ノ潜水艇。日露戰爭中ノ1905年ニ竣工。帝國潜水艦部隊ノ嚆矢タリ。",
});

export const I_1: Warship = Object.freeze({
  id: "i-1",
  name: "伊一",
  nameReading: "イイチ",
  shipClass: "伊一型（巡潜一型）潜水艦",
  shipType: "潜水艦",
  displacement: 2135,
  length: 97.5,
  speed: 18.0,
  mainArmament: "53cm魚雷發射管 六門",
  secondaryArmament: "14cm砲 二門",
  builder: "呉海軍工廠",
  commissioned: "1926年三月",
  status: "現役",
  _comment: "帝國海軍初ノ巡洋潜水艦。海大型ヲ經テ大型化ヘ至ル發展ノ始マリナリ。",
});

export const I_6: Warship = Object.freeze({
  id: "i-6",
  name: "伊六",
  nameReading: "イロク",
  shipClass: "伊六型（巡潜二型）潜水艦",
  shipType: "潜水艦",
  displacement: 2243,
  length: 98.5,
  speed: 20.0,
  mainArmament: "53cm魚雷發射管 六門",
  secondaryArmament: "12.7cm砲 一門、水上偵察機一機",
  builder: "川崎造船所（神戸）",
  commissioned: "1935年四月",
  status: "現役",
  _comment: "水上機格納筒ヲ初メテ搭載セル巡洋潜水艦。偵察任務能力ヲ附與ス。",
});

export const I_7: Warship = Object.freeze({
  id: "i-7",
  name: "伊七",
  nameReading: "イナナ",
  shipClass: "伊七型（巡潜三型）潜水艦",
  shipType: "潜水艦",
  displacement: 2525,
  length: 109.3,
  speed: 23.0,
  mainArmament: "53cm魚雷發射管 六門",
  secondaryArmament: "14cm砲 一門、水上偵察機一機",
  builder: "呉海軍工廠",
  commissioned: "1937年三月",
  status: "現役",
  _comment: "大型巡洋潜水艦。23節ノ水上速力ハ潜水艦トシテ異例ノ高速ナリ。",
});

export const I_15: Warship = Object.freeze({
  id: "i-15",
  name: "伊十五",
  nameReading: "イジフゴ",
  shipClass: "伊十五型（乙型）潜水艦 一番艦",
  shipType: "潜水艦",
  displacement: 2198,
  length: 108.7,
  speed: 23.6,
  mainArmament: "53cm魚雷發射管 六門（艦首）",
  secondaryArmament: "14cm砲 一門、水上偵察機一機",
  builder: "呉海軍工廠",
  commissioned: "1940年九月",
  status: "現役（潜水戰隊配屬）",
  _comment: "乙型潜水艦ノ一番艦。水上偵察機搭載ノ大型潜水艦。甲標的母艦トシテモ運用可能。",
});

export const I_19: Warship = Object.freeze({
  id: "i-19",
  name: "伊十九",
  nameReading: "イジフク",
  shipClass: "伊十五型（乙型）潜水艦",
  shipType: "潜水艦",
  displacement: 2198,
  length: 108.7,
  speed: 23.6,
  mainArmament: "53cm魚雷發射管 六門（艦首）",
  secondaryArmament: "14cm砲 一門、水上偵察機一機",
  builder: "三菱重工業神戸造船所",
  commissioned: "1941年四月",
  status: "現役（潜水戰隊配屬）",
  _comment: "乙型潜水艦。大型ニシテ航續力大。水上偵察機ヲ搭載シ遠洋作戰ニ從事ス。",
});

export const I_16: Warship = Object.freeze({
  id: "i-16",
  name: "伊十六",
  nameReading: "イジフロク",
  shipClass: "伊十六型（丙型）潜水艦 一番艦",
  shipType: "潜水艦",
  displacement: 2184,
  length: 108.7,
  speed: 23.6,
  mainArmament: "53cm魚雷發射管 八門",
  secondaryArmament: "14cm砲 一門、甲標的一基搭載可能",
  builder: "三菱重工業神戸造船所",
  commissioned: "1940年七月",
  status: "現役（甲標的母艦）",
  _comment: "丙型潜水艦。甲標的（特殊潜航艇）ヲ搭載シ運搬・發進セシムル能力ヲ有ス。",
});

export const I_58: Warship = Object.freeze({
  id: "i-58",
  name: "伊五十八",
  nameReading: "イゴジフハチ",
  shipClass: "伊五十四型（乙型改二）潜水艦",
  shipType: "潜水艦",
  displacement: 2140,
  length: 108.7,
  speed: 17.7,
  mainArmament: "53cm魚雷發射管 六門（艦首）",
  secondaryArmament: "14cm砲 一門、特殊兵器搭載可能",
  builder: "横須賀海軍工廠",
  commissioned: "【建造中】1944年就役豫定",
  status: "建造中（新鋭潜水艦）",
  _comment: "乙型改二潜水艦。特殊兵器運用能力ヲ附與サレタル新鋭艦ノ由ナルモ詳細不明。",
});

export const I_400: Warship = Object.freeze({
  id: "i-400",
  name: "伊四百",
  nameReading: "イヨンヒヤク",
  shipClass: "伊四百型潜水艦 一番艦",
  shipType: "潜水艦",
  displacement: 6500,
  length: 122.0,
  speed: 18.7,
  mainArmament: "水上攻撃機「晴嵐」三機搭載",
  secondaryArmament: "14cm砲 一門、53cm魚雷發射管 八門",
  builder: "呉海軍工廠",
  commissioned: "【極秘・建造中】1944年就役豫定",
  status: "極秘建造中（世界最大ノ潜水艦。航空機搭載型）",
  _comment: "潜水空母トモ稱スベキ巨大潜水艦。水上攻撃機三機ヲ搭載シ世界中何處ヘデモ奇襲攻撃可能トノ構想。軍機中ノ軍機。",
});

export const I_201: Warship = Object.freeze({
  id: "i-201",
  name: "伊二百一",
  nameReading: "イニヒヤクイチ",
  shipClass: "伊二百一型（潜高型）潜水艦",
  shipType: "潜水艦",
  displacement: 1291,
  length: 79.0,
  speed: 19.0,
  mainArmament: "53cm魚雷發射管 四門",
  secondaryArmament: "（砲裝ナシ。水中高速ヲ重視）",
  builder: "呉海軍工廠",
  commissioned: "【極秘・計畫中】1945年以降就役豫定",
  status: "極秘計畫中（水中高速潜水艦。革新的設計）",
  _comment: "水中19節ノ高速ヲ目指ス革新的潜水艦。流線型船體ト大容量蓄電池ニヨリ水中速力ヲ大幅向上。",
});

export const RO_500: Warship = Object.freeze({
  id: "ro-500",
  name: "呂五百",
  nameReading: "ロゴヒヤク",
  shipClass: "呂五百型潜水艦",
  shipType: "潜水艦",
  displacement: 871,
  length: 76.7,
  speed: 19.7,
  mainArmament: "53cm魚雷發射管 五門",
  secondaryArmament: "（砲裝ナシ）",
  builder: "（外國技術導入艦ノ由。詳細不詳）",
  commissioned: "1943年頃（未確認）",
  status: "【極秘】（特殊事情ニヨリ入手ノ由。詳細不詳）",
  _comment: "特殊ナル經緯ニテ帝國海軍ノ艦籍ニ編入サレタル潜水艦トノ噂アルモ、一切ノ詳細ハ不明。",
});

export const RO_100: Warship = Object.freeze({
  id: "ro-100",
  name: "呂百",
  nameReading: "ロヒヤク",
  shipClass: "呂百型（小型）潜水艦",
  shipType: "潜水艦",
  displacement: 601,
  length: 60.9,
  speed: 14.2,
  mainArmament: "53cm魚雷發射管 四門",
  secondaryArmament: "（砲裝ナシ）",
  builder: "呉海軍工廠",
  commissioned: "【建造中】1942年就役豫定",
  status: "建造中（沿岸防禦用小型潜水艦）",
  _comment: "量產ヲ企圖セル小型潜水艦。沿岸防禦及ビ通商破壞ヲ任務トス。",
});

// 追加 伊號潜水艦

export const I_2: Warship = Object.freeze({
  id: "i-2",
  name: "伊二",
  nameReading: "イニ",
  shipClass: "伊一型（巡潜一型）潜水艦 二番艦",
  shipType: "潜水艦",
  displacement: 2135,
  length: 97.5,
  speed: 18.0,
  mainArmament: "53cm魚雷發射管 六門",
  secondaryArmament: "14cm砲 二門",
  builder: "佐世保海軍工廠",
  commissioned: "1927年六月",
  status: "現役",
  _comment: "巡潜一型二番艦。伊一ト共ニ帝國海軍大型潜水艦ノ嚆矢。",
});

export const I_3: Warship = Object.freeze({
  id: "i-3",
  name: "伊三",
  nameReading: "イサン",
  shipClass: "伊一型（巡潜一型）潜水艦 三番艦",
  shipType: "潜水艦",
  displacement: 2135,
  length: 97.5,
  speed: 18.0,
  mainArmament: "53cm魚雷發射管 六門",
  secondaryArmament: "14cm砲 二門",
  builder: "川崎造船所（神戸）",
  commissioned: "1927年十二月",
  status: "現役",
  _comment: "巡潜一型三番艦。",
});

export const I_4: Warship = Object.freeze({
  id: "i-4",
  name: "伊四",
  nameReading: "イヨン",
  shipClass: "伊四型（巡潜一型改）潜水艦",
  shipType: "潜水艦",
  displacement: 1955,
  length: 97.7,
  speed: 18.0,
  mainArmament: "53cm魚雷發射管 六門",
  secondaryArmament: "14cm砲 一門、水上偵察機一機",
  builder: "呉海軍工廠",
  commissioned: "1929年十二月",
  status: "現役",
  _comment: "巡潜一型改。水上偵察機搭載能力ヲ附與セリ。",
});

export const I_5: Warship = Object.freeze({
  id: "i-5",
  name: "伊五",
  nameReading: "イゴ",
  shipClass: "伊五型（巡潜二型）潜水艦",
  shipType: "潜水艦",
  displacement: 2243,
  length: 97.7,
  speed: 18.0,
  mainArmament: "53cm魚雷發射管 六門",
  secondaryArmament: "14cm砲 一門、水上偵察機一機",
  builder: "川崎造船所（神戸）",
  commissioned: "1932年七月",
  status: "現役",
  _comment: "巡潜二型。伊六ノ準同型艦。水上偵察機搭載。",
});

export const I_8: Warship = Object.freeze({
  id: "i-8",
  name: "伊八",
  nameReading: "イハチ",
  shipClass: "伊七型（巡潜三型）潜水艦 二番艦",
  shipType: "潜水艦",
  displacement: 2525,
  length: 109.3,
  speed: 23.0,
  mainArmament: "53cm魚雷發射管 六門",
  secondaryArmament: "14cm砲 一門、水上偵察機一機",
  builder: "川崎重工業（神戸）",
  commissioned: "1938年十二月",
  status: "現役",
  _comment: "巡潜三型二番艦。獨逸トノ連絡航海ニ從事セルト云フ風聞アリ。",
});

export const I_9: Warship = Object.freeze({
  id: "i-9",
  name: "伊九",
  nameReading: "イキウ",
  shipClass: "伊九型（甲型）潜水艦 一番艦",
  shipType: "潜水艦",
  displacement: 2434,
  length: 113.7,
  speed: 23.5,
  mainArmament: "53cm魚雷發射管 六門",
  secondaryArmament: "14cm砲 一門、水上偵察機一機",
  builder: "呉海軍工廠",
  commissioned: "1941年二月",
  status: "現役",
  _comment: "甲型潜水艦ノ一番艦。大型水上偵察機ヲ搭載シ長距離偵察ヲ任務トス。",
});

export const I_10: Warship = Object.freeze({
  id: "i-10",
  name: "伊十",
  nameReading: "イジフ",
  shipClass: "伊九型（甲型）潜水艦 二番艦",
  shipType: "潜水艦",
  displacement: 2434,
  length: 113.7,
  speed: 23.5,
  mainArmament: "53cm魚雷發射管 六門",
  secondaryArmament: "14cm砲 一門、水上偵察機一機",
  builder: "川崎重工業（神戸）",
  commissioned: "1941年十月",
  status: "現役",
  _comment: "甲型二番艦。某洋方面ニテ通商破壞作戰ニ從事セルト云フ。",
});

export const I_11: Warship = Object.freeze({
  id: "i-11",
  name: "伊十一",
  nameReading: "イジフイチ",
  shipClass: "伊九型（甲型）潜水艦 三番艦",
  shipType: "潜水艦",
  displacement: 2434,
  length: 113.7,
  speed: 23.5,
  mainArmament: "53cm魚雷發射管 六門",
  secondaryArmament: "14cm砲 一門、水上偵察機一機",
  builder: "川崎重工業（神戸）",
  commissioned: "1941年十二月",
  status: "現役",
  _comment: "甲型三番艦。長距離偵察及ビ通商破壞ニ從事。",
});

export const I_17: Warship = Object.freeze({
  id: "i-17",
  name: "伊十七",
  nameReading: "イジフシチ",
  shipClass: "伊十五型（乙型）潜水艦",
  shipType: "潜水艦",
  displacement: 2198,
  length: 108.7,
  speed: 23.6,
  mainArmament: "53cm魚雷發射管 六門（艦首）",
  secondaryArmament: "14cm砲 一門、水上偵察機一機",
  builder: "横須賀海軍工廠",
  commissioned: "1941年一月",
  status: "現役（潜水戰隊配屬）",
  _comment: "乙型潜水艦。某國本土沿岸ヲ砲撃セルト云フ風聞アリ。",
});

export const I_21: Warship = Object.freeze({
  id: "i-21",
  name: "伊二十一",
  nameReading: "イニジフイチ",
  shipClass: "伊十五型（乙型）潜水艦",
  shipType: "潜水艦",
  displacement: 2198,
  length: 108.7,
  speed: 23.6,
  mainArmament: "53cm魚雷發射管 六門（艦首）",
  secondaryArmament: "14cm砲 一門、水上偵察機一機",
  builder: "川崎重工業（神戸）",
  commissioned: "1941年七月",
  status: "現役（潜水戰隊配屬）",
  _comment: "乙型潜水艦。某國沿岸ニテ哨戒・偵察ニ從事ノ由。",
});

export const I_25: Warship = Object.freeze({
  id: "i-25",
  name: "伊二十五",
  nameReading: "イニジフゴ",
  shipClass: "伊十五型（乙型）潜水艦",
  shipType: "潜水艦",
  displacement: 2198,
  length: 108.7,
  speed: 23.6,
  mainArmament: "53cm魚雷發射管 六門（艦首）",
  secondaryArmament: "14cm砲 一門、水上偵察機一機",
  builder: "三菱重工業神戸造船所",
  commissioned: "1941年十月",
  status: "現役（潜水戰隊配屬）",
  _comment: "乙型潜水艦。搭載水上機ニテ某國本土森林地帯ヲ焼夷攻撃セルト云フ唯一無二ノ戰績ガアル由。",
});

export const I_26: Warship = Object.freeze({
  id: "i-26",
  name: "伊二十六",
  nameReading: "イニジフロク",
  shipClass: "伊十五型（乙型）潜水艦",
  shipType: "潜水艦",
  displacement: 2198,
  length: 108.7,
  speed: 23.6,
  mainArmament: "53cm魚雷發射管 六門（艦首）",
  secondaryArmament: "14cm砲 一門、水上偵察機一機",
  builder: "呉海軍工廠",
  commissioned: "1941年十一月",
  status: "現役（潜水戰隊配屬）",
  _comment: "乙型潜水艦。某國空母ヲ雷撃セルト云フ戰果ガアル由。",
});

export const I_27: Warship = Object.freeze({
  id: "i-27",
  name: "伊二十七",
  nameReading: "イニジフシチ",
  shipClass: "伊二十七型（丙型改）潜水艦",
  shipType: "潜水艦",
  displacement: 2212,
  length: 108.7,
  speed: 23.6,
  mainArmament: "53cm魚雷發射管 八門",
  secondaryArmament: "14cm砲 一門",
  builder: "佐世保海軍工廠",
  commissioned: "1942年二月",
  status: "現役（潜水戰隊配屬）",
  _comment: "丙型改潜水艦。某洋方面ニテ通商破壞ニ從事ス。",
});

export const I_36: Warship = Object.freeze({
  id: "i-36",
  name: "伊三十六",
  nameReading: "イサンジフロク",
  shipClass: "伊十五型（乙型改）潜水艦",
  shipType: "潜水艦",
  displacement: 2198,
  length: 108.7,
  speed: 17.7,
  mainArmament: "53cm魚雷發射管 六門（艦首）",
  secondaryArmament: "14cm砲 一門、特殊兵器搭載可能",
  builder: "横須賀海軍工廠",
  commissioned: "1942年九月",
  status: "現役",
  _comment: "乙型改潜水艦。特殊兵器運用能力ヲ附與サレタル改良型。",
});

export const I_37: Warship = Object.freeze({
  id: "i-37",
  name: "伊三十七",
  nameReading: "イサンジフシチ",
  shipClass: "伊十五型（乙型改）潜水艦",
  shipType: "潜水艦",
  displacement: 2198,
  length: 108.7,
  speed: 17.7,
  mainArmament: "53cm魚雷發射管 六門（艦首）",
  secondaryArmament: "14cm砲 一門、特殊兵器搭載可能",
  builder: "呉海軍工廠",
  commissioned: "1943年三月",
  status: "現役",
  _comment: "乙型改潜水艦。特殊兵器ノ運搬・發進ヲ任務トス。",
});

export const I_41: Warship = Object.freeze({
  id: "i-41",
  name: "伊四十一",
  nameReading: "イヨンジフイチ",
  shipClass: "伊四十型（乙型改二）潜水艦",
  shipType: "潜水艦",
  displacement: 2212,
  length: 108.7,
  speed: 17.7,
  mainArmament: "53cm魚雷發射管 六門（艦首）",
  secondaryArmament: "14cm砲 一門、特殊兵器搭載可能",
  builder: "呉海軍工廠",
  commissioned: "1943年九月",
  status: "現役",
  _comment: "乙型改二潜水艦。特殊兵器運用ヲ主任務トス。",
});

export const I_56: Warship = Object.freeze({
  id: "i-56",
  name: "伊五十六",
  nameReading: "イゴジフロク",
  shipClass: "伊五十四型（乙型改二）潜水艦",
  shipType: "潜水艦",
  displacement: 2140,
  length: 108.7,
  speed: 17.7,
  mainArmament: "53cm魚雷發射管 六門（艦首）",
  secondaryArmament: "14cm砲 一門、特殊兵器搭載可能",
  builder: "呉海軍工廠",
  commissioned: "1944年六月",
  status: "建造中",
  _comment: "乙型改二潜水艦。伊五十八ト同型。特殊兵器運用能力ヲ有ス。",
});

export const I_13: Warship = Object.freeze({
  id: "i-13",
  name: "伊十三",
  nameReading: "イジフサン",
  shipClass: "伊十三型（甲型改二）潜水艦",
  shipType: "潜水艦",
  displacement: 3603,
  length: 113.7,
  speed: 16.7,
  mainArmament: "53cm魚雷發射管 六門",
  secondaryArmament: "14cm砲 一門、水上攻撃機「晴嵐」二機",
  builder: "川崎重工業（神戸）",
  commissioned: "1944年十二月",
  status: "建造中（航空機搭載大型潜水艦）",
  _comment: "甲型改二潜水艦。晴嵐二機ヲ搭載スル航空潜水艦。伊四百型ノ準同格艦。",
});

export const I_14: Warship = Object.freeze({
  id: "i-14",
  name: "伊十四",
  nameReading: "イジフヨン",
  shipClass: "伊十三型（甲型改二）潜水艦 二番艦",
  shipType: "潜水艦",
  displacement: 3603,
  length: 113.7,
  speed: 16.7,
  mainArmament: "53cm魚雷發射管 六門",
  secondaryArmament: "14cm砲 一門、水上攻撃機「晴嵐」二機",
  builder: "川崎重工業（神戸）",
  commissioned: "1945年三月",
  status: "建造中（航空機搭載大型潜水艦）",
  _comment: "甲型改二二番艦。伊十三ト共ニ水上攻撃機運用ヲ任務トス。",
});

export const I_401: Warship = Object.freeze({
  id: "i-401",
  name: "伊四百一",
  nameReading: "イヨンヒヤクイチ",
  shipClass: "伊四百型潜水艦 二番艦",
  shipType: "潜水艦",
  displacement: 6500,
  length: 122.0,
  speed: 18.7,
  mainArmament: "水上攻撃機「晴嵐」三機搭載",
  secondaryArmament: "14cm砲 一門、53cm魚雷發射管 八門",
  builder: "佐世保海軍工廠",
  commissioned: "【極秘・建造中】1945年就役豫定",
  status: "極秘建造中（伊四百型二番艦）",
  _comment: "伊四百型二番艦。伊四百ト共ニ潜水空母部隊ヲ編成スル計畫ノ由。",
});

export const I_202: Warship = Object.freeze({
  id: "i-202",
  name: "伊二百二",
  nameReading: "イニヒヤクニ",
  shipClass: "伊二百一型（潜高型）潜水艦 二番艦",
  shipType: "潜水艦",
  displacement: 1291,
  length: 79.0,
  speed: 19.0,
  mainArmament: "53cm魚雷發射管 四門",
  secondaryArmament: "（砲裝ナシ。水中高速ヲ重視）",
  builder: "呉海軍工廠",
  commissioned: "【極秘・計畫中】1945年以降就役豫定",
  status: "極秘計畫中（水中高速潜水艦二番艦）",
  _comment: "潜高型二番艦。伊二百一ト共ニ水中高速ニヨル新戰術ヲ企圖ス。",
});

export const I_203: Warship = Object.freeze({
  id: "i-203",
  name: "伊二百三",
  nameReading: "イニヒヤクサン",
  shipClass: "伊二百一型（潜高型）潜水艦 三番艦",
  shipType: "潜水艦",
  displacement: 1291,
  length: 79.0,
  speed: 19.0,
  mainArmament: "53cm魚雷發射管 四門",
  secondaryArmament: "（砲裝ナシ。水中高速ヲ重視）",
  builder: "川崎重工業（神戸）",
  commissioned: "【極秘・計畫中】1945年以降就役豫定",
  status: "極秘計畫中（水中高速潜水艦三番艦）",
  _comment: "潜高型三番艦。量產ヲ企圖スルモ戰局ノ推移ニヨリ計畫通リノ建造ハ困難ノ由。",
});

// 海大型

export const I_153: Warship = Object.freeze({
  id: "i-153",
  name: "伊百五十三",
  nameReading: "イヒヤクゴジフサン",
  shipClass: "海大III型a潜水艦",
  shipType: "潜水艦",
  displacement: 1635,
  length: 100.6,
  speed: 20.0,
  mainArmament: "53cm魚雷發射管 六門",
  secondaryArmament: "12cm砲 一門",
  builder: "川崎造船所（神戸）",
  commissioned: "1930年十二月",
  status: "現役",
  _comment: "海大III型。艦隊隨伴型潜水艦トシテ高速水上速力ヲ發揮ス。",
});

export const I_168: Warship = Object.freeze({
  id: "i-168",
  name: "伊百六十八",
  nameReading: "イヒヤクロクジフハチ",
  shipClass: "海大VI型a潜水艦",
  shipType: "潜水艦",
  displacement: 1400,
  length: 104.7,
  speed: 20.5,
  mainArmament: "53cm魚雷發射管 六門",
  secondaryArmament: "10cm砲 一門",
  builder: "呉海軍工廠",
  commissioned: "1934年七月",
  status: "現役",
  _comment: "海大VI型。此ノ艦ガ中部太平洋某方面海戰ニテ敵空母ヲ撃沈セルトノ風聞アリ。",
});

export const I_174: Warship = Object.freeze({
  id: "i-174",
  name: "伊百七十四",
  nameReading: "イヒヤクシチジフヨン",
  shipClass: "海大VI型b潜水艦",
  shipType: "潜水艦",
  displacement: 1400,
  length: 104.7,
  speed: 20.5,
  mainArmament: "53cm魚雷發射管 六門",
  secondaryArmament: "12.7cm砲 一門",
  builder: "三菱重工業神戸造船所",
  commissioned: "1938年一月",
  status: "現役",
  _comment: "海大VI型b。各方面ノ哨戒・通商破壞ニ從事ス。",
});

export const I_176: Warship = Object.freeze({
  id: "i-176",
  name: "伊百七十六",
  nameReading: "イヒヤクシチジフロク",
  shipClass: "海大VII型潜水艦",
  shipType: "潜水艦",
  displacement: 1630,
  length: 105.5,
  speed: 23.1,
  mainArmament: "53cm魚雷發射管 六門",
  secondaryArmament: "12cm砲 一門",
  builder: "呉海軍工廠",
  commissioned: "1941年八月",
  status: "現役",
  _comment: "海大VII型。帝國海軍最後ノ艦隊隨伴型潜水艦。23節ノ高速ハ水上艦隊ニ隨伴スル設計思想ニ基ヅク。",
});

// 呂號追加

export const RO_33: Warship = Object.freeze({
  id: "ro-33",
  name: "呂三十三",
  nameReading: "ロサンジフサン",
  shipClass: "呂三十三型（中型）潜水艦",
  shipType: "潜水艦",
  displacement: 960,
  length: 75.0,
  speed: 19.0,
  mainArmament: "53cm魚雷發射管 四門",
  secondaryArmament: "8cm砲 一門",
  builder: "三菱重工業神戸造船所",
  commissioned: "1937年四月",
  status: "現役",
  _comment: "中型潜水艦。近海防禦及ビ哨戒ヲ任務トス。",
});

export const RO_34: Warship = Object.freeze({
  id: "ro-34",
  name: "呂三十四",
  nameReading: "ロサンジフヨン",
  shipClass: "呂三十三型（中型）潜水艦 二番艦",
  shipType: "潜水艦",
  displacement: 960,
  length: 75.0,
  speed: 19.0,
  mainArmament: "53cm魚雷發射管 四門",
  secondaryArmament: "8cm砲 一門",
  builder: "三菱重工業神戸造船所",
  commissioned: "1937年十月",
  status: "現役",
  _comment: "中型潜水艦二番艦。哨戒任務ニ從事。",
});

export const RO_35: Warship = Object.freeze({
  id: "ro-35",
  name: "呂三十五",
  nameReading: "ロサンジフゴ",
  shipClass: "呂三十五型（海中VI型）潜水艦",
  shipType: "潜水艦",
  displacement: 965,
  length: 73.0,
  speed: 19.7,
  mainArmament: "53cm魚雷發射管 四門",
  secondaryArmament: "12.7cm砲 一門",
  builder: "三菱重工業神戸造船所",
  commissioned: "1937年十二月",
  status: "現役",
  _comment: "海中VI型ノ發展型。沿岸哨戒及ビ輸送船攻撃ニ從事。",
});

export const RO_101: Warship = Object.freeze({
  id: "ro-101",
  name: "呂百一",
  nameReading: "ロヒヤクイチ",
  shipClass: "呂百型（小型）潜水艦 二番艦",
  shipType: "潜水艦",
  displacement: 601,
  length: 60.9,
  speed: 14.2,
  mainArmament: "53cm魚雷發射管 四門",
  secondaryArmament: "（砲裝ナシ）",
  builder: "川崎重工業（神戸）",
  commissioned: "【建造中】1942年就役豫定",
  status: "建造中（沿岸防禦用小型潜水艦）",
  _comment: "呂百型二番艦。量產ニヨル近海防禦ヲ企圖ス。",
});

// 波號（小型）

export const HA_101: Warship = Object.freeze({
  id: "ha-101",
  name: "波百一",
  nameReading: "ハヒヤクイチ",
  shipClass: "波百一型（潜輸小型）潜水艦",
  shipType: "潜水艦",
  displacement: 370,
  length: 44.5,
  speed: 10.0,
  mainArmament: "（武裝ナシ。輸送專用）",
  secondaryArmament: "（砲裝ナシ）",
  builder: "呉海軍工廠",
  commissioned: "1945年一月",
  status: "計畫中（輸送專用小型潜水艦）",
  _comment: "補給路斷絶下ノ島嶼ヘノ物資輸送ヲ目的トシタ小型潜水艦。武裝ヲ犧牲ニシ輸送力ヲ優先。",
});

export const HA_201: Warship = Object.freeze({
  id: "ha-201",
  name: "波二百一",
  nameReading: "ハニヒヤクイチ",
  shipClass: "波二百一型（潜高小型）潜水艦",
  shipType: "潜水艦",
  displacement: 320,
  length: 53.0,
  speed: 13.0,
  mainArmament: "53cm魚雷發射管 二門",
  secondaryArmament: "（砲裝ナシ）",
  builder: "佐世保海軍工廠",
  commissioned: "1945年五月",
  status: "計畫中（本土決戰用水中高速小型潜水艦）",
  _comment: "本土決戰用ノ量產小型潜水艦。水中速力13節ヲ目指ス。大量建造計畫アルモ實現困難ノ由。",
});

// 甲標的

export const KOURYU: Warship = Object.freeze({
  id: "kouryu",
  name: "蛟龍（甲標的丁型）",
  nameReading: "カウリウ",
  shipClass: "甲標的丁型（蛟龍）",
  shipType: "潜水艦",
  displacement: 60,
  length: 26.3,
  speed: 16.0,
  mainArmament: "45cm魚雷發射管 二門",
  secondaryArmament: "（砲裝ナシ）",
  builder: "各海軍工廠",
  commissioned: "1945年以降",
  status: "計畫中（本土決戰用特殊潜航艇。量產計畫アリ）",
  _comment: "五人乗リノ特殊潜航艇。甲標的ヲ發展セシメタ本土決戰用兵器。大量配備ガ計畫サレテ居ル由。",
});

export const KAIRYU: Warship = Object.freeze({
  id: "kairyu",
  name: "海龍",
  nameReading: "カイリウ",
  shipClass: "海龍型特殊潜航艇",
  shipType: "潜水艦",
  displacement: 19.3,
  length: 17.3,
  speed: 7.5,
  mainArmament: "45cm魚雷 二本（又ハ爆藥頭）",
  secondaryArmament: "（砲裝ナシ）",
  builder: "各工廠",
  commissioned: "1945年",
  status: "計畫中（本土決戰用小型特殊潜航艇）",
  _comment: "二人乗リノ極小型特殊潜航艇。本土決戰ニ備フル水中防禦兵器。",
});

// 潜航輸送艇

export const MARUYU: Warship = Object.freeze({
  id: "maruyu",
  name: "まるゆ（三式潜航輸送艇）",
  nameReading: "マルユ",
  shipClass: "三式潜航輸送艇",
  shipType: "潜水艦",
  displacement: 370,
  length: 49.0,
  speed: 12.7,
  mainArmament: "（武裝ナシ。輸送專用）",
  secondaryArmament: "（武裝ナシ）",
  builder: "各造船所",
  commissioned: "【極秘】1944年頃（推定）",
  status: "【極秘】建造中。陸軍ト共同ノ輸送作戰ニ使用ノ噂",
  _comment: "潜航シテ物資ヲ輸送スル爲ノ特殊艇。武裝ヲ一切有セズ。制海權喪失下ニ於ケル補給路維持ノ苦肉ノ策。陸軍主導ノ計畫トモ云ハルルガ、海軍モ運用ニ關與スル模樣。搭乘員ノ労苦ハ筆舌ニ盡シ難シ。",
});

// ============================================================
//  未確認艦艇（戰時情報部蒐集資料）
//
//  以下ノ艦艇ハ、建造計畫ノ傳聞・圖面ノ斷片・
//  風聞等ヨリ其ノ存在ガ推測サルルモ、
//  軍令部トシテハ公式ニ確認シ得ズ。
//  參考資料トシテ附記ス。信憑性ハ甲乙丙丁ニテ評價ス。
// ============================================================

export const SUPER_YAMATO: Warship = Object.freeze({
  id: "super-yamato",
  name: "超大和型戰艦（七九七號艦）",
  nameReading: "テウヤマトガタセンカン",
  shipClass: "超大和型戰艦（假稱）",
  shipType: "戰艦",
  displacement: 70000,
  length: 280.0,
  speed: 27.0,
  mainArmament: "51cm砲 連裝3基6門（推定）",
  secondaryArmament: "不明",
  builder: "不明（計畫ノミ）",
  commissioned: "【未確認】計畫ノミ。起工ノ形跡無シ",
  status: "【未確認】計畫段階。七九七號艦トノ呼稱アリ",
  _comment: "大和型ヲ凌駕スル次期主力戰艦トシテ構想サレタトスル超弩級戰艦。五十一糎砲搭載ノ噂ガ在ルモ、大和型ノ戰訓ヲ踏マヘタ設計ニナルカ否カスラ不明。帝國海軍大艦巨砲主義ノ究極ノ夢。信憑性: 丙",
});

export const DESIGN_B65: Warship = Object.freeze({
  id: "design-b65",
  name: "B65型超甲型巡洋艦",
  nameReading: "ビーロクゴガタチヤウカフガタジュンヨウカン",
  shipClass: "B65型（超甲型巡洋艦）",
  shipType: "巡洋戰艦",
  displacement: 31905,
  length: 241.0,
  speed: 33.0,
  mainArmament: "31cm砲 三連裝3基9門（推定）",
  secondaryArmament: "10cm高角砲 連裝8基16門（推定）",
  builder: "不明（計畫ノミ）",
  commissioned: "【未確認】計畫ノミ",
  status: "【未確認】計畫圖面ノ斷片ノミ存在",
  _comment: "米國アラスカ級大型巡洋艦ニ對抗スベク構想サレタトサルル超大型巡洋艦。三十一糎砲九門ノ強力ナル火力ヲ有シ、三十三節ノ高速ヲ發揮スルト推定サル。「超甲巡」ノ通稱アリ。信憑性: 乙",
});

export const IBUKI: Warship = Object.freeze({
  id: "ibuki",
  name: "伊吹",
  nameReading: "イブキ",
  shipClass: "伊吹型航空母艦（鈴谷型重巡洋艦改裝）",
  shipType: "航空母艦",
  displacement: 12500,
  length: 200.6,
  speed: 29.0,
  mainArmament: "艦載機 27機（推定）",
  secondaryArmament: "12.7cm高角砲 連裝4基8門（推定）",
  builder: "呉海軍工廠",
  commissioned: "【未確認】航空母艦ヘノ改裝中ノ風聞",
  status: "【未確認】鈴谷型重巡洋艦トシテ建造開始後、途中ヨリ空母改裝ノ由",
  _comment: "鈴谷型重巡洋艦ノ三番艦トシテ起工サレタルモ、戰局ノ推移ニ伴ヒ航空母艦ヘノ改裝ガ決定サレタトノ風聞。完成セバ中型空母トナルガ、工事ノ進捗ハ不明。信憑性: 乙",
});

export const I_400_KAI: Warship = Object.freeze({
  id: "i-400-kai",
  name: "伊四百型改（伊四〇四計畫）",
  nameReading: "イヨンヒャクガタカイ",
  shipClass: "伊四百型潜水艦改良型",
  shipType: "潜水艦",
  displacement: 6500,
  length: 122.0,
  speed: 18.7,
  mainArmament: "晴嵐 三機（格納可能。推定）",
  secondaryArmament: "53cm魚雷發射管 八門（推定）",
  builder: "不明",
  commissioned: "【未確認】計畫ノミ",
  status: "【未確認】伊四百型ノ發展型ノ構想アリ",
  _comment: "世界最大ノ潜水空母タル伊四百型ヲ更ニ改良セントスル構想。搭載機數ノ增加及ビ水中性能ノ向上ガ企圖サレタト推定サルルモ、計畫ノ實在スラ確認シ得ズ。信憑性: 丁",
});

export const YAMATO_KAI: Warship = Object.freeze({
  id: "yamato-kai",
  name: "大和（改裝計畫）",
  nameReading: "ヤマトカイサウケイクヮク",
  shipClass: "大和型戰艦 改裝型",
  shipType: "戰艦",
  displacement: 65000,
  length: 263.0,
  speed: 27.0,
  mainArmament: "46cm砲 三連裝3基9門",
  secondaryArmament: "對空兵裝大幅增強（推定）",
  builder: "呉海軍工廠（改裝）",
  commissioned: "【未確認】改裝計畫ノ噂",
  status: "【未確認】副砲撤去・對空兵裝强化ノ改裝構想",
  _comment: "大和型ノ副砲撤去及ビ對空兵裝ノ大幅增強ヲ柱トスル改裝計畫ノ噂アリ。十五糎五副砲ヲ全撤去シ、九八式十糎高角砲ニ換裝スル計畫トモ云ハル。航空戰力ノ脅威增大ニ對應セントスルモノナラン。信憑性: 乙",
});

// ============================================================
//  水雷艇・砲艦・その他（特務艦艇）
// ============================================================

export const CHIDORI: Warship = Object.freeze({
  id: "chidori",
  name: "千鳥",
  nameReading: "チドリ",
  shipClass: "千鳥型水雷艇 一番艦",
  shipType: "水雷艇",
  displacement: 535,
  length: 82.0,
  speed: 28.0,
  mainArmament: "12.7cm砲 連裝1基2門及ビ單裝1基1門",
  secondaryArmament: "53cm魚雷發射管 連裝2基4門",
  builder: "舞鶴海軍工廠",
  commissioned: "1933年十一月",
  status: "現役",
  _comment: "軍縮條約ノ制限外ヲ狙ヒタル小型水雷艇。復原性問題ニテ大幅改裝ヲ餘儀ナクサル。友鶴事件ノ契機。",
});

export const OTORI: Warship = Object.freeze({
  id: "otori",
  name: "鴻",
  nameReading: "オホトリ",
  shipClass: "鴻型水雷艇 一番艦",
  shipType: "水雷艇",
  displacement: 840,
  length: 88.5,
  speed: 30.5,
  mainArmament: "12cm砲 單裝3基3門",
  secondaryArmament: "53cm魚雷發射管 三連裝1基3門",
  builder: "舞鶴海軍工廠",
  commissioned: "1937年十月",
  status: "現役",
  _comment: "千鳥型ノ教訓ヲ踏マヘ設計サレタル水雷艇。安定性ヲ重視セリ。",
});

export const HASHIDATE_GUNBOAT: Warship = Object.freeze({
  id: "hashidate-gunboat",
  name: "橋立（砲艦）",
  nameReading: "ハシダテ",
  shipClass: "橋立型砲艦",
  shipType: "砲艦",
  displacement: 999,
  length: 77.7,
  speed: 17.0,
  mainArmament: "14cm砲 單裝2基2門",
  secondaryArmament: "8cm砲 2門",
  builder: "佐世保海軍工廠",
  commissioned: "1940年六月",
  status: "支那方面艦隊配屬",
  _comment: "河川・沿岸作戰用砲艦。大陸方面ノ警備ニ從事ス。初代橋立トハ別艦。",
});

export const AKITSUSHIMA_AV: Warship = Object.freeze({
  id: "akitsushima-av",
  name: "秋津洲（水上機母艦）",
  nameReading: "アキツシマ",
  shipClass: "秋津洲型水上機母艦",
  shipType: "水上機母艦",
  displacement: 4650,
  length: 114.8,
  speed: 19.0,
  mainArmament: "大型飛行艇（二式大艇）一機搭載",
  secondaryArmament: "12.7cm高角砲 連裝2基4門",
  builder: "川崎重工業（神戸）",
  commissioned: "1942年四月",
  status: "建造中",
  _comment: "大型飛行艇ヲ洋上ニテ運用スル爲ノ特殊母艦。機動的偵察力ノ確保ヲ企圖ス。",
});

// ============================================================
//  水上機母艦（Seaplane Tender）
// ============================================================

export const CHITOSE_AV: Warship = Object.freeze({
  id: "chitose-av",
  name: "千歲（水上機母艦）",
  nameReading: "チトセ",
  shipClass: "千歲型水上機母艦",
  shipType: "水上機母艦",
  displacement: 11190,
  length: 192.5,
  speed: 29.0,
  mainArmament: "水上機 24機",
  secondaryArmament: "12.7cm高角砲 連裝4基8門",
  builder: "呉海軍工廠",
  commissioned: "1938年七月",
  status: "航空母艦ニ改裝",
  _comment: "水上機母艦トシテ竣工。甲標的母艦トシテモ運用サル。後ニ輕空母ニ改裝。",
});

export const MIZUHO: Warship = Object.freeze({
  id: "mizuho",
  name: "瑞穗",
  nameReading: "ミヅホ",
  shipClass: "瑞穗型水上機母艦",
  shipType: "水上機母艦",
  displacement: 10930,
  length: 192.5,
  speed: 22.0,
  mainArmament: "水上機 24機",
  secondaryArmament: "12.7cm高角砲 連裝4基8門",
  builder: "川崎重工業（神戸）",
  commissioned: "1939年二月",
  status: "戰沒（1942年五月、某方面ニテ被雷沈沒）",
  _comment: "甲標的母艦トシテモ運用可能ナル水上機母艦。南方作戰ニ參加セルモ早期ニ失ハル。",
});

export const NISSHIN_AV: Warship = Object.freeze({
  id: "nisshin-av",
  name: "日進（水上機母艦）",
  nameReading: "ニッシン",
  shipClass: "日進型水上機母艦",
  shipType: "水上機母艦",
  displacement: 11317,
  length: 192.5,
  speed: 28.0,
  mainArmament: "水上機 20機、甲標的 12隻",
  secondaryArmament: "12.7cm高角砲 連裝3基6門",
  builder: "呉海軍工廠",
  commissioned: "1942年二月",
  status: "戰沒（1943年七月、某海域ニテ空襲沈沒）",
  _comment: "甲標的母艦機能ヲ強化セル水上機母艦。某群島方面作戰ニ從事中ニ失ハル。",
});

// ============================================================
//  潜水母艦（Submarine Tender）
// ============================================================

export const JINGEI: Warship = Object.freeze({
  id: "jingei",
  name: "迅鯨",
  nameReading: "ジンゲイ",
  shipClass: "迅鯨型潜水母艦",
  shipType: "潜水母艦",
  displacement: 5160,
  length: 132.6,
  speed: 18.0,
  mainArmament: "14cm砲 單裝4基4門",
  secondaryArmament: "潜水艦補給・修理設備",
  builder: "横須賀海軍工廠",
  commissioned: "1923年八月",
  status: "戰沒（1944年十月、某海域ニテ被雷沈沒）",
  _comment: "帝國海軍初ノ專用潜水母艦。潜水艦部隊ノ洋上補給及ビ修理ヲ擔當ス。",
});

export const CHOGEI: Warship = Object.freeze({
  id: "chogei",
  name: "長鯨",
  nameReading: "チヤウゲイ",
  shipClass: "迅鯨型潜水母艦",
  shipType: "潜水母艦",
  displacement: 5160,
  length: 132.6,
  speed: 18.0,
  mainArmament: "14cm砲 單裝4基4門",
  secondaryArmament: "潜水艦補給・修理設備",
  builder: "横須賀海軍工廠",
  commissioned: "1924年三月",
  status: "除籍",
  _comment: "迅鯨ノ姉妹艦。潜水艦部隊ノ母艦トシテ運用サレタリ。",
});

export const TAIGEI: Warship = Object.freeze({
  id: "taigei",
  name: "大鯨",
  nameReading: "タイゲイ",
  shipClass: "大鯨型潜水母艦",
  shipType: "潜水母艦",
  displacement: 10000,
  length: 196.0,
  speed: 20.0,
  mainArmament: "12.7cm高角砲 連裝2基4門",
  secondaryArmament: "潜水艦補給・修理設備",
  builder: "横須賀海軍工廠",
  commissioned: "1934年三月",
  status: "航空母艦「龍鳳」ニ改裝",
  _comment: "有事ノ際ハ航空母艦ニ改裝スル設計。龍鳳トシテ航空母艦任務ニ就ク。",
});

// ============================================================
//  海防艦（Escort Ship / Coast Defense Ship）
// ============================================================

export const SHIMUSHU: Warship = Object.freeze({
  id: "shimushu",
  name: "占守",
  nameReading: "シムシュ",
  shipClass: "占守型海防艦",
  shipType: "海防艦",
  displacement: 860,
  length: 77.7,
  speed: 19.7,
  mainArmament: "12cm砲 單裝3基3門",
  secondaryArmament: "爆雷36個",
  builder: "三井造船（玉野）",
  commissioned: "1940年六月",
  status: "現役",
  _comment: "帝國海軍初ノ量產型海防艦。北方警備及ビ船團護衛ヲ主任務トス。",
});

export const ETOROFU: Warship = Object.freeze({
  id: "etorofu",
  name: "擇捉",
  nameReading: "エトロフ",
  shipClass: "擇捉型海防艦",
  shipType: "海防艦",
  displacement: 870,
  length: 77.7,
  speed: 19.7,
  mainArmament: "12cm砲 單裝3基3門",
  secondaryArmament: "爆雷36個",
  builder: "日立造船（因島）",
  commissioned: "1943年二月",
  status: "現役",
  _comment: "占守型ノ改良型。機關配置ヲ改メ生產性ヲ向上セシメタリ。",
});

export const MIKURA: Warship = Object.freeze({
  id: "mikura",
  name: "御藏",
  nameReading: "ミクラ",
  shipClass: "御藏型海防艦",
  shipType: "海防艦",
  displacement: 940,
  length: 78.8,
  speed: 19.5,
  mainArmament: "12cm砲 單裝3基3門",
  secondaryArmament: "爆雷120個、三式探信儀",
  builder: "三井造船（玉野）",
  commissioned: "1943年十月",
  status: "現役",
  _comment: "對潜性能ヲ強化セル海防艦。爆雷搭載數ヲ大幅ニ增加シ船團護衛ニ專念ス。",
});

export const UKURU: Warship = Object.freeze({
  id: "ukuru",
  name: "鵜來",
  nameReading: "ウクル",
  shipClass: "鵜來型海防艦",
  shipType: "海防艦",
  displacement: 940,
  length: 78.8,
  speed: 19.5,
  mainArmament: "12cm砲 單裝2基2門",
  secondaryArmament: "爆雷120個、三式探信儀",
  builder: "各造船所",
  commissioned: "1944年一月",
  status: "現役（量產中）",
  _comment: "御藏型ノ簡易化型。量產ヲ重視シ設計ヲ簡略化セリ。",
});

export const TYPE_A_KAIBOKAN: Warship = Object.freeze({
  id: "type-a-kaibokan",
  name: "第一號海防艦",
  nameReading: "ダイイチゴウカイバウカン",
  shipClass: "丁型（第一號型）海防艦",
  shipType: "海防艦",
  displacement: 745,
  length: 69.5,
  speed: 17.5,
  mainArmament: "12cm高角砲 單裝2基2門",
  secondaryArmament: "爆雷120個、三式探信儀",
  builder: "各造船所",
  commissioned: "1944年四月",
  status: "現役（大量生產中）",
  _comment: "戰時量產型海防艦。徹底的ニ簡易化シ大量建造ヲ以テ船團護衛ノ不足ヲ補ハントス。",
});

export const TYPE_B_KAIBOKAN: Warship = Object.freeze({
  id: "type-b-kaibokan",
  name: "第二號海防艦",
  nameReading: "ダイニゴウカイバウカン",
  shipClass: "丙型（第二號型）海防艦",
  shipType: "海防艦",
  displacement: 745,
  length: 69.5,
  speed: 17.5,
  mainArmament: "12cm高角砲 單裝2基2門",
  secondaryArmament: "爆雷120個",
  builder: "各造船所",
  commissioned: "1944年六月",
  status: "現役（大量生產中）",
  _comment: "丁型ヲ更ニ簡易化セル戰時量產型。船團護衛ノ急務ニ應ズベク大量建造サル。",
});

// ============================================================
//  敷設艦（Minelayer）
// ============================================================

export const ITSUKUSHIMA_ML: Warship = Object.freeze({
  id: "itsukushima-ml",
  name: "嚴島（敷設艦）",
  nameReading: "イツクシマ",
  shipClass: "嚴島型敷設艦",
  shipType: "敷設艦",
  displacement: 1970,
  length: 99.7,
  speed: 17.0,
  mainArmament: "14cm砲 單裝2基2門",
  secondaryArmament: "機雷300個搭載",
  builder: "呉海軍工廠",
  commissioned: "1929年十二月",
  status: "現役",
  _comment: "帝國海軍ノ主要敷設艦。防禦機雷原ノ構築ニ從事ス。",
});

export const OKINOSHIMA: Warship = Object.freeze({
  id: "okinoshima",
  name: "沖島",
  nameReading: "オキノシマ",
  shipClass: "沖島型敷設艦",
  shipType: "敷設艦",
  displacement: 4400,
  length: 118.5,
  speed: 20.0,
  mainArmament: "14cm砲 單裝2基2門",
  secondaryArmament: "機雷500個搭載",
  builder: "呉海軍工廠",
  commissioned: "1936年九月",
  status: "戰沒（1942年五月、某方面ニテ被雷沈沒）",
  _comment: "大型敷設艦。大量ノ機雷ヲ搭載シ廣範圍ノ機雷原ヲ構築スル能力ヲ有ス。",
});

export const TSUGARU_ML: Warship = Object.freeze({
  id: "tsugaru-ml",
  name: "津輕",
  nameReading: "ツガル",
  shipClass: "津輕型敷設艦",
  shipType: "敷設艦",
  displacement: 4400,
  length: 118.5,
  speed: 20.0,
  mainArmament: "14cm砲 單裝2基2門",
  secondaryArmament: "機雷600個搭載",
  builder: "浦賀船渠",
  commissioned: "1941年十月",
  status: "戰沒（1944年六月、某方面ニテ空襲沈沒）",
  _comment: "沖島型ノ改良型。機雷搭載數ヲ增加シ、敷設能力ヲ強化セリ。",
});

// ============================================================
//  工作艦（Repair Ship）
// ============================================================

export const AKASHI_AR: Warship = Object.freeze({
  id: "akashi-ar",
  name: "明石（工作艦）",
  nameReading: "アカシ",
  shipClass: "明石型工作艦",
  shipType: "工作艦",
  displacement: 9000,
  length: 158.5,
  speed: 19.2,
  mainArmament: "洋上修理設備（工作機械、鍛冶場、電氣溶接設備）",
  secondaryArmament: "12.7cm高角砲 連裝2基4門",
  builder: "佐世保海軍工廠",
  commissioned: "1939年七月",
  status: "戰沒（1944年三月、某方面ニテ空襲沈沒）",
  _comment: "帝國海軍唯一ノ專用工作艦。洋上ニテ艦艇ノ修理ヲ行フ浮キ工廠ニシテ、前線ノ戰力維持ニ不可缺ナリ。",
});

// ============================================================
//  給油艦（Oiler / Fleet Tanker）
// ============================================================

export const HAYASUI: Warship = Object.freeze({
  id: "hayasui",
  name: "速吸",
  nameReading: "ハヤスヒ",
  shipClass: "速吸型給油艦",
  shipType: "給油艦",
  displacement: 18300,
  length: 160.0,
  speed: 16.5,
  mainArmament: "燃料搭載量約10000噸",
  secondaryArmament: "12.7cm高角砲 連裝3基6門、航空機射出機1基",
  builder: "播磨造船所",
  commissioned: "1944年四月",
  status: "戰沒（1944年八月、某方面ニテ被雷沈沒）",
  _comment: "航空機射出機ヲ備ヘ對潜哨戒機ヲ運用可能ナル高速給油艦。艦隊ノ洋上補給ヲ擔當ス。",
});

export const KAZAHAYA: Warship = Object.freeze({
  id: "kazahaya",
  name: "風早",
  nameReading: "カザハヤ",
  shipClass: "風早型給油艦",
  shipType: "給油艦",
  displacement: 18300,
  length: 160.0,
  speed: 16.0,
  mainArmament: "燃料搭載量約10000噸",
  secondaryArmament: "12.7cm高角砲 連裝2基4門",
  builder: "川崎重工業（神戸）",
  commissioned: "1943年九月",
  status: "戰沒（1945年一月、某海域ニテ被雷沈沒）",
  _comment: "艦隊用高速給油艦。機動部隊ノ長距離作戰ヲ支援スベク建造サレタリ。",
});

// ============================================================
//  給糧艦（Provision Ship）
// ============================================================

export const IRAKO: Warship = Object.freeze({
  id: "irako",
  name: "伊良湖",
  nameReading: "イラコ",
  shipClass: "伊良湖型給糧艦",
  shipType: "給糧艦",
  displacement: 9570,
  length: 145.0,
  speed: 17.0,
  mainArmament: "糧食・雜品搭載量約3000噸",
  secondaryArmament: "12.7cm高角砲 連裝1基2門",
  builder: "三菱重工業（横濱）",
  commissioned: "1941年七月",
  status: "戰沒（1944年九月、某海域ニテ空襲沈沒）",
  _comment: "帝國海軍ノ給糧艦。艦隊ニ糧食・雜品ヲ補給スル重要ナル兵站艦ナリ。",
});

export const MAMIYA: Warship = Object.freeze({
  id: "mamiya",
  name: "間宮",
  nameReading: "マミヤ",
  shipClass: "間宮型給糧艦",
  shipType: "給糧艦",
  displacement: 15820,
  length: 146.0,
  speed: 14.0,
  mainArmament: "糧食搭載量約5000噸、艦内製菓・製氷設備",
  secondaryArmament: "12cm高角砲 單裝2基2門",
  builder: "川崎造船所（神戸）",
  commissioned: "1924年七月",
  status: "戰沒（1944年九月、某海域ニテ被雷沈沒）",
  _comment: "帝國海軍最大ノ給糧艦。艦内ニ羊羹・饅頭・ラムネ等ノ製造設備ヲ有シ、將兵ノ士氣維持ニ多大ナル貢獻ヲ爲セリ。「間宮羊羹」ハ將兵ノ垂涎ノ的ナリ。",
});

// ============================================================
//  運送艦（Transport Ship）
// ============================================================

export const SHINSHU_MARU: Warship = Object.freeze({
  id: "shinshu-maru",
  name: "神州丸",
  nameReading: "シンシウマル",
  shipClass: "神州丸型揚陸艦",
  shipType: "運送艦",
  displacement: 8150,
  length: 146.0,
  speed: 19.0,
  mainArmament: "大發動艇 25隻搭載",
  secondaryArmament: "7.5cm高角砲 4門",
  builder: "播磨造船所",
  commissioned: "1935年三月",
  status: "戰沒（1945年一月、某海域ニテ被雷沈沒）",
  _comment: "帝國海軍初ノ上陸作戰用母船。大發動艇ヲ多數搭載シ組織的上陸ヲ可能トセル畫期的艦艇。世界ニ先驅ケタル揚陸艦ノ先驅ナリ。",
});

// ============================================================
//  測量艦（Survey Ship）
// ============================================================

export const TSUKUSHI_SV: Warship = Object.freeze({
  id: "tsukushi-sv",
  name: "筑紫（測量艦）",
  nameReading: "ツクシ",
  shipClass: "筑紫型測量艦",
  shipType: "測量艦",
  displacement: 1500,
  length: 70.5,
  speed: 14.0,
  mainArmament: "水路測量器材一式",
  secondaryArmament: "8cm砲 2門",
  builder: "三菱重工業（横濱）",
  commissioned: "1930年五月",
  status: "現役",
  _comment: "海軍水路部所管ノ測量艦。海圖作製ノ爲ノ水路測量ニ從事ス。航海安全ノ基盤ヲ築ク重要艦ナリ。",
});

// ============================================================
//  練習艦（Training Ship）
// ============================================================

export const KASHIMA_TS: Warship = Object.freeze({
  id: "kashima-ts",
  name: "香取（練習巡洋艦）",
  nameReading: "カトリ",
  shipClass: "香取型練習巡洋艦",
  shipType: "練習巡洋艦",
  displacement: 5890,
  length: 129.7,
  speed: 18.0,
  mainArmament: "14cm砲 單裝2基2門",
  secondaryArmament: "候補生居住區・教育設備",
  builder: "三菱重工業（横濱）",
  commissioned: "1940年四月",
  status: "現役（練習艦トシテ運用）",
  _comment: "海軍兵學校卒業候補生ノ遠洋航海練習ノ爲ニ建造サレタル專用練習艦。",
});

export const KASHII_TS: Warship = Object.freeze({
  id: "kashii-ts",
  name: "鹿島（練習巡洋艦）",
  nameReading: "カシマ",
  shipClass: "香取型練習巡洋艦",
  shipType: "練習巡洋艦",
  displacement: 5890,
  length: 129.7,
  speed: 18.0,
  mainArmament: "14cm砲 單裝2基2門",
  secondaryArmament: "候補生居住區・教育設備",
  builder: "三菱重工業（横濱）",
  commissioned: "1940年五月",
  status: "戰沒（1945年一月、某海域ニテ空襲沈沒）",
  _comment: "香取型二番艦。遠洋航海ヲ通ジ次代ヲ擔フ帝國海軍士官ヲ育成ス。",
});

// ============================================================
//  特設巡洋艦（Armed Merchant Cruiser）
// ============================================================

export const HOKOKU_MARU: Warship = Object.freeze({
  id: "hokoku-maru",
  name: "報國丸",
  nameReading: "ホウコクマル",
  shipClass: "報國丸型特設巡洋艦",
  shipType: "特設巡洋艦",
  displacement: 10438,
  length: 161.1,
  speed: 21.0,
  mainArmament: "15cm砲 8門",
  secondaryArmament: "53cm魚雷發射管 2基",
  builder: "三菱重工業（長崎）",
  commissioned: "1941年（特設巡洋艦ニ徴用）",
  status: "戰沒（1942年十一月、印度洋ニテ戰沒）",
  _comment: "大阪商船ノ優秀貨客船ヲ徴用シ武裝セル特設巡洋艦。印度洋ニ於テ通商破壞戰ニ從事セリ。",
});

export const AIKOKU_MARU: Warship = Object.freeze({
  id: "aikoku-maru",
  name: "愛國丸",
  nameReading: "アイコクマル",
  shipClass: "報國丸型特設巡洋艦",
  shipType: "特設巡洋艦",
  displacement: 10438,
  length: 161.1,
  speed: 21.0,
  mainArmament: "15cm砲 8門",
  secondaryArmament: "53cm魚雷發射管 2基",
  builder: "三菱重工業（長崎）",
  commissioned: "1941年（特設巡洋艦ニ徴用）",
  status: "戰沒（1944年二月、某方面ニテ空襲沈沒）",
  _comment: "報國丸ノ姉妹船。通商破壞戰ニ於テ赫々タル戰果ヲ擧ゲタリ。",
});

// ============================================================
//  標的艦（Target Ship）
// ============================================================

export const SETTSU_TARGET: Warship = Object.freeze({
  id: "settsu-target",
  name: "攝津（標的艦）",
  nameReading: "セッツ",
  shipClass: "河内型戰艦改標的艦",
  shipType: "標的艦",
  displacement: 21443,
  length: 160.6,
  speed: 12.0,
  mainArmament: "無線操縱裝置",
  secondaryArmament: "（兵裝撤去）",
  builder: "呉海軍工廠",
  commissioned: "1911年三月（標的艦轉籍：1925年）",
  status: "現役（標的艦）",
  _comment: "河内型戰艦二番艦。除籍後ニ世界初ノ無線操縱式標的艦ニ改裝。砲撃訓練ノ的トシテ運用サル。",
});

// ============================================================
//  掃海艇（Minesweeper）
// ============================================================

export const W1_SOKAIDO: Warship = Object.freeze({
  id: "w1-sokaido",
  name: "第一號掃海艇",
  nameReading: "ダイイチゴウサウカイテイ",
  shipClass: "第一號型掃海艇",
  shipType: "掃海艇",
  displacement: 630,
  length: 73.2,
  speed: 20.0,
  mainArmament: "8cm高角砲 單裝1基1門",
  secondaryArmament: "掃海具一式、爆雷18個",
  builder: "各造船所",
  commissioned: "1943年八月",
  status: "現役（量產中）",
  _comment: "戰時量產型掃海艇。航路啓開及ビ對潜任務ニ從事ス。",
});

// ============================================================
//  敷設艇（Netlayer / Small Minelayer）
// ============================================================

export const TSUBAME_NL: Warship = Object.freeze({
  id: "tsubame-nl",
  name: "燕",
  nameReading: "ツバメ",
  shipClass: "燕型敷設艇",
  shipType: "敷設艇",
  displacement: 449,
  length: 55.2,
  speed: 19.0,
  mainArmament: "機雷50個搭載",
  secondaryArmament: "8cm砲 1門",
  builder: "石川島造船所",
  commissioned: "1929年八月",
  status: "現役",
  _comment: "港灣防禦用ノ小型敷設艇。機雷及ビ防潜網ノ敷設ヲ擔當ス。",
});

// ============================================================
//  全艦艇集約
// ============================================================

export const ALL_WARSHIPS: Warship[] = [
  // 草創期 輸入艦艇
  FUSO_OLD, KONGO_OLD, HIEI_OLD, TSUKUSHI,
  MATSUSHIMA, ITSUKUSHIMA, HASHIDATE, CHIYODA, AKITSUSHIMA,
  SUMA, AKASHI, NIITAKA, TSUSHIMA,
  // 日清戰爭 鹵獲艦
  CHINYEN, SAIYEN,
  // 日露戰爭 鹵獲艦
  IKI, SUWO, TANGO, SAGAMI, IWAMI,
  // 前弩級戰艦
  MIKASA, SHIKISHIMA, ASAHI, FUJI, YASHIMA, HATSUSE,
  // 裝甲巡洋艦
  IZUMO, YAKUMO, AZUMA, TOKIWA, ASAMA,
  // 防護巡洋艦
  YOSHINO, NANIWA,
  // 弩級戰艦時代
  SATSUMA, AKI, KAWACHI, SETTSU,
  KONGO, HIEI, HARUNA, KIRISHIMA,
  FUSO, YAMASHIRO, ISE, HYUGA,
  // 八八艦隊・條約時代
  NAGATO, MUTSU, HOSHO, AKAGI, KAGA,
  // 重巡洋艦
  FURUTAKA, KAKO, AOBA, KINUGASA,
  MYOKO, NACHI, ASHIGARA, HAGURO,
  TAKAO, ATAGO, MAYA, CHOKAI,
  MOGAMI, MIKUMA, SUZUYA, KUMANO,
  TONE, CHIKUMA,
  // 輕巡洋艦
  TENRYU, TATSUTA,
  KUMA, TAMA, OI, KITAKAMI, KISO,
  NAGARA, ISUZU, NATORI, YURA, KINU, ABUKUMA,
  SENDAI, JINTU, NAKA,
  YUBARI,
  // 驅逐艦（黎明期〜條約時代）
  IKAZUCHI_OLD, KAMIKAZE_OLD, MINEKAZE, KAMIKAZE, MUTSUKI, KISARAGI, FUMIZUKI, NAGATSUKI,
  FUBUKI, SHIRAYUKI, HATSUYUKI, MURAKUMO, AYANAMI, SHIKINAMI, AKEBONO, IKAZUCHI, INAZUMA,
  HATSUHARU, SHIRATSUYU, SHIGURE, KAWAKAZE, ASASHIO, OSHIO, MICHISHIO, ARASHIO, KASUMI_DD,
  // 航空母艦
  SORYU, HIRYU, SHOKAKU, ZUIKAKU,
  RYUJO, ZUIHO, SHOHO, RYUHO,
  CHITOSE_CV, CHIYODA_CV, HIYO, JUNYO,
  // 時局直前
  YAMATO,
  // 戰時建造・計畫艦（軍機）
  MUSASHI, SHINANO, TAIHO, UNRYU, KATSURAGI,
  SHIMAKAZE, AGANO, OYODO,
  // 驅逐艦（大戰期・戰時建造）
  KAGERO, SHIRANUI, KUROSHIO, OYASHIO, YUKIKAZE, AMATSUKAZE, TOKITSUKAZE,
  URAKAZE, ISOKAZE, HAMAKAZE, TANIKAZE, NOWAKI, ARASHI, HAGIKAZE, MAIKAZE, AKIGUMO,
  YUGUMO, MAKIGUMO, KAZAGUMO, NAGANAMI, MAKINAMI, TAKANAMI, ONAMI, KIYONAMI,
  FUJINAMI, HAYANAMI, ASASHIMO, KIYOSHIMO,
  AKIZUKI, TERUZUKI, HATSUZUKI, SUZUZUKI, FUYUZUKI, HANAZUKI,
  MATSU, TAKE, UME, MOMO, KUWA, TACHIBANA,
  // 潜水艦
  SUBMARINE_NO_1,
  I_1, I_2, I_3, I_4, I_5, I_6, I_7, I_8, I_9, I_10, I_11,
  I_13, I_14, I_15, I_16, I_17, I_19, I_21, I_25, I_26, I_27,
  I_36, I_37, I_41, I_56, I_58,
  I_153, I_168, I_174, I_176,
  I_400, I_401, I_201, I_202, I_203,
  RO_33, RO_34, RO_35, RO_100, RO_101, RO_500,
  HA_101, HA_201, KOURYU, KAIRYU,
  MARUYU,
  // 未確認艦艇（戰時情報部蒐集資料）
  SUPER_YAMATO, DESIGN_B65, IBUKI, I_400_KAI, YAMATO_KAI,
  // 水雷艇・砲艦・特務艦
  CHIDORI, OTORI, HASHIDATE_GUNBOAT, AKITSUSHIMA_AV,
  // 水上機母艦
  CHITOSE_AV, MIZUHO, NISSHIN_AV,
  // 潜水母艦
  JINGEI, CHOGEI, TAIGEI,
  // 海防艦
  SHIMUSHU, ETOROFU, MIKURA, UKURU, TYPE_A_KAIBOKAN, TYPE_B_KAIBOKAN,
  // 敷設艦・敷設艇
  ITSUKUSHIMA_ML, OKINOSHIMA, TSUGARU_ML, TSUBAME_NL,
  // 工作艦
  AKASHI_AR,
  // 給油艦
  HAYASUI, KAZAHAYA,
  // 給糧艦
  IRAKO, MAMIYA,
  // 運送艦
  SHINSHU_MARU,
  // 測量艦
  TSUKUSHI_SV,
  // 練習巡洋艦
  KASHIMA_TS, KASHII_TS,
  // 特設巡洋艦
  HOKOKU_MARU, AIKOKU_MARU,
  // 標的艦
  SETTSU_TARGET,
  // 掃海艇
  W1_SOKAIDO,
];
