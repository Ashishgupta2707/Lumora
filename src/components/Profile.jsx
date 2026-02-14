import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile({ profileRef }) {
  const { user } = useContext(UserContext);

  if (user) {
    return (
      <div ref={profileRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-zinc-900 to-slate-800 flex items-center justify-center px-4">
        {/* Ambient glow blobs */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-600 opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-teal-500 opacity-10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-sm">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/40">
            {/* Avatar */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-emerald-500/30 mb-4">
                {(user?.name || "U").charAt(0).toUpperCase()}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-widest">
                  Active Session
                </span>
              </div>
            </div>

            {/* Welcome message */}
            <div className="text-center mb-6">
              <h2
                className="text-2xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                Welcome back,
              </h2>
              <span className="text-xl font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {user?.name || "Please provide your credentials first"}
              </span>
            </div>

            {/* Info cards */}
            <div className="space-y-3">
              <div className="bg-white/5 border border-white/8 rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-violet-400"
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
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">
                    Username
                  </p>
                  <p className="text-white text-sm font-medium">
                    {user?.name || ""}
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/8 rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-rose-400"
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
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-widest font-semibold">
                    Password
                  </p>
                  <p className="text-white text-sm font-medium font-mono tracking-widest">
                    {user?.password || ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div ref={profileRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-zinc-900 to-slate-800 flex items-center justify-center px-4">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-zinc-700 opacity-20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-sm">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black/40 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-zinc-800 border border-white/10 mb-5">
              <svg
                className="w-7 h-7 text-zinc-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>
            </div>

            <h3
              className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Not logged in
            </h3>
            <p className="text-zinc-500 text-sm">
              Please provide your credentials first
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
