export interface SkillCategory {
  name: string;
  label: string;
  skills: { name: string; level: number }[]; // level: 1-5
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  tags?: string[];
}

export const about = {
  name: 'Your Name',
  nameJa: 'あなたの名前',
  role: 'AI Engineer / Full-Stack Developer / Designer',
  bio: [
    'テクノロジーとクリエイティブの交差点で、AIからUI/UXまで一気通貫でプロダクトを設計・実装しています。',
    '「課題を見つけ、技術で解き、デザインで届ける」をモットーに、企画段階からデプロイまで手を動かすエンジニアです。',
  ],
  location: 'Tokyo, Japan',
  email: 'hello@example.com',
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'ai',
    label: 'AI / ML',
    skills: [
      { name: 'PyTorch', level: 4 },
      { name: 'TensorFlow', level: 3 },
      { name: 'LangChain', level: 4 },
      { name: 'RAG', level: 4 },
      { name: 'Computer Vision', level: 3 },
      { name: 'NLP', level: 4 },
    ],
  },
  {
    name: 'frontend',
    label: 'フロントエンド',
    skills: [
      { name: 'React / Next.js', level: 5 },
      { name: 'TypeScript', level: 5 },
      { name: 'Tailwind CSS', level: 5 },
      { name: 'Three.js', level: 3 },
      { name: 'Framer Motion', level: 4 },
    ],
  },
  {
    name: 'backend',
    label: 'バックエンド',
    skills: [
      { name: 'Go', level: 4 },
      { name: 'Node.js', level: 4 },
      { name: 'Ruby on Rails', level: 3 },
      { name: 'PostgreSQL', level: 4 },
      { name: 'Redis', level: 3 },
      { name: 'gRPC', level: 3 },
    ],
  },
  {
    name: 'design',
    label: 'デザイン',
    skills: [
      { name: 'Figma', level: 5 },
      { name: 'UI/UX Design', level: 4 },
      { name: 'Branding', level: 3 },
      { name: 'Motion Design', level: 3 },
    ],
  },
  {
    name: 'infra',
    label: 'インフラ / DevOps',
    skills: [
      { name: 'AWS', level: 4 },
      { name: 'Docker', level: 4 },
      { name: 'Kubernetes', level: 3 },
      { name: 'Terraform', level: 3 },
      { name: 'CI/CD', level: 4 },
    ],
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: '2024',
    title: 'AI / ML 領域への本格参入',
    description:
      'コンピュータビジョンと自然言語処理のプロジェクトに参画。PyTorchを用いた画像認識モデルの開発、RAGベースのチャットボット構築を経験。',
    tags: ['PyTorch', 'RAG', 'Computer Vision'],
  },
  {
    year: '2025',
    title: 'フルスタック開発 × デザインの深化',
    description:
      'SaaSプラットフォームの設計からデプロイまでを一気通貫で担当。デザインシステムの構築、APIゲートウェイの設計、リアルタイムダッシュボードの実装。',
    tags: ['Next.js', 'Go', 'Design System'],
  },
  {
    year: '2026',
    title: 'エージェント × プロダクト開発',
    description:
      'LLMベースのマルチエージェントシステムの設計・実装。自律的にタスクを協調解決するフレームワークの開発と、プロダクトへの統合。',
    tags: ['LangChain', 'Multi-Agent', 'LLM'],
  },
];
