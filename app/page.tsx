import Card from "@/components/card/card";
import Footer from "@/components/footer/footer";
import gitfinder from "@/public/gitfinder.jpg";
import cartolafc from "@/public/cartolafc.jpg";
import paises from "@/public/paises.jpg";
import pokemons from "@/public/pokemons.jpg";
import viacep from "@/public/viacep.jpg";
import rickandmorty from "@/public/rickandmorty.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col justify-center items-center h-screen w-full"
        style={{
          backgroundImage: 'url(/parallax.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}>
        <div className="bg-black flex flex-col items-center bg-opacity-70 p-6 rounded-lg">
          <h2 className="text-5xl font-bold text-white drop-shadow-lg">
            Bem vindo(a) ao API Hub
          </h2>
          <p className="mt-4 text-xl text-white text-center px-4">
            Observe o funcionamento de diversas APIs!
          </p>
        </div>
        <Link
          href="#apis"
          className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform"
        >
          Explorar
        </Link>
      </div>

      <section id="apis" className="p-10 bg-gray-100 grid grid-cols-3 gap-6">
        <Card link="./gitfinder" img={gitfinder} nome="GitFinder" descricao="API usada para buscar perfis do GitHub" />
        <Card link="./cartolafc" img={cartolafc} nome="Cartola FC" descricao="API contendo informações sobre o futebol brasileiro" />
        <Card link="./paises" img={paises} nome="Países" descricao="API contendo informações sobre todos os países do mundo" />
        <Card link="./pokemons" img={pokemons} nome="Pokemons" descricao="API usada para buscar pokemons" />
        <Card link="./viacep" img={viacep} nome="ViaCEP" descricao="API usada para buscar uma localização através de um CEP" />
        <Card link="./rickandmorty" img={rickandmorty} nome="Rick and Morty" descricao="API usada para buscar os personagens da série Rick and Morty" />
      </section>
      <Footer />
    </div>
  );
}
