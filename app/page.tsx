"use client";
import { useState, useCallback } from "react";
import Card from "../components/card/card";
import Footer from "../components/footer/footer";
import gitfinder from "../public/gitfinder.jpg";
import cartolafc from "../public/cartolafc.jpg";
import paises from "../public/paises.jpg";
import nasa from "../public/nasa.jpg";
import pokemons from "../public/pokemons.jpg";
import viacep from "../public/viacep.jpg";
import rickandmorty from "../public/rickandmorty.jpg";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      image: "/parallax1.jpg",
      title: "Bem vindo(a) ao API Hub",
      description: "Observe o funcionamento de diversas APIs!"
    },
    {
      image: "/parallax2.jpg",
      title: "Faça você mesmo",
      description: "Acesse as APIs para usar!"
    },
    {
      image: "/parallax3.jpg",
      title: "Apoie o criador",
      description: "Me siga nas redes sociais!"
    }
  ];

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, slides.length]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, slides.length]);

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex justify-center items-center transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
            aria-hidden={index !== currentSlide}
          >
            <div className="z-10 flex flex-col items-center bg-black bg-opacity-70 p-6 rounded-lg">
              <h2 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-white text-center px-4">
                {slide.description}
              </p>
              <a
                href="#apis"
                className="mt-8 inline-block bg-indigo-600 text-white px-4 sm:px-6 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform"
              >
                Explorar
              </a>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 px-3 py-2 rounded-full hover:bg-gray-700 transition"
          aria-label="Previous Slide"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 px-3 py-2 rounded-full hover:bg-gray-700 transition"
          aria-label="Next Slide"
        >
          &#8594;
        </button>
      </div>

      <section id="apis" className="p-6 sm:p-20 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <Card link="./gitfinder" img={gitfinder} nome="GitFinder" descricao="API usada para buscar perfis do GitHub" />
        <Card link="./cartolafc" img={cartolafc} nome="Cartola FC" descricao="API contendo informações sobre o futebol brasileiro" />
        <Card link="./paises" img={paises} nome="Países" descricao="API contendo informações sobre todos os países do mundo" />
        <Card link="./nasa" img={nasa} nome="Nasa" descricao="API contendo informações geridas pela NASA" />
        <Card link="./pokemons" img={pokemons} nome="Pokemons" descricao="API usada para buscar pokemons" />
        <Card link="./viacep" img={viacep} nome="ViaCEP" descricao="API usada para buscar uma localização através de um CEP" />
        <Card link="./rickandmorty" img={rickandmorty} nome="Rick and Morty" descricao="API usada para buscar os personagens da série Rick and Morty" />
      </section>
      <Footer />
    </div>
  );
}
