export default LoginForm;

Navbar.js

import React from 'react';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">StockMaster</h1>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
