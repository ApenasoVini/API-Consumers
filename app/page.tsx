export default function Home() {
  return (
    <div className="bg-white min-h-screen w-full">
      <header className="bg-gray-800 text-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Brand</h1>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-gray-300">Features</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Get Started</a>
        </nav>
      </header>

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
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
          <h3 className="text-3xl font-semibold text-gray-800">Our Features</h3>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-bold">Feature 1</h4>
              <p className="mt-2 text-gray-600">Description of the first feature that is amazing.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-bold">Feature 2</h4>
              <p className="mt-2 text-gray-600">Description of the second feature that is even better.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-bold">Feature 3</h4>
              <p className="mt-2 text-gray-600">Description of the third feature that will blow your mind.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-semibold text-gray-800">About Us</h3>
          <p className="mt-4 text-lg text-gray-600">
            We are a team of professionals dedicated to delivering high-quality services and solutions for our clients.
          </p>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-semibold text-gray-800">Get in Touch</h3>
          <p className="mt-4 text-lg text-gray-600">Feel free to reach out to us for more information or to get started.</p>
          <a href="mailto:info@example.com" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Contact Us
          </a>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 Brand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
