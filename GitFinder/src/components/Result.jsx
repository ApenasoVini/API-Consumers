import React from 'react';

export default function Result({ usuario }) {
    return (
        <div className="bg-gray-800 p-6 rounded-lg text-white text-center">
            <img className="rounded-full w-24 h-24 mx-auto mb-4 border-4 border-gray-700" src={usuario.avatar_url} alt={`${usuario.login}'s avatar`} />
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
            <a
                href={`https://github.com/${usuario.login}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
            >
                Ver Repositórios
            </a>
        </div>
    );
}