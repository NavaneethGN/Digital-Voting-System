import React, { useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";

const Login = ({ onLoginSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Background particles
    const createParticles = () => {
      const container = document.querySelector(".login-container");
      if (!container) return;

      container.querySelectorAll(".bg-emerald-400").forEach((p) => p.remove());

      for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div");
        particle.className =
          "absolute w-1 h-1 bg-emerald-400/20 rounded-full animate-float";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Signed in user:", result.user);
      // Store user info in localStorage
      localStorage.setItem('user', JSON.stringify(result.user));
      // Navigate to dashboard
      onLoginSuccess();
    } catch (error) {
      console.error("Google sign-in error:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center login-container bg-gradient-to-br from-[#0d281c] via-[#132a3d] to-[#0F172A] overflow-hidden relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/15 via-[#10B981]/10 to-transparent"></div>

      <div className="bg-[#0F172A]/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-96 border border-[#10B981]/20 relative z-10 transform transition-all duration-500 hover:scale-[1.02]">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#10B981] to-[#0a0f1d] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg pulse-glow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 
                   00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 
                   4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-white/70">Sign in with Google</p>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full relative overflow-hidden bg-gradient-to-r from-[#10B981] to-[#0a0f1d] text-white py-3 px-4 rounded-xl hover:from-[#0da271] hover:to-[#0a0f1d] transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center group"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
              Signing In...
            </>
          ) : (
            <>
              Continue with Google
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </>
          )}
          <span className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
        </button>
      </div>
    </div>
  );
};

export default Login;
