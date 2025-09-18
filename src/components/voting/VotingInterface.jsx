import React, { useState } from 'react';
import Navbar from '../dashboard/Navbar';

const VotingInterface = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isVoteConfirmed, setIsVoteConfirmed] = useState(false);

  const candidates = [
    { id: 1, name: 'John Doe', party: 'Progressive Party', symbol: '🌟' },
    { id: 2, name: 'Jane Smith', party: 'Conservative Party', symbol: '🌍' },
    { id: 3, name: 'Mike Johnson', party: 'Liberal Party', symbol: '🌿' },
    { id: 4, name: 'Sarah Williams', party: 'Democratic Party', symbol: '🌺' },
  ];

  const handleVoteSubmit = () => {
    if (selectedCandidate) {
      setIsVoteConfirmed(true);
      // Handle vote submission logic here
    }
  };

  if (isVoteConfirmed) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-emerald mb-4">Vote Successfully Cast!</h2>
            <p className="text-gray-600">Thank you for participating in the democratic process.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-charcoal mb-8">Cast Your Vote</h1>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-charcoal mb-6">Select Your Candidate</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  selectedCandidate === candidate.id
                    ? 'border-emerald bg-emerald/10'
                    : 'border-gray-200 hover:border-emerald/50'
                }`}
                onClick={() => setSelectedCandidate(candidate.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{candidate.symbol}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal">{candidate.name}</h3>
                    <p className="text-gray-600">{candidate.party}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleVoteSubmit}
              disabled={!selectedCandidate}
              className={`px-8 py-3 rounded-lg text-white font-semibold transition-colors duration-200 ${
                selectedCandidate
                  ? 'bg-emerald hover:bg-emerald/90'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              Confirm Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingInterface;