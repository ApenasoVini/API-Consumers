import React, { useState, useEffect } from 'react';
import SearchPlayers from './SearchPlayers';

export default function SearchTeam() {
    const [times, setTimes] = useState([]);
    const [teamID, setTeamID] = useState(null);

    useEffect(() => {
        const buscar = async () => {
            try {
                const response = await fetch(`https://api.cartola.globo.com/clubes`);
                const data = await response.json();
                setTimes(data);
            } catch (error) {
                setTimes([]);
                throw new Error(error);
            }
        };
        buscar();
    }, []);

    return (
        <>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {Object.keys(times).map(time => (
                    <li
                        key={time}
                        onClick={() => setTeamID(time)}
                        className="flex items-center cursor-pointer gap-3 bg-white shadow-lg rounded-lg p-4 hover:bg-gray-100 transition duration-300 ease-in-out">
                        <img
                            src={times[time].escudos['60x60']}
                            alt={times[time].nome}
                            className="w-16 h-16"
                        />
                        <div>
                            <h1 className="text-gray-800 text-xl font-bold">{times[time].nome}</h1>
                            <p className="text-orange-500">{times[time].apelido}</p>
                        </div>
                    </li>
                ))}
            </ul>
            {teamID && (
                <div className="fixed inset-0 bg-black p-4 bg-opacity-50 flex justify-center items-center overflow-hidden">
                    <div className="bg-white p-6 rounded-lg shadow-xl relative max-h-full overflow-y-auto">
                        <button
                            className="absolute top-4 right-4 bg-orange-500 w-10 text-white rounded-full p-2 focus:outline-none"
                            onClick={() => setTeamID(null)}
                        >
                            X
                        </button>
                        <SearchPlayers teamID={teamID} />
                    </div>
                </div>
            )}
        </>
    );
}
