import { useState, useEffect } from "react";
import { FaSnowflake, FaGift} from "react-icons/fa";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

type Props = {
  isDarkMode: boolean;
};

const HomePage = ({isDarkMode}: Props) => {
  const [countdown, setCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const christmas = new Date(new Date().getFullYear(), 11, 25);
      const now = new Date();
      const diff = Number(christmas) - Number(now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1544975229-c290ed695b3a")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen">

        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-8 animate-bounce">
              Welcome to Your Christmas Wishlist!
            </h1>
            <div className="flex justify-center space-x-8 mb-12">
              <FaSnowflake className="text-white text-4xl animate-spin" />
              <FaGift className="text-red-500 text-4xl animate-bounce" />
              <FaSnowflake className="text-white text-4xl animate-spin" />
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Christmas Countdown</h2>
              <div className="grid grid-cols-4 gap-4">
                {Object.entries(countdown).map(([unit, value]) => (
                  <div key={unit} className="bg-red-600 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-white">{value}</div>
                    <div className="text-sm text-white capitalize">{unit}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
