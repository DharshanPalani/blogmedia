import { useState } from 'react';
import { posts } from '../components/PostList';

interface PostDetailProps {
  postId: number;
  onBack: () => void;
}

function PostDetail({ postId, onBack }: PostDetailProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [voteCount, setVoteCount] = useState(1234);
  const post = posts.find(p => p.id === postId)!;

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6">
      <button 
        onClick={onBack}
        className="mb-4 flex items-center space-x-2 text-pink-500 hover:text-pink-600 transition-colors duration-200"
      >
        <span className="w-5 h-5">←</span>
        <span>Back to posts</span>
      </button>

      <div className="glass-effect rounded-2xl overflow-hidden hover-neon">
        <div className="p-4 sm:p-6">
          <div className="flex items-start space-x-4">
            {/* Vote Controls */}
            <div className="flex flex-col items-center space-y-2">
              <button 
                onClick={() => setVoteCount(prev => prev + 1)}
                className="p-1 rounded hover:bg-pink-100 text-pink-500 transition-colors duration-200"
              >
                <span className="w-6 h-6">↑</span>
              </button>
              <span className="font-semibold text-gray-700">{voteCount}</span>
              <button 
                onClick={() => setVoteCount(prev => prev - 1)}
                className="p-1 rounded hover:bg-pink-100 text-pink-500 transition-colors duration-200"
              >
                <span className="w-6 h-6">↓</span>
              </button>
            </div>

            {/* Post Content */}
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {post.title}
              </h1>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                <span>Posted by</span>
                <a href="#" className="text-pink-500 hover:text-pink-600">u/{post.author}</a>
                <span>• {post.timeAgo}</span>
              </div>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {post.content}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 mt-6">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-500 transition-colors duration-200">
                  <span className="w-5 h-5">💬</span>
                  <span>{post.comments} Comments</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-pink-500 transition-colors duration-200">
                  <span className="w-5 h-5">🔗</span>
                  <span>Share</span>
                </button>
                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center space-x-2 transition-colors duration-200 ${
                    isBookmarked ? 'text-pink-500' : 'text-gray-500 hover:text-pink-500'
                  }`}
                >
                  <span className="w-5 h-5">🔖</span>
                  <span>{isBookmarked ? 'Saved' : 'Save'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="border-t border-white/10 bg-white/10 p-4 sm:p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Comments</h2>
          <div className="space-y-4">
            {/* Comment Input */}
            <div className="glass-effect rounded-lg p-4">
              <textarea 
                placeholder="What are your thoughts?"
                className="w-full h-24 p-3 bg-white/50 border border-white/30 rounded-lg focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all duration-300"
              />
              <div className="mt-2 flex justify-end">
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                  Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
