import { createContext, useContext, useState } from 'react';

const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <UIContext.Provider value={{ loading, setLoading, toast, showToast }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
