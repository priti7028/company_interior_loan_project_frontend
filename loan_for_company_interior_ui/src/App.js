import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Layout/NavBar";
import Header from "./Components/Pages/Admin_app/DashboardComponents/UserProfile/Header";
import Banner from "./Components/Pages/Admin_app/DashboardComponents/UserProfile/Banner";
import Dashboard from "./Components/Pages/DashBoard/Dasboard";
import AllApplications from "./Components/Pages/Admin_app/DashboardComponents/AllApplications";
import Update from "./Components/Pages/Admin_app/DashboardComponents/UpdateUser";
import DefaulterShow from "./Components/Pages/Admin_app/DashboardComponents/Defaultershow";
import DefauletrsDelete from "./Components/Pages/Admin_app/DashboardComponents/DefaulterDelete";
import Defaulter from "./Components/Pages/Admin_app/Defaulter";
import MonthlyApplicationChart from "./Components/Pages/Admin_app/DashboardComponents/MonthlyApplicationChart";
import ShowUser from "./Components/Pages/Admin_app/DashboardComponents/ShowUser";
import User from "./Components/Pages/Admin_app/User";
import { Login } from "./Components/Pages/UserAuth/UserLogin";
import EmiCalculator from "./Components/Pages/EMICalculater";
import SideMenu from "./Components/SideMenu/SideMenu";


function App() {
  return (
  <>
    <BrowserRouter>
      <NavBar/>
      <SideMenu/>
      <Routes>
        <Route path='/users' element={<User/>}/>
        <Route path='/show' element={<ShowUser/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='/banner' element={<Banner/>}/>
        <Route path='/sidemenu' element={<SideMenu/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/home' element={<Login/>}/>
        <Route path='/emi' element={<EmiCalculator/>}/>
      
        <Route path='/update/user/:id' element={<Update/>}/>
        <Route path='/report' element={<MonthlyApplicationChart/>}/>
       
        <Route path="/dashboard/applications" element={<AllApplications/>}/>
        <Route path="/dashboard/users" element={<ShowUser/>}/>
        <Route path='/update/documents/:id/' element={<Update/>}/>
        <Route path="/showdefault" element={<DefaulterShow/>}/>
        <Route path="/deletedefault/:userId" element={<DefauletrsDelete/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path="/defaulter" element={<DefauletrsDelete/>}/>
        <Route path="/application" element={<AllApplications/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
      </>
  );
}
export default App;



 