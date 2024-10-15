import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 py-20">
      <div className="flex justify-between items-center">
        <div className="text-center w-60">
          <h3 className="text-3xl font-semibold text-gray-200">Sobre o projeto</h3>
          <p className="mt-4 text-lg text-gray-400">
            Esse projeto foi desenvolvido para a vizualização do uso de APIs públicas, estimulando seu uso e o aprendizado em geral.
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
  );
};
