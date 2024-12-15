import ThemeToggle from "../ThemeToggle";

type HeaderProps = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  return (
    <header
      className={`${
        isDarkMode ? "bg-gray-800" : "bg-red-600"
      } text-white py-6 shadow-lg`}
    >
      <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center font-serif">
          Christmas Wishlist
        </h1>
        <p className="text-center mt-2 text-gray-300">
          Make your holiday dreams come true!
        </p>
      </div>
    </header>
  );
}

export default Header;
