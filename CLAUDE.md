# CLAUDE.md — 海軍省官房（`.github`）AIエージェント向けガイドライン

> 本書は AI Coding Agent（Claude）が本リポジトリ（`imperial-navy/.github`）において作業を行う際の軍令である。

---

## リポジトリ概要

- **名称**: 海軍省官房（`.github`）— 組織管理専用リポジトリ
- **組織**: `@Imperial-navy`（帝國海軍）
- **GitHub**: https://github.com/imperial-navy/.github
- **性質**: GitHub Organization のメタ情報（組織プロフィール・組織共通の community health files）のみを管理する。**プロジェクト本体（データ・サイト・CI/CD）は [`imperial-navy/kaigun`](https://github.com/imperial-navy/kaigun) にあり、本リポジトリには一切置かない。**

---

## プロジェクト構成

```
imperial-navy/.github/
├── profile/
│   └── README.md                # 🏴 組織旗章（organization profile。組織トップページに表示）
├── ISSUE_TEMPLATE/              # 組織共通デフォルトの Issue 樣式
│   ├── sentou_shouhou.md        # ⚔️ 戰鬪詳報（バグ報告）
│   ├── kenkan_youkyuu.md        # 🔨 建艦要求書（機能追加）
│   └── shourei_kaisei.md        # 📜 省令改正（ドキュメント・設定變更）
├── PULL_REQUEST_TEMPLATE.md     # 📋 作戰命令書（組織共通デフォルト）
├── SECURITY.md                  # 🔴 軍機保護法・國防保安法
├── CODE_OF_CONDUCT.md           # ⚓ 軍人勅諭ニ基ヅク五箇條ノ訓戒
├── LICENSE                      # 帝國海軍利用許諾條項（INRL v1905.7.1-Naval）
├── README.md                    # 官房ノ案内（記錄本體 kaigun ヘノ誘導）
└── CLAUDE.md                    # 本書
```

これらの community health files は GitHub の仕様により、組織内の全リポジトリ（個別に同名ファイルを持たないもの）へデフォルト適用される。

---

## 禁止事項

- **プロジェクト本体のコード（src/・docs/・scripts/・workflows・package.json 等）を本リポジトリに追加してはならない。** それらは `kaigun` の管轄である。
- `master` ブランチを `main` に改名してはならない。
- 文体規則（旧字体・カタカナ助詞・文語体）は kaigun の CLAUDE.md に定める規則に従う。
- 「天皇」単体の表記は禁止。必ず「天皇陛下」または「大元帥陛下」と記述すること。

---

## Git 運用

- **ブランチ**: `master` のみ
- **コミット方式**: 単一 root commit を `--amend` で更新し続ける
- **push 方式**: `git push --force-with-lease origin master`

---

## 関連リポジトリ・組織

| リポジトリ / Org | 関係 |
|---|---|
| `imperial-navy/kaigun` | 記錄本體（データ・サイト・CI/CD 六機關）。詳細な軍令は同リポジトリの CLAUDE.md を参照 |
| `@japan-gov` | 帝國政府（内閣＋帝國議会）。海軍は Art.11 統帥権により管轄外 |
| `@Imperial-army` | 陸軍（對等の軍種。從屬関係に非ず） |
| `@imperial-household` | 皇室（天皇陛下・樞密院。Organization Owner ハ皇位繼承ニ伴ヒ世襲サル） |

---

> _「本軍令ニ觸ルル者ハ、海軍刑法ニ依リ嚴罰ニ處ス。各員ハ心得違ヒナキ樣、一層奮勵努力スベシ。」_
>
> — 海軍省軍務局（1905年）
