import React, { useEffect } from "react";
import { useToast } from "../providers/ToastProvider";

export default function Toast() {
  const toast = useToast();

  useEffect(
    function () {
      if (toast.showToast) {
        let liveToast = document.getElementById("liveToast");
        let toastElement = new window.bootstrap.Toast(liveToast);
        toastElement.show();
      }
    },
    [toast]
  );

  const getToastBackground = (title) => {
    const toastBackgrounds = {
      Error: "bg-danger",
      Success: "bg-success",
    };
    return toastBackgrounds[title];
  };

  return (
    <div
      className="toast-container position-absolute p-3 top-0 end-0"
      style={{ zIndex: 11 }}
    >
      <div
        id="liveToast"
        className={
          "toast text-white " + getToastBackground(toast.toastParams.title)
        }
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="me-auto">{toast.toastParams.title}</strong>
          <small>{toast.toastParams.small}</small>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">{toast.toastParams.message}</div>
      </div>
    </div>
  );
}
