import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login({profileRef}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setUser({
      name: userName,
      password: password,
    });
    setUserName("");
    setPassword("");
    profileRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-zinc-900 to-slate-800 flex items-center justify-center px-4">
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-600 opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500 opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-sm">
        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/40">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 mb-4 shadow-lg shadow-violet-500/30">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <h1
              className="text-2xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Welcome back
            </h1>
            <p className="text-zinc-400 text-sm mt-1">
              Sign in to your account
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {/* Username field */}
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-zinc-500 group-focus-within:text-violet-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-zinc-600 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 focus:ring-1 focus:ring-violet-500/30 transition-all duration-200"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="group">
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-zinc-500 group-focus-within:text-violet-400 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-zinc-600 rounded-xl pl-10 pr-4 py-3 text-sm outline-none focus:border-violet-500/60 focus:bg-white/8 focus:ring-1 focus:ring-violet-500/30 transition-all duration-200"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 active:scale-[0.98] text-white font-semibold py-3 rounded-xl text-sm tracking-wide shadow-lg shadow-violet-500/25 transition-all duration-200"
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Subtle footer note */}
        <p className="text-center text-zinc-600 text-xs mt-6">
          Your credentials are stored in context only
        </p>
      </div>
    </div>
  );
}

export default Login;
