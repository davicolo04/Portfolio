// "use client";
// import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  //   const images = ["/gallery/logo.png", "/gallery/fotosquadra_vasco.jpg"];
  //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //   const handlePrevClick = () => {
  //     setCurrentImageIndex((prevIndex) =>
  //       prevIndex > 0 ? prevIndex - 1 : images.length - 1
  //     );
  //   };

  //   const handleNextClick = () => {
  //     setCurrentImageIndex((prevIndex) =>
  //       prevIndex < images.length - 1 ? prevIndex + 1 : 0
  //     );
  //   };

  return (
    <main className="flex flex-col items-center justify-between p-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/album">
          <h1 className="roboto-bold text-8xl text-[#1b1b1d] text-center">
            TORNEO ANIMATORI LALLIO
          </h1>
        </Link>
      </div>

      <div className="container flex justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mt-8">
          <div className="flex justify-center grid grid-cols-3 max-w-2xl">
            <div className="text-center mr-4 border rounded-full px-8 py-4 mb-6 text-white border-[#a6a6a7]">
              <Link href="2023/squadre">
                <h3 className="roboto-thin text-xl">Squadre</h3>
              </Link>
            </div>
            <div className="text-center mr-4 border rounded-full px-8 py-4 mb-6 text-white border-[#a6a6a7]">
              <Link href="2023/awards">
                <h3 className="roboto-thin text-xl">Awards</h3>
              </Link>
            </div>
            <div className="text-center mr-4 border rounded-full px-8 py-4 mb-6 text-white border-[#a6a6a7]">
              <Link href="2023/tots">
                <h3 className="roboto-thin text-xl">TOTS</h3>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="mt-20 relative overflow-hidden bg-[#161a1d] rounded-2xl p-6">
        <h2 className="roboto-bold text-4xl text-white text-center">
          Torneo Animatori Lallio - IV Edizione
        </h2>
        <h3 className="roboto-bold text-2xl text-gray-400 mt-6  text-center">
            Vincitori: Acari Molesti
        </h3>
        <h3 className="roboto-bold text-2xl text-gray-400 mt-4 text-center">
            MVP: Michele Albani
        </h3>
        <h3 className="roboto-bold text-2xl text-gray-400 mt-4 text-center">
            Top Scorer: Michele Albani
        </h3>
        <h3 className="roboto-bold text-2xl text-gray-400 mt-4 text-center">
            MVP Finals: Davide Colombi
        </h3>
        <h3 className="roboto-bold text-2xl text-gray-400 mt-4 text-center">
            Best Goalkeeper: Morgan Carera
        </h3>
      </div>

      {/* <div className="mt-20 relative overflow-hidden">
        <button
          onClick={handlePrevClick}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
        >
          &lt;
        </button>
        <Image
          src={images[currentImageIndex]}
          alt="Logo Torneo Animatori Lallio"
          width={500}
          height={500}
          className="mx-10"
        />
        <button
          onClick={handleNextClick}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
        >
          &gt;
        </button>
      </div> */}
    </main>
  );
}
