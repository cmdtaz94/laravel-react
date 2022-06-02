import React, { useState } from "react";

let ToastContext = React.createContext({
  showToast: false,
  setShowToast: () => {},
});

export default function ToastProvider({ children }) {
  let [showToast, setShowToast] = useState(false);
  let [toastParams, setToastParams] = useState({
    title: "",
    message: "",
    small: "",
  });

  let value = { showToast, setShowToast, toastParams, setToastParams };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

function useToast() {
  return React.useContext(ToastContext);
}

export { ToastContext, ToastProvider, useToast };
