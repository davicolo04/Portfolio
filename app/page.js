import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50 text-gray-800">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className="mt-10">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden md:max-w-6xl">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                {/* <img className="h-72 w-full object-cover md:w-72" src="io\cillo.jpg" alt="Picture of Davide Colombi" /> */}
                <Image
                  src="/io/cillo.jpg"
                  alt="Picture of Davide Colombi"
                  width={300}
                  height={300}
                  className="h-72 w-full object-cover md:w-72"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                  Davide Colombi
                </div>
                <p className="mt-5 text-gray-500">Software Developer</p>
                {/* <p className="mt-2 text-gray-500">Footballer</p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-4xl mt-6 sm:w-full">
          {/* Qui puoi inserire i tuoi progetti */}
          <div className="p-6 text-left w-96 shadow-md bg-white rounded-lg shadow-lg hover:scale-105">
            <div className="flex items-center">
              <Link href="todolist">
                <h3 className="text-2xl font-bold">todolist</h3>
              </Link>
              <Image
                className="ml-1"
                src="/icons/list.svg"
                alt="todolist"
                width={30}
                height={30}
              />
            </div>
            <p className="mt-4 text-xl">next.js, tailwindcss</p>
          </div>
          <div className="p-6 text-left w-96 shadow-md bg-white rounded-lg shadow-lg hover:scale-105">
            <div className="flex items-center">
              <Link href="counter" className="flex items-center">
                <h3 className="text-2xl font-bold">counter</h3>
                <Image
                  className=""
                  src="/icons/touch.svg"
                  alt="counter"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <p className="mt-4 text-xl">next.js, tailwindcss</p>
          </div>
          <div className="p-6 text-left w-96 shadow-md bg-white rounded-lg shadow-lg hover:scale-105">
            <div className="flex items-center">
              <Link href="logoquiz" className="flex items-center">
                <h3 className="text-2xl font-bold">logoquiz</h3>
                <Image
                  className="ml-1"
                  src="/icons/quiz.svg"
                  alt="logoquiz"
                  width={18}
                  height={18}
                />
              </Link>
            </div>
            <p className="mt-4 text-xl">next.js, tailwindcss</p>
          </div>
          <div className="p-6 text-left w-96 shadow-md bg-white rounded-lg shadow-lg hover:scale-105">
            <div className="flex items-center">
              <Link href="crypto" className="flex items-center">
                <h3 className="text-2xl font-bold">crypto</h3>
                <Image
                  className="ml-1"
                  src="/icons/crypto.svg"
                  alt="crypto"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <p className="mt-4 text-xl">
              next.js, tailwindcss, API integration
            </p>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24">
        <a
          className="flex items-center justify-center text-gray-400"
          href="https://github.com/davicolo04"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Davide Colombi
        </a>
      </footer>
    </div>
  );
};

export default Page;
