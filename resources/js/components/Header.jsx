import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

export default function Header() {
  const auth = useAuth();
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/auth">
          Employees
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="{{ __('Toggle navigation') }}"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Left Side Of Navbar --> */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/auth/employees">
                Employees
              </Link>
            </li>
          </ul>

          {/* <!-- Right Side Of Navbar --> */}
          <ul className="navbar-nav ms-auto">
            {/* <!-- Authentication Links --> */}
            <li className="nav-item dropdown">
              <a
                id="navbarDropdown"
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {auth.authUser().name}
              </a>

              <div
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <a
                  className="dropdown-item"
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("logout-form").submit();
                  }}
                >
                  Logout
                </a>
                <form
                  id="logout-form"
                  action="/logout"
                  method="POST"
                  className="d-none"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value={
                      document.querySelector('meta[name="csrf-token"]').content
                    }
                  />
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
