/**
 * types.ts — 大日本帝國海軍 型定義
 *
 * 帝國海軍ノ艦艇、鎭守府、海戰等ニ關スル共通型定義ナリ。
 * ConfigMap ノ schema 定義ニ相當ス。
 * * 艦種分類ハ英國海軍（Royal Navy）ノ rating 制度ニ準ジ、
 * 階級・編制ハ Queen's Regulations ノ傳統ヲ繼承ス。
 * * @since 1905年
 * @author 海軍省軍務局
 */

// ============================================================
//  艦艇（Warship）
// ============================================================

/** 艦艇一隻分ノ定義。immutable object トシテ freeze サルル。 */
export interface Warship {
  readonly id: string;
  readonly name: string;
  readonly nameReading: string;
  readonly shipClass: string;
  readonly shipType: ShipType;
  readonly displacement: number;
  readonly length: number;
  readonly speed: number;
  readonly mainArmament: string;
  readonly secondaryArmament: string;
  readonly builder: string;
  readonly commissioned: string;
  readonly status: string;
  readonly _comment: string;
}

/** 艦種ノ列擧型 */
export type ShipType =
  | "戰艦"
  | "巡洋戰艦"
  | "航空母艦"
  | "裝甲巡洋艦"
  | "重巡洋艦"
  | "輕巡洋艦"
  | "防護巡洋艦"
  | "通報艦"
  | "驅逐艦"
  | "潜水艦"
  | "水雷艇"
  | "砲艦"
  | "海防艦"
  | "敷設艦"
  | "敷設艇"
  | "掃海艇"
  | "給油艦"
  | "工作艦"
  | "給糧艦"
  | "運送艦"
  | "測量艦"
  | "練習艦"
  | "練習巡洋艦"
  | "特設巡洋艦"
  | "特設水上機母艦"
  | "潜水母艦"
  | "水上機母艦"
  | "飛行艇母艦"
  | "標的艦";

// ============================================================
//  航空機（Aircraft）
// ============================================================

/** 航空機ノ用途區分 */
export type AircraftRole =
  | "艦上戰鬪機"
  | "艦上攻撃機"
  | "艦上爆撃機"
  | "艦上偵察機"
  | "水上偵察機"
  | "水上戰鬪機"
  | "水上爆撃機"
  | "飛行艇"
  | "陸上攻撃機"
  | "陸上戰鬪機"
  | "陸上爆撃機"
  | "陸上偵察機"
  | "陸上哨戒機"
  | "夜間戰鬪機"
  | "局地戰鬪機"
  | "特殊攻撃機"
  | "練習機";

/** 航空機一機種分ノ定義 */
export interface Aircraft {
  readonly id: string;
  readonly designation: string;
  readonly name: string;
  readonly nameReading: string;
  readonly role: AircraftRole;
  readonly manufacturer: string;
  readonly firstFlight: string;
  readonly speed: number;
  readonly range: number;
  readonly armament: string;
  readonly crew: number;
  readonly status: string;
  readonly _comment: string;
}

// ============================================================
//  特殊兵器（Special Weapon）
// ============================================================

/** 特殊兵器一件分ノ定義。本質ハ秘匿サルル。 */
export interface SpecialWeapon {
  readonly id: string;
  readonly designation: string;
  readonly name: string;
  readonly nameReading: string;
  readonly weaponType: string;
  readonly manufacturer: string;
  readonly developed: string;
  readonly specifications: string;
  readonly status: string;
  readonly _comment: string;
}

// ============================================================
//  鎭守府（Naval District）
// ============================================================

/** 鎭守府一府分ノ定義 */
export interface NavalDistrict {
  readonly id: string;
  readonly name: string;
  readonly nameReading: string;
  readonly location: string;
  readonly established: string;
  readonly navalDistrict: string;
  readonly jurisdiction: string;
  readonly arsenal: string;
  readonly facilities: string[];
  readonly history: string;
  readonly _comment: string;
}

// ============================================================
//  海戰（Battle）
// ============================================================

/** 海戰一件分ノ定義 */
export interface Battle {
  readonly id: string;
  readonly name: string;
  readonly campaign: string;
  readonly date: string;
  readonly location: string;
  readonly weather?: string;
  readonly japaneseCommander: string;
  readonly japaneseFlagship: string;
  readonly japaneseForces: string;
  readonly enemyForces: string;
  readonly result: string;
  readonly significance: string;
  readonly casualties?: BattleCasualties;
  readonly _comment: string;
}

/** 戰果及ビ被害 */
export interface BattleCasualties {
  readonly enemySunk?: string;
  readonly enemyCaptured?: string;
  readonly enemyDamaged?: string;
  readonly japaneseLosses?: string;
  readonly japaneseKilled?: number;
  readonly enemyKilled?: number;
}

// ============================================================
//  組織（Organization）
// ============================================================

/** 帝國海軍ノ組織機關 */
export interface NavalOrganization {
  readonly id: string;
  readonly name: string;
  readonly nameEnglish: string;
  readonly role: string;
  readonly repository?: string;
  readonly _comment: string;
  readonly subOrganizations?: readonly NavalOrganization[];
}

// ============================================================
//  帝國海軍 全體データ
// ============================================================

/** 艦隊編制内ノ部隊（戰隊・航空戰隊・潜水戰隊・根據地隊等） */
export interface FleetUnit {
  readonly id: string;
  readonly name: string;
  readonly unitType: string;
  readonly commander: string;
  readonly commanderRank: string;
  readonly flagship?: string;
  readonly composition: string[];
  readonly _comment: string;
}

/** 艦隊（第一艦隊・第一航空艦隊等） */
export interface Fleet {
  readonly id: string;
  readonly name: string;
  readonly nameEnglish: string;
  readonly commander: string;
  readonly commanderRank: string;
  readonly chiefOfStaff: string;
  readonly flagship: string;
  readonly mission: string;
  readonly units: FleetUnit[];
  readonly _comment: string;
}

/** 指揮系統上ノ上級司令部 */
export interface CommandChain {
  readonly id: string;
  readonly name: string;
  readonly nameEnglish: string;
  readonly level: number;
  readonly commander: string;
  readonly commanderRank: string;
  readonly role: string;
  readonly subordinates: string[];
  readonly _comment: string;
}

/** 開戰時ノ帝國海軍全體ノ戰時編制 */
export interface NavalOrderOfBattle {
  readonly title: string;
  readonly date: string;
  readonly commandChain: CommandChain[];
  readonly fleets: Fleet[];
  readonly totalFleets: number;
  readonly totalUnits: number;
  readonly _comment: string;
}

/** 帝國海軍ノ全體データ構造。God Object ノ schema。 */
export interface ImperialNavyData {
  readonly title: string;
  readonly established: string;
  readonly commanderInChief: string;
  readonly warships: Warship[];
  readonly navalDistricts: NavalDistrict[];
  readonly battles: Battle[];
  readonly organizations: NavalOrganization[];
  readonly aircraft: Aircraft[];
  readonly specialWeapons: SpecialWeapon[];
  readonly orderOfBattle?: NavalOrderOfBattle;
  readonly totalWarships: number;
  readonly totalBattles: number;
  readonly totalAircraft: number;
  readonly totalSpecialWeapons: number;
}
