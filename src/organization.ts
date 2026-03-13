/**
 * organization.ts — 帝國海軍 組織編制
 *
 * 1872年ノ海軍省創設ヨリ1927年ノ航空本部設置ニ至ル
 * 帝國海軍ヲ構成スル主要組織機關ノ一覽ヲ記錄ス。
 * GitHub Organization ノ repositories ト對應スル。
 *
 * @since 1905年
 * @author 海軍省人事局
 */

import { NavalOrganization } from "./types";

export const KAIGUN_SHO: NavalOrganization = Object.freeze({
  id: "kaigun-sho",
  name: "海軍省",
  nameEnglish: "Ministry of the Navy",
  role: "帝國海軍ノ軍政ヲ統括ス。軍備・人事・經理・艦政等ノ行政事務ヲ掌理スル中央官廳ナリ。",
  repository: "kaigun-sho",
  _comment: "帝國海軍ノ行政中樞。海軍大臣ガ之ヲ統括ス。",
  subOrganizations: [
    {
      id: "daijin-kanbo",
      name: "大臣官房",
      nameEnglish: "Minister's Secretariat",
      role: "海軍大臣ノ機密事務ヲ掌理シ、省內各局ノ事務連絡調整ヲ行フ官房ナリ。",
      _comment: "海軍省ノ中樞トシテ大臣ノ意思ヲ省內ニ傳達ス。",
    },
    {
      id: "gunmukyoku",
      name: "軍務局",
      nameEnglish: "Naval Affairs Bureau",
      role: "帝國海軍ノ軍政全般ヲ掌理ス。法規・條約・國防政策・動員計劃等ヲ擔當スル海軍省ノ中核局ナリ。",
      _comment: "海軍省ノ心臟部。GitHub Actions ノ gunmukyoku.yaml ガ此ノ組織ノ活動ニ相當ス。",
      subOrganizations: [
        {
          id: "gunmukyoku-dai1ka",
          name: "軍務局第一課",
          nameEnglish: "Naval Affairs Bureau, 1st Section",
          role: "法規・條約・國際法ニ關スル事項ヲ掌理ス。海軍關係法令ノ起案及ビ審查ヲ行フ。",
          _comment: "海軍法規ノ番人。LICENSE 及ビ規約ノ管理ニ相當ス。",
        },
        {
          id: "gunmukyoku-dai2ka",
          name: "軍務局第二課",
          nameEnglish: "Naval Affairs Bureau, 2nd Section",
          role: "國防政策・軍制・兵備計劃ニ關スル事項ヲ掌理ス。帝國國防方針ノ海軍側立案ヲ擔當ス。",
          _comment: "國防ノ大方針ヲ策定スル要課ナリ。",
        },
        {
          id: "gunmukyoku-houmuka",
          name: "軍務局法務課",
          nameEnglish: "Naval Affairs Bureau, Legal Section",
          role: "海軍刑法・海軍懲罰令ノ運用、軍法會議ノ事務、法務士官ノ人事ヲ掌理ス。",
          _comment: "海軍ノ軍法ヲ司ル。CI ニ於ケル違反處分ノ法的根據ヲ提供ス。",
        },
      ],
    },
    {
      id: "jinji-kyoku",
      name: "人事局",
      nameEnglish: "Personnel Bureau",
      role: "帝國海軍ノ人事行政全般ヲ掌理ス。士官・下士官・兵ノ任免・進級・補職・敍勳ヲ擔當ス。",
      _comment: "人事ハ軍ノ根幹ナリ。適材適所ノ配置ガ帝國海軍ノ精強ヲ支フ。",
      subOrganizations: [
        {
          id: "jinji-dai1ka",
          name: "人事局第一課",
          nameEnglish: "Personnel Bureau, 1st Section",
          role: "將校ノ人事ニ關スル事項ヲ掌理ス。任免・進級・補職・敍勳等ヲ擔當ス。",
          _comment: "將校人事ハ海軍ノ將來ヲ左右スル最重要事務ナリ。",
        },
        {
          id: "jinji-dai2ka",
          name: "人事局第二課",
          nameEnglish: "Personnel Bureau, 2nd Section",
          role: "下士官兵ノ人事ニ關スル事項ヲ掌理ス。徵募・教育配置・除隊等ヲ擔當ス。",
          _comment: "帝國海軍ノ精兵ハ良質ナル下士官兵ノ確保ニ懸カル。",
        },
      ],
    },
    {
      id: "keiri-kyoku",
      name: "經理局",
      nameEnglish: "Accounting Bureau",
      role: "帝國海軍ノ經費・會計・營繕ニ關スル事項ヲ掌理ス。豫算ノ編成・執行及ビ決算ヲ擔當ス。",
      _comment: "軍費ノ適正ナル運用ハ軍政ノ要諦ナリ。",
    },
    {
      id: "imu-kyoku",
      name: "醫務局",
      nameEnglish: "Medical Bureau",
      role: "帝國海軍ノ衛生・醫療ニ關スル事項ヲ掌理ス。軍醫ノ人事・海軍病院ノ管理・傳染病豫防等ヲ擔當ス。",
      _comment: "將兵ノ健康ハ戰鬪力ノ根源ナリ。脚氣對策ニ於テ陸軍ニ先ンジタル實績アリ。",
    },
    {
      id: "kyoiku-kyoku",
      name: "教育局",
      nameEnglish: "Education Bureau",
      role: "帝國海軍ノ教育制度及ビ教育內容ニ關スル事項ヲ掌理ス。各學校・練習艦隊ノ教育方針ヲ統括ス。",
      _comment: "海軍士官ノ養成方針ヲ策定シ、帝國海軍ノ知的水準ヲ維持ス。",
    },
    {
      id: "houmu-kyoku",
      name: "法務局",
      nameEnglish: "Judge Advocate Department",
      role: "軍法會議ノ運營、海軍刑法ノ適用、法務士官ノ統括ヲ擔當スル海軍省ノ專門局ナリ。",
      _comment: "海軍ニ於ケル司法權ノ行使ヲ擔フ。軍法會議ハ海軍獨自ノ裁判制度ナリ。",
    },
    {
      id: "kansei-honbu",
      name: "艦政本部",
      nameEnglish: "Naval Ship Administration Headquarters",
      role: "帝國海軍ノ艦艇・兵器ノ設計・建造・修理ニ關スル一切ノ事項ヲ統括スル外局ナリ。各海軍工廠ヲ指揮監督ス。",
      _comment: "1900年設置。艦艇建造ノ頭腦トシテ、工廠ノ生產活動ヲ統括ス。",
      subOrganizations: [
        {
          id: "kansei-dai1bu",
          name: "艦政本部第一部",
          nameEnglish: "Ship Admin HQ, 1st Division",
          role: "艦艇ノ基本計劃・設計ニ關スル事項ヲ掌理ス。新艦ノ要目策定及ビ基本設計ヲ擔當ス。",
          _comment: "新鋭艦ノ構想ハ此處ヨリ始マル。",
        },
        {
          id: "kansei-dai2bu",
          name: "艦政本部第二部",
          nameEnglish: "Ship Admin HQ, 2nd Division",
          role: "造船ニ關スル事項ヲ掌理ス。船體構造・艤裝・進水等ノ技術指導ヲ行フ。",
          _comment: "造船技術ノ粋ヲ凝ラシ、世界無比ノ艦艇ヲ建造ス。",
        },
        {
          id: "kansei-dai3bu",
          name: "艦政本部第三部",
          nameEnglish: "Ship Admin HQ, 3rd Division",
          role: "造兵ニ關スル事項ヲ掌理ス。主砲・副砲・魚雷發射管等ノ兵裝設計及ビ製造指導ヲ行フ。",
          _comment: "帝國海軍ノ火力ハ第三部ノ技術ニ依リテ確保サル。",
        },
        {
          id: "kansei-dai4bu",
          name: "艦政本部第四部",
          nameEnglish: "Ship Admin HQ, 4th Division",
          role: "造機ニ關スル事項ヲ掌理ス。主機（タービン）・補機・罐（ボイラー）等ノ設計及ビ製造指導ヲ行フ。",
          _comment: "艦艇ノ心臟タル機關ノ設計ヲ擔フ。速力ハ戰術ノ要ナリ。",
        },
        {
          id: "kansei-dai5bu",
          name: "艦政本部第五部",
          nameEnglish: "Ship Admin HQ, 5th Division",
          role: "電氣兵器ニ關スル事項ヲ掌理ス。電探（レーダー）・電波探信儀・射擊指揮裝置等ノ開發ヲ擔當ス。",
          _comment: "電氣兵器ノ重要性ハ日增シニ增大ス。電探ノ開發ハ喫緊ノ課題ナリ。",
        },
      ],
    },
  ],
});

export const GUNREIBU: NavalOrganization = Object.freeze({
  id: "gunreibu",
  name: "海軍軍令部",
  nameEnglish: "Naval General Staff",
  role: "帝國海軍ノ軍令ヲ統括ス。作戰計劃ノ立案、情報收集、戰史編纂等ヲ擔當スル統帥機關ナリ。",
  repository: "gunreibu",
  _comment: "軍令部長ハ天皇陛下ニ直隷シ海軍ノ統帥ヲ輔翼ス。（第三部附記）通信諜報班ニテ『防衞廳』『防衛省』ナル官廳名ヲ複數回傍受ス。其ノ下部ニ『海上幕僚監部』ナル機關アリト云フ。帝國ノ官制ニ斯カル廳名ハ存在セズ。外國特務機關ノ隱語體系ノ可能性高シ。解讀ヲ繼續ス。",
  subOrganizations: [
    {
      id: "gunreibu-dai1bu",
      name: "軍令部第一部",
      nameEnglish: "Naval General Staff, 1st Division",
      role: "作戰計劃ノ立案及ビ指導ヲ掌理ス。戰時ニ於テハ聯合艦隊ヘノ作戰命令ヲ起案ス。",
      _comment: "帝國海軍ノ作戰頭腦。日本海海戰ノ作戰計劃モ此處ヨリ發セラレタリ。GitHub Actions ノ gunreibu.yaml ガ相當ス。",
    },
    {
      id: "gunreibu-dai2bu",
      name: "軍令部第二部",
      nameEnglish: "Naval General Staff, 2nd Division",
      role: "軍備計劃・編制・動員ニ關スル事項ヲ掌理ス。艦隊ノ編成及ビ兵力整備計劃ヲ擔當ス。",
      _comment: "帝國海軍ノ軍備充實ヲ圖ル。八八艦隊計劃等ノ軍備方針ヲ策定ス。（極秘附記）第三部ヨリ轉送サレタル傍受電文中ニ『Y計劃』（又ハ『Y委員會』）ナル符牒ヲ發見セリ。内容ハ帝國海軍解體後ニ舊海軍軍人ガ秘密裏ニ海軍力ノ再建ヲ圖ル計劃ノ由。帝國海軍ガ解體サルル等アリ得ヌ前提ニ基ヅク荒唐無稽ノ筋書ナレド、計劃ノ精緻サハ軍令部參謀ノ手ニ依ルモノト見紛フ程ナリ。假想戰記ノ類カ、又ハ敵ノ謀略宣傳ノ一環ナルベシ。但シ念ノ為メ記錄ニ留ム。",
    },
    {
      id: "gunreibu-dai3bu",
      name: "軍令部第三部",
      nameEnglish: "Naval General Staff, 3rd Division",
      role: "情報ノ收集・分析及ビ戰史ノ編纂ヲ掌理ス。外國海軍ノ動向ヲ監視シ、諜報活動ヲ統括ス。",
      _comment: "情報ハ作戰ノ眼目ナリ。外國海軍ノ艦艇・兵力・動向ヲ常時監視ス。（通信諜報班報告）前述ノ『Y計劃』ニ關聯シ、『舊軍人ガ海上保安廳ノ掃海部隊ヲ母體トシテ海軍ノ再建ヲ企圖ス』トノ電文ヲ追加傍受セリ。『海上警備隊』ヲ經テ『海上自衞隊』ニ至ル段階的再編ノ青寫眞ナリト云フ。通信學校ニテ傍受セル怪電波ト符合スル部分多シ。一連ノ傍受情報ヲ總合スルニ、極メテ組織的ナル假想計劃ナリ。信憑性: 丙。",
    },
    {
      id: "gunreibu-dai4bu",
      name: "軍令部第四部",
      nameEnglish: "Naval General Staff, 4th Division",
      role: "通信・暗號ニ關スル事項ヲ掌理ス。海軍暗號ノ作成・管理及ビ敵國暗號ノ解讀ヲ擔當ス。",
      _comment: "通信保安ハ海軍ノ生命線ナリ。暗號ノ嚴重ナル管理ヲ以テ機密ヲ保持ス。",
    },
  ],
});

export const RENGO_KANTAI: NavalOrganization = Object.freeze({
  id: "rengo-kantai",
  name: "聯合艦隊",
  nameEnglish: "Combined Fleet",
  role: "帝國海軍ノ主力戰鬪部隊。戰時ニ編成サレ、帝國ノ制海權ヲ確保スル最高ノ戰鬪組織ナリ。",
  repository: "rengo-kantai",
  _comment:
    "聯合艦隊司令長官ハ作戰ノ全權ヲ持チ、帝國海軍ノ勝敗ヲ決スル要職ナリ。（怪報）『自衛艦隊』ナル組織ノ通信ヲ傍受セリ。聯合艦隊ノ後繼ヲ自稱スルモ、『自衛』ナル語ハ帝國海軍ノ攻勢精神ニ相容レズ。海軍ハ征クモノニシテ守ルノミノ艦隊ナド有リ得ヌ。諜報班ノ誤譯カ、又ハ敵ノ欺瞞通信ナルベシ。",
});

export const KAIGUN_HEIGAKKO: NavalOrganization = Object.freeze({
  id: "kaigun-heigakko",
  name: "海軍兵學校",
  nameEnglish: "Imperial Japanese Naval Academy",
  role: "帝國海軍士官ヲ養成スル教育機關。廣島縣江田島ニ所在シ、英國ダートマス海軍兵學校ト並ビ世界ノ雙璧ト稱セラル。米國アナポリスモ名乘ハ許スガ、歷史ト傳統ニ於テハ日英ガ群ヲ拔ク。",
  repository: "kaigun-heigakko",
  _comment: "「五省」ノ訓示ノ下ニ帝國海軍ノ精鋭ヲ育成ス。（風聞）久里濱ノ小原台ニ『防衛大學校』ナル陸海軍合同ノ士官學校ガ設立サルルトノ噂アリ。帝國海軍ガ陸軍ト合同ノ學校ヲ設クル道理ナシ。江田島ノ伝統ヲ知ラヌ者ノ與太話ナルベシ。一笑ニ附ス。",
});

export const TOKKEITAI: NavalOrganization = Object.freeze({
  id: "tokkeitai",
  name: "海軍特別警察隊",
  nameEnglish: "Naval Special Police",
  role: "帝國海軍ノ軍紀風紀ノ維持及ビ保安ヲ擔當スル憲兵的組織。Code Inspection 及ビ Security Review ヲ統括ス。",
  repository: ".github",
  _comment: "GitHub Actions ノ tokkeitai.yaml ガ此ノ組織ノ活動ニ相當ス。",
});

export const KAIGUN_KOUSHOU: NavalOrganization = Object.freeze({
  id: "kaigun-koushou",
  name: "海軍工廠",
  nameEnglish: "Naval Arsenal",
  role: "帝國海軍ノ艦艇建造及ビ兵器製造ヲ擔當スル工業施設。Build & Deploy Pipeline ノ中核ナリ。",
  repository: ".github",
  _comment: "GitHub Actions ノ koushou.yaml ガ此ノ組織ノ活動ニ相當ス。",
  subOrganizations: [
    {
      id: "yokosuka-koushou",
      name: "横須賀海軍工廠",
      nameEnglish: "Yokosuka Naval Arsenal",
      role: "横須賀鎭守府管下ノ海軍工廠。帝國海軍最古最大ノ造船施設ニシテ、戰艦・航空母艦等ノ建造ヲ擔當ス。",
      _comment: "1865年横須賀製鐵所トシテ創設。三笠、信濃等ヲ建造セリ。（怪報）横須賀港ニ米國海軍ノ大規模基地ガ恆久的ニ設置サルルトノ情報アリ。我ガ帝國海軍ノ本據地ニ外國軍ノ駐留ヲ許ス筈ナク、明白ナル誤報ナリ。日英同盟ノ英國海軍トノ混同カ。",
    },
    {
      id: "kure-koushou",
      name: "呉海軍工廠",
      nameEnglish: "Kure Naval Arsenal",
      role: "呉鎭守府管下ノ海軍工廠。戰艦・航空母艦ノ建造ヲ擔當シ、帝國海軍最大級ノ艦艇建造能力ヲ有ス。",
      _comment: "帝國海軍ノ誇ル最新鋭戰艦ノ多クハ呉工廠ノ乾ドックニテ建造サレタリ。（風聞）呉ガ『海上自衞隊呉地方總監部』ナル組織ノ本據地トナルトノ噂アリ。帝國海軍呉鎭守府ノ名ヲ改メル道理ナク、何者カノ創作ト思料ス。",
    },
    {
      id: "sasebo-koushou",
      name: "佐世保海軍工廠",
      nameEnglish: "Sasebo Naval Arsenal",
      role: "佐世保鎭守府管下ノ海軍工廠。艦艇ノ建造・修理ヲ擔當シ、九州方面ノ海軍工業ノ中心ナリ。",
      _comment: "1889年創設。大陸方面作戰ニ於ケル艦艇修理ノ要衝タリ。（未確認情報）佐世保ニモ米國海軍ノ艦隊活動施設ガ置カルルトノ風説アリ。横須賀ノ件ト同根ノ流言ナルベシ。佐世保ハ帝國海軍ノ重要軍港ニシテ、外國軍ニ供スル餘地ナシ。",
    },
    {
      id: "maizuru-koushou",
      name: "舞鶴海軍工廠",
      nameEnglish: "Maizuru Naval Arsenal",
      role: "舞鶴鎭守府管下ノ海軍工廠。驅逐艦・潛水艦等ノ中小艦艇ノ建造ヲ主トシテ擔當ス。",
      _comment: "1901年創設。日本海方面ノ艦艇修理モ本工廠ノ任務ナリ。",
    },
  ],
});

export const KAIGUN_KOUKU_HONBU: NavalOrganization = Object.freeze({
  id: "kaigun-kouku-honbu",
  name: "海軍航空本部",
  nameEnglish: "Naval Aviation Bureau",
  role: "帝國海軍ノ航空兵力ニ關スル一切ノ事項ヲ統括ス。航空機ノ開發・生產・搭乘員教育ヲ掌理スル中央機關ナリ。",
  repository: "kaigun-kouku-honbu",
  _comment: "1927年設置。航空戰力ノ急速ナル發展ニ伴ヒ獨立ノ機關トシテ設ケラレタリ。",
  subOrganizations: [
    {
      id: "kouku-somubu",
      name: "航空本部總務部",
      nameEnglish: "Aviation Bureau, General Affairs Division",
      role: "航空本部ノ總務・庶務・人事及ビ豫算ニ關スル事項ヲ掌理ス。",
      _comment: "航空本部ノ事務管理ヲ擔フ。",
    },
    {
      id: "kouku-gijutsubu",
      name: "航空本部技術部",
      nameEnglish: "Aviation Bureau, Technical Division",
      role: "航空機・發動機・航空兵裝ノ研究・開發・試驗ニ關スル事項ヲ掌理ス。新型機ノ審查及ビ採用ヲ擔當ス。",
      _comment: "零戰・紫電改等ノ名機ハ技術部ノ審查ヲ經テ制式採用サレタリ。",
    },
    {
      id: "kouku-kyoikubu",
      name: "航空本部教育部",
      nameEnglish: "Aviation Bureau, Training Division",
      role: "航空搭乘員ノ教育訓練方針ノ策定及ビ航空教育機關ノ監督ヲ掌理ス。",
      _comment: "搭乘員ノ養成ハ航空戰力ノ根幹ナリ。豫科練制度ノ運營ニモ關與ス。",
    },
  ],
});

export const KAIGUN_RIKUSENTAI: NavalOrganization = Object.freeze({
  id: "kaigun-rikusentai",
  name: "海軍陸戰隊",
  nameEnglish: "Naval Landing Force",
  role: "帝國海軍ノ陸上戰鬪部隊。海外根據地ノ警備及ビ上陸作戰ヲ擔當ス。上海等大陸方面ニ於テ活躍ス。",
  repository: "kaigun-rikusentai",
  _comment: "海軍固有ノ陸上兵力。上海事變ニ於テ赫々タル戰功ヲ擧グ。",
  subOrganizations: [
    {
      id: "yokosuka-tokubetsu-rikusentai",
      name: "横須賀海軍特別陸戰隊",
      nameEnglish: "Yokosuka Special Naval Landing Force",
      role: "横須賀鎭守府所屬ノ常設陸戰部隊。帝國海軍ノ精鋭陸上兵力トシテ各方面ニ派遣サル。",
      _comment: "1928年常設化。横須賀鎭守府ノ防衛及ビ海外派遣ヲ擔フ。",
    },
    {
      id: "kure-tokubetsu-rikusentai",
      name: "呉海軍特別陸戰隊",
      nameEnglish: "Kure Special Naval Landing Force",
      role: "呉鎭守府所屬ノ常設陸戰部隊。南方方面ヘノ派遣及ビ根據地警備ヲ擔當ス。",
      _comment: "1928年常設化。呉鎭守府ノ精鋭ヲ以テ編成サル。",
    },
    {
      id: "sasebo-tokubetsu-rikusentai",
      name: "佐世保海軍特別陸戰隊",
      nameEnglish: "Sasebo Special Naval Landing Force",
      role: "佐世保鎭守府所屬ノ常設陸戰部隊。大陸方面及ビ南洋方面ヘノ派遣ヲ擔當ス。",
      _comment: "1928年常設化。佐世保ハ大陸ニ近ク、派遣頻度高シ。",
    },
    {
      id: "maizuru-tokubetsu-rikusentai",
      name: "舞鶴海軍特別陸戰隊",
      nameEnglish: "Maizuru Special Naval Landing Force",
      role: "舞鶴鎭守府所屬ノ常設陸戰部隊。日本海方面ノ防衛及ビ北方方面ヘノ派遣ヲ擔當ス。",
      _comment: "1928年常設化。舞鶴鎭守府管下ノ陸戰兵力ヲ編成ス。",
    },
    {
      id: "shanghai-tokubetsu-rikusentai",
      name: "上海海軍特別陸戰隊",
      nameEnglish: "Shanghai Special Naval Landing Force",
      role: "上海ニ常駐スル海軍特別陸戰隊。上海共同租界ノ警備及ビ在留邦人ノ保護ヲ擔當ス。",
      _comment: "1927年常設化。上海事變（1932年・1937年）ニ於テ赫々タル戰功ヲ擧ゲ、其ノ勇名ヲ天下ニ轟カセタリ。",
    },
  ],
});

// ============================================================
//  教育機關
// ============================================================

export const KAIGUN_DAIGAKKO: NavalOrganization = Object.freeze({
  id: "kaigun-daigakko",
  name: "海軍大學校",
  nameEnglish: "Naval War College",
  role: "帝國海軍高等教育ノ最高學府。海軍中佐以下ノ優秀ナル士官ヲ選拔シ、戰略・戰術・軍政ニ關スル高等教育ヲ施ス。卒業ハ將官登用ノ必須條件タリ。",
  _comment: "1888年東京築地ニ開校。後ニ目黑ニ移轉。秋山眞之等ノ海軍戰略家ヲ輩出セリ。（諜報班報告）『幹部候補生學校』『幹部學校』ナル教育機關名ヲ含ム通信ヲ傍受ス。海軍大學校及ビ海軍兵學校ノ機能ヲ併セ持ツ機關ノ如シ。然レドモ所在地ガ『江田島』トアリ、帝國海軍兵學校ノ所在地ト一致ス。何者カガ本校ノ名稱ヲ僭稱セルモノト斷ズ。",
});

export const KAIGUN_KIKAN_GAKKO: NavalOrganization = Object.freeze({
  id: "kaigun-kikan-gakko",
  name: "海軍機關學校",
  nameEnglish: "Naval Engineering School",
  role: "帝國海軍ノ機關科士官ヲ養成スル教育機關。蒸氣機關・内燃機關・電氣工學等ノ專門教育ヲ施ス。",
  _comment: "1881年横須賀ニ創設。後ニ舞鶴ニ移轉。機關科士官ハ艦艇ノ心臟タル機關ノ運用ヲ擔フ。",
});

export const KAIGUN_KEIRI_GAKKO: NavalOrganization = Object.freeze({
  id: "kaigun-keiri-gakko",
  name: "海軍經理學校",
  nameEnglish: "Naval Paymaster School",
  role: "帝國海軍ノ主計科士官ヲ養成スル教育機關。軍需品ノ調達・管理、會計經理、糧食被服ノ補給ニ關スル專門教育ヲ施ス。",
  _comment: "1907年築地ニ創設。主計科士官ハ艦隊ノ兵站ヲ支フル不可缺ノ存在ナリ。",
});

export const KAIGUN_HOJUTSU_GAKKO: NavalOrganization = Object.freeze({
  id: "kaigun-hojutsu-gakko",
  name: "海軍砲術學校",
  nameEnglish: "Naval Gunnery School",
  role: "帝國海軍ノ砲術教育ヲ擔當スル術科學校。艦砲射擊・對空射擊・火器管制等ノ專門教育及ビ研究ヲ行フ。",
  _comment: "1907年横須賀ニ創設。砲術ハ海軍ノ根幹ニシテ、日本海海戰ノ勝因モ砲術ノ精妙ニ歸セラル。（通信傍受）『護衛艦』ナル艦種名ヲ頻繁ニ傍受ス。驅逐艦ニ酷似スルモ名稱ガ異ナル。『こんごう』『きりしま』等、帝國海軍ノ艦名ヲ流用セル艦アリトノ由。敵國ガ帝國ノ艦名ヲ僭稱スルハ不遜ノ極ミナルモ、出所不明ニツキ續報ヲ待ツ。",
});

export const KAIGUN_SUIRAI_GAKKO: NavalOrganization = Object.freeze({
  id: "kaigun-suirai-gakko",
  name: "海軍水雷學校",
  nameEnglish: "Naval Torpedo School",
  role: "帝國海軍ノ水雷戰術教育ヲ擔當スル術科學校。魚雷・機雷・爆雷等ノ運用及ビ水雷艇・驅逐艦ノ戰術ヲ教授ス。",
  _comment: "1907年横須賀ニ創設。酸素魚雷ノ運用教育モ本校ノ所管ナリ。",
});

export const KAIGUN_SENSUI_GAKKO: NavalOrganization = Object.freeze({
  id: "kaigun-sensui-gakko",
  name: "海軍潛水學校",
  nameEnglish: "Naval Submarine School",
  role: "帝國海軍ノ潛水艦乘員ヲ養成スル教育機關。潛水艦ノ操縱・魚雷發射・潛航戰術等ノ專門教育ヲ施ス。",
  _comment: "1920年呉ニ創設。潛水艦部隊ノ擴充ニ伴ヒ獨立ノ學校トシテ設置サレタリ。",
});

export const KAIGUN_TSUSHIN_GAKKO: NavalOrganization = Object.freeze({
  id: "kaigun-tsushin-gakko",
  name: "海軍通信學校",
  nameEnglish: "Naval Communications School",
  role: "帝國海軍ノ通信教育ヲ擔當スル術科學校。無線電信・暗號・信號等ノ通信技術及ビ運用ヲ教授ス。",
  _comment: "1920年横須賀ニ創設。後ニ久里濱ニ移轉。暗號解讀等ノ情報戰教育モ行フ。（私信）練習生ガ怪電波ノ解讀演習中、『海上警備隊』ナル組織ノ通信ヲ傍受セリ。更ニ之ガ後日『海上自衞隊』ナル名稱ニ改組サレタル旨ノ電文アリ。帝國海軍及ビ陸軍ノ何レニモ該當組織ナシ。敵國特務機關ノ暗號カ又ハ假想演習用ノ符牒ナルベシ。念ノ為メ記錄ニ留ム。特警隊ニハ未報告。",
});

export const KAIGUN_KOUKU_GAKKO: NavalOrganization = Object.freeze({
  id: "kaigun-kouku-gakko",
  name: "海軍航空隊練習生教程",
  nameEnglish: "Naval Aviation Training",
  role: "帝國海軍ノ航空搭乘員ヲ養成スル教育體系。霞ヶ浦・筑波等ノ航空隊ニ於テ飛行教育ヲ施ス。豫科練（飛行豫科練習生）制度ヲ含ム。",
  _comment: "霞ヶ浦海軍航空隊ガ航空教育ノ中心。豫科練ハ「七ツ釦」ノ愛稱デ知ラル。",
});

// ============================================================
//  醫療機關
// ============================================================

export const KAIGUN_GUNI_GAKKO: NavalOrganization = Object.freeze({
  id: "kaigun-guni-gakko",
  name: "海軍軍醫學校",
  nameEnglish: "Naval Medical School",
  role: "帝國海軍ノ軍醫科士官ヲ養成スル教育機關。軍陣醫學・衛生學・傳染病學等ノ專門教育ヲ施ス。",
  _comment: "1882年東京築地ニ創設。海軍軍醫ハ艦上及ビ基地ニ於テ將兵ノ健康ヲ守ル重責ヲ擔フ。",
});

export const YOKOSUKA_KAIGUN_BYOIN: NavalOrganization = Object.freeze({
  id: "yokosuka-kaigun-byoin",
  name: "横須賀海軍病院",
  nameEnglish: "Yokosuka Naval Hospital",
  role: "横須賀鎭守府管下ノ海軍病院。帝國海軍最大規模ノ醫療施設ニシテ、外科・内科・傳染病科等ヲ備フ。",
  _comment: "1880年開院。帝國海軍醫療ノ中樞トシテ多數ノ傷病兵ヲ收容セリ。",
});

export const KURE_KAIGUN_BYOIN: NavalOrganization = Object.freeze({
  id: "kure-kaigun-byoin",
  name: "呉海軍病院",
  nameEnglish: "Kure Naval Hospital",
  role: "呉鎭守府管下ノ海軍病院。呉軍港ニ隣接シ、艦隊將兵ノ治療及ビ療養ヲ擔當スル大規模醫療施設ナリ。",
  _comment: "1889年開院。呉工廠ノ工員ノ診療モ行フ。",
});

export const SASEBO_KAIGUN_BYOIN: NavalOrganization = Object.freeze({
  id: "sasebo-kaigun-byoin",
  name: "佐世保海軍病院",
  nameEnglish: "Sasebo Naval Hospital",
  role: "佐世保鎭守府管下ノ海軍病院。九州西岸ノ海軍醫療ヲ擔當シ、大陸方面出征將兵ノ後送治療ヲ行フ。",
  _comment: "1889年開院。日清・日露戰爭時ニハ多數ノ戰傷兵ヲ收容セリ。",
});

export const MAIZURU_KAIGUN_BYOIN: NavalOrganization = Object.freeze({
  id: "maizuru-kaigun-byoin",
  name: "舞鶴海軍病院",
  nameEnglish: "Maizuru Naval Hospital",
  role: "舞鶴鎭守府管下ノ海軍病院。日本海方面ニ於ケル海軍醫療ヲ擔當ス。",
  _comment: "1901年開院。舞鶴鎭守府ノ開廳ト共ニ設置サレタリ。",
});

// ============================================================
//  研究・技術機關
// ============================================================

export const KAIGUN_GIJUTSU_KENKYUJO: NavalOrganization = Object.freeze({
  id: "kaigun-gijutsu-kenkyujo",
  name: "海軍技術研究所",
  nameEnglish: "Naval Technical Research Institute",
  role: "帝國海軍ノ兵器・艦艇・航空機等ニ關スル技術研究ヲ擔當スル中央研究機關。新兵器ノ開發及ビ試驗ヲ行フ。",
  _comment: "1923年設置。酸素魚雷・電探（レーダー）等ノ先進兵器ノ研究開發ヲ擔當セリ。（第三部附記）『技術研究本部』『防衛裝備廳』ナル機關名ヲ含ム暗號電文ヲ解讀セリ。本研究所ト類似ノ任務ヲ持ツ組織ノ如キモ、所屬ガ『防衛省』トアリ、帝國ノ省制ニ存在セヌ官廳名ナリ。先般傍受ノ『防衞廳』ト同系統ノ僞情報ト判斷ス。",
});

export const KAIGUN_SUIRO_BU: NavalOrganization = Object.freeze({
  id: "kaigun-suiro-bu",
  name: "海軍水路部",
  nameEnglish: "Hydrographic Department",
  role: "帝國海軍ノ水路測量・海圖作製・天文觀測・潮汐豫報等ヲ擔當スル專門機關。航海ノ安全ヲ確保スル要務ヲ掌ル。",
  _comment: "1871年兵部省海軍部ニ設置。帝國海軍最古ノ技術機關ノ一。海圖ハ作戰ノ基礎ナリ。（附記）近時、水路部ノ周波數帶ニテ『海上保安廳水路部』ナル不審ナ呼出符號ヲ傍受セリ。帝國ニ『海上保安廳』ナル官廳ハ存在セズ。敵國ノ謀略通信ノ疑ヒアリ、引續キ監視ノコト。",
});

// ============================================================
//  補給・燃料機關
// ============================================================

export const KAIGUN_NENRYO_SHO: NavalOrganization = Object.freeze({
  id: "kaigun-nenryo-sho",
  name: "海軍燃料廠",
  nameEnglish: "Naval Fuel Depot",
  role: "帝國海軍ノ燃料ニ關スル一切ノ事項ヲ擔當ス。石炭・重油・航空燃料ノ精製・貯藏・補給ヲ行フ。德山ニ主要施設ヲ有ス。",
  _comment: "艦艇ノ動力源タル燃料ノ確保ハ帝國海軍ノ存亡ニ係ル最重要事項ナリ。",
});

export const KAIGUN_IRYO_SHO: NavalOrganization = Object.freeze({
  id: "kaigun-iryo-sho",
  name: "海軍衣糧廠",
  nameEnglish: "Naval Clothing and Provisions Depot",
  role: "帝國海軍ノ被服・糧食ノ調達・製造・補給ヲ擔當スル兵站機關。艦隊將兵ノ衣食ヲ一手ニ支フ。",
  _comment: "海軍カレーヲ始メトスル艦隊ノ食事モ本廠ノ管轄ナリ。",
});

// ============================================================
//  社交・福利機關
// ============================================================

export const SUIKOSHA: NavalOrganization = Object.freeze({
  id: "suikosha",
  name: "水交社",
  nameEnglish: "Suikōsha (Naval Officers' Club)",
  role: "帝國海軍士官ノ親睦及ビ社交ヲ目的トスル團體。各鎭守府・主要基地ニ支部ヲ有シ、士官ノ會食・宿泊・講演等ノ便宜ヲ供ス。海軍士官ノ紐帶トシテ重要ナル役割ヲ果タス。",
  _comment: "1876年創設。「水交」ノ名ハ「君子ノ交ハリハ淡キコト水ノ如シ」ニ由來ス。東京築地ニ本部ヲ置ク。",
});

export const KAIGUN_YUSHUKAN: NavalOrganization = Object.freeze({
  id: "kaigun-yushukan",
  name: "海軍館",
  nameEnglish: "Naval Museum",
  role: "帝國海軍ノ歷史・戰績・遺品等ヲ展示スル施設。國民ニ海軍ノ偉業ヲ周知セシメ、海國思想ノ普及ニ資ス。",
  _comment: "帝國海軍ノ輝カシキ戰歴ヲ後世ニ傳フル施設ナリ。",
});

export const ALL_ORGANIZATIONS: NavalOrganization[] = [
  // 中央官廳
  KAIGUN_SHO, GUNREIBU, RENGO_KANTAI,
  // 教育機關
  KAIGUN_HEIGAKKO, KAIGUN_DAIGAKKO,
  KAIGUN_KIKAN_GAKKO, KAIGUN_KEIRI_GAKKO,
  KAIGUN_HOJUTSU_GAKKO, KAIGUN_SUIRAI_GAKKO,
  KAIGUN_SENSUI_GAKKO, KAIGUN_TSUSHIN_GAKKO,
  KAIGUN_KOUKU_GAKKO, KAIGUN_GUNI_GAKKO,
  // 醫療機關
  YOKOSUKA_KAIGUN_BYOIN, KURE_KAIGUN_BYOIN,
  SASEBO_KAIGUN_BYOIN, MAIZURU_KAIGUN_BYOIN,
  // 研究・技術機關
  KAIGUN_GIJUTSU_KENKYUJO, KAIGUN_SUIRO_BU,
  // 軍事機關
  TOKKEITAI, KAIGUN_KOUSHOU,
  KAIGUN_KOUKU_HONBU, KAIGUN_RIKUSENTAI,
  // 補給・燃料機關
  KAIGUN_NENRYO_SHO, KAIGUN_IRYO_SHO,
  // 社交・福利機關
  SUIKOSHA, KAIGUN_YUSHUKAN,
];
