import React, { useState } from "react";
import { HTTP_UNPROCESSABLE_ENTITY, performRequest } from "../../helpers/axios";
import { useToast } from "../../providers/ToastProvider";

export default function CreateEmployee() {
  const toast = useToast();
  const [validationErrors, setValidationErrors] = useState({});
  const initialEmployee = {
    name: "",
    salary: "",
  };
  const [employee, setEmployee] = useState(initialEmployee);

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = (response) => {
      toast.setToastParams({
        title: "Success",
        message: "Employee created successfully!",
      });
      toast.setShowToast(true);
    };
    const fail = (error) => {
      const errorStatus = error?.response?.status;

      if (errorStatus === HTTP_UNPROCESSABLE_ENTITY) {
        setValidationErrors(error.response.data.errors);
      }

      toast.setToastParams({
        title: "Error",
        message: "Employee not created!",
      });
      toast.setShowToast(true);
    };
    performRequest(
      "POST",
      "employees",
      success,
      fail,
      function () {},
      employee
    );
  };

  return (
    <div className="col-md-8">
      <div className="card">
        <div className="card-header">Create Employees</div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <label
                htmlFor="name"
                className="col-md-4 col-form-label text-md-end"
              >
                Name
              </label>

              <div className="col-md-6">
                <input
                  id="name"
                  type="text"
                  className={
                    "name" in validationErrors
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={employee.name}
                  autoComplete="name"
                  autoFocus
                  onChange={(e) =>
                    setEmployee({ ...employee, name: e.target.value })
                  }
                />
                {"name" in validationErrors &&
                  validationErrors["name"].map((error, index) => (
                    <span key={index} className="invalid-feedback" role="alert">
                      <strong>{error}</strong>
                    </span>
                  ))}
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="salary"
                className="col-md-4 col-form-label text-md-end"
              >
                Salary
              </label>

              <div className="col-md-6">
                <input
                  id="salary"
                  type="number"
                  className={
                    "salary" in validationErrors
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  value={employee.salary}
                  autoComplete="salary"
                  autoFocus
                  onChange={(e) =>
                    setEmployee({ ...employee, salary: e.target.value })
                  }
                />
                {"salary" in validationErrors &&
                  validationErrors["salary"].map((error, index) => (
                    <span key={index} className="invalid-feedback" role="alert">
                      <strong>{error}</strong>
                    </span>
                  ))}
              </div>
            </div>
            <div className="row mb-0">
              <div className="col-md-8 offset-md-4">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
