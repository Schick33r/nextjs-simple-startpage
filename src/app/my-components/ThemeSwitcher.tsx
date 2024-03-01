"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"
import { DarkMode } from "@mui/icons-material";
import { LightMode } from "@mui/icons-material";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <div className="flex justify-end">
       <Button variant="outline"
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
   className=""
    >
      {theme === "light" ? <DarkMode></DarkMode> : <LightMode></LightMode>}
    </Button>
    </div>
   
  );
};