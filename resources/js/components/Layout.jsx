import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Toast from "./Toast";

export default function Layout() {
  return (
    <>
      <Header />

      <main className="py-4">
        <div className="container">
          <div className="row justify-content-center">
            <Outlet />
            <Toast />
          </div>
        </div>
      </main>
    </>
  );
}
