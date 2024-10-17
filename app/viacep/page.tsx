"use client"
import { useState } from 'react';
import Footer from "../../components/footer/footer";
import Image from 'next/image';

export default function Page() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState<any>(null);
  const [erro, setErro] = useState('');

  const fetchData = async () => {
    try {
      const cepValido = cep.replace(/\D/g, '');
      const response = await fetch(`https://viacep.com.br/ws/${cepValido}/json/`);

      if (!response.ok) throw new Error('Requisição inválida');

      const data = await response.json();
      if (data.erro) throw new Error('CEP não encontrado');

      setEndereco(data);
      setErro('');
    } catch (error: any) {
      setEndereco(null);
      setErro(error.message);
    }
  };

  return (
    <>
      <div className="h-screen p-6 flex justify-center items-start bg-gray-800">
        <div className="bg-gray-900 p-6 flex flex-col gap-2 rounded-lg shadow-2xl">
          <div className="flex items-center justify-center gap-2">
            <input
              className="p-2 border border-gray-700 rounded-l-lg w-max focus:outline-none bg-gray-700 text-white"
              type="text"
              placeholder="Digite o CEP (Apenas números)"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              maxLength={8}
            />
            <button className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-500 focus:outline-none"
              onClick={fetchData}
            >
              BUSCAR
            </button>
          </div>

          {erro && <p className="text-red-500 text-center font-semibold">{erro}</p>}

          {endereco && (
            <div className="bg-gray-800 gap-1 flex flex-col p-6 rounded-lg text-white text-center">
              <div className="text-gray-400 gap-2 flex justify-center items-center">
                <span className="material-icons text-gray-500">location_on</span>
                <p><strong>CEP:</strong> {endereco.cep}</p>
              </div>
              <div className="text-gray-400 gap-2 flex justify-center items-center">
                <span className="material-icons text-gray-500">streetview</span>
                <p><strong>Logradouro:</strong> {endereco.logradouro}</p>
              </div>
              <div className="text-gray-400 gap-2 flex justify-center items-center">
                <span className="material-icons text-gray-500">domain</span>
                <p><strong>Bairro:</strong> {endereco.bairro}</p>
              </div>
              <div className="text-gray-400 gap-2 flex justify-center items-center">
                <span className="material-icons text-gray-500">location_city</span>
                <p><strong>Localidade:</strong> {endereco.localidade} - {endereco.uf}</p>
              </div>
              <div className="text-gray-400 gap-2 flex justify-center items-center">
                <span className="material-icons text-gray-500">public</span>
                <p><strong>País:</strong> Brasil</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
