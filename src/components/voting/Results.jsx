import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../dashboard/Navbar';

const Results = ({ onNavigate }) => {
  const [selectedElection, setSelectedElection] = useState('general2025');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResults = () => {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        const mockResults = {
          general2025: [
            { name: "John Smith", party: "Progress Party", votes: 15432, percentage: 45 },
            { name: "Sarah Johnson", party: "Green Alliance", votes: 12345, percentage: 36 },
            { name: "Michael Chen", party: "Unity Movement", votes: 6213, percentage: 18 }
          ],
          local2025: [
            { name: "Robert Brown", party: "Community First", votes: 8432, percentage: 52 },
            { name: "Lisa Wang", party: "Progress Party", votes: 5123, percentage: 32 },
            { name: "David Wilson", party: "Independent", votes: 2543, percentage: 16 }
          ]
        };
        
        setResults(mockResults[selectedElection] || []);
        setIsLoading(false);
      }, 1500);
    };

    fetchResults();
  }, [selectedElection]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d281c] via-[#132a3d] to-[#0F172A]">
      <Navbar onNavigate={onNavigate} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Election Results</h1>
          <p className="text-white/70">Live results from recent elections</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex space-x-2 mb-8 bg-white/10 backdrop-blur-md rounded-2xl p-1 w-max mx-auto"
        >
          {[
            { id: 'general2025', name: 'General Election 2025' },
            { id: 'local2025', name: 'Local Council 2025' }
          ].map((election) => (
            <motion.button
              key={election.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedElection(election.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                selectedElection === election.id
                  ? 'bg-[#10B981] text-white shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {election.name}
            </motion.button>
          ))}
        </motion.div>

        {isLoading ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-[#10B981] border-t-transparent rounded-full mx-auto mb-4"
            />
            <p className="text-white/70">Loading results...</p>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl border border-[#10B981]/20 shadow-xl overflow-hidden"
          >
            <div className="p-6 border-b border-[#10B981]/20">
              <h2 className="text-xl font-semibold text-white mb-4">
                {selectedElection === 'general2025' ? 'General Election 2025' : 'Local Council Election 2025'} Results
              </h2>
              <p className="text-white/70">Total votes cast: 34,000</p>
            </div>

            <div className="divide-y divide-[#10B981]/20">
              {results.map((candidate, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 hover:bg-[#10B981]/5 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{candidate.name}</h3>
                      <p className="text-[#10B981]">{candidate.party}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold">{candidate.votes.toLocaleString()} votes</p>
                      <p className="text-white/70">{candidate.percentage}%</p>
                    </div>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-[#10B981] to-[#0F172A] h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${candidate.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('dashboard')}
            className="px-6 py-2 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300"
          >
            Back to Dashboard
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Results;