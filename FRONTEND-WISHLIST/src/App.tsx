import "./App.css";
import ChristmasWishlist from "./pages/ChristmasWishlist";
import Header from "./components/layouts/Header";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <>
      <Header isDarkMode={isDarkMode} />
      <ChristmasWishlist
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </>
  );
}

export default App;
