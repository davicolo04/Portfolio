// "use client"
// import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // const images = ["/gallery/logo.png", "/gallery/fotosquadra_vasco.jpg"];
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const handlePrevClick = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex > 0 ? prevIndex - 1 : images.length - 1
  //   );
  // };

  // const handleNextClick = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex < images.length - 1 ? prevIndex + 1 : 0
  //   );
  // };

  return (
    <main className="flex flex-col items-center justify-between p-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <h1 className="roboto-bold text-8xl text-[#1b1b1d] text-center">
            TORNEO ANIMATORI LALLIO
          </h1>
        </Link>
      </div>

      <div className="container flex justify-center mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mt-8">
          <div className="flex justify-center grid grid-cols-5 max-w-2xl">
            <div className="text-center mr-4 border rounded-full px-8 py-4 mb-6 text-white border-[#a6a6a7]">
              <Link href="">
                <h3 className="roboto-thin text-xl">2020</h3>
              </Link>
            </div>
            <div className="text-center mr-4 border rounded-full px-8 py-4 mb-6 text-white border-[#a6a6a7]">
              <Link href="">
                <h3 className="roboto-thin text-xl">2021</h3>
              </Link>
            </div>
            <div className="text-center mr-4 border rounded-full px-8 py-4 mb-6 text-white border-[#a6a6a7]">
              <Link href="">
                <h3 className="roboto-thin text-xl">2022</h3>
              </Link>
            </div>
            <div className="text-center mr-4 border rounded-full px-8 py-4 mb-6 text-white border-[#a6a6a7] ">
              <Link href="album/2023">
                <h3 className="roboto-thin text-xl">2023</h3>
              </Link>
            </div>
            <div className="text-center border rounded-full px-8 py-4 mb-6 text-white border-[#a6a6a7]">
              <Link href="album/2024">
                <h3 className="roboto-thin text-xl">2024</h3>
              </Link>
            </div>
          </div>
        </nav>
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

      <Image
        src="/album/gallery/logo.png"
        alt="Logo Torneo Animatori Lallio"
        width={500}
        height={500}
        className="mt-10"
      />
    </main>
  );
}
