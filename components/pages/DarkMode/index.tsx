import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  function isDark() {
    return theme === "dark";
  }

  return (
    <button
      className="focus:outline-none dark-btn  p-3 rounded-full fixed right-8 bottom-8 hover:scale-125 transition ease-in-out duration-500 dark:bg-[#ffffff7d] bg-[#0000007d]"
      onClick={() => setTheme(isDark() ? "light" : "dark")}
      aria-label="Theme toggle"
    >
      {isDark() ? (
        <BiSun color="black" size={20} />
      ) : (
        <BiMoon color="white" size={20} />
      )}
    </button>
  );
}
