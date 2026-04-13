# Design Specification — Portfolio Site

## Overview

対日本企業向けポートフォリオサイト。ガジェット感・ドットピクセル日本語フォントを軸にした世界観。
フルページスクロールスナップ（6セクション）＋プロジェクト詳細ページの構成。

---

## Figma File

- **File**: `Portfolio — Design System & Screens`
- **Pages**:
  - 🎨 Design Tokens — カラー、タイポグラフィ、スペーシング、エフェクト
  - 🧩 Components — ボタン、タグ、LED、フィルター、ステータスバー
  - 📱 Mobile (375px) — モバイル画面キャプチャ
  - 💻 Desktop (1440px) — デスクトップ画面キャプチャ
  - 📄 Project Detail — プロジェクト詳細ページ

---

## Color System

### Brand
| Token | Value | Usage |
|-------|-------|-------|
| `brand` | `#FF8C32` | 主要アクション、アクセント |
| `brand-light` | `#FFB366` | ホバー、ハイライト |
| `brand-dark` | `#FF6B00` | ホバー時のダーク |
| `brand-subtle` | `rgba(255,140,50,0.08)` | 背景のサブトル |
| `brand-muted` | `rgba(255,140,50,0.18)` | ボーダー、バッジ背景 |

### Surface
| Token | Value | Usage |
|-------|-------|-------|
| `surface-base` | `#0A0A0A` | ページ背景 |
| `surface-raised` | `#111111` | カード、パネル背景 |
| `surface-overlay` | `rgba(17,17,17,0.92)` | オーバーレイ |

### Content
| Token | Value | Usage |
|-------|-------|-------|
| `content-primary` | `#E8E8E8` | 見出し、重要テキスト |
| `content-secondary` | `rgba(232,232,232,0.68)` | 本文 |
| `content-tertiary` | `rgba(232,232,232,0.44)` | 補助テキスト |
| `content-muted` | `rgba(232,232,232,0.28)` | 最も弱いテキスト |

### Semantic
| Token | Value | Usage |
|-------|-------|-------|
| `success` | `#4ADE80` | 正常、完了、"Available" |
| `warning` | `#FACC15` | 注意、CHALLENGE ラベル |
| `error` | `#F87171` | エラー |
| `info` | `#60A5FA` | APPROACH ラベル |

### Border
| Token | Value | Usage |
|-------|-------|-------|
| `border` | `rgba(255,255,255,0.07)` | デフォルトボーダー |
| `border-subtle` | `rgba(255,255,255,0.04)` | 内部仕切り |
| `border-brand` | `rgba(255,140,50,0.22)` | ブランドアクセント付きボーダー |

---

## Typography

### Font Stack
| Role | Font | Fallback |
|------|------|----------|
| Pixel / 見出し | DotGothic16 | sans-serif |
| Body | Zen Kaku Gothic New | DM Sans, sans-serif |
| Display | DM Sans | Zen Kaku Gothic New, sans-serif |
| Code | JetBrains Mono | monospace |

### Type Scale
| Token | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `text-6xl` | 64px | 1.05 | Bold | ヒーロー |
| `text-5xl` | 48px | 1.1 | Bold | ディスプレイ |
| `text-4xl` | 36px | 1.15 | Bold | h1 |
| `text-3xl` | 30px | 1.2 | Bold | h2 |
| `text-2xl` | 24px | 1.3 | Bold | h3 |
| `text-xl` | 20px | 1.4 | Medium | h4 |
| `text-lg` | 18px | 1.5 | Medium | 強調本文 |
| `text-base` | 15px | 1.7 | Regular | 本文 |
| `text-sm` | 13px | 1.5 | Regular | キャプション |
| `text-xs` | 11px | 1.4 | Regular | 注釈 |

---

## Spacing (8px Base)

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | インライン要素間 |
| `space-2` | 8px | アイコンとラベル |
| `space-3` | 12px | フォーム内パディング |
| `space-4` | 16px | カード内パディング |
| `space-5` | 24px | コンテンツ間 |
| `space-6` | 32px | セクション内 |
| `space-7` | 48px | セクション間 |
| `space-8` | 64px | 大セクション区切り |
| `space-9` | 96px | ヒーロー等 |

---

## Effects

### screen-glow
```
box-shadow:
  0 0 0 1px rgba(255,140,50,0.08),
  0 0 20px rgba(255,140,50,0.04),
  inset 0 1px 0 rgba(255,255,255,0.03)
```
カード・パネルのホバー時に適用。

### scanline-overlay
ホバー時に2px間隔のスキャンライン（opacity 0→1）。画像上に適用。

### noise
`fractalNoise` SVGフィルター。固定オーバーレイ、opacity 2.5%。全画面。

### grid-bg
48pxグリッド、brand色3%。回路基板風の背景。

### pixel-border
`1px dashed rgba(255,140,50,0.2)`。セクション間の区切り。

### LED
6px circle、brand/successカラー＋glow。ステータスインジケーター。

---

## Animation

| Type | Duration | Easing |
|------|----------|--------|
| Micro (hover等) | 150ms | ease-out `(0.33,1,0.68,1)` |
| Normal (遷移) | 250ms | ease-out |
| Slow (大きな動き) | 350ms | ease-out |

### scroll-snap
- Container: `scroll-snap-type: y mandatory` on `#snap-root`
- Section: `scroll-snap-align: start; scroll-snap-stop: always`
- 各セクション: `min-height: 100dvh`

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| Default | 8px | 一般的なカード、パネル |
| lg | 12px | 大きなコンテナ |
| xl | 16px | ヒーロー級コンテナ |
| sm (rounded-sm) | 2px | ボタン、バッジ、タグ |

---

## Component Specs

### Button
- **Primary**: `bg-brand text-white border-brand font-pixel text-xs/sm rounded-sm`
- **Ghost**: `bg-surface-base text-content-secondary border-border font-pixel`
- **Brand Subtle**: `bg-brand-subtle text-brand border-border-brand font-pixel`
- Padding: `px-20 py-10` (Desktop) / `px-16 py-10` (Mobile)

### Tag
- `px-8 py-3 rounded-sm font-mono text-[10px] bg-surface-base text-content-muted border-border-subtle`

### Year Badge
- `px-10 py-3 rounded-sm font-pixel text-[10px] bg-surface-base/80 border-border backdrop-blur-sm`

### LED Indicator
- 6px circle + `box-shadow: 0 0 6px color/50%`
- Brand (orange) or Success (green)

### Category Filter
- Container: `p-4 rounded border-border bg-surface-raised`
- Tab: `px-14 py-8 rounded font-pixel text-xs tracking-wider`
- Active: `bg-brand-subtle border-border-brand text-brand`
- Inactive: `text-content-muted`

### Status Bar (ONLINE)
- `px-12 py-6 rounded bg-surface-raised border-border`
- LED success + `font-pixel text-xs text-semantic-success`

### Portfolio Card
- Width: `280px` (mobile) / `320px` (sm) / `360px` (md)
- Image: `h-160` (mobile) / `h-180` (md)
- Border: `border-border`, hover: `border-border-brand + screen-glow`
- Bottom accent bar: 2px brand, opacity 0→1 on hover

### Project Detail — CHALLENGE/APPROACH/RESULT
- Card: `border-border rounded-lg bg-surface-raised p-24`
- Label colors: CHALLENGE=`warning`, APPROACH=`info`, RESULT=`success`
- Label: `font-pixel text-xs uppercase tracking-wider`

---

## Page Structure

### トップページ (scroll-snap, 6 sections)
1. **Hero** — terminal prompt + DotGothic16見出し + stat cards
2. **About** — Bio + SYS.INFO card (2col on desktop)
3. **Skills** — 5カテゴリのスキルカード (3col grid)
4. **Timeline** — 回路トレース風の縦タイムライン
5. **Works** — 横スクロール カードギャラリー + カテゴリフィルター
6. **Contact** — CTA card with terminal prompt + LED status

### プロジェクト詳細ページ `/works/[id]`
- Hero image (scanline overlay)
- Title + meta + tags
- Action buttons (LIVE / CODE / FILE)
- CHALLENGE → APPROACH → RESULT cards
- Prev / Next navigation

---

## Responsive Breakpoints

| Breakpoint | Width | Notes |
|-----------|-------|-------|
| Mobile | 375px | 1カラム、テキスト小 |
| sm | 640px | 2カラム開始 |
| md | 768px | パディング拡大 |
| lg | 1024px | 3カラム、サイドバー |
| Desktop | 1440px | max-width: 1200px |

---

## File Structure (Code)

```
src/
├── app/
│   ├── globals.css          # Tailwind + カスタムユーティリティ
│   ├── layout.tsx           # next/font設定, <html lang="ja">
│   ├── page.tsx             # トップページ (6 snap sections)
│   ├── not-found.tsx
│   └── works/[id]/page.tsx  # プロジェクト詳細ページ
├── components/
│   ├── Header.tsx           # ロゴ + ONLINE status + SNSリンク
│   ├── Hero.tsx             # terminal prompt + 見出し + stats
│   ├── About.tsx            # Bio + SYS.INFO card
│   ├── Skills.tsx           # 5カテゴリスキルカード
│   ├── Timeline.tsx         # 回路トレーススタイル
│   ├── PortfolioGrid.tsx    # 横スクロールギャラリー
│   ├── PortfolioCard.tsx    # 作品カード
│   ├── CategoryFilter.tsx   # ALL/AI/DEV/DESIGN タブ
│   ├── ContactCTA.tsx       # CTA section
│   ├── Footer.tsx           # copyright + status
│   ├── EmptyState.tsx       # フィルター結果なし
│   ├── ProjectDetail.tsx    # 詳細ページ本体
│   ├── SectionNav.tsx       # サイドドットナビ
│   └── ScrollToTop.tsx      # ↑ ボタン
├── data/
│   ├── portfolio.ts         # プロジェクトデータ + file field
│   └── profile.ts           # 自己紹介、スキル、経歴
└── lib/
    └── utils.ts             # cn() helper
```

---

## Data Model

### PortfolioItem
```typescript
interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'ai' | 'dev' | 'design';
  year: string;
  featured?: boolean;
  links?: { live?: string; github?: string };
  file?: { path: string; type: 'pdf'|'image'|'video'|'other'; label: string };
  detail?: { challenge: string; approach: string; result: string; images?: string[] };
}
```

### Profile (profile.ts)
- `about`: name, nameJa, role, bio[], location, email
- `skillCategories[]`: name, label, skills[{name, level}]
- `timeline[]`: year, title, description, tags[]
