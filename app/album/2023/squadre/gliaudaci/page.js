"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const images = [
    "/album/2023/fotosquadre/gliaudaci.jpg",
    "/album/2023/squadre/gliaudaci/aure.jpg",
    "/album/2023/squadre/gliaudaci/ettore.jpg",
    "/album/2023/squadre/gliaudaci/fabi.jpg",
    "/album/2023/squadre/gliaudaci/gabo.jpg",
    "/album/2023/squadre/gliaudaci/immy.jpg",
    "/album/2023/squadre/gliaudaci/matti.jpg",
    "/album/2023/squadre/gliaudaci/pippo.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <main className="flex flex-col items-center justify-between p-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/album/2023/squadre">
          <h1 className="roboto-bold text-8xl text-[#1b1b1d] text-center">
            GLI AUDACI
          </h1>
        </Link>
      </div>

      {/* <div className="container flex justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mt-8">
          <div className="flex justify-center grid grid-cols-6 max-w-8xl">
            <div className="text-center mr-4 border rounded-full px-8 py-4 mb-6 text-white border-[#a6a6a7]">
              <Link href="squadre/gliaudaci">
                <h3 className="roboto-thin text-xl">Acari Molesti</h3>
              </Link>
            </div>
            <div className="text-center mr-4 border rounded-full px-8 py-4 mb-6 text-white border-[#a6a6a7]">
              <Link href="squadre/cha-chown">
                <h3 className="roboto-thin text-xl">Cha-Chown</h3>
              </Link>
            </div>
            <div className="text-center mr-4 border rounded-full px-8 py-4 mb-6 text-white border-[#a6a6a7]">
              <Link href="squadre/gliaudaci">
                <h3 className="roboto-thin text-xl">FC Vasco Prealpi</h3>
              </Link>
            </div>
            <div className="text-center mr-4 border rounded-full px-8 py-4 mb-6 text-white border-[#a6a6a7]">
              <Link href="squadre/gliaudaci">
                <h3 className="roboto-thin text-xl">FC Vesuvio</h3>
              </Link>
            </div>
            <div className="text-center mr-4 border rounded-full px-8 py-4 mb-6 text-white border-[#a6a6a7]">
              <Link href="squadre/gliaudaci">
                <h3 className="roboto-thin text-xl">Gli Audaci</h3>
              </Link>
            </div>
            <div className="text-center mr-4 border rounded-full px-8 py-4 mb-6 text-white border-[#a6a6a7]">
              <Link href="squadre/ikg">
                <h3 className="roboto-thin text-xl">IKG</h3>
              </Link>
            </div>
          </div>
        </nav>
      </div> */}

      <div className="mt-20 relative overflow-hidden items-center justify-center">
        <button
          onClick={handlePrevClick}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
        >
          &lt;
        </button>
        <Image
          src={images[currentImageIndex]}
          alt="Torneo Animatori Lallio"
          width={currentImageIndex === 0 ? 600:400}
          height={currentImageIndex === 0 ? 600:400}
          className="mx-10"
        />
        <button
          onClick={handleNextClick}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
        >
          &gt;
        </button>
      </div>
    </main>
  );
}
