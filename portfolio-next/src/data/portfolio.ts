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
}

export const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: 'Neural Style Transfer Engine',
    description:
      'Deep learning model for artistic style transfer using CNN. Real-time image transformation with custom training pipeline.',
    image:
      'https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['PyTorch', 'CNN', 'Transfer Learning'],
    category: 'ai',
    year: '2026',
    featured: true,
  },
  {
    id: '2',
    title: 'Full-Stack SaaS Platform',
    description:
      'Cloud-native SaaS platform with microservices architecture. Built with React, Node.js, and Kubernetes.',
    image:
      'https://images.unsplash.com/photo-1540397106260-e24a507a08ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['React', 'Node.js', 'K8s', 'PostgreSQL'],
    category: 'dev',
    year: '2025',
    featured: true,
  },
  {
    id: '3',
    title: 'Brand Identity System',
    description:
      'Complete visual identity for a tech startup. Logo, typography, color system, and comprehensive design guidelines.',
    image:
      'https://images.unsplash.com/photo-1616205255812-c07c8102cc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Figma', 'Branding', 'Typography'],
    category: 'design',
    year: '2026',
  },
  {
    id: '4',
    title: 'Predictive Analytics Dashboard',
    description:
      'ML-powered analytics tool for forecasting business metrics. Interactive visualizations with real-time data streaming.',
    image:
      'https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Scikit-learn', 'D3.js', 'FastAPI'],
    category: 'ai',
    year: '2025',
  },
  {
    id: '5',
    title: 'Mobile App UI/UX',
    description:
      'Designed a fitness tracking app with gamification elements. Focus on accessibility and delightful micro-interactions.',
    image:
      'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Figma', 'Prototyping', 'Motion'],
    category: 'design',
    year: '2025',
  },
  {
    id: '6',
    title: 'Autonomous Agent Framework',
    description:
      'Multi-agent orchestration system using LLMs. Agents collaborate autonomously to solve complex tasks with tool usage.',
    image:
      'https://images.unsplash.com/photo-1768323275769-6615e7cfcbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['LangChain', 'GPT-4', 'Python'],
    category: 'ai',
    year: '2026',
  },
  {
    id: '7',
    title: 'Real-time Dashboard App',
    description:
      'Enterprise monitoring dashboard with WebSocket integration. Live metrics, alerts, and customizable widget layouts.',
    image:
      'https://images.unsplash.com/photo-1702479744062-1880502275b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Next.js', 'WebSocket', 'Redis'],
    category: 'dev',
    year: '2026',
  },
  {
    id: '8',
    title: 'Conversational AI Chatbot',
    description:
      'RAG-based chatbot with domain-specific knowledge retrieval. Fine-tuned embeddings for accurate context matching.',
    image:
      'https://images.unsplash.com/photo-1762328862557-e0a36587cd3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['RAG', 'Embeddings', 'LLM'],
    category: 'ai',
    year: '2025',
  },
  {
    id: '9',
    title: '3D Generative Art Collection',
    description:
      'Procedurally generated 3D art series using WebGL and GLSL shaders. Exhibited at digital art galleries.',
    image:
      'https://images.unsplash.com/photo-1693920105404-c2208c22cfe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Three.js', 'GLSL', 'Generative'],
    category: 'design',
    year: '2024',
  },
  {
    id: '10',
    title: 'Cloud Infrastructure Platform',
    description:
      'Infrastructure-as-code platform with Terraform integration. Automated deployment pipelines and monitoring.',
    image:
      'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Terraform', 'AWS', 'Docker', 'CI/CD'],
    category: 'dev',
    year: '2024',
  },
  {
    id: '11',
    title: 'Editorial Design System',
    description:
      'Modular design system for a digital magazine platform. Responsive typography and flexible grid layouts.',
    image:
      'https://images.unsplash.com/photo-1770581939371-326fc1537f10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Design System', 'CSS', 'Storybook'],
    category: 'design',
    year: '2024',
  },
  {
    id: '12',
    title: 'API Gateway Service',
    description:
      'High-performance API gateway with rate limiting, authentication, and request transformation capabilities.',
    image:
      'https://images.unsplash.com/photo-1512645592367-97ba8a9d4035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Go', 'gRPC', 'Envoy'],
    category: 'dev',
    year: '2025',
  },
];

export const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'ai', label: 'AI / ML' },
  { key: 'dev', label: 'Development' },
  { key: 'design', label: 'Design' },
];
