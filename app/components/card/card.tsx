import Image from "next/image"
import Link from "next/link" 

export default function Card(props: any) {
  return (
    <div className="bg-neutral-300 shadow-xl flex flex-col items-center rounded-lg p-6">
      <Image
        src={props.img}
        alt="Ilustração"
        width={300}
        className="object-cover rounded-md"
      />
      <h4 className="text-xl font-bold mt-4 text-gray-800">{props.nome}</h4>
      <p className="mt-2 text-gray-600 text-center">
        {props.descricao}
      </p>
      <Link
        href={props.link}
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Acessar
      </Link>
    </div>
  )
}