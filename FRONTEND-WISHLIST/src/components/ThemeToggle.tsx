import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 p-2 rounded-full bg-opacity-50 backdrop-blur-sm z-50"
      style={{ backgroundColor: isDarkMode ? "#374151" : "#fff" }}
    >
      {isDarkMode ? (
        <FaSun className="text-yellow-400 text-xl" />
      ) : (
        <FaMoon className="text-gray-700 text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
