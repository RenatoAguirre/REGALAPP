import "./App.css";
import ChristmasWishlist from "./pages/ChristmasWishlist";
import Header from "./components/layouts/Header";
import { useDarkMode } from "./hooks/useDarkMode";
import getWishlist from "./services/getWishlist.service";
import { useEffect, useState } from "react";
import { WishlistItem } from "./types";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [wishListItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    getWishlist("458fb808-719f-4e07-8819-7155bda3abd3").then((response) => {
      setWishlistItems(response.wishListItems);
    });
  }
  , [isAuthenticated, user]);

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <ChristmasWishlist isDarkMode={isDarkMode} wishListItems={wishListItems}/>
    </>
  );
}

export default App;
