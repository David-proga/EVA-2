import React, { createContext, useState, useContext } from 'react';

// 1. Creación del contexto
const AppContext = createContext();

// 2. Proveedor que envolverá la aplicación
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "David", role: "Developer" });

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

// 3. Hook personalizado para usar el contexto fácilmente
export const useApp = () => useContext(AppContext);