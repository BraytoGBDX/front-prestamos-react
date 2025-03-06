import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import UsersTable from "./pages/Users/UsersTable.jsx";
import UsersEdit from "./pages/Users/UsersEdit.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersTable />} />
        <Route path="/usersEdit/:id" element={<UsersEdit />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
