import React, { useState, useEffect } from 'react';
import Navbar from '../dashboard/Navbar';

const Results = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedElection, setSelectedElection] = useState('general-2025');
  
  const electionResults = {
    totalVotes: 10000,
    results: [
      { id: 1, name: 'John Doe', party: 'Progressive Party', votes: 4000, percentage: 40, trend: 'up' },
      { id: 2, name: 'Jane Smith', party: 'Conservative Party', votes: 3500, percentage: 35, trend: 'down' },
      { id: 3, name: 'Mike Johnson', party: 'Liberal Party', votes: 1500, percentage: 15, trend: 'up' },
      { id: 4, name: 'Sarah Williams', party: 'Democratic Party', votes: 1000, percentage: 10, trend: 'stable' },
    ],
  };

  const elections = [
    { id: 'general-2025', name: 'General Election 2025', date: 'May 15, 2025' },
    { id: 'local-2024', name: 'Local Council Election 2024', date: 'November 8, 2024' },
    { id: 'referendum-2023', name: 'Constitutional Referendum 2023', date: 'March 22, 2023' },
  ];

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1a2b4d] to-[#10B981]/30">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-10 bg-white/10 rounded-xl w-1/3 mb-8"></div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6 mb-8">
              <div className="h-8 bg-white/10 rounded-lg w-1/4 mb-6"></div>
              <div className="h-12 bg-white/10 rounded-lg w-1/6 mb-8"></div>
              {[1, 2, 3, 4].map(item => (
                <div key={item} className="border-b border-white/20 pb-6 last:border-b-0 last:pb-0 mb-6 last:mb-0">
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-2/3">
                      <div className="h-6 bg-white/10 rounded-lg mb-2"></div>
                      <div className="h-4 bg-white/10 rounded-lg w-1/2"></div>
                    </div>
                    <div className="w-1/4">
                      <div className="h-6 bg-white/10 rounded-lg mb-2"></div>
                      <div className="h-4 bg-white/10 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1a2b4d] to-[#10B981]/30">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-white mb-2 animate-fadeIn">Election Results</h1>
        <p className="text-white/70 mb-8 animate-fadeIn">Detailed analysis of election outcomes</p>

        {/* Election Selector */}
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-3">
            {elections.map((election) => (
              <button
                key={election.id}
                onClick={() => setSelectedElection(election.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  selectedElection === election.id
                    ? 'bg-[#10B981] text-white shadow-lg'
                    : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/20'
                }`}
              >
                {election.name}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6 mb-8 animate-fadeIn">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Total Votes Cast</h2>
              <p className="text-4xl font-bold text-[#10B981]">{electionResults.totalVotes.toLocaleString()}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#10B981]/20 text-[#10B981]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Final Results
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {electionResults.results.map((result, index) => (
              <div 
                key={result.id} 
                className="border-b border-white/20 pb-6 last:border-b-0 last:pb-0 stagger-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{result.name}</h3>
                    <p className="text-white/70">{result.party}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-white">
                      {result.votes.toLocaleString()} votes
                    </p>
                    <div className="flex items-center justify-end">
                      <p className="text-[#10B981] font-semibold">{result.percentage}%</p>
                      {result.trend === 'up' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#10B981] ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                      )}
                      {result.trend === 'down' && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-400 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2.5 mt-3">
                  <div
                    className="bg-gradient-to-r from-[#10B981] to-[#0F172A] h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${result.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 group">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Voter Turnout</h3>
              <div className="w-10 h-10 bg-[#10B981]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-[#10B981]">78%</p>
            <div className="w-full bg-white/20 rounded-full h-2 mt-3">
              <div className="bg-gradient-to-r from-[#10B981] to-[#0F172A] h-2 rounded-full" style={{ width: '78%' }}></div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 group">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Valid Votes</h3>
              <div className="w-10 h-10 bg-[#10B981]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-[#10B981]">98.5%</p>
            <div className="w-full bg-white/20 rounded-full h-2 mt-3">
              <div className="bg-gradient-to-r from-[#10B981] to-[#0F172A] h-2 rounded-full" style={{ width: '98.5%' }}></div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 group">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Winning Margin</h3>
              <div className="w-10 h-10 bg-[#10B981]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-[#10B981]">5%</p>
            <div className="w-full bg-white/20 rounded-full h-2 mt-3">
              <div className="bg-gradient-to-r from-[#10B981] to-[#0F172A] h-2 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Results Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-[#10B981] font-medium mb-2">Key Insights</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#10B981] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Progressive Party wins with 40% of the vote
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#10B981] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Voter turnout increased by 8% compared to last election
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#10B981] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Youth participation saw a significant increase
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#10B981] font-medium mb-2">Next Steps</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#10B981] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Official results certification in 3 days
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#10B981] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Transition process begins next week
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#10B981] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Next election scheduled for November 2026
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;