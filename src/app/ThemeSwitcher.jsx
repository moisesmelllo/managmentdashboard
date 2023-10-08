'use client'

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunMoon } from 'lucide-react';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
  };

  if(!mounted) {
    return null
  }

  return (
    <div>
      <SunMoon 
          className="cursor-pointer"
          onClick={toggleTheme}
        />
    </div>
  )
}

export default ThemeSwitcher;