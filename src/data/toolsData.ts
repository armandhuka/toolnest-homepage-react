
export interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  iconColor: string;
  icon: string;
  status: 'available' | 'coming-soon';
}

export const toolsData: Tool[] = [
  {
    id: 1,
    name: "ChatGPT",
    description: "Advanced AI chatbot for conversations, writing assistance, and problem-solving across various domains.",
    category: "AI Assistant",
    iconColor: "#10A37F",
    icon: "🤖",
    status: "available"
  },
  {
    id: 2,
    name: "Midjourney",
    description: "AI-powered image generation tool that creates stunning artwork from text descriptions.",
    category: "Image",
    iconColor: "#7C3AED",
    icon: "🎨",
    status: "available"
  },
  {
    id: 3,
    name: "GitHub Copilot",
    description: "AI pair programmer that helps you write code faster with intelligent suggestions.",
    category: "Developer",
    iconColor: "#22C55E",
    icon: "💻",
    status: "available"
  },
  {
    id: 4,
    name: "Grammarly",
    description: "AI writing assistant that helps improve grammar, clarity, and overall writing quality.",
    category: "Writing",
    iconColor: "#2563EB",
    icon: "✍️",
    status: "available"
  },
  {
    id: 5,
    name: "Jasper AI",
    description: "AI content creation platform for marketing copy, blog posts, and social media content.",
    category: "Marketing",
    iconColor: "#F59E0B",
    icon: "📈",
    status: "available"
  },
  {
    id: 6,
    name: "Notion AI",
    description: "AI-powered workspace that helps with writing, brainstorming, and organizing information.",
    category: "Productivity",
    iconColor: "#EAB308",
    icon: "⚡",
    status: "available"
  },
  {
    id: 7,
    name: "DALL-E 3",
    description: "Advanced AI image generator that creates detailed images from natural language descriptions.",
    category: "Image",
    iconColor: "#7C3AED",
    icon: "🎨",
    status: "available"
  },
  {
    id: 8,
    name: "Copy.ai",
    description: "AI-powered copywriting tool for creating marketing content, emails, and ad copy.",
    category: "Writing",
    iconColor: "#2563EB",
    icon: "✍️",
    status: "available"
  },
  {
    id: 9,
    name: "Stable Diffusion",
    description: "Open-source AI model for generating high-quality images from text prompts.",
    category: "Image",
    iconColor: "#7C3AED",
    icon: "🎨",  
    status: "available"
  },
  {
    id: 10,
    name: "Tabnine",
    description: "AI code completion tool that provides intelligent suggestions for multiple programming languages.",
    category: "Developer",
    iconColor: "#22C55E",
    icon: "💻",
    status: "available"
  },
  {
    id: 11,
    name: "Writesonic",
    description: "AI writing platform for creating blog articles, ads, emails, and website copy.",
    category: "Writing",
    iconColor: "#2563EB",
    icon: "✍️",
    status: "available"
  },
  {
    id: 12,
    name: "HubSpot AI",
    description: "AI-powered marketing automation and CRM tools for lead generation and customer management.",
    category: "Marketing",
    iconColor: "#F59E0B",
    icon: "📈",
    status: "coming-soon"
  }
];
