# Portfolio

ガジェット × ドットピクセル × 単色アクセント（ブランドオレンジ）の
日本企業向けポートフォリオサイト。フルページ scroll-snap（6 セクション）
＋プロジェクト詳細ページ構成。

- Framework: Next.js 14 (App Router, `output: 'export'`)
- Styling: Tailwind CSS（3 層トークン: primitive → semantic → component）
- Fonts: DotGothic16 / Zen Kaku Gothic New / DM Sans / JetBrains Mono
- Motion: framer-motion（`prefers-reduced-motion` 尊重）

## 開発

```sh
npm install
npm run dev       # http://localhost:3000
npm run build     # 静的エクスポート → out/
```

## 構成

- [`src/app/page.tsx`](src/app/page.tsx) — トップ（6 snap sections）
- [`src/app/works/[id]/page.tsx`](src/app/works/[id]/page.tsx) — 詳細（`generateStaticParams`）
- [`src/components/`](src/components/) — UI コンポーネント
- [`src/data/portfolio.ts`](src/data/portfolio.ts) — 作品データ
- [`src/data/profile.ts`](src/data/profile.ts) — 自己紹介・スキル・経歴
- [`docs/design-spec.md`](docs/design-spec.md) — デザイン仕様書

## 要差し替え

- [`src/data/profile.ts`](src/data/profile.ts) 内の `about.name` / `email` / `bio`
- [`src/data/portfolio.ts`](src/data/portfolio.ts) 内の作品データ（現状は Unsplash URL）
- [`public/`](public/) 下に独自画像を置く場合は [`next.config.js`](next.config.js) の `remotePatterns` も更新
</content>
</invoke>