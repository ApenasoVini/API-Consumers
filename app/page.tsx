"use client";
import { useState } from "react";
import Image from "next/image";
import Card from "./components/card/card";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      image: "/parallax1.jpg",
      title: "Bem vindo(a) à API Hub",
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

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <div className="relative h-screen overflow-hidden">
        <header className="bg-gradient-to-r z-20 from-gray-700 via-gray-900 to-black text-white shadow-2xl">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
            <h1 className="text-3xl font-extrabold tracking-wider">API Hub</h1>
            <ul className="flex space-x-8 text-lg">
              <li>
                <a href="#features" className="hover:text-indigo-400 transition duration-300">
                  Products
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex justify-center items-center transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
            <div className="z-10 flex flex-col items-center">
              <h2 className="text-5xl font-bold text-white drop-shadow-lg sm:text-6xl">
                {slide.title}
              </h2>
              <p className="mt-4 text-lg bg-gradient-to-r text-gray-100">{slide.description}</p>
              <a
                href="#features"
                className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
              >
                Learn More
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

      <section id="features" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-semibold text-gray-800 mb-6">
            Our Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-gray-200">About the Project</h3>
            <p className="mt-4 text-lg text-gray-400">
              This project was developed to provide users with easy access to multiple APIs, enhancing productivity and integrating external services.
            </p>
          </div>

          <div className="flex justify-center space-x-8 mb-12">
            <Image
              alt="LinkedIn"
              src="/linkedin.svg"
              width={30}
              height={30}
              className="hover:text-indigo-400 transform hover:scale-110 transition"
            />
            <Image
              alt="GitHub"
              src="/github.svg"
              width={30}
              height={30}
              className="hover:text-indigo-400 transform hover:scale-110 transition"
            />
            <Image
              alt="Email"
              src="/email.svg"
              width={30}
              height={30}
              className="hover:text-indigo-400 transform hover:scale-110 transition"
            />
          </div>

          <div className="text-center text-gray-500">
            <p>&copy; 2024 Your Project Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}