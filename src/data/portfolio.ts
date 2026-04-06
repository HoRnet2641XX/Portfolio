export type Category = 'all' | 'ai' | 'dev' | 'design';

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: Exclude<Category, 'all'>;
  year: string;
  featured?: boolean;
  links?: {
    live?: string;
    github?: string;
  };
  /** 成果物がURLではない場合、public/ 配下のファイルパスを指定 */
  file?: {
    path: string;
    type: 'pdf' | 'image' | 'video' | 'other';
    label: string;
  };
  /** プロジェクト詳細ページ用 */
  detail?: {
    challenge: string;
    approach: string;
    result: string;
    images?: string[];
  };
}

export const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: 'Neural Style Transfer Engine',
    description:
      'CNNを用いた芸術的スタイル変換の深層学習モデル。カスタムトレーニングパイプラインによるリアルタイム画像変換。',
    image:
      'https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['PyTorch', 'CNN', 'Transfer Learning'],
    category: 'ai',
    year: '2026',
    featured: true,
    detail: {
      challenge:
        '既存のスタイル変換モデルは処理速度が遅く、リアルタイム用途には不向きだった。また、スタイルの品質と処理速度のトレードオフが大きい課題があった。',
      approach:
        'MobileNetベースの軽量アーキテクチャを採用し、知識蒸留によって精度を保ちながら推論速度を大幅に改善。カスタムデータパイプラインを構築し、学習効率を最適化した。',
      result:
        '推論速度を従来比5倍に改善しながら、スタイル変換品質のSSIM指標で95%以上を維持。WebGLでのブラウザ上リアルタイム変換を実現。',
    },
  },
  {
    id: '2',
    title: 'Full-Stack SaaS Platform',
    description:
      'マイクロサービスアーキテクチャのクラウドネイティブSaaSプラットフォーム。React、Node.js、Kubernetes で構築。',
    image:
      'https://images.unsplash.com/photo-1540397106260-e24a507a08ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['React', 'Node.js', 'K8s', 'PostgreSQL'],
    category: 'dev',
    year: '2025',
    featured: true,
    detail: {
      challenge:
        'モノリシックな既存システムではスケーラビリティに限界があり、機能追加ごとにデプロイリスクが増大していた。',
      approach:
        'ドメイン駆動設計をベースにマイクロサービス分割を実施。Kubernetesでオーケストレーションし、サービス間通信はgRPCで統一。フロントエンドはReact + TypeScriptでモジュラーに構成。',
      result:
        'デプロイ頻度を週1回から日次に向上。サービス単位の独立スケーリングにより、ピーク時のレスポンスタイムを40%改善。',
    },
  },
  {
    id: '3',
    title: 'Brand Identity System',
    description:
      'テックスタートアップのビジュアルアイデンティティ一式。ロゴ、タイポグラフィ、カラーシステム、デザインガイドライン。',
    image:
      'https://images.unsplash.com/photo-1616205255812-c07c8102cc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Figma', 'Branding', 'Typography'],
    category: 'design',
    year: '2026',
    detail: {
      challenge:
        '創業期のスタートアップにブランドの統一感がなく、プロダクト・マーケティング・採用の各接点でビジュアルがバラバラだった。',
      approach:
        'ブランドの核となるミッション・バリューのワークショップから開始。カラーシステム、タイポグラフィ、アイコンセットをデザイントークンとして体系化し、FigmaのComponent Libraryとして提供。',
      result:
        'デザインの意思決定速度が2倍に向上。採用ページのCVRが30%改善。社内外でのブランド認知の一貫性を確立。',
    },
  },
  {
    id: '4',
    title: 'Predictive Analytics Dashboard',
    description:
      'ビジネス指標予測のためのML分析ツール。リアルタイムデータストリーミングとインタラクティブな可視化。',
    image:
      'https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Scikit-learn', 'D3.js', 'FastAPI'],
    category: 'ai',
    year: '2025',
    detail: {
      challenge:
        '経営層がデータに基づく意思決定を行いたいが、既存のBIツールでは予測分析ができず、データサイエンスチームへの依頼に数日かかっていた。',
      approach:
        'Scikit-learnで複数の予測モデルを構築し、FastAPIでAPIとして提供。D3.jsで対話的な可視化ダッシュボードを実装し、非エンジニアでもパラメータを変えて予測を試行できるUIを設計。',
      result:
        '意思決定のリードタイムを数日から数分に短縮。予測精度MAPE 8%以内を達成し、在庫最適化で年間コスト15%削減に貢献。',
    },
  },
  {
    id: '5',
    title: 'Mobile App UI/UX',
    description:
      'ゲーミフィケーション要素を取り入れたフィットネストラッキングアプリのデザイン。アクセシビリティとマイクロインタラクションに注力。',
    image:
      'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Figma', 'Prototyping', 'Motion'],
    category: 'design',
    year: '2025',
    detail: {
      challenge:
        '既存のフィットネスアプリは継続率が低く、2週間以内に70%のユーザーが離脱していた。ゲーミフィケーションで習慣化を促進したい。',
      approach:
        'ユーザーリサーチから離脱ポイントを特定し、報酬システム・ストリーク機能・ソーシャル要素を設計。WCAG 2.2 AA準拠のアクセシブルなUIと、Lottieアニメーションによる達成感のあるマイクロインタラクションを実装。',
      result:
        '2週間継続率を70%→85%に改善。App Storeでのユーザー評価が4.2→4.7に向上。アクセシビリティ監査をパス。',
    },
  },
  {
    id: '6',
    title: 'Autonomous Agent Framework',
    description:
      'LLMを用いたマルチエージェントオーケストレーションシステム。ツール使用による複雑タスクの自律的協調解決。',
    image:
      'https://images.unsplash.com/photo-1768323275769-6615e7cfcbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['LangChain', 'GPT-4', 'Python'],
    category: 'ai',
    year: '2026',
    detail: {
      challenge:
        '単一のLLMエージェントでは複雑なタスクに対応しきれず、ツール呼び出しの連鎖でエラーが蓄積する問題があった。',
      approach:
        '専門性の異なるエージェントを設計し、オーケストレーターが動的にタスクを分配・統合するアーキテクチャを構築。エージェント間のメッセージングプロトコルとエラーリカバリ機構を独自に設計。',
      result:
        '複雑なタスクの完遂率を40%→82%に改善。単一エージェント比でタスク実行時間を35%短縮。OSSとしてGitHubで公開。',
    },
  },
  {
    id: '7',
    title: 'Real-time Dashboard App',
    description:
      'WebSocket統合のエンタープライズ監視ダッシュボード。ライブメトリクス、アラート、カスタマイズ可能なウィジェットレイアウト。',
    image:
      'https://images.unsplash.com/photo-1702479744062-1880502275b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Next.js', 'WebSocket', 'Redis'],
    category: 'dev',
    year: '2026',
    detail: {
      challenge:
        '既存の監視ツールはポーリングベースで更新が遅く、障害検知に平均5分のラグがあった。また、チームごとに見たいメトリクスが異なるが、ダッシュボードのカスタマイズ性が低かった。',
      approach:
        'WebSocketによるリアルタイム双方向通信を基盤に、Redis Pub/Subでバックエンドのイベントを即時配信。ドラッグ&ドロップでレイアウト変更可能なウィジェットシステムをReact DnDで実装。',
      result:
        '障害検知ラグを5分から10秒以内に短縮。チーム満足度調査でダッシュボード利用率が3倍に向上。',
    },
  },
  {
    id: '8',
    title: 'Conversational AI Chatbot',
    description:
      'ドメイン特化型知識検索によるRAGベースチャットボット。精度の高いコンテキストマッチングのためのファインチューニング済み埋め込み。',
    image:
      'https://images.unsplash.com/photo-1762328862557-e0a36587cd3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['RAG', 'Embeddings', 'LLM'],
    category: 'ai',
    year: '2025',
    detail: {
      challenge:
        '社内ナレッジが散在しており、新入社員のオンボーディングに平均2ヶ月かかっていた。既存の社内Wikiの検索精度も低かった。',
      approach:
        'Confluenceや社内ドキュメントをソースとしたRAGパイプラインを構築。ドメイン特化の埋め込みモデルをファインチューニングし、リランキングによって検索精度を向上。Slack Botとして統合。',
      result:
        'オンボーディング期間を2ヶ月から3週間に短縮。社内質問の80%をチャットボットが即時回答。月間600時間の問い合わせ対応工数を削減。',
    },
  },
  {
    id: '9',
    title: '3D Generative Art Collection',
    description:
      'WebGLとGLSLシェーダーによるプロシージャル生成3Dアートシリーズ。デジタルアートギャラリーで展示。',
    image:
      'https://images.unsplash.com/photo-1693920105404-c2208c22cfe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Three.js', 'GLSL', 'Generative'],
    category: 'design',
    year: '2024',
    detail: {
      challenge:
        'ジェネラティブアートの多くが2Dに閉じており、3D空間での没入的な体験を持つ作品が少なかった。ブラウザ上でのリアルタイムレンダリングも技術的なハードルが高かった。',
      approach:
        'Three.jsとカスタムGLSLシェーダーで、ノイズ関数ベースのプロシージャルジオメトリを生成。WebGPUフォールバック対応で幅広い環境をサポート。パラメトリックな操作でユーザーが作品に介入できるインタラクションを設計。',
      result:
        'デジタルアートギャラリーでの展示に採用。ブラウザ上で60fps安定動作を達成。SNSでのシェア数1,000件超。',
    },
  },
  {
    id: '10',
    title: 'Cloud Infrastructure Platform',
    description:
      'Terraform統合のInfrastructure-as-Codeプラットフォーム。自動デプロイパイプラインとモニタリング。',
    image:
      'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Terraform', 'AWS', 'Docker', 'CI/CD'],
    category: 'dev',
    year: '2024',
    detail: {
      challenge:
        'インフラの手動構築がボトルネックとなり、新サービスの環境構築に平均3日かかっていた。設定の属人化とドリフトも問題だった。',
      approach:
        'Terraformモジュールを標準化し、セルフサービスでインフラをプロビジョニングできるプラットフォームを構築。GitOpsベースのCI/CDパイプラインで、PRベースのインフラ変更レビューを実現。',
      result:
        '環境構築を3日から30分に短縮。インフラドリフトをゼロに。年間のインフラ運用工数を60%削減。',
    },
  },
  {
    id: '11',
    title: 'Editorial Design System',
    description:
      'デジタルマガジンプラットフォーム向けモジュラーデザインシステム。レスポンシブタイポグラフィと柔軟なグリッドレイアウト。',
    image:
      'https://images.unsplash.com/photo-1770581939371-326fc1537f10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Design System', 'CSS', 'Storybook'],
    category: 'design',
    year: '2024',
    detail: {
      challenge:
        'デジタルマガジンの各記事ページのデザインが都度ゼロから作られており、ブランドの一貫性がなく、制作効率も低かった。',
      approach:
        'Atomic Designの考え方でコンポーネント体系を整理。Fluid Typography・Container Queriesを活用したレスポンシブ設計。Storybookでのビジュアルリグレッションテストを導入。',
      result:
        '記事ページの制作時間を50%短縮。ブランドガイドラインへの準拠率が100%に。コンポーネント再利用率85%を達成。',
    },
  },
  {
    id: '12',
    title: 'API Gateway Service',
    description:
      'レートリミティング、認証、リクエスト変換機能を備えた高性能APIゲートウェイ。',
    image:
      'https://images.unsplash.com/photo-1512645592367-97ba8a9d4035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Go', 'gRPC', 'Envoy'],
    category: 'dev',
    year: '2025',
    detail: {
      challenge:
        'マイクロサービス化に伴い、各サービスが個別に認証・レートリミティングを実装しており、ロジックの重複とセキュリティポリシーの不整合が発生していた。',
      approach:
        'Goで高性能なAPIゲートウェイを開発。Envoyをデータプレーンに、カスタムフィルターチェーンで認証・認可・レートリミティング・リクエスト変換を統一的に処理。gRPCベースの設定APIで動的更新に対応。',
      result:
        'p99レイテンシ5ms以内を達成。セキュリティポリシーの一元管理を実現。各サービスから認証ロジックを除去し、コードベースを平均20%削減。',
    },
  },
];

export const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'すべて' },
  { key: 'ai', label: 'AI / ML' },
  { key: 'dev', label: '開発' },
  { key: 'design', label: 'デザイン' },
];
