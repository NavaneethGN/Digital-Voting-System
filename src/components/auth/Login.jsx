import React, { useState, useEffect } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Add floating particles to background
    const createParticles = () => {
      const container = document.querySelector('.login-container');
      if (!container) return;
      
      // Clear any existing particles
      const existingParticles = container.querySelectorAll('.bg-emerald-400');
      existingParticles.forEach(particle => particle.remove());
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-emerald-400/20 rounded-full animate-float';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Handle login logic here
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center login-container bg-gradient-to-br from-[#0d281c] via-[#132a3d] to-[#0F172A] overflow-hidden relative">
      {/* Subtle gradient overlay for smoother transition */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/15 via-[#10B981]/10 to-transparent"></div>
      
      <div className="bg-[#0F172A]/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-96 border border-[#10B981]/20 relative z-10 transform transition-all duration-500 hover:scale-[1.02]">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#0a0f1d] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg pulse-glow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-white/70">Sign in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="pl-10 mt-2 block w-full px-4 py-3 bg-[#0a0f1d] border border-[#10B981]/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="pl-10 mt-2 block w-full px-4 py-3 bg-[#0a0f1d] border border-[#10B981]/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full relative overflow-hidden bg-gradient-to-r from-[#10B981] to-[#0a0f1d] text-white py-3 px-4 rounded-xl hover:from-[#0da271] hover:to-[#0a0f1d] transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center group"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Signing In...
              </>
            ) : (
              <>
                Sign In
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
            <span className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">
            Forgot your password?
          </a>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-white/70 text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-[#10B981] font-semibold hover:text-[#0da271] transition-colors">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;