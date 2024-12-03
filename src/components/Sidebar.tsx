import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { icon: '👨‍💻', label: 'Programming', count: 2.5 },
  { icon: '📸', label: 'Photography', count: 1.8 },
  { icon: '🎵', label: 'Music', count: 3.2 },
  { icon: '☕', label: 'Lifestyle', count: 4.1 },
  { icon: '📚', label: 'Literature', count: 1.4 },
];

const feeds = [
  { icon: '🏠', label: 'Home', active: true },
  { icon: '🔥', label: 'Trending', active: false },
  { icon: '✨', label: 'New', active: false },
  { icon: '📰', label: 'Following', active: false },
];

function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [activeSection, setActiveSection] = useState('Home');
  const [isCategoryExpanded, setIsCategoryExpanded] = useState(true);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`mobile-sidebar glass-effect w-64 h-screen p-4 overflow-y-auto ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex justify-end lg:hidden mb-4">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-pink-50 rounded-full text-gray-500 hover:text-pink-500"
          >
            <span className="w-5 h-5">X</span>
          </button>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-pink-400 uppercase tracking-wider px-3">
              Feeds
            </h3>
            {feeds.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  setActiveSection(item.label);
                  onClose();
                }}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 transform hover:scale-102 ${
                  activeSection === item.label 
                    ? 'bg-pink-50 text-pink-600 shadow-sm' 
                    : 'text-gray-700 hover:bg-pink-50/50'
                }`}
              >
                <span className="w-5 h-5">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="space-y-2">
            <button 
              onClick={() => setIsCategoryExpanded(!isCategoryExpanded)}
              className="w-full flex items-center justify-between px-3 text-sm font-semibold text-pink-400 uppercase tracking-wider"
            >
              <span>Categories</span>
              <span 
                className={`w-4 h-4 transition-transform duration-200 ${
                  isCategoryExpanded ? 'transform rotate-180' : ''
                }`}
              >
                ▼
              </span>
            </button>
            
            <div className={`space-y-1 transition-all duration-300 ${
              isCategoryExpanded ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
            }`}>
              {categories.map((category) => (
                <button
                  key={category.label}
                  onClick={() => {
                    setActiveSection(category.label);
                    onClose();
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:bg-pink-50/50 ${
                    activeSection === category.label 
                      ? 'bg-pink-50 text-pink-600' 
                      : 'text-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-5 h-5">{category.icon}</span>
                    <span className="font-medium">{category.label}</span>
                  </div>
                  <span className="text-sm text-gray-400">{category.count}M</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
