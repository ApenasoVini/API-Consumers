"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from "../components/footer/footer";

interface Usuario {
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

export default function Page() {
  const [nome, setNome] = useState<string>('');
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [erro, setErro] = useState<string>('');

  const buscar = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${nome}`);

      if (!response.ok) {
        throw new Error('Usuário não encontrado');
      }

      const data: Usuario = await response.json();
      setUsuario(data);
      setErro('');
    } catch (error: any) {
      setUsuario(null);
      setErro(error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-gray-900 p-6 rounded-lg shadow-xl w-full md:max-w-md">
          <div className="flex items-center justify-center mb-6">
            <input
              className="p-2 flex-1 border border-gray-700 rounded-l-lg focus:outline-none bg-gray-700 text-white"
              type="text"
              placeholder="Nome de usuário..."
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <button
              className="bg-blue-600 text-white p-2 rounded-r-lg ml-2 hover:bg-blue-500 focus:outline-none"
              onClick={buscar}
            >
              BUSCAR
            </button>
          </div>

          {erro && <p className="text-red-500 text-center font-semibold mb-4">{erro}</p>}
          {usuario && (
            <div className="bg-gray-800 p-6 rounded-lg text-white text-center">
              <Image
                className="rounded-full w-24 h-24 mx-auto mb-4 border-4 border-gray-700"
                src={usuario.avatar_url}
                alt={`${usuario.login}'s avatar`}
                width={96}
                height={96}
              />
              <p className="font-bold text-xl mb-2">{usuario.login}</p>
              <div className="text-gray-400 mb-1 flex justify-center items-center">
                <span className="material-icons mr-2">people</span> Seguidores: {usuario.followers}
              </div>
              <div className="text-gray-400 mb-1 flex justify-center items-center">
                <span className="material-icons mr-2">person_add</span> Seguindo: {usuario.following}
              </div>
              <div className="text-gray-400 mb-4 flex justify-center items-center">
                <span className="material-icons mr-2">book</span> Repositórios: {usuario.public_repos}
              </div>
              <Link
                href={`https://github.com/${usuario.login}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Ver Repositórios
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
