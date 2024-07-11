import React, { useState, useEffect } from 'react';

export default function SearchPlayers({ teamID }) {
    const [jogadores, setJogadores] = useState([]);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        if (teamID) {
            const buscarJogadores = async () => {
                try {
                    const response = await fetch(`https://api.cartola.globo.com/atletas/mercado`);
                    const data = await response.json();
                    const jogadoresFiltrados = data.atletas.filter(player => player.clube_id === parseInt(teamID));
                    setJogadores(jogadoresFiltrados);
                    setErro(false);
                } catch (error) {
                    setErro(true);
                }
            };
            buscarJogadores();
        }
    }, [teamID]);

    return (    
        <>
            {erro && <p className='text-red-500 text-center my-4'>Jogadores não encontrados.</p>}
            <ul className='divide-y w-full p-4 overflow-y-auto divide-gray-200/50'>
                {jogadores.map(player => (
                    <li key={player.atleta_id} className='flex items-center gap-3 py-4 bg-white/80 hover:bg-gray-50/80 transition duration-300 ease-in-out'>
                        <img 
                            src={player.foto} 
                            alt={player.apelido} 
                            className='w-12 h-12' 
                        />
                        <p className='text-gray-800 text-lg font-medium'>{player.apelido}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}
