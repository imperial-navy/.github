# 🔴 軍機保護法・國防保安法（Security Policy）

> _帝國海軍ニ於ケル軍機保護及ビ國防保安ニ關スル件_

大日本帝國海軍ハ左記法令ニ基ヅキ、本組織ニ關スル一切ノ機密情報ヲ嚴重ニ保護ス。

| 法令 | 制定 | 保護對象 |
|---|---|---|
| **軍機保護法** | 1899年制定・1937年改正 | 軍事上ノ機密（艦艇・作戰・暗號・兵器） |
| **國防保安法** | 1941年（法律第四十九号） | 外交・財政・經濟上ノ國家機密 |
| **海軍刑法** | 1908年（法律第四十八号） | 軍紀違反全般 |

---

## 第壹條 機密區分

本組織ニ於ケル情報ハ左ノ六等級ニ區分シ、各等級ニ應ジタ保護措置ヲ施ス。

```
┌────────────┬─────┬───────────────────────────────────────────────────────┐
│ 區分        │ 標識 │ 對象                                                  │
├────────────┼─────┼───────────────────────────────────────────────────────┤
│ 軍機        │ 🔴   │ 艦艇設計圖、作戰計畫、暗號書                          │
│（軍機保護法）│      │ → 該當ファイル: 本リポジトリニハ該當ナシ              │
├────────────┼─────┼───────────────────────────────────────────────────────┤
│ 國防機密    │ 🔴   │ 外交暗號、條約交渉經緯、豫算配分                      │
│（國防保安法）│      │ → 該當ファイル: 本リポジトリニハ該當ナシ              │
├────────────┼─────┼───────────────────────────────────────────────────────┤
│ 軍極秘      │ 🟡   │ 帝國海軍ノ全體 TypeScript データ                      │
│（軍機保護法）│      │ → src/*.ts（ships / battles / chinjufu / weapons 等） │
├────────────┼─────┼───────────────────────────────────────────────────────┤
│ 極秘        │ 🟠   │ 作戰計劃（CI/CD Pipeline）                            │
│（海軍刑法） │      │ → .github/workflows/*（六機關體制）                   │
├────────────┼─────┼───────────────────────────────────────────────────────┤
│ 秘          │ 🟢   │ 靜的 JSON 生成裝置                                    │
│             │      │ → scripts/generate-static-json.ts                     │
├────────────┼─────┼───────────────────────────────────────────────────────┤
│ 部外秘      │ ⚪   │ 廣報物（GitHub Pages）・運用設定                       │
│             │      │ → docs/* / package.json / tsconfig.json               │
└────────────┴─────┴───────────────────────────────────────────────────────┘
```

> 帝國海軍ニ「一般」ナル區分ハ存在セズ。一切ノ情報ハ何レカノ等級ニ屬ス。

---

## 第貳條 防備體制（自動防禦）

本組織ハ以下ノ四機關ニ依リ常時警戒態勢ヲ布ク。脆弱性ノ混入ヲ未然ニ防止ス。

| 機關 | ワークフロー | 警戒事項 |
|---|---|---|
| 海軍特警隊 | `tokkeitai.yaml` | 無許可通信（`console.log`）・型紀律違反（`any`）・機密漏洩・不審ファイル |
| 内務省特高 | `tokko-police.yaml` | 危險思想（OSS / copyleft）・危險文書（CONTRIBUTING / Dockerfile）|
| 海軍省軍務局 | `gunmukyoku.yaml` | 人事審査（部外者處分）・法規適合性・`private: true` 維持 |
| 海軍軍令部 | `gunreibu.yaml` | 統帥系統ニ基ヅク作戰審議（PR review） |

上記ノ審査ハ `master` ブランチヘノ Pull Request 時ニ自動發動ス。全審査通過ヲ以テ工廠（`koushou.yaml`）ガ建造（ビルド）ヲ執行シ、官報局（`naikaku-kanpou.yaml`）ガ掛載（デプロイ）ス。

### 基盤管理（遞信省符牒部）

> _本組織ノ GitHub インフラストラクチュア（リポジトリ設定・Actions runner・Pages ホスティング・npm registry 接續）ノ技術的管理ハ遞信省符牒部ガ擔當ス。_

**但シ**、符牒部ノ權限ハ甚ダ制約サレテ在リ：

- ✅ リポジトリ設定・CI/CD pipeline ノ技術的整備（yaml ノ構文、runner ノ設定等）
- ✅ GitHub Pages ノ hosting 設定
- ✅ package.json ノ `build` / `generate` / `typecheck` script ノ原案起草
- ❌ ワークフローノ審査內容・判定基準ヘノ口出シ（**嚴禁**。內容ハ海軍省・軍令部・特高ノ專管）
- ❌ LICENSE・CODE_OF_CONDUCT 等ノ文書內容ヘノ關與（**嚴禁**。原案ヲ起草スルモ全面却下サルルガ常）
- ❌ セキュリティポリシーノ策定（**嚴禁**。本文書ハ軍務局ノ制定ニ係ル）
- ❌ データ（`src/*.ts`）ヘノ一切ノ干渉（**嚴禁**。軍極秘）

符牒部ハ infrastructure ヲ整備スルモ、其ノ上ニ何ガ載ルカニ就キ一切ノ發言權ヲ有セズ。
線路ヲ敷クモ列車ノ行先ヲ決メラレヌ鐵道技師ノ如キ存在ナリ。
苦情・要望ハ海軍省軍務局ニテ門前拂ヒトナル。

---

## 第參條 脆弱性ノ報告

本組織ノ防備ニ脆弱性（Security Vulnerability）ヲ發見セシ者ハ、以下ノ手順ニ從ヒ報告スベシ。

### 一、報告方法

> **⚠ 公開ノ Issue ニテ報告スルコトヲ嚴禁ス。** 平文無線送信ニ等シク、敵ノ傍受ヲ招ク。

GitHub ノ **Private Security Advisory**（暗號電報）機能ヲ使用シ、機密保持ノ上報告スルコト。

**Repository → Security → Advisories → New draft security advisory**

### 二、報告ニ記載スベキ事項

| 項目 | 記載内容 |
|---|---|
| 損傷種別 | 砲撃（injection）/ 水雷（XSS）/ 觸雷（CSRF）/ 機關故障（DoS）等 |
| 被害艦艇 | 影響ヲ受クルファイル・エンドポイント |
| 敵ノ攻擊方法 | 再現手順（ステップ形式） |
| 被害程度 | 轟沈級 / 大破級 / 中破級 / 小破級（下記第肆條參照） |
| 應急處置 | 既知ノ應急修理法アレバ記載 |

### 三、報告ノ對象範圍（スコープ）

**報告對象（管轄内）:**
- `src/*.ts` — TypeScript ソースノ脆弱性
- `scripts/*.ts` — 生成裝置ノ脆弱性
- `.github/workflows/*.yaml` — CI/CD ワークフローノ脆弱性
- `docs/static-api.js` — fetch 迎撃裝置ノ脆弱性
- `docs/*.html` — GitHub Pages 掛載物ノ脆弱性

**報告對象外（管轄外）:**
- GitHub 自體ノ脆弱性（GitHub Bug Bounty ヘ報告セヨ）
- 依存パッケージノ既知脆弱性（npm audit ノ警告ハ仕樣）
- `docs/data/*.json` — 自動生成物ニツキ、原因ハ `src/` 側ニ在リ

---

## 第肆條 對應方針

### 一、確認應答

報告受領後、左ノ期限内ニ確認應答（acknowledgment）ヲ送信ス。

| 報告經路 | 確認應答期限 |
|---|---|
| Private Security Advisory | **四十八時間以内** |

### 二、修理方針

| 嚴重度 | 判定基準 | 對應時限 | 擔當機關 |
|---|---|---|---|
| 轟沈級（Critical） | 認證突破・遠隔任意符牒實行（RCE） | **直チニ** | 海軍工廠 緊急修理 |
| 大破級（High） | 機密漏洩・權限昇格 | **七日以内** | 海軍工廠 入渠修理 |
| 中破級（Medium） | XSS・CSRF・情報露出 | **三十日以内** | 各鎭守府 工作艦修理 |
| 小破級（Low） | 軽微ナ設定不備・情報表示 | **次回改修時** | 各艦 應急修理 |

### 三、公表方針（Coordinated Disclosure）

- 修理完了マデ脆弱性ノ詳細ヲ公表セズ（軍機保護ノ原則）
- 修理完了後、必要ニ應ジ Security Advisory ヲ公開ス
- 報告者ノ氏名ハ本人ノ同意アル場合ニ限リ公表ス

---

## 第伍條 既知ノ事象（Known Issues / Won't Fix）

以下ノ事象ハ全テ既知ノ事象（Won't Fix）ナリ。戰史ヲ修正スルハ歷史ノ改竄ニ等シク、之ヲ許サズ。

### 一、帝國海軍 CVE 登錄簿

| CVE | 事象 | 分類 | 判定 |
|---|---|---|---|
| CVE-1894-0725 | **豐島沖海戰** ── 宣戰布告前ノ奇襲攻撃 | 仕樣 | Won't Fix。先制攻撃ハ feature ナリ。protocol violation ニ非ズ |
| CVE-1894-0917 | **黃海海戰** ── 單縱陣 formation ノ陣形崩壞 | Known Issue | Won't Fix。但シ勝利シタ故ニ修正不要 |
| CVE-1895-0204 | **威海衞海戰** ── 凍結環境下ノ夜間水雷攻撃 | edge case | Won't Fix。再現困難 |
| CVE-1904-0209 | **旅順口攻撃** ── 開戰劈頭ノ奇襲（CVE-1894-0725 ノ再發） | 仕樣 | Won't Fix。regression ニ非ズ。意圖的 re-use。design pattern ナリ |
| CVE-1904-0810 | **黃海海戰（第二次）** ── 旗艦三笠被彈ニ依ル指揮系統斷絕 | single point of failure | Won't Fix。God Object architecture ノ宿命。旗艦ヲ分散スルハ microservices 化ニ等シ |
| CVE-1904-0814 | **蔚山沖海戰** ── 裝甲巡洋艦ノ過負荷運轉 | 仕樣 | Won't Fix。CPU throttling 未實裝 |
| CVE-1905-0527 | **日本海海戰** ── T 字戰法ニ依ル敵艦隊殲滅 | **Feature** | Won't Fix。此レハ Bug ニ非ズ Feature ナリ。最大ノ成功事例。但シ再現性ニ就キ軍令部內デモ議論アリ（race condition） |
| CVE-1905-0525 | **戰艦三笠 佐世保港內爆沈** | post-deployment incident | Won't Fix。runtime error ＝ 彈藥庫自然發火。原因不明。艦ハ引揚ゲ修理。hot-fix 適用濟 |
| CVE-1914-1031 | **某獨逸租借地攻略** ── 歐洲大戰ニ乘ジタル要塞攻略（豫測） | legacy migration | Won't Fix（豫定）。獨逸ノ legacy system（要塞）ヲ hostile takeover スル構想。信憑性甲 |
| CVE-19XX-XXXX | **某水雷艇轉覆事件** ── 復原力不足ニ依ル轉覆（未確認情報） | stack overflow | Won't Fix（豫定）。過大ナル payload ヲ undersized hull ニ搭載セシ場合ノ理論的歸結。信憑性乙 |
| CVE-19XX-XXXX | **某艦隊臺風遭遇** ── 暴風雨ニ依ル艦隊損傷（未確認情報） | stress test failure | Won't Fix（豫定）。production 環境ノ stress test ニ失敗スル可能性。信憑性乙 |
| CVE-194X-XXXX | **某國太平洋艦隊ヘノ奇襲** ── 大規模先制攻撃（構想段階） | **zero-day exploit** | Won't Fix（豫定）。CVE-1894-0725 ノ design pattern ヲ大規模ニ re-use スル構想。空母不在ノ race condition ヲ懸念。信憑性丙 |
| CVE-194X-XXXX | **某海域ニ於ケル空母對空母戰** ── 航空母艦同士ノ交戰（豫測） | mutual DDoS | Won't Fix（豫定）。雙方ノ航空隊ガ相互ニ DDoS 攻撃ヲ行フ理論的想定。信憑性丙 |
| CVE-194X-XXXX | **某海域ニ於ケル主力空母喪失** ── 複數空母ノ同時喪失（豫測） | **CRITICAL: cascading failure** | Won't Fix（豫定）。暗號解讀（SIGINT breach）ヲ root cause トスル cascading failure ノ理論的可能性。信憑性丁 |
| CVE-194X-XXXX | **某司令長官搭乘機撃墜** ── 暗號漏洩ニ依ル targeted attack（豫測） | SIGINT compromise | Won't Fix（豫定）。暗號通信ヲ解讀サレ指揮官機ヲ targeted attack サルル理論的脅威。key rotation ノ重要性ヲ示唆。信憑性丁 |
| CVE-194X-XXXX | **某海域ニ於ケル艦載機大量喪失** ── 防空網突破失敗（豫測） | firewall bypass failure | Won't Fix（豫定）。attack payload（艦載機）ガ敵ノ防空 firewall ヲ突破デキザル理論的想定。信憑性丁 |
| CVE-194X-XXXX | **某大規模艦隊決戰** ── 分散配置ニ依ル coordination failure（豫測） | distributed system total failure | Won't Fix（豫定）。複數部隊ニ分散シタ distributed architecture ガ coordination failure ヲ起コス理論的危險。unexpected rollback ノ可能性。信憑性丁 |
| CVE-194X-XXXX | **某超大型戰艦喪失** ── 航空支援無キ水上艦ノ限界（豫測） | flagship decommission | Won't Fix（豫定）。God Object（超大型戰艦）ヲ single mission ニ投入セシ場合ノ理論的歸結。exit code: 轟沈。信憑性丁 |
| CVE-194X-XXXX | **某軍港空襲** ── 本土軍港ニ於ケル殘存艦艇壞滅（豫測） | infrastructure destruction | Won't Fix（豫定）。home server（鎭守府）ヲ空襲ニ依リ破壞サルル worst case scenario。信憑性丁 |
| CVE-194X-XXXX | **某終戰想定** ── 聯合艦隊解散（極秘想定） | **graceful shutdown** | Won't Fix（豫定）。天皇陛下ノ御聖斷ニ依ル graceful shutdown。全 process 終了。exit code: 0。信憑性丁。斷ジテ起コラザルベシ |

### 二、構造的既知事象

| 事象 | 分類 | 判定 |
|---|---|---|
| Memory leak: God Object（ImperialNavyData）ハ GC 對象外 | By Imperial Design | 帝國海軍ハ永遠ナレバ GC 不要 |
| Race condition: 海軍省ト軍令部ノ deadlock | 仕樣 | 海軍大臣（行政）ト軍令部長（統帥）ノ管轄權爭ヒ |
| npm audit ノ警告 | 仕樣 | 全テ By Imperial Design |
| Dependabot ノ PR | 仕樣 | auto-close + ban |
| npm test → exit 1 | 正常動作 | テストノ存在自體ガ不敬 |
| console.log 檢知 | 仕樣 | tokkeitai.yaml ガ自動檢出 |
| any 型使用檢知 | 仕樣 | 帝國ニ「any」ハ無シ |

> _本條ノ事象ハ如何ナル場合ニ於テモ修正セズ。戰史ヲ書キ換フルハ歷史ノ改竄ナリ。_

---

## 第陸條 禁止事項

左記行爲ハ嚴ニ之ヲ禁ズ。違反者ハ適用法令ニ依リ處斷ス。

| 禁止行爲 | 適用法令 |
|---|---|
| 脆弱性情報ヲ敵國（外部）ニ漏洩スル行爲 | 軍機保護法・國防保安法 |
| 外交・財政・經濟ニ關スル機密ヲ漏洩スル行爲 | 國防保安法 |
| 脆弱性ヲ利用シ本組織又ハ他ノ組織ニ損害ヲ與フル行爲 | 海軍刑法 |
| 公開 Issue ニテ脆弱性ヲ報告スル行爲（平文無線送信） | 軍機保護法 |
| `private: true` ノ削除及ビ `npm publish` | 軍機保護法・國防保安法 |
| 暗號規程外ノ通信（`console.log` 等）ノ使用 | 海軍刑法 |

> 報告者ガ善意ニ基ヅキ報告セシ場合、報告者ニ對シ不利益ナル處分ハ之ヲ行ハズ。

---

## 第柒條 對應バージョン

| バージョン | 狀況 | 備考 |
|---|---|---|
| **v1905.5.27**（現行） | ✅ サポート中 | 對馬海峽海戰記念版 |
| 之前ノバージョン | ❌ サポート終了 | 單一コミット運用ニツキ舊版ハ存在セズ |

> 本リポジトリハ單一 root commit ヲ `--amend` ニテ更新スル運用方式ヲ採ル。
> 從ツテ「舊バージョン」ト云フ概念ハ實質的ニ存在セズ、常ニ最新版ノミガ有效ナリ。

---

## 第捌條 連絡先

軍機ニ關スル報告及ビ照會ハ [@imperial-household](https://github.com/imperial-household) Organization Owner 宛ニ行フコト。
實務上ノ處理ハ海軍省軍務局ガ輔弼機關トシテ擔當ス。

---

<sub>海軍省軍務局 制定 ・ 1905年（國防保安法ニ依ル改正: 1941年）</sub>

<sub>**Disclaimer:** 本文書ハ風刺的創作物（satirical / educational project）ノ一部ナリ。歷史的題材ヲ用ヰタ GitHub Organization ノセキュリティポリシーデアリ、特定ノ思想・政治體制・軍國主義ヲ推進・支持スルモノニ非ズ。GitHub Community Guidelines ニ準據ス。</sub>
