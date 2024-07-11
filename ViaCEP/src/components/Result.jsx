import React from 'react';

export default function Result({ endereco }) {
  return (
    <div>
      <p className="text-lg font-semibold mb-2">Endereço encontrado:</p>
      <div className="bg-gray-200 p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <span className="material-icons text-gray-500 mr-2">location_on</span>
          <p><strong>CEP:</strong> {endereco.cep}</p>
        </div>
        <div className="flex items-center mb-2">
          <span className="material-icons text-gray-500 mr-2">streetview</span>
          <p><strong>Logradouro:</strong> {endereco.logradouro}</p>
        </div>
        <div className="flex items-center mb-2">
          <span className="material-icons text-gray-500 mr-2">domain</span>
          <p><strong>Bairro:</strong> {endereco.bairro}</p>
        </div>
        <div className="flex items-center mb-2">
          <span className="material-icons text-gray-500 mr-2">location_city</span>
          <p><strong>Localidade:</strong> {endereco.localidade} - {endereco.uf}</p>
        </div>
        <div className="flex items-center">
          <span className="material-icons text-gray-500 mr-2">public</span>
          <p><strong>País:</strong> Brasil</p>
        </div>
      </div>
    </div>
  );
}