import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  return (
    <button
      className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      onClick={() => loginWithRedirect()}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : "Log In"}
    </button>
  );
};

export default LoginButton;