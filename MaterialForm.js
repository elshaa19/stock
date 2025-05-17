import React, { useState } from 'react';

const MaterialForm = ({ onAddMaterial }) => {
  const [material, setMaterial] = useState('');
  const [quantity, setQuantity] = useState('');
  const [workNumber, setWorkNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!workNumber) {
      setError('o numero de obra sera obrigatorio');
      return;
    }
    onAddMaterial({
      material,
      quantity: parseInt(quantity),
      workNumber,
      date: new Date().toLocaleString()
    });
    setMaterial('');
    setQuantity('');
    setWorkNumber('');
    setError('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Registrar Salida</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">Material</label>
            <input
              type="text"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Cantidad</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
              min="1"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Número de Obra*</label>
          <input
            type="text"
            value={workNumber}
            onChange={(e) => setWorkNumber(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
        >
          Registrar Salida
        </button>
      </form>
    </div>
  );
};
