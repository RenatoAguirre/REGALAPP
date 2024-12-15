type HeaderProps = {
  isDarkMode: boolean;
};

function Header({ isDarkMode }: HeaderProps) {
  return (
    <header
      className={`${
        isDarkMode ? "bg-gray-800" : "bg-red-600"
      } text-white py-6 shadow-lg`}
    >
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
