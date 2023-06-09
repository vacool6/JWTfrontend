import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homePage";
import LoginPage from "./components/loginPage";
import { ProtectedRoute } from "./protectedRoute";
import SignUpPage from "./components/signupPage";
import Profile from "./components/profile";
import NpmSearch from "./components/npmSearch";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/npmsearch"
          element={
            <ProtectedRoute>
              <NpmSearch />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
