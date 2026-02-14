import useTheme from "../context/ThemeContext";

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="relative inline-flex items-center gap-3 cursor-pointer select-none group">
      {/* Sun icon */}
      <svg
        className={`w-4 h-4 transition-colors duration-300 ${themeMode === "light" ? "text-amber-500" : "text-zinc-500"}`}
        fill="currentColor" viewBox="0 0 24 24"
      >
        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.592-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.592Z" />
      </svg>

      {/* Hidden checkbox — logic unchanged */}
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />

      {/* Custom toggle pill */}
      <div className="
        relative w-12 h-6
        bg-zinc-200 dark:bg-zinc-700
        rounded-full
        transition-colors duration-400
        peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-zinc-400
        after:content-['']
        after:absolute after:top-[2px] after:left-[2px]
        after:w-5 after:h-5
        after:bg-white after:rounded-full
        after:shadow-md
        after:transition-all after:duration-300
        peer-checked:after:translate-x-6
        peer-checked:bg-zinc-800
      " />

      {/* Moon icon */}
      <svg
        className={`w-4 h-4 transition-colors duration-300 ${themeMode === "dark" ? "text-indigo-400" : "text-zinc-400"}`}
        fill="currentColor" viewBox="0 0 24 24"
      >
        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
      </svg>

      <span
        className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 transition-colors duration-300"
      >
        {themeMode === "dark" ? "Dark" : "Light"}
      </span>
    </label>
  );
}