"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '@/components/footer/footer';

export default function PokemonCard() {
  const [id, setId] = useState(1);
  const [pokemon, setPokemon] = useState<any>(null);
  const [carregando, setCarregando] = useState(true);

  const fetchData = async () => {
    setCarregando(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.error(`Erro: ${error}`);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      {carregando ? (
        <div className="h-screen p-6 flex justify-center items-center bg-gray-800">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="h-screen p-6 flex flex-col justify-center items-center bg-gray-800">
          {pokemon && (
            <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl w-full max-w-xs">
              <nav className="flex justify-between pb-4">
                <span className="text-xl font-bold">#{pokemon.id}</span>
                <ul className="flex gap-2">
                  {pokemon.types.map((type: any, index: number) => (
                    <li key={index} className="bg-blue-600 px-2 py-1 rounded-md text-sm">
                      {type.type.name}
                    </li>
                  ))}
                </ul>
              </nav>
              <section className="flex flex-col items-center text-center gap-2">
                <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
                <Image
                  width={120}
                  height={120}
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                />
                <p><b>Peso:</b> {pokemon.weight}</p>
                <p><b>Vida:</b> {pokemon.stats[0].base_stat}</p>
                <p><b>Ataque:</b> {pokemon.stats[1].base_stat}</p>
                <p><b>Defesa:</b> {pokemon.stats[2].base_stat}</p>
                <p><b>Velocidade:</b> {pokemon.stats[5].base_stat}</p>
              </section>
            </div>
          )}
          <div className="grid grid-cols-2 gap-4 pt-6">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
              onClick={() => setId(id > 1 ? id - 1 : 1)}
            >
              Anterior
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
              onClick={() => setId(id + 1)}
            >
              Próximo
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
