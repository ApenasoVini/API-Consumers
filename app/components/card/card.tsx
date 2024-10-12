import Image from "next/image"


export default function Card() {

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <Image
        src=""
        alt="Ilustração"
        className="w-full h-48 object-cover rounded-md"
      />
      <h4 className="text-xl font-bold mt-4">Nome</h4>
      <p className="mt-2 text-gray-600">Descrição</p>
      <a
        href="https://example.com/product1"
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Acessar
      </a>
    </div>
  )
}