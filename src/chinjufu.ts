/**
 * chinjufu.ts — 帝國海軍 鎭守府要覽
 *
 * 帝國海軍ノ海防ヲ擔フ鎭守府及ビ要港部ノ要目ヲ記錄ス。
 * 内地四鎭守府及ビ外地要港部ヲ網羅シ、1884年ヨリ1916年ニ至ル設置經緯ヲ收ム。
 * 鎭守府ハ艦隊ノ根據地トシテ帝國ノ海域ヲ分掌ス。
 *
 * @since 1905年
 * @author 海軍省軍務局
 */

import { NavalDistrict } from "./types";

export const YOKOSUKA: NavalDistrict = Object.freeze({
  id: "yokosuka",
  name: "横須賀鎭守府",
  nameReading: "ヨコスカチンジュフ",
  location: "神奈川縣横須賀",
  established: "1884年",
  navalDistrict: "第一海軍區",
  jurisdiction: "東京灣及ビ太平洋岸ノ警備",
  arsenal: "横須賀海軍工廠",
  facilities: [
    "横須賀海軍工廠",
    "海軍砲術學校",
    "海軍水雷學校",
    "橫須賀海軍病院",
    "觀音崎砲臺",
  ],
  history:
    "慶應元年（1865年）小栗忠順ノ建議ニヨリ佛蘭西技師ヴェルニーノ指導ノ下ニ製鐵所ヲ建設。明治維新後、帝國海軍ノ最重要根據地トナル。",
  _comment:
    "帝國海軍發祥ノ地。首都東京ノ海防ヲ擔ヒ、最モ重要ナル鎭守府ナリ。",
});

export const KURE: NavalDistrict = Object.freeze({
  id: "kure",
  name: "呉鎭守府",
  nameReading: "クレチンジュフ",
  location: "廣島縣呉",
  established: "1889年",
  navalDistrict: "第二海軍區",
  jurisdiction: "瀬戸内海及ビ西部太平洋岸ノ警備",
  arsenal: "呉海軍工廠",
  facilities: [
    "呉海軍工廠",
    "海軍兵學校（江田島）",
    "海軍機關學校",
    "呉海軍病院",
    "廣海軍工廠",
  ],
  history:
    "1889年ニ鎭守府開廳。呉海軍工廠ハ帝國海軍最大ノ造船施設ニシテ、多數ノ主力艦ヲ建造セリ。",
  _comment:
    "帝國海軍最大ノ工廠ヲ擁ス。瀬戸内海ノ天然ノ良港ヲ利用セル要地。",
});

export const SASEBO: NavalDistrict = Object.freeze({
  id: "sasebo",
  name: "佐世保鎭守府",
  nameReading: "サセボチンジュフ",
  location: "長崎縣佐世保",
  established: "1889年",
  navalDistrict: "第三海軍區",
  jurisdiction: "九州西岸及ビ東支那海方面ノ警備",
  arsenal: "佐世保海軍工廠",
  facilities: [
    "佐世保海軍工廠",
    "佐世保海軍病院",
    "佐世保鎭守府防備隊",
    "相浦水雷團",
  ],
  history:
    "1886年ニ軍港ニ指定。對清・對露作戰ニ於テ前線基地トシテ重要ナル役割ヲ果タセリ。",
  _comment:
    "大陸ニ最モ近キ鎭守府。日清・日露戰爭ニ於テ出撃基地トシテ活躍セリ。",
});

export const MAIZURU: NavalDistrict = Object.freeze({
  id: "maizuru",
  name: "舞鶴鎭守府",
  nameReading: "マイヅルチンジュフ",
  location: "京都府舞鶴",
  established: "1901年",
  navalDistrict: "第四海軍區",
  jurisdiction: "日本海方面ノ警備",
  arsenal: "舞鶴海軍工廠",
  facilities: [
    "舞鶴海軍工廠",
    "舞鶴海軍病院",
    "舞鶴海兵團",
    "舞鶴防備隊",
  ],
  history:
    "1901年ニ鎭守府開廳。日本海方面ノ防備ヲ擔當シ、日露戰爭ニ際シテハ日本海ノ警備ニ努メタリ。",
  _comment:
    "日本海ノ守リ。帝國海軍ノ鎭守府中最モ新シキモノナリ。",
});

export const RYOJUN: NavalDistrict = Object.freeze({
  id: "ryojun",
  name: "旅順口要港部",
  nameReading: "リョジュンコウヨウコウブ",
  location: "遼東半島旅順口",
  established: "1905年",
  navalDistrict: "遼東方面",
  jurisdiction: "渤海及ビ黃海北部ノ警備",
  arsenal: "旅順工作部",
  facilities: ["旅順工作部", "旅順海軍病院", "旅順防備隊"],
  history:
    "日露戰爭ニ於テ旅順攻圍戰ノ末ニ攻略。1905年ヨリ帝國海軍ノ要港部トシテ管轄下ニ置カル。",
  _comment:
    "日露戰爭ノ激戰地。攻略後ハ帝國ノ大陸進出ノ據點トナル。",
});

export const TAKESHIKI: NavalDistrict = Object.freeze({
  id: "takeshiki",
  name: "竹敷要港部",
  nameReading: "タケシキヨウコウブ",
  location: "長崎縣對馬",
  established: "1896年",
  navalDistrict: "對馬方面",
  jurisdiction: "對馬海峽及ビ朝鮮海峽ノ警備",
  arsenal: "竹敷工作部",
  facilities: ["竹敷工作部", "竹敷防備隊", "望樓"],
  history:
    "1896年ニ要港部設置。朝鮮海峽ノ要衝ニ位置シ、日本海海戰ニ於テハ重要ナル役割ヲ果タセリ。",
  _comment:
    "對馬海峽ノ番人。日本海海戰前夜ニハ敵艦隊發見ノ一報ガ此處ヨリ發セラレタリ。",
});

export const OMINATO: NavalDistrict = Object.freeze({
  id: "ominato",
  name: "大湊要港部",
  nameReading: "オホミナトヨウコウブ",
  location: "青森縣大湊",
  established: "1905年",
  navalDistrict: "津輕方面",
  jurisdiction: "津輕海峽及ビ北方海域ノ警備",
  arsenal: "大湊工作部",
  facilities: ["大湊工作部", "大湊防備隊", "大湊海軍病院"],
  history:
    "1896年ニ大湊水雷團トシテ創設。1901年ニ防備隊、1905年ニ要港部ニ昇格。北方海域ノ防備ヲ擔當ス。",
  _comment:
    "帝國海軍北方ノ要衝。津輕海峽ノ封鎖及ビ對露警戒ノ要地タリ。",
});

export const CHINKAI: NavalDistrict = Object.freeze({
  id: "chinkai",
  name: "鎮海要港部",
  nameReading: "チンカイヨウコウブ",
  location: "朝鮮慶尚南道鎮海",
  established: "1916年",
  navalDistrict: "朝鮮方面",
  jurisdiction: "朝鮮海峽及ビ朝鮮半島沿岸ノ警備",
  arsenal: "鎮海工作部",
  facilities: ["鎮海工作部", "鎮海防備隊", "鎮海海軍病院"],
  history:
    "1916年ニ要港部設置。朝鮮半島南岸ノ良港ニ位置シ、大陸方面ヘノ前進基地トシテ整備サル。",
  _comment:
    "朝鮮海峽ノ要衝。日本海及ビ東支那海ノ連絡線ヲ確保スル外地ノ重要根據地。",
});

// ============================================================
//  外地要港部・警備府
// ============================================================

export const MAKO: NavalDistrict = Object.freeze({
  id: "mako",
  name: "馬公要港部",
  nameReading: "マコウヨウコウブ",
  location: "臺灣澎湖島馬公",
  established: "1901年",
  navalDistrict: "臺灣方面",
  jurisdiction: "臺灣海峽及ビ南支那海北部ノ警備",
  arsenal: "馬公工作部",
  facilities: ["馬公工作部", "馬公防備隊", "馬公海軍病院"],
  history:
    "1895年ノ臺灣領有ニ伴ヒ、1901年ニ要港部設置。臺灣海峽ノ要衝ニ位置シ、南方方面ヘノ前進基地トシテ機能ス。",
  _comment:
    "臺灣海峽ノ番人。南方作戰ニ於テハ重要ナル中繼基地タリ。",
});

export const TAKAO_KEIBIFU: NavalDistrict = Object.freeze({
  id: "takao",
  name: "高雄警備府",
  nameReading: "タカヲケイビフ",
  location: "臺灣高雄",
  established: "1941年",
  navalDistrict: "臺灣・南西方面",
  jurisdiction: "臺灣及ビ南西諸島方面ノ警備",
  arsenal: "高雄工作部",
  facilities: [
    "高雄工作部",
    "高雄海軍病院",
    "左營軍港",
    "高雄防備隊",
    "高雄海軍航空隊",
  ],
  history:
    "1941年、馬公要港部ヲ母體トシテ警備府ニ昇格。南方作戰ノ拡大ニ伴ヒ、臺灣方面ノ防備及ビ兵站ヲ統括スル要地トナル。",
  _comment:
    "時局下ニ於テ南方方面ヘノ出撃及ビ補給ノ要衝。馬公ヨリ昇格シ警備府トナレリ。",
});

// ============================================================
//  南洋方面根據地
// ============================================================

export const TRUK: NavalDistrict = Object.freeze({
  id: "truk",
  name: "トラック泊地",
  nameReading: "トラックハクチ",
  location: "南洋群島カロリン諸島トラック環礁",
  established: "1939年",
  navalDistrict: "中部太平洋方面",
  jurisdiction: "中部太平洋方面ノ艦隊前進根據地",
  arsenal: "第四艦隊工作部",
  facilities: [
    "第四艦隊司令部",
    "聯合艦隊前進泊地",
    "水上機基地",
    "燃料貯藏施設",
    "海軍病院",
    "防空砲臺",
  ],
  history:
    "南洋委任統治領ノ中心地。環礁ニ圍マレタル天然ノ良港ニシテ、帝國海軍ハ「太平洋ノ直布羅陀」ト稱セリ。聯合艦隊ノ主力泊地トシテ運用サレタリ。",
  _comment:
    "帝國海軍最大ノ前進根據地。聯合艦隊主力ガ長期間碇泊セリ。某方面作戰ノ策源地ナリ。",
});

export const RABAUL: NavalDistrict = Object.freeze({
  id: "rabaul",
  name: "ラバウル根據地",
  nameReading: "ラバウルコンキョチ",
  location: "南洋ニューブリテン島ラバウル",
  established: "1942年",
  navalDistrict: "南東方面",
  jurisdiction: "南東方面ノ航空・水上部隊前進根據地",
  arsenal: "南東方面工作部",
  facilities: [
    "南東方面艦隊司令部",
    "第十一航空艦隊司令部",
    "飛行場（五箇所）",
    "海軍病院",
    "燃料・彈藥貯藏施設",
    "防空壕陣地",
  ],
  history:
    "1942年一月ニ攻略。南東方面ノ航空・海上作戰ノ中樞根據地トシテ整備サレ、某群島方面作戰ヲ支援セリ。強固ナル防空陣地ヲ構築シ終戰マデ保持ス。",
  _comment:
    "某群島方面消耗戰ノ策源地。航空部隊ノ前進基地トシテ多大ナル犧牲ヲ拂ヒツツ維持サレタリ。",
});

export const PALAU: NavalDistrict = Object.freeze({
  id: "palau",
  name: "パラオ根據地",
  nameReading: "パラオコンキョチ",
  location: "南洋群島カロリン諸島パラオ",
  established: "1939年",
  navalDistrict: "西カロリン方面",
  jurisdiction: "西カロリン方面ノ艦隊根據地",
  arsenal: "パラオ工作部",
  facilities: [
    "第四艦隊分遣隊",
    "飛行場",
    "水上機基地",
    "燃料貯藏施設",
    "海軍病院",
  ],
  history:
    "南洋委任統治領ノ行政中心地。西カロリン方面ノ重要根據地トシテ整備サレ、南方方面ヘノ中繼基地トシテモ機能セリ。",
  _comment:
    "西カロリンノ要衝。南方方面ト中部太平洋ヲ結ブ連絡線上ノ重要拠點ナリ。",
});

export const KWAJALEIN: NavalDistrict = Object.freeze({
  id: "kwajalein",
  name: "クェゼリン根據地",
  nameReading: "クェゼリンコンキョチ",
  location: "南洋群島マーシャル諸島クェゼリン環礁",
  established: "1939年",
  navalDistrict: "マーシャル方面",
  jurisdiction: "マーシャル諸島方面ノ防備",
  arsenal: "クェゼリン工作部",
  facilities: [
    "第六根據地隊",
    "飛行場",
    "水上機基地",
    "防備隊",
  ],
  history:
    "南洋委任統治領マーシャル諸島ノ中心。帝國海軍ノ外郭防衛線ヲ構成スル前進根據地トシテ運用サレタリ。",
  _comment:
    "中部太平洋外郭防衛線ノ一翼。某方面反攻時ニ激戰地トナレリ。",
});

export const SAIPAN_BASE: NavalDistrict = Object.freeze({
  id: "saipan-base",
  name: "サイパン根據地",
  nameReading: "サイパンコンキョチ",
  location: "南洋群島マリアナ諸島サイパン島",
  established: "1939年",
  navalDistrict: "マリアナ方面",
  jurisdiction: "マリアナ諸島方面ノ防備",
  arsenal: "サイパン工作部",
  facilities: [
    "第五根據地隊",
    "飛行場",
    "水上機基地",
    "海軍病院",
    "防備隊",
  ],
  history:
    "南洋委任統治領マリアナ諸島ノ中心地。絶對國防圈ノ要衝トシテ防備強化サルルモ某方面反攻ニ直面セリ。",
  _comment:
    "絶對國防圈ノ要衝。此ノ地ノ喪失ハ帝國本土ヘノ直接脅威ヲ意味セリ。",
});

// ============================================================
//  南方方面根據地
// ============================================================

export const SHONAN_BASE: NavalDistrict = Object.freeze({
  id: "shonan",
  name: "昭南根據地",
  nameReading: "シャウナンコンキョチ",
  location: "昭南特別市（某方面）",
  established: "1942年",
  navalDistrict: "南西方面",
  jurisdiction: "馬來方面及ビ印度洋方面ノ艦隊根據地",
  arsenal: "昭南工作部（セレター軍港）",
  facilities: [
    "第十方面艦隊司令部",
    "セレター軍港",
    "昭南海軍病院",
    "燃料貯藏施設",
    "船舶修理施設",
  ],
  history:
    "1942年二月ニ攻略。英國東洋艦隊ノ根據地タリシ要港ヲ接收シ、帝國海軍南西方面ノ中樞根據地トシテ運用ス。英國ガ數十年ヲカケテ整備セシ大型船渠・港灣施設ハ流石見事ナリ。",
  _comment:
    "某方面作戰ニテ攻略セル英國ノ要港。流石同盟國ノ施設ハ立派ナリ。印度洋方面作戰ノ策源地ナリ。",
});

export const PENANG_BASE: NavalDistrict = Object.freeze({
  id: "penang",
  name: "ペナン根據地",
  nameReading: "ペナンコンキョチ",
  location: "馬來半島ペナン",
  established: "1942年",
  navalDistrict: "馬來方面",
  jurisdiction: "馬來半島西岸及ビ印度洋東部ノ哨戒",
  arsenal: "ペナン工作部",
  facilities: [
    "潛水艦基地",
    "水上機基地",
    "燃料補給施設",
  ],
  history:
    "1942年ニ攻略。印度洋方面ニ於ケル潛水艦作戰ノ前進基地トシテ運用サレ、通商破壞作戰ヲ支援セリ。",
  _comment:
    "印度洋方面ノ潛水艦前進基地。通商破壞戰ノ拠點トシテ活用サレタリ。",
});

export const SURABAYA_BASE: NavalDistrict = Object.freeze({
  id: "surabaya",
  name: "スラバヤ根據地",
  nameReading: "スラバヤコンキョチ",
  location: "蘭印爪哇島スラバヤ",
  established: "1942年",
  navalDistrict: "蘭印方面",
  jurisdiction: "蘭印方面ノ海軍根據地",
  arsenal: "スラバヤ工作部",
  facilities: [
    "第二南遣艦隊司令部",
    "船渠",
    "燃料貯藏施設",
    "海軍病院",
  ],
  history:
    "1942年三月ニ攻略。蘭印方面ノ海軍根據地トシテ整備サレ、南方資源地帶ノ海上交通保護ニ任ゼリ。",
  _comment:
    "蘭印方面ノ要衝。石油等ノ南方資源輸送ノ護衛ニ重要ナル役割ヲ果タセリ。",
});

export const HAINAN_BASE: NavalDistrict = Object.freeze({
  id: "hainan",
  name: "海南島根據地",
  nameReading: "カイナントウコンキョチ",
  location: "支那海南島三亞",
  established: "1939年",
  navalDistrict: "南支那方面",
  jurisdiction: "南支那海及ビ佛印方面ノ警備",
  arsenal: "海南島工作部",
  facilities: [
    "海南島特別根據地隊",
    "三亞飛行場",
    "榆林港",
    "燃料貯藏施設",
  ],
  history:
    "1939年二月ニ攻略。南支那海ノ制海權確保及ビ佛印方面ヘノ前進基地トシテ運用サレタリ。南方作戰ノ策源地ノ一。",
  _comment:
    "南支那海ノ要衝。南方作戰ノ前進基地及ビ資源輸送路ノ護衛拠點ナリ。",
});

export const MANILA_BASE: NavalDistrict = Object.freeze({
  id: "manila",
  name: "マニラ根據地",
  nameReading: "マニラコンキョチ",
  location: "比島マニラ灣カビテ",
  established: "1942年",
  navalDistrict: "比島方面",
  jurisdiction: "比島方面ノ海軍根據地",
  arsenal: "カビテ工作部",
  facilities: [
    "南西方面艦隊司令部",
    "カビテ軍港",
    "船舶修理施設",
    "海軍病院",
  ],
  history:
    "1942年一月ニ攻略。米國亞洲艦隊ノ舊根據地ヲ接收シ、比島方面ノ海軍中樞トシテ運用ス。施設ハ英國ノソレニ比ブレバ粗末ナレド、南方資源輸送路ノ要衝ニ位置ス。",
  _comment:
    "比島方面ノ海軍中樞。南方航路ノ護衛及ビ比島防衛ノ要地ナリ。",
});

export const DAVAO_BASE: NavalDistrict = Object.freeze({
  id: "davao",
  name: "ダバオ根據地",
  nameReading: "ダバオコンキョチ",
  location: "比島ミンダナオ島ダバオ",
  established: "1942年",
  navalDistrict: "比島南部方面",
  jurisdiction: "比島南部及ビセレベス海方面ノ警備",
  arsenal: "ダバオ工作部",
  facilities: [
    "飛行場",
    "水上機基地",
    "燃料補給施設",
  ],
  history:
    "1942年ニ攻略。比島南部ト蘭印ヲ結ブ戰略的要衝ニシテ、南方作戰ノ中繼基地トシテ活用サレタリ。",
  _comment:
    "比島南部ノ前進基地。蘭印方面ヘノ連絡線上ニ位置スル重要拠點ナリ。",
});

export const ALL_NAVAL_DISTRICTS: NavalDistrict[] = [
  // 內地四鎭守府
  YOKOSUKA, KURE, SASEBO, MAIZURU,
  // 外地要港部
  RYOJUN, TAKESHIKI, OMINATO, CHINKAI,
  // 外地警備府・要港部
  MAKO, TAKAO_KEIBIFU,
  // 南洋方面根據地
  TRUK, RABAUL, PALAU, KWAJALEIN, SAIPAN_BASE,
  // 南方方面根據地
  SHONAN_BASE, PENANG_BASE, SURABAYA_BASE,
  HAINAN_BASE, MANILA_BASE, DAVAO_BASE,
];
