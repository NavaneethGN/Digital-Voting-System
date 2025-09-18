import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">Digital Voting System</span>
          </div>
          <div className="flex space-x-4">
            <a href="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald/20">
              Dashboard
            </a>
            <a href="/vote" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald/20">
              Vote
            </a>
            <a href="/results" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-emerald/20">
              Results
            </a>
            <button className="px-3 py-2 rounded-md text-sm font-medium bg-emerald hover:bg-emerald/90">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;