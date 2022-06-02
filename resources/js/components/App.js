import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../providers/AuthProvider";
import ToastProvider from "../providers/ToastProvider";
import Dashboard from "./Dashboard";
import CreateEmployee from "./Employees/CreateEmployee";
import EmployeesList from "./Employees/EmployeesList";
import Layout from "./Layout";

function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <ToastProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/auth" element={<Layout />}>
                <Route path="/auth/employees" element={<EmployeesList />} />
                <Route
                  path="/auth/employees/create"
                  element={<CreateEmployee />}
                />
                <Route index element={<Dashboard />} />
              </Route>
              <Route
                path="/auth/*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>404 error. Page not found!</p>
                  </main>
                }
              />
            </Routes>
          </BrowserRouter>
        </ToastProvider>
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
