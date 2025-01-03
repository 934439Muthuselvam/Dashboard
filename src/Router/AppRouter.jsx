import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Dashboard from "../Components/Dashboard";

function Layout() {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row bg-[#f3f4f6]">
      <div className=" md:w-1/1 h-screen bg-white sticky top-0 hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto ">
        <Navbar />
        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default function AppRouter() {
    return (
      <div className='w-full min-h-screen bg-[#f3f4f6] '>
          <div>
          
      
          </div>
        <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
          
            <Route path='/' element={<Dashboard />} />
            
            
  
            
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }