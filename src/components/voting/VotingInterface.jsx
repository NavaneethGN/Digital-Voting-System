import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../dashboard/Navbar';

const VotingInterface = ({ onNavigate, user }) => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const candidates = [
    {
      id: 1,
      name: "John Smith",
      party: "Progress Party",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      description: "Focused on economic growth and education reform"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      party: "Green Alliance",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      description: "Committed to environmental sustainability and social justice"
    },
    {
      id: 3,
      name: "Michael Chen",
      party: "Unity Movement",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      description: "Advocate for healthcare reform and national unity"
    }
  ];

  const handleVote = () => {
    if (selectedCandidate) {
      setHasVoted(true);
      // Simulate voting process
      setTimeout(() => {
        onNavigate('results');
      }, 2000);
    }
  };

  if (hasVoted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0d281c] via-[#132a3d] to-[#0F172A] pt-16">
        <Navbar onNavigate={onNavigate} />
        <div className="flex items-center justify-center min-h-screen">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-[#10B981]/20 shadow-xl text-center w-96"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-[#10B981] border-t-transparent rounded-full mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold text-white mb-4">Thank You for Voting!</h2>
            <p className="text-white/70">Your vote has been recorded successfully.</p>
            <p className="text-white/70 mt-2">Redirecting to results...</p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d281c] via-[#132a3d] to-[#0F172A]">
      <Navbar onNavigate={onNavigate} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">General Election 2025</h1>
          <p className="text-white/70">Select your preferred candidate</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {candidates.map((candidate, index) => (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-white/10 backdrop-blur-md rounded-2xl border-2 p-6 cursor-pointer transition-all duration-300 ${
                selectedCandidate === candidate.id 
                  ? 'border-[#10B981] bg-[#10B981]/10' 
                  : 'border-white/20 hover:border-[#10B981]/50'
              }`}
              onClick={() => setSelectedCandidate(candidate.id)}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/20">
                <img src={candidate.image} alt={candidate.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-white text-center">{candidate.name}</h3>
              <p className="text-[#10B981] text-center mb-2">{candidate.party}</p>
              <p className="text-white/70 text-sm text-center">{candidate.description}</p>
              {selectedCandidate === candidate.id && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center mx-auto mt-4"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleVote}
            disabled={!selectedCandidate}
            className={`px-8 py-3 rounded-xl font-medium text-lg transition-all duration-300 ${
              selectedCandidate
                ? 'bg-gradient-to-r from-[#10B981] to-[#0F172A] text-white shadow-lg hover:shadow-xl'
                : 'bg-white/10 text-white/50 cursor-not-allowed'
            }`}
          >
            {selectedCandidate ? 'Submit Vote' : 'Select a candidate to vote'}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default VotingInterface;