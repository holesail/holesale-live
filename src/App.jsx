import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Cookies from "js-cookie";
import { Footer } from "./components/Footer";
import { Login } from "./Pages/Login";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./HomePage";
import { Powered } from "./components/Powered";
import { AdminPanel } from "./AdminPanel";

// Assuming USERNAME_COOKIENAME is defined in Login.js
const USERNAME_COOKIENAME = "username"; // Example cookie name, replace it with the actual name used in your application

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/AdminPanel" element={<AdminPanel />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

const AppLayout = () => {
  return (
    <div>
      <Powered />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const ProtectedRoute = () => {
  if (isLoggedIn()) {
    return <Outlet />;
  } else {
    return <Navigate to="/Login" />;
  }
};

const isLoggedIn = () => {
  const user = Cookies.get(USERNAME_COOKIENAME);
  return !!user;
};
