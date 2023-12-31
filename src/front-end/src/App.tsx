import React from "react";
import "./App.css";
// import LoginPage from './components/auth/loginPage';
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
// import PersonInfo from "./components/onboard/Personinfo";
// import Reference from "./components/onboard/Reference";
// import EmergencyContact from "./components/onboard/EmergencyContact";
// import Footer from "./components/common/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/employee/dashboard/layout";
import EmployeeHome from "./components/employee/EmployeeHome";
import EmployeeProfile from "./components/employee/EmployeeProfile";
import EmployeeVisaManagement from "./components/employee/EmployeeVisaManagement";
import HrEmployeeProfiles from "./components/hr/HrEmployeeProfiles";
import OnboardingLayout from "./components/onboard/OnboardingLayout";
import AuthLayout from "./components/auth/AuthLayout";
import ProfileScreen from "./components/hr/ProfileScreen";

function App() {
  return (
    //   <ThemeProvider theme={theme}>
    //     <OnBoardingSteper />
    //     {/* <EmergencyContact />
    // <Footer /> */}
    //   </ThemeProvider>

    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          {/* Auth Routes */}
          <Route
            path="/login"
            element={
              <AuthLayout />
            }
          />
          {/* Onboarding routes */}
          <Route
            path="/onboarding"
            element={
              <OnboardingLayout />
            }
          />
          {/* Employee routes */}
          <Route
            path="/employee/home"
            element={
              <DashboardLayout role="employee">
                <EmployeeHome />
              </DashboardLayout>
            }
          />
          <Route
            path="/employee/profile"
            element={
              <DashboardLayout role="employee">
                <EmployeeProfile />
              </DashboardLayout>
            }
          />
          <Route
            path="/employee/visa-management"
            element={
              <DashboardLayout role="employee">
                <EmployeeVisaManagement />
              </DashboardLayout>
            }
          />

          {/* HR routes */}
          <Route
            path="/hr/home"
            element={
              <DashboardLayout role="hr">
                <HrEmployeeProfiles />
              </DashboardLayout>
            }
          />
          <Route
            path="/hr/employee-profiles"
            element={
              <DashboardLayout role="hr">
                <HrEmployeeProfiles />
              </DashboardLayout>
            }
          />
          <Route
            path="/hr/employee-profile/:employeeId"
            element={<ProfileScreen />}
          />

          {/* Other Routes */}
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
