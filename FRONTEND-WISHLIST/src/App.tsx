import "./App.css";
import ChristmasWishlist from "./pages/ChristmasWishlist";
import Header from "./components/layouts/Header";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <ChristmasWishlist isDarkMode={isDarkMode} />
    </>
  );
}

export default App;
