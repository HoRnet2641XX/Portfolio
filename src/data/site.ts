/**
 * Site-wide configuration.
 * デプロイ先が決まったら `url` を差し替えるだけで OG / canonical / 共有 UI に反映される。
 */
export const site = {
  /** 本番 URL（末尾スラッシュなし） */
  url: 'https://portfolio.example.com',

  name: 'Portfolio — Takamichi Nasu',
  title: 'AI Engineer / Full-Stack Developer / Designer',
  description:
    'RAG・LLM 設計から Next.js × Go のフルスタック開発、Figma でのプロダクトデザインまで。東京拠点のエンジニアポートフォリオ。',

  locale: 'ja_JP',

  /** OG 画像で使うキャッチコピー */
  ogTagline: 'AI, Dev, Design. 一人で、全部。',

  /** SNS リンク — Header / Footer / OG で共通利用 */
  socials: {
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    email: 'hello@example.com',
  },
} as const;

export type Site = typeof site;
