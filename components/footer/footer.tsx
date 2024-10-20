import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full text-white px-4 pt-10 pb-4">
      <div className="flex justify-around items-center w-full">
        <div className="text-left w-1/3">
          <h3 className="text-3xl font-semibold text-gray-200">Sobre o projeto</h3>
          <p className="mt-4 text-lg text-gray-400">
            Esse projeto foi desenvolvido para a vizualização do uso de APIs públicas, estimulando seu uso e o aprendizado em geral.
          </p>
        </div>

        <div className="flex justify-center md:justify-end space-x-8 mt-8 md:mt-0 md:w-1/3">
          <Image
            alt="LinkedIn"
            src="/linkedin.svg"
            width={30}
            height={30}
            className="hover:scale-105 hover:cursor-pointer transition"
          />
          <Image
            alt="GitHub"
            src="/github.svg"
            width={30}
            height={30}
            className="hover:scale-105 hover:cursor-pointer transition"
          />
          <Image
            alt="Email"
            src="/email.svg"
            width={30}
            height={30}
            className="hover:scale-105 hover:cursor-pointer transition"
          />
        </div>
      </div>

      <div className="text-center mt-4 text-gray-500 w-full">
        <p>&copy; 2024 API Hub. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
