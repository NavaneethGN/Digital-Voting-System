import React, { useState, useEffect } from 'react';

const Navbar = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-gradient-to-r from-[#0F172A]/95 to-[#10B981]/95 backdrop-blur-md shadow-xl py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-[#10B981] to-white bg-clip-text text-transparent transition-all duration-500 hover:from-white hover:to-[#10B981]">
              Digital Voting System
            </span>
          </div>
          <div className="hidden md:flex space-x-2">
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Dashboard
            </button>
            <button
              onClick={() => onNavigate('vote')}
              className="px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Vote
            </button>
            <a href="/results" className="px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5">
              Results
            </a>
            <button className="px-4 py-2 rounded-lg text-sm font-medium bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
              Logout
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;