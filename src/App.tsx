import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PostList from './components/PostList';
import PostDetail from './pages/PostDetail.jsx';
// import SignIn from './pages/SignIn';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'post' | 'signin'>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const handlePostClick = (postId: number) => {
    setSelectedPostId(postId);
    setCurrentPage('post');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedPostId(null);
  };

  return (
    // <div className="min-h-screen">
    //   {currentPage === 'signin' ? (
    //     <SignIn onBack={() => setCurrentPage('home')} />
    //   ) : (
          <>
          <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
          <div className="pt-16 flex relative">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <main className="flex-1 min-h-screen lg:ml-64 transition-all duration-300">
              {currentPage === 'post' ? (
                <PostDetail postId={selectedPostId!} onBack={handleBackToHome} />
              ) : (
                <PostList onPostClick={handlePostClick} />
              )}
            </main>
          </div>
        </>
    //   )}
    // </div>
    
  );
}

export default App;