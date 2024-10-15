import Image from "next/image"
import Link from "next/link"

export default function Card(props: any) {

  return (
    <Link href={props.link} className="bg-slate-300 shadow-lg flex flex-col items-center rounded-lg p-6">
      <Image
        src={props.img}
        alt="Ilustração"
        width={300}
        className="object-cover rounded-md"
      />
      <h4 className="text-xl font-bold mt-4">Nome</h4>
      <p className="mt-2 text-gray-600">Descrição</p>
      <Link
        href="https://example.com/product1"
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Acessar
      </Link>
    </Link>
  )
}