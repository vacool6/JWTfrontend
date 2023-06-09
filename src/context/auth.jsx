import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", null);
  const navigate = useNavigate();

  const login = async (data) => {
    setToken(data);
    navigate("/profile");
  };

  const logout = () => {
    setToken(null);
    navigate("/login");
  };

  const value = {
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
