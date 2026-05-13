import "./assets/tailwind.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Loading Component
const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-white">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-green-600 text-lg">Loading...</p>
        </div>
    );
};

// Layouts
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const VisitorLayout = React.lazy(() => import("./layouts/VisitorLayout"));

// Dashboard Pages
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Order"));
const Customers = React.lazy(() => import("./pages/Customers"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// Auth Pages
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));

// Visitor Pages (Halaman Baru)
const VisitorHome = React.lazy(() => import("./pages/VisitorHome"));
const VisitorMenu = React.lazy(() => import("./pages/VisitorMenu"));
const VisitorAbout = React.lazy(() => import("./pages/VisitorAbout"));


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Admin Dashboard Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Customers" element={<Customers />} />
        </Route>

        {/* Authentication Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Visitor / Landing Page Routes */}
        <Route element={<VisitorLayout />}>
           {/* Halaman Utama Visitor */}
           <Route path="/visitor" element={<VisitorHome />} /> 
           {/* Sub-halaman Visitor */}
           <Route path="/visitor/menu" element={<VisitorMenu />} />
           <Route path="/visitor/tentang" element={<VisitorAbout />} />
           
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;