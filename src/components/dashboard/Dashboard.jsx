import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Dashboard = ({ onNavigate, user }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [electionData, setElectionData] = useState({
    activeElections: 0,
    upcomingElections: 0,
    pastElections: 0,
    voterTurnout: 0,
  });

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

  const stats = [
    {
      title: "Active Elections",
      value: electionData.activeElections,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-[#10B981]/20 to-[#10B981]/10"
    },
    {
      title: "Upcoming Elections",
      value: electionData.upcomingElections,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-[#10B981]/20 to-[#10B981]/10"
    },
    {
      title: "Past Elections",
      value: electionData.pastElections,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-[#10B981]/20 to-[#10B981]/10"
    },
    {
      title: "Voter Turnout",
      value: `${electionData.voterTurnout}%`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-[#10B981]/20 to-[#10B981]/10"
    }
  ];

  const activeElections = [
    {
      title: "General Election 2025",
      description: "Cast your vote for the next government",
      timeLeft: "Ends in 3 days"
    },
    {
      title: "Local Council Election",
      description: "Choose your local representative",
      timeLeft: "Ends in 7 days"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d281c] via-[#132a3d] to-[#0F172A]">
      <Navbar onNavigate={onNavigate} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white mb-2"
        >
          Welcome to Digital Voting System
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/70 mb-8"
        >
          Your secure platform for democratic participation
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex space-x-2 mb-8 bg-white/10 backdrop-blur-md rounded-2xl p-1 w-max"
        >
          {['overview', 'elections', 'history', 'settings'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#10B981] text-white shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-gradient-to-br ${stat.color} backdrop-blur-md p-6 rounded-2xl border border-[#10B981]/20 shadow-xl hover:shadow-2xl transition-all duration-500`}
            >
              <div className="w-12 h-12 bg-[#10B981]/20 rounded-lg flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#10B981]">{stat.title}</h3>
              <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Active Elections</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-[#10B981]/20 shadow-xl overflow-hidden">
            {activeElections.map((election, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-6 border-b border-[#10B981]/20 hover:bg-[#10B981]/5 transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{election.title}</h3>
                    <p className="text-white/70 mt-2">{election.description}</p>
                    <div className="flex items-center mt-4 text-sm text-[#10B981]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {election.timeLeft}
                    </div>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onNavigate('vote')}
                    className="bg-gradient-to-r from-[#10B981] to-[#0F172A] text-white px-6 py-2 rounded-xl hover:from-[#0da271] hover:to-[#0d1324] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Vote Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;