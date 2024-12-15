// src/App.tsx
import "./App.css";
import Header from "./components/layouts/Header";
import { useDarkMode } from "./hooks/useDarkMode";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/Home";
import MyWishlist from "./pages/MyWishList";
import UserWishlist from "./pages/UserWishList";

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={!isAuthenticated ? <HomePage isDarkMode={isDarkMode} /> : <Navigate to="/me/wishlist" />} />
        <Route path="/me/wishlist" element={isAuthenticated ? <MyWishlist isDarkMode={isDarkMode} /> : <Navigate to="/" />} />
        <Route path="/wishlist/:userId" element={<UserWishlist isDarkMode={isDarkMode} />} />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/me/wishlist" : "/"} />} />
      </Routes>
    </Router>
  );
}

export default App;