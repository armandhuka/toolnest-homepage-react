
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Info, ExternalLink } from 'lucide-react';

interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  iconColor: string;
  icon: string;
  status: 'available' | 'coming-soon';
}

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Writing': '✍️',
      'Image': '🎨',
      'Developer': '💻',
      'Marketing': '📈',
      'Productivity': '⚡',
      'AI Assistant': '🤖'
    };
    return icons[category] || '🔧';
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Writing': 'bg-blue-100 text-blue-600',
      'Image': 'bg-purple-100 text-purple-600',
      'Developer': 'bg-green-100 text-green-600',
      'Marketing': 'bg-orange-100 text-orange-600',
      'Productivity': 'bg-yellow-100 text-yellow-600',
      'AI Assistant': 'bg-pink-100 text-pink-600'
    };
    return colors[category] || 'bg-gray-100 text-gray-600';
  };

  return (
    <motion.div
      className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col"
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Header with Icon and Category */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${getCategoryColor(tool.category)} shadow-sm`}>
          {getCategoryIcon(tool.category)}
        </div>
        <div className="flex gap-2">
          <motion.button
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Info size={14} className="text-gray-600" />
          </motion.button>
          <motion.button
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-red-100 flex items-center justify-center transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart size={14} className="text-gray-600 hover:text-red-500" />
          </motion.button>
        </div>
      </div>

      {/* Tool Name */}
      <h3 className="text-xl font-bold text-toolnest-text mb-3 line-clamp-2">
        {tool.name}
      </h3>

      {/* Description */}
      <p className="text-toolnest-text/70 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
        {tool.description}
      </p>

      {/* Category Badge */}
      <div className="mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(tool.category)}`}>
          {tool.category}
        </span>
      </div>

      {/* Action Button */}
      <motion.button
        className={`w-full py-3 px-4 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
          tool.status === 'available'
            ? 'bg-toolnest-text text-white hover:bg-toolnest-text/90 hover:shadow-lg'
            : 'bg-toolnest-accent/50 text-toolnest-text/70 cursor-not-allowed'
        }`}
        whileHover={tool.status === 'available' ? { scale: 1.02 } : {}}
        whileTap={tool.status === 'available' ? { scale: 0.98 } : {}}
        disabled={tool.status === 'coming-soon'}
      >
        {tool.status === 'available' ? (
          <>
            Learn More
            <ExternalLink size={16} />
          </>
        ) : (
          'Coming Soon'
        )}
      </motion.button>
    </motion.div>
  );
};

export default ToolCard;
