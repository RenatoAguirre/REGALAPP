import React from "react";
import { FaSnowflake } from "react-icons/fa";

interface SnowflakeBackgroundProps {
  isDarkMode: boolean;
}

const SnowflakeBackground: React.FC<SnowflakeBackgroundProps> = ({
  isDarkMode,
}) => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <FaSnowflake
          key={i}
          className={`${
            isDarkMode ? "text-gray-600/30" : "text-white/30"
          } absolute animate-fall`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SnowflakeBackground;
