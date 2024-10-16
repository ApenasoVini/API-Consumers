"use client";
import { useState } from 'react';
import Footer from "../../components/footer/footer";

interface Character {
  id: number;
  name: string;
  image: string;
}

export default function Page() {
  const [name, setName] = useState<string>('');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async (name: string) => {
    setLoading(true);
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
      if (!response.ok) throw new Error();

      const data = await response.json();
      setCharacters(data.results || []);
      setError(false);
    } catch {
      setCharacters([]);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.trim();
    setName(inputValue);
    if (inputValue) fetchData(inputValue);
    else {
      setCharacters([]);
      setError(false);
    }
  };

  return (
    <>
      <div className="h-screen p-6 flex justify-center items-start bg-gray-800">
        <div className="bg-gray-900 p-6 flex flex-col gap-4 rounded-lg shadow-2xl w-full md:max-w-md">
          <input
            className="p-2 border border-gray-700 rounded-lg focus:outline-none bg-gray-700 text-white"
            type="text"
            placeholder="Escreva o nome do personagem"
            value={name}
            onChange={handleChange}
          />

          {error && <p className="text-red-500 text-center font-semibold">Nenhum personagem encontrado</p>}
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 max-h-96 overflow-y-scroll gap-4">
              {characters.map(character => (
                <div key={character.id} className="bg-gray-800 p-4 rounded-lg text-white flex flex-col items-center">
                  <h3 className="font-bold text-lg">{character.name}</h3>
                  <img src={character.image} alt={character.name} className="w-24 h-24 rounded-full mt-2" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
