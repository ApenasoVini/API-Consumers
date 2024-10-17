"use client";
import { useEffect, useState } from 'react';
import Footer from '@/components/footer/footer';
import Image from 'next/image';

interface Country {
  name: {
    common: string;
    official: string;
  };
  capital?: string[];
  region: string;
  flags: {
    png: string;
    alt: string;
  };
  unMember: boolean;
}

export default function Page() {
  const [data, setData] = useState<Country[]>([]);
  const [searchName, setSearchName] = useState<string>('');
  const [searchRegion, setSearchRegion] = useState<string>('');

  useEffect(() => {
    fetchCountries();
  }, [searchName, searchRegion]);

  const fetchCountries = async () => {
    let url = `https://restcountries.com/v3.1/all`;

    if (searchRegion) {
      url = `https://restcountries.com/v3.1/region/${searchRegion}`;
    }

    try {
      const response = await fetch(url);
      let result: Country[] = await response.json();

      if (searchName) {
        result = result.filter(country =>
          country.name.common.toLowerCase().includes(searchName.toLowerCase())
        );
      }

      setData(result);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="min-h-screen p-6 gap-4 flex flex-col justify-start items-center bg-gray-800">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="flex flex-wrap justify-center gap-4">
            <input
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              type="text"
              placeholder="Escreva o nome do país"
              className="p-2 border border-gray-700 rounded-lg focus:outline-none bg-gray-700 text-white"
            />
            <select
              value={searchRegion}
              onChange={(e) => setSearchRegion(e.target.value)}
              className="p-3 border border-gray-700 rounded-lg focus:outline-none bg-blue-600 text-white"
            >
              <option value="">Sem filtro</option>
              <option value="Africa">África</option>
              <option value="Americas">América</option>
              <option value="Asia">Ásia</option>
              <option value="Europe">Europa</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>

        <ul className="grid grid-cols-4 gap-8">
          {data.map((country, index) => (
            <li key={index} className="bg-gray-900 p-6 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="flex gap-1 flex-col items-center">
                <Image src={country.flags.png} alt={country.flags.alt || `Bandeira de ${country.name.common}`} width={50} height={50} />
                <h1 className="text-xl text-white font-bold">{country.name.common}</h1>
                <h2 className="text-sm text-white">{country.name.official}</h2>
                <p className="text-slate-400"><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
                <p className="text-slate-400"><strong>Região:</strong> {country.region}</p>
                <p className="text-slate-400"><strong>Membro da ONU:</strong> {country.unMember ? 'Sim' : 'Não'}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
