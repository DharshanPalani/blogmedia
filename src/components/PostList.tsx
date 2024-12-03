import { useState } from 'react'

interface PostListProps {
  onPostClick: (postId: number) => void
}

export const posts = [
  {
    id: 1,
    title: "The Future of Web Development: What's Next?",
    author: "techguru42",
    content: "As we move into 2024, the landscape of web development continues to evolve at a rapid pace. From new frameworks to innovative approaches in design, the future of web development looks more exciting than ever. Here are some key trends to watch: AI-driven development tools, WebAssembly becoming mainstream, Edge computing and serverless architectures, Enhanced web accessibility standards...",
    upvotes: 1234,
    comments: 89,
    timeAgo: "2 hours ago"
  },
  {
    id: 2,
    title: "Understanding Modern Architecture: A Deep Dive",
    author: "designmaster",
    content: "Modern architecture isn't just about sleek lines and minimalism. It's about creating sustainable, functional spaces that serve both aesthetic and practical purposes. This comprehensive guide explores the principles behind modern architectural design and how it shapes our living spaces...",
    upvotes: 856,
    comments: 43,
    timeAgo: "4 hours ago"
  },
  {
    id: 3,
    title: "The Science Behind Perfect Coffee",
    author: "coffeelover99",
    content: "The perfect cup of coffee is more than just beans and water. It's about understanding the chemistry behind extraction, the importance of temperature, and the role of different brewing methods. In this deep dive, we'll explore the scientific principles that make your morning brew truly exceptional...",
    upvotes: 2341,
    comments: 156,
    timeAgo: "6 hours ago"
  }
]

function PostList({ onPostClick }: PostListProps) {
  const [savedPosts, setSavedPosts] = useState<number[]>([])

  const toggleSave = (postId: number, event: React.MouseEvent) => {
    event.stopPropagation()
    setSavedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    )
  }

  return (
    <div className="space-y-4 max-w-3xl mx-auto p-4 sm:p-6">
      {posts.map((post) => (
        <div 
          key={post.id} 
          onClick={() => onPostClick(post.id)}
          className="glass-effect rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover-neon cursor-pointer"
        >
          <div className="flex items-start space-x-4">
            <div className="flex flex-col items-center space-y-1">
              <button 
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded hover:bg-pink-100 text-pink-500 transition-colors duration-200"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l7-7 7 7" />
                </svg>
              </button>
              <span className="text-sm font-medium text-gray-700">{post.upvotes}</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 hover:text-pink-600">
                {post.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mb-2">
                Posted by{' '}
                <span className="text-pink-500 hover:text-pink-600">
                  u/{post.author}
                </span>
                {' • '}{post.timeAgo}
              </p>
              <p className="text-gray-700 mb-4 text-sm sm:text-base line-clamp-3">{post.content}</p>
              
              <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-500">
                <button 
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center space-x-1 hover:text-pink-500 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l7-7 7 7" />
                  </svg>
                  <span className="hidden sm:inline">{post.comments} comments</span>
                  <span className="sm:hidden">{post.comments}</span>
                </button>
                <button 
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center space-x-1 hover:text-pink-500 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l7-7 7 7" />
                  </svg>
                  <span className="hidden sm:inline">Share</span>
                </button>
                <button 
                  onClick={(e) => toggleSave(post.id, e)}
                  className={`flex items-center space-x-1 transition-colors duration-200 ${
                    savedPosts.includes(post.id) ? 'text-pink-500' : 'hover:text-pink-500'
                  }`}
                >
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l7-7 7 7" />
                  </svg>
                  <span className="hidden sm:inline">{savedPosts.includes(post.id) ? 'Saved' : 'Save'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostList
