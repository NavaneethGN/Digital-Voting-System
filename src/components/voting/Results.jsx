import React from 'react';
import Navbar from '../dashboard/Navbar';

const Results = () => {
  const electionResults = {
    totalVotes: 10000,
    results: [
      { id: 1, name: 'John Doe', party: 'Progressive Party', votes: 4000, percentage: 40 },
      { id: 2, name: 'Jane Smith', party: 'Conservative Party', votes: 3500, percentage: 35 },
      { id: 3, name: 'Mike Johnson', party: 'Liberal Party', votes: 1500, percentage: 15 },
      { id: 4, name: 'Sarah Williams', party: 'Democratic Party', votes: 1000, percentage: 10 },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-charcoal mb-8">Election Results</h1>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-charcoal mb-2">Total Votes Cast</h2>
            <p className="text-4xl font-bold text-emerald">{electionResults.totalVotes.toLocaleString()}</p>
          </div>

          <div className="space-y-6">
            {electionResults.results.map((result) => (
              <div key={result.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal">{result.name}</h3>
                    <p className="text-gray-600">{result.party}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-charcoal">
                      {result.votes.toLocaleString()} votes
                    </p>
                    <p className="text-emerald font-semibold">{result.percentage}%</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-emerald h-2.5 rounded-full"
                    style={{ width: `${result.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Voter Turnout</h3>
            <p className="text-3xl font-bold text-emerald">78%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Valid Votes</h3>
            <p className="text-3xl font-bold text-emerald">98.5%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-charcoal mb-2">Winning Margin</h3>
            <p className="text-3xl font-bold text-emerald">5%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;