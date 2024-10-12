import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white min-h-screen w-full">
      <header className="bg-gray-800 text-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">API Hub</h1>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-gray-300">Products</a></li>
          </ul>
        </nav>
      </header>

      <section className="relative h-screen flex justify-center items-center overflow-hidden">
        <Image
          src="/parallax.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
        />
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Welcome to Our Awesome Service
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide solutions to help you grow your business and reach new heights.
          </p>
          <a href="#features" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Learn More
          </a>
        </div>
      </section>

      <section id="features" className="py-16">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-semibold text-gray-800">Our Products</h3>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <Image
                src=""
                alt="Product 1"
                className="w-full h-48 object-cover rounded-md"
              />
              <h4 className="text-xl font-bold mt-4">Product 1</h4>
              <p className="mt-2 text-gray-600">This is the first product, which offers amazing features to help your business.</p>
              <a
                href="https://example.com/product1"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Access Product
              </a>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <Image
                src=""
                alt="Product 2"
                className="w-full h-48 object-cover rounded-md"
              />
              <h4 className="text-xl font-bold mt-4">Product 2</h4>
              <p className="mt-2 text-gray-600">This is the second product, designed to take your business to the next level.</p>
              <a
                href="https://example.com/product2"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Access Product
              </a>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <Image
                src=""
                alt="Product 3"
                className="w-full h-48 object-cover rounded-md"
              />
              <h4 className="text-xl font-bold mt-4">Product 3</h4>
              <p className="mt-2 text-gray-600">This is the third product, with cutting-edge technology to boost your business.</p>
              <a
                href="https://example.com/product3"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Access Product
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-semibold text-gray-200">About the Project</h3>
            <p className="mt-4 text-lg text-gray-400">
              This project was developed to provide users with easy access to multiple APIs, enhancing productivity and integrating external services.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <Image
              alt=""
              src="/linkedin.svg"
              width={30}
              height={30}
              className="text-gray-400 bg-slate-900 hover:text-gray-300"
            />
            <Image
              alt=""
              src="/github.svg"
              width={30}
              height={30}
              className="text-gray-400 bg-slate-900 hover:text-gray-300"
            />
            <Image
              alt=""
              src="/email.svg"
              width={30}
              height={30}
              className="text-gray-400 bg-slate-900 hover:text-gray-300"
            />
          </div>

          <div className="text-center text-gray-400">
            <p>&copy; 2024 Your Project Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}