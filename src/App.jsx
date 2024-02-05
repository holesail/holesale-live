import "./App.css";
import { Footer } from "./components/Footer";
import { Login } from "./Pages/Login";
import { Navbar } from "./components/Navbar";
import Cookies from "js-cookie";
import { USERNAME_COOKIENAME } from "./Pages/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import { HomePage } from "./HomePage";
import { Powered } from "./components/powered";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="" element={<ProtectedRoute />}>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

const AppLayout = () => {
  return (
    <div>
      <div>
        <Powered />
        <Navbar />
        <Outlet />
      </div>
      <Footer />
        
    </div>
  );
};
const ProtectedRoute = () => {
  if (isLoggedIn()) {
    return <Outlet />;
  }
  return <Navigate to="/Login" />;
};
const isLoggedIn = () => {
  const user = Cookies.get(USERNAME_COOKIENAME);
  return !!user;
};
