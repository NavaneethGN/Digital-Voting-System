import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [electionData, setElectionData] = useState({
    activeElections: 2,
    upcomingElections: 1,
    pastElections: 5,
    voterTurnout: 75,
  });

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setElectionData({
        activeElections: 2,
        upcomingElections: 1,
        pastElections: 5,
        voterTurnout: 75,
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#10B981]/20 pt-16">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-white mb-2 animate-fadeIn">Welcome to Digital Voting System</h1>
        <p className="text-white/70 mb-8 animate-fadeIn">Your secure platform for democratic participation</p>
        
        {/* Tab Navigation */}
        <div className="flex space-x-2 mb-8 bg-white/10 backdrop-blur-md rounded-2xl p-1 w-max">
          {['overview', 'elections', 'history', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#10B981] text-white shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Stats Cards */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-[#10B981]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#10B981]">Active Elections</h3>
            <p className="text-3xl font-bold text-white mt-2">{electionData.activeElections}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-[#10B981]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#10B981]">Upcoming Elections</h3>
            <p className="text-3xl font-bold text-white mt-2">{electionData.upcomingElections}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-[#10B981]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#10B981]">Past Elections</h3>
            <p className="text-3xl font-bold text-white mt-2">{electionData.pastElections}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-[#10B981]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#10B981]">Voter Turnout</h3>
            <p className="text-3xl font-bold text-white mt-2">{electionData.voterTurnout}%</p>
          </div>
        </div>

        {/* Active Elections Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Active Elections</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden">
            <div className="p-6 border-b border-white/20 hover:bg-white/5 transition-colors duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">General Election 2025</h3>
                  <p className="text-white/70 mt-2">Cast your vote for the next government</p>
                  <div className="flex items-center mt-4 text-sm text-white/60">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Ends in 3 days
                  </div>
                </div>
                <button className="bg-gradient-to-r from-[#10B981] to-[#0F172A] text-white px-6 py-2 rounded-xl hover:from-[#0da271] hover:to-[#0d1324] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Vote Now
                </button>
              </div>
            </div>
            <div className="p-6 hover:bg-white/5 transition-colors duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">Local Council Election</h3>
                  <p className="text-white/70 mt-2">Choose your local representative</p>
                  <div className="flex items-center mt-4 text-sm text-white/60">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Ends in 7 days
                  </div>
                </div>
                <button className="bg-gradient-to-r from-[#10B981] to-[#0F172A] text-white px-6 py-2 rounded-xl hover:from-[#0da271] hover:to-[#0d1324] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Vote Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;