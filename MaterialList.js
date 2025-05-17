import React from 'react';

const MaterialList = ({ materials }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Historico de saida</h2>
      {materials.length === 0 ? (
        <p className="text-gray-500">Não temos registro de Saida</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Material</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Obra</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {materials.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.material}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.workNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
