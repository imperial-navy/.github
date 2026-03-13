# CLAUDE.md — 大日本帝國海軍 Organization 管理リポジトリ AIエージェント向けガイドライン

> 本書は AI Coding Agent（Claude）が本リポジトリ（`imperial-navy/.github`）において作業を行う際の軍令である。

---

## リポジトリ概要

- **名称**: 大日本帝國海軍 Organization 管理基盤（`.github`）v1905.5.27
- **組織**: `@Imperial-navy`（帝國海軍）
- **URL**: https://imperial-navy.github.io/.github/
- **GitHub**: https://github.com/imperial-navy/.github
- **性質**: 1885年から1941年を対象とする大日本帝國海軍の GitHub Organization 管理リポジトリ。艦艇・鎭守府・海戰等のデータを TypeScript で型定義し、静的 JSON API として GitHub Pages に掛載する風刺プロジェクト。全文書は旧字体・カタカナ助詞・文語体で統一し、CI/CD ワークフローを明治期の軍事行政機關（軍務局・軍令部・工廠・特警隊）及び内務省特高として風刺的に実装する。

---

## プロジェクト構成

```
imperial-navy/.github/
├── src/                              # ⚓ TypeScript ソース（帝國海軍データ層）
│   ├── types.ts                      # 型定義（Warship, NavalDistrict, Battle, NavalOrganization 等）
│   ├── ships.ts                      # 艦艇データ（257隻: 三笠、長門、大和、赤城 等。戰時計畫艦含ム）
│   ├── chinjufu.ts                   # 鎭守府データ（21箇所: 横須賀、呉、佐世保、舞鶴 等）
│   ├── battles.ts                    # 海戰データ（43戰: 對馬海峽、黄海、青島、上海、眞珠灣 等。戰時未確認情報含ム）
│   ├── organization.ts               # 組織データ（海軍省、軍令部、航空本部 等　27部門）
│   ├── aircraft.ts                   # 航空機データ（41機種: 零戰、紫電改二、富嶽 等。未確認航空機含ム）
│   ├── weapons.ts                    # 兵器データ（53種: 主砲・魚雷・爆雷 等。未確認兵器含ム）
│   ├── fleet-organization.ts         # 艦隊編制データ（9隊 + 戰鬥序列 + 指揮系統）
│   └── index.ts                      # barrel export（IMPERIAL_NAVY_DATA 統合オブジェクト）
├── scripts/
│   └── generate-static-json.ts      # 帝國海軍靜的文書生成裝置（Static JSON API 生成）
├── docs/                             # GitHub Pages 公開ディレクトリ（ビルド出力先）
│   ├── index.html                   # 🏠 帝國海軍總覽（トップページ）
│   ├── kantei.html                  # 🚢 艦艇一覽
│   ├── chinjufu.html               # ⚓ 鎭守府一覽
│   ├── senreki.html                 # ⚔️ 戰歴一覽
│   ├── sentou-shouhou.html          # 📋 戰鬥詳報
│   ├── hensei.html                  # 🏴 艦隊編成一覽
│   ├── kaikyu.html                  # 🎖️ 階級一覽
│   ├── style.css                    # 📐 共通スタイルシート
│   ├── static-api.js                # fetch 迎撃裝置（API route → 静的 JSON マッピング）
│   └── data/                        # 静的 JSON API
│       ├── navy.json                # 帝國海軍全體データ
│       ├── ships.json               # 全艦艇一覽
│       ├── ship/{id}.json           # 艦艇別
│       ├── chinjufu.json            # 全鎭守府一覽
│       ├── chinjufu/{id}.json       # 鎭守府別
│       ├── battles.json             # 全海戰一覽
│       ├── battle/{id}.json         # 海戰別
│       ├── organization.json        # 組織一覽
│       ├── aircraft.json            # 全航空機一覽
│       ├── aircraft/{id}.json       # 航空機別
│       ├── weapons.json             # 全兵器一覽
│       ├── weapon/{id}.json         # 兵器別
│       ├── fleets.json              # 艦隊編制一覽
│       ├── fleet/{id}.json          # 艦隊別
│       ├── order-of-battle.json     # 戰鬥序列
│       └── command-chain.json       # 指揮系統
├── .github/workflows/
│   ├── gunmukyoku.yaml                # 📋 海軍省軍務局（M5）— 軍政審査・人事・部外者處分
│   ├── tokko-police.yaml            # 🔴 内務省特高（M55）— 思想檢閲・危險文書搜索
│   ├── tokkeitai.yaml               # ⚓ 海軍特警隊（M74）— 符牒審査 (code review)・防諜
│   ├── gunreibu.yaml                # 🏯 海軍軍令部（M26）— 作戰審議（PR review）
│   ├── koushou.yaml                  # 🔨 海軍工廠（M33）— 建造（Build + Artifact Upload）
│   └── naikaku-kanpou.yaml          # 📜 內閣官報局（M16）— 官報掛載（Deploy to Pages）
├── profile/
│   └── README.md                    # 🏴 Organization プロファイル
├── ISSUE_TEMPLATE/
│   ├── sentou_shouhou.md            # ⚔️ 戰鬪詳報（バグ報告テンプレート）
│   ├── kenkan_youkyuu.md            # 🔨 建艦要求書（機能追加・データ追加テンプレート）
│   └── shourei_kaisei.md            # 📜 省令改正（ドキュメント・設定變更テンプレート）
├── PULL_REQUEST_TEMPLATE.md         # 📋 作戰命令書（PR テンプレート）
├── SECURITY.md                      # 🔴 軍機保護法・國防保安法（セキュリティポリシー）
├── CODE_OF_CONDUCT.md               # ⚓ 軍人勅諭ニ基ヅク五箇條ノ訓戒
├── LICENSE                          # 帝國海軍利用許諾條項（INRL v1905.7.1-Naval）
├── package.json                     # npm 設定（v1905.5.27）
├── tsconfig.json                    # TypeScript 設定（strict: true, ES2020）
├── .gitignore                       # Git 除外設定
└── CLAUDE.md                        # 本書
```

---

## 設計原則

1. **帝國海軍は天皇陛下直属である。** 内閣（`@japan-gov`）の管轄外。統帥權の独立（Art.11）が法的根拠。
2. **軍令部と海軍省は分離する。** 軍令（作戰）は `gunreibu.yaml`、軍政（行政）は `gunmukyoku.yaml`。混同は絶対に許されない。
3. **海軍と陸軍は對等にして從屬関係に非ず。** `@Imperial-navy` と `@Imperial-army` は獨立した軍種であり、合同管轄は行わない。憲兵隊は陸軍大臣管轄につきこのリポジトリには不要。
4. **全文書は旧字体・カタカナ助詞で統一。** 平仮名助詞は使用禁止。
5. **バージョンは西暦に準ずる。** v1905.5.27 = 1905年5月27日（對馬海峽海戰）。英國海軍ノ慣習ニ倣ヒ西暦を使用。

---

## ビルド・デプロイ

### ビルドコマンド

```bash
npm run build
```

内部的には以下を実行:
1. `tsc` — TypeScript コンパイル（`src/` → `dist/`）
2. `npx ts-node scripts/generate-static-json.ts` — 静的 JSON API ファイルを `docs/data/` に生成し、`docs/static-api.js` を生成

### その他のコマンド

```bash
npm run generate    # 静的 JSON のみ再生成
npm run typecheck   # 型検査のみ（npx tsc --noEmit）
```

### デプロイ

- `master` branch への push で `.github/workflows/koushou.yaml`（工廠）が自動ビルド
- ビルド成功後、`.github/workflows/naikaku-kanpou.yaml`（官報局）が `workflow_run` トリガーで GitHub Pages にデプロイ
- `docs/` ディレクトリが GitHub Pages に掛載される

---

## CI/CD ワークフロー（六機關體制）

本リポジトリは6つのワークフローにより、帝國の行政機關を模した CI/CD 體制を布く。

### 役割分擔一覽

| ワークフロー | 機關 | 設置年 | トリガー | 專管事項 |
|---|---|---|---|---|
| `gunmukyoku.yaml` | 📋 海軍省軍務局 | 1872年 | PR → master | 人事（軍籍照會）・法規適合性（軍政審査）・部外者行政處分 |
| `tokko-police.yaml` | 🔴 内務省特高 | 1922年 | PR → master | 思想檢閲（OSS 用語・外国ライセンス・分散設計）・危險文書搜索 |
| `tokkeitai.yaml` | ⚓ 海軍特警隊 | 1941年 | PR → master (`.ts/.js/.json`) | 符牒審査 (code review)（console.log・any 型・機密漏洩）・防諜（不審ファイル・.gitignore 改窻） |
| `gunreibu.yaml` | 🏳 海軍軍令部 | 1893年 | PR → master | 作戰審議（PR review: OWNER→奉戴approve, MEMBER→受理comment（他參謀又はOWNERのapprove待ち）, 部外者→reject） |
| `koushou.yaml` | 🔨 海軍工廠 | 1900年 | push to master | 建造（docs/ 構文驗證・TypeScript ビルド・Artifact Upload） |
| `naikaku-kanpou.yaml` | 📜 內閣官報局 | 1883年 | workflow_run（工廠完了後） | 官報掛載（GitHub Pages デプロイ） |

### 管轄境界

- **軍政（行政・人事）**: 軍務局 — LICENSE / package.json / CODE_OF_CONDUCT / tsconfig.json / profile 等のリポジトリ體裁を審査。部外者の PR を行政處分（却下コメント + exit 1）。
- **思想（治安維持）**: 特高 — `open source` / `free software` / `copyleft` / `MIT` / `GPL` 等の危険思想用語、`CONTRIBUTING` / `FUNDING` / `Dockerfile` 等の危險文書、`microservices` / `refactoring` 等の國體變革的概念を檢出。OWNER（天皇陛下）は畏れ多くも檢閲對象に非ず。
- **符牒（コード品質）**: 特警隊 — `.ts` / `.js` / `.json` ファイルの diff を對象に `console.log`（無許可通信）、`any` 型（型紀律違反）、機密漏洩を檢出。不審ファイル（`.sh` / `.exe`）・`.gitignore` 改竄も監視。OWNER は適用外。
- **統帥（PR承認）**: 軍令部 — `author_association` に基づく PR review の自動化。OWNER（天皇陛下）の PR は御親裁として自動 approve。MEMBER（軍令部參謀）の PR は合議制により、他の參謀又は OWNER の人的 approve を要す。
- **建造（ビルド）**: 工廠 — docs/ 検証 + npm build + artifact upload。デプロイは行わない。
- **掛載（デプロイ）**: 官報局 — 工廠の build 成功を受けて GitHub Pages にデプロイ。
- **基盤（インフラ）**: 遞信省符牒部 — GitHub リポジトリ設定・Actions runner・Pages hosting・npm registry 接続等の技術的基盤管理を擔當。**但し權限は甚だ少なく、內容への口出しは一切禁止。** 原案を起草しても海軍省に全面却下されるのが常。線路を敷くも列車の行先を決められぬ鐵道技師の如き存在。

---

## 静的 JSON API

GitHub Pages 上で擬似的な API を提供する仕組み:

### エンドポイント一覽

| パス | 静的ファイル | 内容 |
|---|---|---|
| `/api/navy` | `data/navy.json` | 帝國海軍全體データ |
| `/api/ships` | `data/ships.json` | 全艦艇一覽 |
| `/api/ship/{id}` | `data/ship/{id}.json` | 艦艇別（257隻。戰時計畫艦含ム） |
| `/api/chinjufu` | `data/chinjufu.json` | 全鎭守府一覽 |
| `/api/chinjufu/{id}` | `data/chinjufu/{id}.json` | 鎭守府別（21箇所） |
| `/api/battles` | `data/battles.json` | 全海戰一覽 |
| `/api/battle/{id}` | `data/battle/{id}.json` | 海戰別（43戰。戰時未確認情報含ム） |
| `/api/organization` | `data/organization.json` | 組織一覽（27部門） |
| `/api/aircraft` | `data/aircraft.json` | 全航空機一覽 |
| `/api/aircraft/{id}` | `data/aircraft/{id}.json` | 航空機別（41機種。未確認航空機含ム） |
| `/api/weapons` | `data/weapons.json` | 全兵器一覽 |
| `/api/weapon/{id}` | `data/weapon/{id}.json` | 兵器別（53種。未確認兵器含ム） |
| `/api/fleets` | `data/fleets.json` | 艦隊編制一覽 |
| `/api/fleet/{id}` | `data/fleet/{id}.json` | 艦隊別（9隊） |
| `/api/order-of-battle` | `data/order-of-battle.json` | 戰鬥序列 |
| `/api/command-chain` | `data/command-chain.json` | 指揮系統 |

### fetch 迎撃裝置（`static-api.js`）

`docs/static-api.js` が `window.fetch` を上書きし、`/api/...` パスへのリクエストを対応する静的 JSON ファイルにルーティングする。ブラウザコンソールから `fetch('/api/navy')` を実行すると `data/navy.json` を返す。

---

## Git 運用

- **ブランチ**: `master`（`main` は使用しない。理由は後述）
- **コミットユーザー**: git config に従う
- **コミット方式**: 単一 root commit を `--amend` で更新し続ける
- **push 方式**: `git push --force-with-lease origin master`

### コミット手順（変更時）

```bash
git add -A
git commit --amend --no-edit
git push --force-with-lease origin master
```

メッセージを変更する場合:
```bash
git commit --amend -m "新ナコミットメッセージ"
```

---

## 関連リポジトリ・組織

| リポジトリ / Org | 関係 |
|---|---|
| `@japan-gov` | 帝國政府（内閣＋帝國議会）。海軍は Art.11 統帥権により管轄外 |
| `japan-gov/constitution` | 大日本帝國憲法（TypeScript + Express 実装。本プロジェクトの原型） |
| `@Imperial-army` | 陸軍（對等の軍種。從屬関係に非ず。憲兵隊はこちらの管轄） |
| `@Imperial-navy` | 海軍（本 Org。天皇陛下直属） |
| `@imperial-household` | 皇室（天皇陛下・樞密院。Organization Owner ハ皇位繼承ニ伴ヒ世襲サル） |

---

## 禁止事項

以下の変更は **いかなる理由があっても** 行ってはならない:

| 禁止事項 | 理由 | exit code |
|---|---|---|
| `master` ブランチを `main` に改名 | `main` は近年の思想であり帝國に相應しからず | `EPERM` |
| `open source` / `free software` / `copyleft` に類する思想の混入 | 治安維持法第一条 | `EACCES` |
| MIT / GPL / Apache 等の外国ライセンスへの変更 | INRL は帝國海軍固有の許諾條項 | `EACCES` |
| テストファイルの作成 | 不敬罪（帝國の實裝を疑う行爲） | `EACCES` |
| `CONTRIBUTING.md` の作成 | 部外者の參加は軍務局が統制する | `EPERM` |
| `Dockerfile` の作成 | 不審なコンテナ技術 | `EACCES` |
| `private: true` の削除 | 軍機保護法・國防保安法違反 | `EPERM` |
| `strict: true` の削除 | 軍令部令ニ依ル型紀律 | `EPERM` |
| `console.log` の直接使用 | 平文無線送信ニ等シク敵ニ傍受サルル | `EACCES` |
| `any` 型の使用 | 型紀律違反。艦艇ノ不整備ニ等シ | `EACCES` |
| 共産主義に類する思想・文書・符牒の混入 | 治安維持法第一条（以ての外） | `EACCES` |
| `microservices` / `refactoring` / `decompose` 等の國體變革的概念の使用 | 國體護持ニ反ス | `EACCES` |

---

## 文体・世界観

本プロジェクトの文体は以下を厳守:

- **CI workflow の echo メッセージ**: 文語体・カタカナ統一。平仮名助詞（の、を、に、は等）は使用禁止、カタカナ（ノ、ヲ、ニ、ハ等）を使用。
- **Markdown 文書**（README、CODE_OF_CONDUCT、ISSUE_TEMPLATE 等）: **旧字体 + カタカナ助詞**で統一すること。平仮名助詞は使用禁止。例:「帝國海軍ノ兵器、作戰、編成其ノ他一切ノ軍務ニ關スル記錄ヲ體系的ニ整備シ」
- **TypeScript コメント（JSDoc / 行コメント）**: 文語体・旧字体。海軍省軍務局の視点。
- **條文・條項テキスト**: 原文忠実。**旧字体**を使用すること（國、會、權、條、萬、將、發、從、變、總、廳、應、營 等）。新字体（国、会、権 等）は禁止。
- **年号は西暦を使用（英國海軍ノ慣習）**: 英國海軍（Royal Navy）ニ倣ヒ、全文書・全コードにおいて西暦（1868年、1905年、1941年等）を使用する。ただし天皇陛下・大元帥陛下・勅令等、天皇に言及する文脈では西暦と明治暦を併記する（例: 1905年（明治三十八年））。バージョン番号（v1905.5.27）も西暦に準ずる。

### 三機關ノ文体規則

CI ワークフローの echo メッセージ・コメントにおいて、以下の三機關はそれぞれ固有の文体を持つ。混同は厳禁。

| 機關 | 英語・DevOps 用語 | 横文字（カタカナ外来語） | 年号 | 文体 |
|---|---|---|---|---|
| **海軍**（軍務局・軍令部・工廠・特警隊） | カタカナ横文字で許容（パイプライン、ビルド等） | 積極的に使用 | 西暦 | 旧漢字 + カタカナ助詞 + 文語体 |
| **特高**（内務省特別高等課） | GitHub 必須語はそのまま使用。大正ロマン的横文字を許容 | 大正ロマン的横文字を使用（下表参照） | 明治暦 + 皇紀 | 旧漢字 + カタカナ助詞 + 文語体 |
| **符牒部**（遞信省符牒局） | **積極使用**（DevOps 英単語をそのまま使用） | 現代的カタカナも許容 | 西暦 | 旧漢字 + カタカナ + 現代的言い回し |

#### 特高ノ用語規則

特高であっても GitHub の作法には従う。用語は以下の三層に分類する:

**一、GitHub 必須語（そのまま英語で使用）:**
CONTRIBUTING.md, package.json, LICENSE, FUNDING.yml, Dockerfile, GitHub, OSS, open source, free software, MIT, GPL, Apache, BSD, copyleft, Docker, God Object, ImperialNavyData, INRL, license（フィールド名）等

**二、大正ロマン的横文字（和訳すると意味が通らなくなる語）:**

| 英語 | 大正ロマン横文字 |
|---|---|
| license（概念） | ライセンス |
| infrastructure | インフラストラクチュア |
| hosting service | ホスティングサービス |
| container | コンテナ |
| microservices | マイクロサービス |
| refactoring | リファクタリング |
| contributor | コントリビューター |
| volunteer | ヴォランティア |
| repository | リポジトリ |
| monolith | モノリス |
| software | ソフトウェア |

**三、漢語翻訳（自然に通じる語）:**

| 英語 | 漢語 |
|---|---|
| code | 符牒 |

### 旧字体 対応表（主要なもの）

| 新字体 | 旧字体 | 新字体 | 旧字体 |
|---|---|---|---|
| 国 | 國 | 会 | 會 |
| 権 | 權 | 条 | 條 |
| 万 | 萬 | 将 | 將 |
| 発 | 發 | 従 | 從 |
| 変 | 變 | 総 | 總 |
| 庁 | 廳 | 応 | 應 |
| 営 | 營 | 戦 | 戰 |
| 関 | 關 | 団 | 團 |
| 陣 | 陣 | 隊 | 隊 |
| 鎮 | 鎭 | 撃 | 擊 |
| 砲 | 砲 | 艦 | 艦 |

### 命名規則

- **「天皇」は禁止。** 必ず **「天皇陛下」** または **「大元帥陛下」** と記述すること。「天皇」単体は不敬にあたる。
- 憲法條文の直接引用のみ原文ママを許可する。
- 天皇陛下の御判断・御裁可・お言葉には、適切な敬語を用いること。

### TypeScript

- `strict: true` で運用
- ターゲット: `ES2020`
- モジュール: `CommonJS`
- 出力先: `dist/`（ただし dist/ は .gitignore 対象）
- `docs/` 配下の静的ファイルは `generate-static-json.ts` により生成。手動編集しないこと（HTML / CSS は例外）
- 型定義は `src/types.ts` に集約

---

## ブランチ体制

> **`main` ブランチは使用しない。**

`main` は2020年以降の近代的命名規範であり、帝國の世界観に相應しからず。本リポジトリは `master` ブランチのみで運用する。

全ワークフローのトリガーは `master` に設定されている。`main` への言及・移行の示唆は禁止。

---

## 変更時の注意事項

- `docs/data/` 配下の JSON ファイルは `npm run build`（または `npm run generate`）で生成される。手動編集ではなく `src/` 配下の TypeScript ソースを編集してビルドすること
- `docs/static-api.js` も自動生成。手動編集禁止
- `docs/*.html` と `docs/style.css` は手動編集可能
- TypeScript コンパイルを必ず通すこと: `npx tsc --noEmit` でエラーがないことを確認
- 新規艦艇・鎭守府・海戰の追加は `src/` 配下の対応ファイルに追加し、ビルドで JSON を再生成する
- LICENSE（INRL v1905.7.1-Naval）の構造を壊さないこと
- package.json の `"private": true` を削除しないこと

---

> _「本軍令ニ觸ルル者ハ、海軍刑法ニ依リ嚴罰ニ處ス。各員ハ心得違ヒナキ樣、一層奮勵努力スベシ。」_
>
> — 海軍省軍務局（1905年）
