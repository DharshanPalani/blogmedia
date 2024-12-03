import { useState } from 'react'

interface HeaderProps {
  onMenuClick: () => void
}

function Header({ onMenuClick }: HeaderProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <header className="h-16 glassmorphism fixed top-0 left-0 right-0 z-40">
      <div className="h-full flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <button onClick={onMenuClick} className="lg:hidden text-gray-600 hover:text-pink-500 transition-colors">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-pink-500 hover:text-pink-600 transition-colors">
            blogmedia
          </h1>
        </div>

        <div className="hidden md:block flex-1 max-w-xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={`w-full pl-10 pr-4 py-2 rounded-full border transition-all duration-200 bg-white/50 ${
                isSearchFocused ? 'border-pink-500 shadow-md' : 'border-pink-200'
              } focus:outline-none focus:ring-2 focus:ring-pink-200`}
            />
            <svg className={`w-5 h-5 absolute left-3 top-2.5 transition-colors ${isSearchFocused ? 'text-pink-500' : 'text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 0l4 4m-4-4h0l-4-4"/>
            </svg>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-6">
          <button className="text-gray-600 hover:text-pink-500 transition-colors hidden sm:block">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.25 6.75l3.25 3.25m0 0l3.25-3.25M8.5 10l-3.25 3.25m0 0l-3.25-3.25"/>
            </svg>
          </button>
          <button className="text-gray-600 hover:text-pink-500 transition-colors hidden sm:block">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4V2m0 2l1.5 1.5M12 4h-2m0 0L8.5 5.5M12 4v2m0-2l-1.5 1.5"/>
            </svg>
          </button>
          <button className="flex items-center space-x-2 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-all transform hover:scale-105 active:scale-95">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.25 5.25a7.5 7.5 0 1110.5 10.5 7.5 7.5 0 01-10.5-10.5z"/>
            </svg>
            <span className="hidden sm:inline">Sign In</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
