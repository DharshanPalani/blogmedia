import { useState } from 'react';

function SignIn() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all required fields.");
      return;
    }
    // Handle form submission logic here, e.g., API call or routing
    alert(isSignIn ? "Signing In..." : "Creating Account...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="glassmorphism rounded-2xl p-8 neon-shadow">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-pink-600 mb-2">
              {isSignIn ? 'Welcome Back' : 'Join Us'}
            </h1>
            <p className="text-gray-600">
              {isSignIn ? 'Enter your credentials to continue' : 'Create your account'}
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {!isSignIn && (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-pink-100 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all duration-300"
                  />
                </div>
              )}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-pink-100 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all duration-300"
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-pink-100 focus:border-pink-300 focus:ring focus:ring-pink-200 focus:ring-opacity-50 transition-all duration-300"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:neon-shadow flex items-center justify-center space-x-2"
            >
              <span>{isSignIn ? 'Sign In' : 'Create Account'}</span>
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-pink-600 hover:text-pink-700 transition-colors duration-300"
            >
              {isSignIn ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
