import Link from "next/link";
// import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen w-full">
      <Link href='/viacep'>ViaCEP</Link>
      {/* <Footer /> */}
    </div>
  );
}
