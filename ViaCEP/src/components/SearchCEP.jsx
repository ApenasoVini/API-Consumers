import React, { useState } from 'react';
import Logo from '../logo.svg';
import Result from './Result';

export default function SearchCEP() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState('');

  const buscar = async () => {
    try {
      const cepValido = cep.replace(/\D/g, '');
      const response = await fetch(`https://viacep.com.br/ws/${cepValido}/json/`);

      if (!response.ok) {
        throw new Error('Requisição inválida');
      }

      const data = await response.json();

      if (data.erro) {
        throw new Error('CEP não encontrado');
      }

      setEndereco(data);
      setErro('');
    } catch (error) {
      setEndereco(null);
      setErro(error.message);
    }
  };

  return (
    <div className="flex items-start p-4 justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-300 p-6 rounded-lg shadow-xl w-full md:max-w-md">
        <div className="flex items-center justify-center mb-4">
          <img src={Logo} alt="logo" className="h-8 mr-2" />
          <div className="relative flex-1">
            <input
              className="p-2 w-full border border-gray-300 rounded-l-lg focus:outline-none"
              type="text"
              placeholder="Digite o CEP"
              value={cep}
              onChange={e => setCep(e.target.value)}
              maxLength={8}
            />
          </div>
          <button className="bg-green-600 text-white p-2 rounded-r-lg ml-2 hover:bg-green-700 focus:outline-none"
            onClick={buscar}>
            Buscar
          </button>
        </div>

        {erro && <p className="text-red-500 text-center font-semibold mb-4">{erro}</p>}
        {endereco && <Result endereco={endereco} />}
      </div>
    </div>
  );
}
