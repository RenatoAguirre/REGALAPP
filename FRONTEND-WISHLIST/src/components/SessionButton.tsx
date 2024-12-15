import { useAuth0 } from "@auth0/auth0-react";

const SessionButton = () => {
  const { loginWithPopup, isAuthenticated, logout } = useAuth0();
  const buttonLabel = isAuthenticated ? "Log Out" : "Log In";

  const sessionHandler = () => {
    if (isAuthenticated) {
      logout();
    } else {
      loginWithPopup();
    }
  };

  return (
    <button
      className={`${
        isAuthenticated
          ? "bg-red-500 hover:bg-red-700"
          : "bg-blue-400 hover:bg-blue-400"
      }  text-white font-bold py-2 px-4 rounded`}
      onClick={sessionHandler}
    >
      {buttonLabel}
    </button>
  );
};

export default SessionButton;
