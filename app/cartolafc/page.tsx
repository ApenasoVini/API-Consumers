"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '@/components/footer/footer';

interface Time {
  nome: string;
  apelido: string;
  escudos: {
    '60x60': string;
  };
}

interface Jogador {
  atleta_id: number;
  apelido: string;
  foto: string | null;
  clube_id: number;
}

export default function Page() {
  const [times, setTimes] = useState<{ [key: string]: Time }>({});
  const [teamID, setTeamID] = useState<number | null>(null);
  const [jogadores, setJogadores] = useState<Jogador[]>([]);
  const [erro, setErro] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await fetch('https://api.cartola.globo.com/clubes');
        const data = await res.json();
        setTimes(data);
      } catch {
        setTimes({});
      }
    };
    fetchTeams();
  }, []);

  useEffect(() => {
    if (teamID) {
      const fetchPlayers = async () => {
        try {
          const res = await fetch('https://api.cartola.globo.com/atletas/mercado');
          const data = await res.json();
          const jogadoresFiltrados = data.atletas.filter((jogador: Jogador) => jogador.clube_id === teamID);
          setJogadores(jogadoresFiltrados);
          setErro(false);
        } catch {
          setJogadores([]);
          setErro(true);
        }
      };
      fetchPlayers();
    } else {
      setJogadores([]);
    }
  }, [teamID]);

  const filteredTeams = Object.keys(times).filter(timeKey =>
    times[timeKey].nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="min-h-screen p-6 flex gap-4 flex-col items-center bg-gray-800">
        <div className="bg-gray-900 p-6 flex flex-col gap-2 rounded-lg shadow-2xl">
          <div className="flex items-center justify-center gap-2">
            <input
              className="p-2 border border-gray-700 rounded-l-lg focus:outline-none bg-gray-700 text-white"
              type="text"
              placeholder="Digite o nome do time"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <ul className="grid grid-cols-4 gap-6 w-full">
          {filteredTeams.map((timeKey) => (
            <li
              key={timeKey}
              onClick={() => setTeamID(Number(timeKey))}
              className="flex items-center cursor-pointer gap-3 bg-gray-900 shadow-lg rounded-lg p-4 hover:bg-gray-700 transition duration-200"
            >
              <Image src={times[timeKey].escudos['60x60']} alt={times[timeKey].nome} width={60} height={60} className="rounded" />
              <div>
                <h2 className="text-gray-100 text-xl font-bold">{times[timeKey].nome}</h2>
                <p className="text-white">{times[timeKey].apelido}</p>
              </div>
            </li>
          ))}
        </ul>

        {teamID && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 overflow-hidden">
            <div className="bg-gray-900 p-6 rounded-lg shadow-xl relative max-h-full min-h-16 overflow-y-auto w-full">
              <button onClick={() => setTeamID(null)} className="absolute top-4 right-4 bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center transition hover:bg-orange-600">X</button>
              {erro && <p className="text-red-700 text-center">Jogadores não encontrados.</p>}
              <ul className="divide-y divide-gray-700 max-h-80">
                {jogadores.map((player) => (
                  <li key={player.atleta_id} className="flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-700 transition">
                    {player.foto ? (
                      <Image src={player.foto} width={50} height={50} alt={player.apelido} className="rounded-full" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center">
                        <span className="text-white">N/A</span>
                      </div>
                    )}
                    <p className="text-gray-100 text-lg font-medium">{player.apelido}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
