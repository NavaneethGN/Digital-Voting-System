import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="static w-full z-50 bg-gradient-to-r from-[#0F172A] to-[#10B981] shadow-lg py-3"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => onNavigate('dashboard')}
          >
            <span className="text-xl font-bold bg-gradient-to-r from-white to-[#10B981] bg-clip-text text-transparent">
              Digital Voting System
            </span>
          </motion.div>
          
          <div className="hidden md:flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('dashboard')}
              className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              Dashboard
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('vote')}
              className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              Vote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('results')}
              className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              Results
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm transition-all duration-300"
            >
              Logout
            </motion.button>
          </div>
          
          <div className="md:hidden">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-3 bg-[#0F172A]/95 backdrop-blur-md rounded-xl border border-[#10B981]/20 p-4"
          >
            <div className="flex flex-col space-y-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => { onNavigate('dashboard'); setIsMenuOpen(false); }}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                Dashboard
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => { onNavigate('vote'); setIsMenuOpen(false); }}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                Vote
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => { onNavigate('results'); setIsMenuOpen(false); }}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                Results
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                className="px-4 py-2 rounded-lg text-sm font-medium bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm transition-all duration-300"
              >
                Logout
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;