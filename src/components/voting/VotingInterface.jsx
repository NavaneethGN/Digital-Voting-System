import React, { useState, useEffect } from 'react';
import Navbar from '../dashboard/Navbar';

const VotingInterface = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isVoteConfirmed, setIsVoteConfirmed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const candidates = [
    { id: 1, name: 'John Doe', party: 'Progressive Party', symbol: '🌟' },
    { id: 2, name: 'Jane Smith', party: 'Conservative Party', symbol: '🌍' },
    { id: 3, name: 'Mike Johnson', party: 'Liberal Party', symbol: '🌿' },
    { id: 4, name: 'Sarah Williams', party: 'Democratic Party', symbol: '🌺' },
  ];

  useEffect(() => {
    if (isVoteConfirmed) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isVoteConfirmed]);

  const handleVoteSubmit = () => {
    if (selectedCandidate) {
      setIsVoteConfirmed(true);
      // Handle vote submission logic here
    }
  };

  if (isVoteConfirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#10B981]/20">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl text-center animate-fadeIn">
            <div className="w-20 h-20 bg-gradient-to-r from-[#10B981] to-[#0F172A] rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#10B981] mb-4">Vote Successfully Cast!</h2>
            <p className="text-white/70 mb-6">Thank you for participating in the democratic process.</p>
            <button 
              className="bg-gradient-to-r from-[#10B981] to-[#0F172A] text-white px-6 py-2 rounded-xl hover:from-[#0da271] hover:to-[#0d1324] transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setIsVoteConfirmed(false)}
            >
              Return to Dashboard
            </button>
          </div>
        </div>
        
        {/* Confetti effect */}
        {showConfetti && (
          <div className="fixed inset-0 z-50 pointer-events-none">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: ['#10B981', '#0F172A', '#FFFFFF', '#0da271'][Math.floor(Math.random() * 4)],
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#10B981]/20 pt-16">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-white mb-2 animate-fadeIn">Cast Your Vote</h1>
        <p className="text-white/70 mb-8 animate-fadeIn">Select your preferred candidate</p>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-6">Select Your Candidate</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {candidates.map((candidate, index) => (
              <div
                key={candidate.id}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 stagger-item ${
                  selectedCandidate === candidate.id
                    ? 'border-[#10B981] bg-[#10B981]/20 shadow-lg transform -translate-y-1'
                    : 'border-white/20 hover:border-[#10B981]/50 hover:shadow-md'
                }`}
                onClick={() => setSelectedCandidate(candidate.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{candidate.symbol}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{candidate.name}</h3>
                    <p className="text-white/70">{candidate.party}</p>
                  </div>
                </div>
                {selectedCandidate === candidate.id && (
                  <div className="mt-4 flex items-center text-[#10B981]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Selected
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleVoteSubmit}
              disabled={!selectedCandidate}
              className={`px-8 py-3 rounded-xl text-white font-semibold transition-all duration-300 flex items-center ${
                selectedCandidate
                  ? 'bg-gradient-to-r from-[#10B981] to-[#0F172A] hover:from-[#0da271] hover:to-[#0d1324] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                  : 'bg-white/20 cursor-not-allowed'
              }`}
            >
              {selectedCandidate ? (
                <>
                  Confirm Vote
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </>
              ) : (
                'Select a candidate to vote'
              )}
            </button>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Voting Instructions</h3>
          <ul className="space-y-2 text-white/70">
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#10B981] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Select your preferred candidate by clicking on their card
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#10B981] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Review your selection before confirming
            </li>
            <li className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#10B981] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Once confirmed, your vote cannot be changed
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VotingInterface;