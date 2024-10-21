"use client"
import { useState } from 'react';
import Header from "@/components/header/header";
import Footer from "../../components/footer/footer";
import Image from 'next/image';
import Cep from '../../public/viacep/cep.svg';
import Logr from '../../public/viacep/logr.svg';
import Bairro from '../../public/viacep/bairro.svg';
import Cid from '../../public/viacep/cid.svg';
import Pais from '../../public/viacep/pais.svg';

interface Address {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  error: string;
}

export default function Page() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState<Address | null>(null);
  const [erro, setErro] = useState('');

  const fetchData = async () => {
    try {
      const cepValido = cep.replace(/\D/g, '');
      const response = await fetch(`https://viacep.com.br/ws/${cepValido}/json/`);

      if (!response.ok) throw new Error('Requisição inválida');

      const data: Address = await response.json();
      if (data.error) throw new Error('CEP não encontrado');

      setEndereco(data);
      setErro('');
    } catch (error: any) {
      setEndereco(null);
      setErro(error.message);
    }
  };

  return (
    <>
      <Header />
      <div className="h-screen p-6 flex justify-center items-start bg-gray-800">
        <div className="bg-gray-900 p-6 flex flex-col gap-2 rounded-lg shadow-2xl">
          <div className="flex items-center justify-center gap-2">
            <input
              style={{
                appearance: 'none',
                MozAppearance: 'textfield',
                WebkitAppearance: 'none'
              }}
              className="p-2 border border-gray-700 rounded-l-lg w-60 focus:outline-none bg-gray-700 text-white"
              type="number"
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
            <div className="bg-gray-800 gap-1 flex flex-col p-6 rounded-lg text-white">
              <div className="text-gray-400 gap-2 flex justify-start items-center">
                <Image alt='' src={Cep} />
                <p><strong>CEP:</strong> {endereco.cep}</p>
              </div>
              <div className="text-gray-400 gap-2 flex justify-start items-center">
                <Image alt='' src={Logr} />
                <p><strong>Logradouro:</strong> {endereco.logradouro}</p>
              </div>
              <div className="text-gray-400 gap-2 flex justify-start items-center">
                <Image alt='' src={Bairro} />
                <p><strong>Bairro:</strong> {endereco.bairro}</p>
              </div>
              <div className="text-gray-400 gap-2 flex justify-start items-center">
                <Image alt='' src={Cid} />
                <p><strong>Localidade:</strong> {endereco.localidade} - {endereco.uf}</p>
              </div>
              <div className="text-gray-400 gap-2 flex justify-start items-center">
                <Image alt='' src={Pais} />
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
