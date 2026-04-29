import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Order";
import Customers from "./pages/Customers";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {


  return (
     <div>
        <div id="app-container" className="bg-gray-100 min-h-screen flex">
          <div id="layout-wrapper" className="flex flex-row flex-1">
            <Sidebar />
            <div id="main-content" className="flex-1 p-4">
              <Header />
               <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Customers" element={<Customers />} />
    </Routes>
              
            </div>
          </div>
        </div>
      </div>
  )
}

export default App
