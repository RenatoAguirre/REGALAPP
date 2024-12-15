import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isLoading } = useAuth0();

  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => logout()}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : "Log Out"}
    </button>
  );
};

export default LogoutButton;