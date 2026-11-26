import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";

import "./App.css";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Services from "./components/services";
import HowItWorks from "./components/HowItWorks";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import FindProfessionals from "./pages/FindProfessionals";
import Register from "./pages/Register";
import Login from "./pages/login";
import ForgotPassword from "./pages/forgotpassword";
import RegisterWorker from "./pages/RegisterWorker";
import RegisterCustomer from "./pages/RegisterCustomer";
import WorkerProfile from "./pages/WorkerProfile";
import WorkerDetails from "./pages/WorkerDetails";
import Booking from "./pages/Booking";
import CustomerDashboard from "./pages/CustomerDashboard";
import ProfessionalDashboard from "./pages/ProfessionalDashboard";
import EditProfile from "./pages/EditProfile";
import Notifications from "./pages/Notifications";
import About from "./pages/about";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("kaamconnect-theme") === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);

    localStorage.setItem(
      "kaamconnect-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <HowItWorks />
              <CTASection />
            </>
          }
        />

        <Route path="/services" element={<Services />} />
        <Route path="/workers" element={<FindProfessionals />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register-worker" element={<RegisterWorker />} />
        <Route path="/register-customer" element={<RegisterCustomer />} />
        <Route path="/worker-profile" element={<WorkerProfile />} />
        <Route path="/worker-details" element={<WorkerDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
        <Route path="/professional-dashboard" element={<ProfessionalDashboard />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;