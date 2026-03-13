/**
 * generate-static-json.ts — 帝國海軍靜的文書生成裝置
 *
 * GitHub Pages（靜的兵站基盤）ニ於テハ Express 等ノ
 * 動的 backend ハ稼働セズ、故ニ全 API 應答ヲ
 * 豫メ靜的 JSON トシテ焼キ込ミ、且ツ fetch 迎撃裝置ヲ
 * docs/static-api.js ニ生成シ、全 API ヲ擬似的ニ再現ス。
 *
 * 本處理ハ npm run build ノ一環トシテ實行サレ、
 * tsc ノ後ニ起動サルル。
 *
 * 生成物:
 *   docs/
 *   ├── static-api.js             # fetch 迎撃裝置
 *   └── data/
 *       ├── navy.json             # 帝國海軍全體データ
 *       ├── ships.json            # 全艦艇一覽
 *       ├── ship/
 *       │   └── {id}.json         # 艦艇別
 *       ├── chinjufu.json         # 全鎭守府一覽
 *       ├── chinjufu/
 *       │   └── {id}.json         # 鎭守府別
 *       ├── battles.json          # 全海戰一覽
 *       ├── battle/
 *       │   └── {id}.json         # 海戰別
 *       └── organization.json     # 組織一覽
 *
 * @since 1905年
 * @author 海軍省艦政本部
 */

import * as fs from "fs";
import * as path from "path";
import { IMPERIAL_NAVY_DATA } from "../src";
import { ALL_WARSHIPS } from "../src/ships";
import { ALL_NAVAL_DISTRICTS } from "../src/chinjufu";
import { ALL_BATTLES } from "../src/battles";
import { ALL_ORGANIZATIONS } from "../src/organization";
import { ALL_AIRCRAFT } from "../src/aircraft";
import { ALL_SPECIAL_WEAPONS } from "../src/weapons";
import { ORDER_OF_BATTLE, ALL_FLEETS, COMMAND_CHAIN } from "../src/fleet-organization";

// ============================================================
//  Constants
// ============================================================

const DOCS = path.resolve(__dirname, "..", "docs");

// ============================================================
//  Utilities
// ============================================================

function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeJson(filePath: string, data: unknown): void {
  const fullPath = path.join(DOCS, filePath);
  ensureDir(path.dirname(fullPath));
  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`⚓ 生成: docs/${filePath}`);
}

function writeText(filePath: string, content: string): void {
  const fullPath = path.join(DOCS, filePath);
  ensureDir(path.dirname(fullPath));
  fs.writeFileSync(fullPath, content, "utf-8");
  console.log(`⚓ 生成: docs/${filePath}`);
}

// ============================================================
//  Phase 1 — 靜的 JSON データ生成
// ============================================================

console.log("⚓ 帝國海軍靜的文書生成裝置、起動。");

/** 帝國海軍全體データ — GET /api/navy */
writeJson("data/navy.json", {
  navy: IMPERIAL_NAVY_DATA,
  logs: [
    { level: "info", message: "⚓ [NAVY] 大日本帝國海軍 全體データノ閲覽ヲ許可ス。" },
    { level: "info", message: `⚓ [NAVY] 艦艇 ${ALL_WARSHIPS.length}隻、海戰 ${ALL_BATTLES.length}件、鎭守府 ${ALL_NAVAL_DISTRICTS.length}府。` },
  ],
});

/** 全艦艇一覽 — GET /api/ships */
writeJson("data/ships.json", {
  ships: ALL_WARSHIPS,
  total: ALL_WARSHIPS.length,
  logs: [
    { level: "info", message: `⚓ [SHIPS] 帝國海軍艦艇要目錄 全${ALL_WARSHIPS.length}隻ヲ返却ス。` },
  ],
});

/** 艦艇別 — GET /api/ship/:id */
for (const ship of ALL_WARSHIPS) {
  writeJson(`data/ship/${ship.id}.json`, {
    ship,
    logs: [
      { level: "info", message: `⚓ [SHIP] ${ship.shipType}「${ship.name}」（${ship.nameReading}）ノ要目ヲ返却ス。` },
    ],
  });
}

/** 全鎭守府一覽 — GET /api/chinjufu */
writeJson("data/chinjufu.json", {
  navalDistricts: ALL_NAVAL_DISTRICTS,
  total: ALL_NAVAL_DISTRICTS.length,
  logs: [
    { level: "info", message: `⚓ [CHINJUFU] 鎭守府及ビ要港部 全${ALL_NAVAL_DISTRICTS.length}府ヲ返却ス。` },
  ],
});

/** 鎭守府別 — GET /api/chinjufu/:id */
for (const district of ALL_NAVAL_DISTRICTS) {
  writeJson(`data/chinjufu/${district.id}.json`, {
    navalDistrict: district,
    logs: [
      { level: "info", message: `⚓ [CHINJUFU] ${district.name}（${district.nameReading}）ノ要覽ヲ返却ス。` },
    ],
  });
}

/** 全海戰一覽 — GET /api/battles */
writeJson("data/battles.json", {
  battles: ALL_BATTLES,
  total: ALL_BATTLES.length,
  logs: [
    { level: "info", message: `⚓ [BATTLES] 帝國海軍戰史錄 全${ALL_BATTLES.length}件ヲ返却ス。` },
  ],
});

/** 海戰別 — GET /api/battle/:id */
for (const battle of ALL_BATTLES) {
  writeJson(`data/battle/${battle.id}.json`, {
    battle,
    logs: [
      { level: "info", message: `⚓ [BATTLE] ${battle.campaign}「${battle.name}」（${battle.date}）ノ戰鬪詳報ヲ返却ス。` },
    ],
  });
}

/** 組織一覽 — GET /api/organization */
writeJson("data/organization.json", {
  organizations: ALL_ORGANIZATIONS,
  total: ALL_ORGANIZATIONS.length,
  logs: [
    { level: "info", message: `⚓ [ORG] 帝國海軍組織編制 全${ALL_ORGANIZATIONS.length}機關ヲ返却ス。` },
  ],
});

/** 全航空機一覽 — GET /api/aircraft */
writeJson("data/aircraft.json", {
  aircraft: ALL_AIRCRAFT,
  total: ALL_AIRCRAFT.length,
  logs: [
    { level: "info", message: `⚓ [AIRCRAFT] 帝國海軍航空兵器錄 全${ALL_AIRCRAFT.length}機種ヲ返却ス。` },
  ],
});

/** 航空機別 — GET /api/aircraft/:id */
for (const ac of ALL_AIRCRAFT) {
  writeJson(`data/aircraft/${ac.id}.json`, {
    aircraft: ac,
    logs: [
      { level: "info", message: `⚓ [AIRCRAFT] ${ac.role}「${ac.name}」（${ac.designation}）ノ要目ヲ返却ス。` },
    ],
  });
}

/** 全特殊兵器一覽 — GET /api/weapons */
writeJson("data/weapons.json", {
  specialWeapons: ALL_SPECIAL_WEAPONS,
  total: ALL_SPECIAL_WEAPONS.length,
  logs: [
    { level: "info", message: `⚓ [WEAPONS] 帝國海軍特殊兵器錄 全${ALL_SPECIAL_WEAPONS.length}件ヲ返却ス。閲覽ニハ軍令部許可ヲ要ス。` },
  ],
});

/** 特殊兵器別 — GET /api/weapon/:id */
for (const weapon of ALL_SPECIAL_WEAPONS) {
  writeJson(`data/weapon/${weapon.id}.json`, {
    specialWeapon: weapon,
    logs: [
      { level: "info", message: `⚓ [WEAPON] ${weapon.weaponType}「${weapon.name}」（${weapon.designation}）ノ要目ヲ返却ス。` },
    ],
  });
}

/** 戰時編制表 — GET /api/order-of-battle */
writeJson("data/order-of-battle.json", {
  orderOfBattle: ORDER_OF_BATTLE,
  logs: [
    { level: "info", message: `⚓ [OOB] 帝國海軍戰時編制表ヲ返却ス。全${ALL_FLEETS.length}艦隊。` },
  ],
});

/** 指揮系統 — GET /api/command-chain */
writeJson("data/command-chain.json", {
  commandChain: COMMAND_CHAIN,
  total: COMMAND_CHAIN.length,
  logs: [
    { level: "info", message: `⚓ [COMMAND] 帝國海軍指揮系統ヲ返却ス。全${COMMAND_CHAIN.length}系統。` },
  ],
});

/** 全艦隊一覽 — GET /api/fleets */
writeJson("data/fleets.json", {
  fleets: ALL_FLEETS,
  total: ALL_FLEETS.length,
  logs: [
    { level: "info", message: `⚓ [FLEET] 帝國海軍全艦隊一覽ヲ返却ス。全${ALL_FLEETS.length}艦隊。` },
  ],
});

/** 艦隊別 — GET /api/fleet/:id */
for (const fleet of ALL_FLEETS) {
  writeJson(`data/fleet/${fleet.id}.json`, {
    fleet,
    logs: [
      { level: "info", message: `⚓ [FLEET] ${fleet.name}（${fleet.nameEnglish}）ノ編制ヲ返却ス。` },
    ],
  });
}

// ============================================================
//  Phase 2 — fetch 迎撃裝置（static-api.js）ノ生成
// ============================================================

const STATIC_API_JS = `/**
 * static-api.js — 帝國海軍 API 迎撃裝置（Naval Fetch Interceptor）
 *
 * GitHub Pages 靜的兵站基盤ニ於テ Express backend ノ
 * 不在ヲ補填スル爲ノ client 側 API emulator。
 *
 * window.fetch ヲ override シ、/api/* 宛テノ全通信ヲ
 * 傍受・處理ス。GET ハ靜的 JSON ヲ返ス。
 *
 * ※ 本裝置ハ build 時ニ generate-static-json.ts ニ依リ
 *   自動生成サルルモノナリ。手動編輯ハ軍規違反ニ當タル。
 *
 * @generated
 * @since 1905年
 */
(function() {
  'use strict';

  var _originalFetch = window.fetch.bind(window);

  // GitHub Pages ノ base path ヲ自動檢出
  var _scripts = document.querySelectorAll('script[src$="static-api.js"]');
  var _basePath = './';
  if (_scripts.length > 0) {
    var src = _scripts[0].getAttribute('src');
    var idx = src.lastIndexOf('/static-api.js');
    if (idx >= 0) {
      _basePath = src.substring(0, idx + 1);
    }
  }

  function jsonResponse(data, statusCode) {
    return new Response(JSON.stringify(data), {
      status: statusCode || 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // ============================================================
  //  Route Handlers — 靜的 JSON ヲ fetch シテ返ス
  // ============================================================

  async function handleGetNavy() {
    return _originalFetch(_basePath + 'data/navy.json');
  }

  async function handleGetShips() {
    return _originalFetch(_basePath + 'data/ships.json');
  }

  async function handleGetShip(id) {
    try {
      var res = await _originalFetch(_basePath + 'data/ship/' + id + '.json');
      if (!res.ok) throw new Error('not found');
      return res;
    } catch (e) {
      return jsonResponse({
        error: '艦艇「' + id + '」ハ帝國海軍ノ艦籍ニ存在セズ。',
        logs: [{ level: 'error', message: '⚓ [SHIP] 艦艇「' + id + '」ハ存在セズ。' }]
      }, 404);
    }
  }

  async function handleGetChinjufu() {
    return _originalFetch(_basePath + 'data/chinjufu.json');
  }

  async function handleGetChinjufuById(id) {
    try {
      var res = await _originalFetch(_basePath + 'data/chinjufu/' + id + '.json');
      if (!res.ok) throw new Error('not found');
      return res;
    } catch (e) {
      return jsonResponse({
        error: '鎭守府「' + id + '」ハ存在セズ。',
        logs: [{ level: 'error', message: '⚓ [CHINJUFU] 鎭守府「' + id + '」ハ存在セズ。' }]
      }, 404);
    }
  }

  async function handleGetBattles() {
    return _originalFetch(_basePath + 'data/battles.json');
  }

  async function handleGetBattle(id) {
    try {
      var res = await _originalFetch(_basePath + 'data/battle/' + id + '.json');
      if (!res.ok) throw new Error('not found');
      return res;
    } catch (e) {
      return jsonResponse({
        error: '海戰「' + id + '」ノ記錄ハ戰史錄ニ存在セズ。',
        logs: [{ level: 'error', message: '⚓ [BATTLE] 海戰「' + id + '」ハ存在セズ。' }]
      }, 404);
    }
  }

  async function handleGetOrganization() {
    return _originalFetch(_basePath + 'data/organization.json');
  }

  async function handleGetAircraft() {
    return _originalFetch(_basePath + 'data/aircraft.json');
  }

  async function handleGetAircraftById(id) {
    try {
      var res = await _originalFetch(_basePath + 'data/aircraft/' + id + '.json');
      if (!res.ok) throw new Error('not found');
      return res;
    } catch (e) {
      return jsonResponse({
        error: '航空機「' + id + '」ハ帝國海軍航空兵器錄ニ存在セズ。',
        logs: [{ level: 'error', message: '⚓ [AIRCRAFT] 航空機「' + id + '」ハ存在セズ。' }]
      }, 404);
    }
  }

  async function handleGetWeapons() {
    return _originalFetch(_basePath + 'data/weapons.json');
  }

  async function handleGetWeaponById(id) {
    try {
      var res = await _originalFetch(_basePath + 'data/weapon/' + id + '.json');
      if (!res.ok) throw new Error('not found');
      return res;
    } catch (e) {
      return jsonResponse({
        error: '兵器「' + id + '」ハ帝國海軍兵器錄ニ存在セズ。',
        logs: [{ level: 'error', message: '⚓ [WEAPON] 兵器「' + id + '」ハ存在セズ。' }]
      }, 404);
    }
  }

  async function handleGetOrderOfBattle() {
    return _originalFetch(_basePath + 'data/order-of-battle.json');
  }

  async function handleGetCommandChain() {
    return _originalFetch(_basePath + 'data/command-chain.json');
  }

  async function handleGetFleets() {
    return _originalFetch(_basePath + 'data/fleets.json');
  }

  async function handleGetFleetById(id) {
    try {
      var res = await _originalFetch(_basePath + 'data/fleet/' + id + '.json');
      if (!res.ok) throw new Error('not found');
      return res;
    } catch (e) {
      return jsonResponse({
        error: '艦隊「' + id + '」ハ帝國海軍ノ編制ニ存在セズ。',
        logs: [{ level: 'error', message: '⚓ [FLEET] 艦隊「' + id + '」ハ存在セズ。' }]
      }, 404);
    }
  }

  // ============================================================
  //  fetch 迎撃裝置 — window.fetch ヲ override
  // ============================================================

  window.fetch = async function(input, init) {
    var url = (typeof input === 'string') ? input : input.url;
    var method = (init && init.method) ? init.method.toUpperCase() : 'GET';

    // /api/* 以外ハ原本 fetch ニ委任
    if (url.indexOf('/api/') === -1) {
      return _originalFetch(input, init);
    }

    // URL ヨリ path 部分ヲ抽出
    var apiPath = url.substring(url.indexOf('/api/'));

    if (method === 'GET') {
      if (apiPath === '/api/navy')            return handleGetNavy();
      if (apiPath === '/api/ships')           return handleGetShips();
      if (apiPath === '/api/chinjufu')        return handleGetChinjufu();
      if (apiPath === '/api/battles')         return handleGetBattles();
      if (apiPath === '/api/organization')    return handleGetOrganization();
      if (apiPath === '/api/aircraft')         return handleGetAircraft();
      if (apiPath === '/api/weapons')          return handleGetWeapons();
      if (apiPath === '/api/order-of-battle')  return handleGetOrderOfBattle();
      if (apiPath === '/api/command-chain')    return handleGetCommandChain();
      if (apiPath === '/api/fleets')           return handleGetFleets();

      // /api/ship/:id
      var shipMatch = apiPath.match(/^\\/api\\/ship\\/([^/]+)$/);
      if (shipMatch) return handleGetShip(shipMatch[1]);

      // /api/chinjufu/:id
      var chinjufuMatch = apiPath.match(/^\\/api\\/chinjufu\\/([^/]+)$/);
      if (chinjufuMatch) return handleGetChinjufuById(chinjufuMatch[1]);

      // /api/battle/:id
      var battleMatch = apiPath.match(/^\\/api\\/battle\\/([^/]+)$/);
      if (battleMatch) return handleGetBattle(battleMatch[1]);

      // /api/aircraft/:id
      var aircraftMatch = apiPath.match(/^\\/api\\/aircraft\\/([^/]+)$/);
      if (aircraftMatch) return handleGetAircraftById(aircraftMatch[1]);

      // /api/weapon/:id
      var weaponMatch = apiPath.match(/^\\/api\\/weapon\\/([^/]+)$/);
      if (weaponMatch) return handleGetWeaponById(weaponMatch[1]);

      // /api/fleet/:id
      var fleetMatch = apiPath.match(/^\\/api\\/fleet\\/([^/]+)$/);
      if (fleetMatch) return handleGetFleetById(fleetMatch[1]);
    }

    // 未知ノ route
    return jsonResponse({
      error: '未知ノ API route: ' + apiPath,
      logs: [{ level: 'error', message: '⚓ [SYSTEM] 未知ノ API route: ' + apiPath }]
    }, 404);
  };

  console.log('⚓ 帝國海軍 API 迎撃裝置、配備完了。全 /api/* 通信ヲ傍受ス。');
})();
`;

writeText("static-api.js", STATIC_API_JS);

// ============================================================
//  完了報告
// ============================================================

console.log("");
console.log("⚓ ====================================");
console.log("⚓  靜的文書生成 完了");
console.log("⚓  帝國海軍ノ全データヲ docs/ ニ格納セリ");
console.log("⚓ ====================================");
