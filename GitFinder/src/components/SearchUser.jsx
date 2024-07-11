import React, { useState } from 'react';
import Logo from '../logo.svg';
import Result from './Result';

export default function SearchUser() {
    const [nome, setNome] = useState('');
    const [usuario, setUsuario] = useState(null);
    const [erro, setErro] = useState('');

    const buscar = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${nome}`);

            if (!response.ok) {
                throw new Error('Usuário não encontrado');
            }

            const data = await response.json();

            if (data.erro) {
                throw new Error('Usuário não encontrado');
            }

            setUsuario(data);
            setErro('');
        } catch (error) {
            setUsuario(null);
            setErro(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-800 p-4">
            <div className="bg-gray-900 p-6 rounded-lg shadow-xl w-full md:max-w-md">
                <div className="flex items-center justify-center mb-6">
                    <img src={Logo} alt="logo" className="rounded-full bg-slate-200 h-10 mr-3" />
                    <input
                        className="p-2 flex-1 border border-gray-700 rounded-l-lg focus:outline-none bg-gray-700 text-white"
                        type="text"
                        placeholder="Nome de usuário..."
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <button
                        className="bg-blue-600 text-white p-2 rounded-r-lg ml-2 hover:bg-blue-500 focus:outline-none"
                        onClick={buscar}
                    >
                        BUSCAR
                    </button>
                </div>

                {erro && <p className="text-red-500 text-center font-semibold mb-4">{erro}</p>}
                {usuario && <Result usuario={usuario} />}
            </div>
        </div>
    );
}