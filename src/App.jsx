// // import { createContext, useState } from "react";
// // import Child1 from "./components/Child1";
// import { useRef } from "react";
// import Login from "./components/Login";
// import Profile from "./components/Profile";
// import UserContextProvider from "./context/UserContextProvider";

// // const UserContext = createContext({name: 'ashish'});

// function App() {
//   const profileRef = useRef(null);

//   // console.log(UserContext);

//   // const [user, setUser] = useState({name : 'ashish'});

//   // const steps = {
//   //   "step01" : 'create context api using' ,
//   //   "step02" : 'create provider wrap in provider',
//   //   "step03" : 'prop as value={} pass to component from provider wrapper',
//   //   "step04" : 'in component using useContext hook use the value of context'
//   // }

//   return (
//     <>
//       {/* <UserContext value={{user, setUser}}>
//       <Child1/>
//     </UserContext> */}
//       <UserContextProvider>
//         <Login profileRef={profileRef}/>
//         <Profile profileRef={profileRef}/>
//       </UserContextProvider>
//     </>
//   );
// }

// export default App;
// // export {UserContext};

import { useEffect, useState } from "react";
import "./App.css";

import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 relative overflow-hidden">

        {/* Decorative background blobs */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-amber-100 dark:bg-indigo-950 opacity-60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-zinc-200 dark:bg-zinc-900 opacity-80 blur-3xl" />

        {/* Topbar */}
        <header className="relative z-10 w-full px-6 py-5 flex items-center justify-between max-w-2xl mx-auto">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
              Store
            </p>
            <h1
              className="text-xl font-black text-zinc-900 dark:text-white leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Featured
            </h1>
          </div>
          <ThemeBtn />
        </header>

        {/* Divider */}
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
        </div>

        {/* Card area */}
        <main className="relative z-10 flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-sm">
            <Card />
          </div>
        </main>

        {/* Footer note */}
        <p className="relative z-10 text-center text-[10px] uppercase tracking-widest text-zinc-300 dark:text-zinc-700 pb-8">
          Free shipping on orders over $500
        </p>
      </div>
    </ThemeProvider>
  );
}

export default App;
