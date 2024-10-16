"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from "../../components/footer/footer";
import Repo from "../../public/gitfinder/repo.svg";
import Flwing from "../../public/gitfinder/flwing.svg";
import Flwers from "../../public/gitfinder/flwers.svg";

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
    } catch (error: unknown) {
      setUsuario(null);
      if (error instanceof Error) {
        setErro(error.message);
      } else {
        setErro('Erro desconhecido');
      }
    }
  };

  return (
    <>
      <div className="h-screen p-6 flex justify-center items-start bg-gray-800">
        <div className="bg-gray-900 p-6 flex flex-col gap-2 rounded-lg shadow-2xl">
          <div className="flex items-center gap-2 justify-center">
            <input
              className="p-2 border border-gray-700 rounded-l-lg focus:outline-none bg-gray-700 text-white"
              type="text"
              placeholder="Nome de usuário"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <button
              className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-500 focus:outline-none"
              onClick={buscar}
            >
              BUSCAR
            </button>
          </div>

          {erro && <p className="text-red-500 text-center font-semibold">{erro}</p>}

          {usuario && (
            <div className="bg-gray-800 gap-1 flex flex-col p-6 rounded-lg text-white text-center">
              <Image
                className="rounded-full w-24 h-24 mx-auto border-4 border-gray-700"
                src={usuario.avatar_url}
                alt={`${usuario.login}'s avatar`}
                width={96}
                height={96}
              />
              <p className="font-bold text-xl">{usuario.login}</p>
              <div className="text-gray-400 gap-2 flex justify-center items-center">
                <Image src={Flwers} width={25} height={25} alt='' />
                <p>Seguidores: {usuario.followers}</p>
              </div>
              <div className="text-gray-400 gap-2 flex justify-center items-center">
                <Image src={Flwing} width={25} height={25} alt='' />
                <p>Seguindo: {usuario.following}</p>
              </div>
              <div className="text-gray-400 gap-2 flex justify-center items-center">
                <Image src={Repo} width={25} height={25} alt='' />
                <p>Repositórios: {usuario.public_repos}</p>
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
    </>
  );
}