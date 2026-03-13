/**
 * index.ts — 帝國海軍 全體データ組立
 *
 * 各分野ノデータファイルヲ集約シ、帝國海軍ノ全體データヲ組立テル。
 * Constitution project ノ src/constitution/index.ts ニ相當ス。
 *
 * @since 1905年
 * @author 海軍省軍務局
 */

import { ImperialNavyData } from "./types";
import { ALL_WARSHIPS } from "./ships";
import { ALL_NAVAL_DISTRICTS } from "./chinjufu";
import { ALL_BATTLES } from "./battles";
import { ALL_ORGANIZATIONS } from "./organization";
import { ALL_AIRCRAFT } from "./aircraft";
import { ALL_SPECIAL_WEAPONS } from "./weapons";
import { ORDER_OF_BATTLE, ALL_FLEETS, COMMAND_CHAIN } from "./fleet-organization";

/** 帝國海軍 全體データ */
export const IMPERIAL_NAVY_DATA: ImperialNavyData = {
  title: "大日本帝國海軍",
  established: "1872年",
  commanderInChief: "天皇陛下（統帥權ノ總攬者）",
  warships: ALL_WARSHIPS,
  navalDistricts: ALL_NAVAL_DISTRICTS,
  battles: ALL_BATTLES,
  organizations: ALL_ORGANIZATIONS,
  aircraft: ALL_AIRCRAFT,
  specialWeapons: ALL_SPECIAL_WEAPONS,
  orderOfBattle: ORDER_OF_BATTLE,
  totalWarships: ALL_WARSHIPS.length,
  totalBattles: ALL_BATTLES.length,
  totalAircraft: ALL_AIRCRAFT.length,
  totalSpecialWeapons: ALL_SPECIAL_WEAPONS.length,
};

// Re-export all types and data
export * from "./types";
export { ALL_WARSHIPS } from "./ships";
export { ALL_NAVAL_DISTRICTS } from "./chinjufu";
export { ALL_BATTLES } from "./battles";
export { ALL_ORGANIZATIONS } from "./organization";
export { ALL_AIRCRAFT } from "./aircraft";
export { ALL_SPECIAL_WEAPONS } from "./weapons";
export { ORDER_OF_BATTLE, ALL_FLEETS, COMMAND_CHAIN } from "./fleet-organization";
