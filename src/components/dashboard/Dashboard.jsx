import React from 'react';
import Navbar from './Navbar';

const Dashboard = () => {
  const electionData = {
    activeElections: 2,
    upcomingElections: 1,
    pastElections: 5,
    voterTurnout: 75,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-charcoal mb-8">Welcome to Digital Voting System</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stats Cards */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-emerald">Active Elections</h3>
            <p className="text-3xl font-bold text-charcoal mt-2">{electionData.activeElections}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-emerald">Upcoming Elections</h3>
            <p className="text-3xl font-bold text-charcoal mt-2">{electionData.upcomingElections}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-emerald">Past Elections</h3>
            <p className="text-3xl font-bold text-charcoal mt-2">{electionData.pastElections}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-emerald">Voter Turnout</h3>
            <p className="text-3xl font-bold text-charcoal mt-2">{electionData.voterTurnout}%</p>
          </div>
        </div>

        {/* Active Elections Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-charcoal mb-6">Active Elections</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold text-charcoal">General Election 2025</h3>
              <p className="text-gray-600 mt-2">Cast your vote for the next government</p>
              <button className="mt-4 bg-emerald text-white px-4 py-2 rounded hover:bg-emerald/90 transition-colors">
                Vote Now
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal">Local Council Election</h3>
              <p className="text-gray-600 mt-2">Choose your local representative</p>
              <button className="mt-4 bg-emerald text-white px-4 py-2 rounded hover:bg-emerald/90 transition-colors">
                Vote Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;