"use client";
import { useEffect, useState } from 'react';

interface Country {
  name: {
    common: string;
    official: string;
  };
  capital?: string[];
  region: string;
  flag: string;
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
    <div className="bg-gray-100 p-8 min-h-screen w-full">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center">Country Search</h1>
          <div className="flex flex-wrap justify-center gap-4">
            <input
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              type="text"
              placeholder="Filter by name"
              className="w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            />
            <select
              value={searchRegion}
              onChange={(e) => setSearchRegion(e.target.value)}
              className="w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            >
              <option value="">All Regions</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>

        <ul className="grid grid-cols-4 gap-8">
          {data.map((country, index) => (
            <li key={index} className="bg-white p-6 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center">
                <div className="text-4xl">{country.flag}</div>
                <h1 className="text-xl font-bold">{country.name.common}</h1>
                <h2 className="text-sm text-gray-500">{country.name.official}</h2>
                <p className="text-gray-600"><strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}</p>
                <p className="text-gray-600"><strong>Region:</strong> {country.region}</p>
                <p className="text-gray-600"><strong>UN Member:</strong> {country.unMember ? 'Yes' : 'No'}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
