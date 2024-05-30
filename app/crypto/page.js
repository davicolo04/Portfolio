"use client";
// pages/index.js
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Button = () => {
  return (
    <Link href="/">
      <button className="bg-white hover:bg-[#dddddd] text-black text-xl font-bold py-4 px-10 rounded-full">
        Sign up
      </button>
    </Link>
  );
};

const logos = {
  BTC: "crypto/btc.svg",
  ETH: "crypto/eth.svg",
  LTC: "crypto/ltc.svg",
  TRX: "crypto/trx.svg",
  USDT: "crypto/usdt.svg",
  BNB: "crypto/bnb.svg",
};

const IndexPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rest.coinapi.io/v1/assets?apikey=F9256123-644A-44F1-8651-75BF4C0AFE7A"
        );
        let jsonData = await response.json();

        // Controlla se jsonData è un array prima di cercare di filtrarlo
        if (Array.isArray(jsonData)) {
          // Filtra i dati per ottenere solo Bitcoin, Ethereum, Dogecoin e XRP
          jsonData = jsonData.filter((crypto) =>
            ["BTC", "ETH", "LTC", "TRX", "USDT", "BNB"].includes(
              crypto.asset_id
            )
          );
        } else {
          console.error("jsonData is not an array:", jsonData);
          jsonData = null;
        }

        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen py-2 bg-[#050505] text-gray-800">
      <nav className="p-10 w-full">
        <div className="container mx-auto flex justify-between items-center ">
          <div className="flex items-center">
            <Image
              src="crypto/bitcoin.svg"
              alt="Bitcoin"
              width={50}
              height={50}
            />
            <h1 className="text-white text-2xl font-bold ml-2">
              Crypto Market
            </h1>
          </div>
          <div className="flex justify-between w-1/3">
            <h1 className="text-white text-lg hover:text-[#848484]">
              Features
            </h1>
            <h1 className="text-white text-lg hover:text-[#848484]">Why us</h1>
            <h1 className="text-white text-lg hover:text-[#848484]">Blog</h1>
            <h1 className="text-white text-lg hover:text-[#848484]">About</h1>
          </div>
          <Button></Button>
        </div>
      </nav>

      <h1 className="text-8xl font-bold text-white m-6 text-center">
        Crypto platforms for
        <br /> smart loans
      </h1>
      <h2 className="text-xl text-[#848484] text-center">
        Innovative solutions in the field of loans using <br /> cryptocurrencies
        - fast, simple, safe
      </h2>

      <div className="p-6 bg-[#1c1c1c] flex flex-col rounded-2xl items-center w-3/4 mt-5">
        <div className="grid grid-cols-3 gap-6 mt-10 w-full justify-items-center">
          {Array.isArray(data) ? (
            data.map((crypto, index) => (
              <div
                key={index}
                className="bg-[#1c1c1c] p-4 rounded-2xl w-full max-w-sm"
              >
                <img
                  src={logos[crypto.asset_id]}
                  alt={`${crypto.name} logo`}
                  className="w-16 h-16 mb-4"
                />
                <h2 className="text-white text-lg font-bold">
                  ID: {crypto.asset_id}
                </h2>
                <h2 className="text-white text-lg">Name: {crypto.name}</h2>
                <h2 className="text-white text-lg font-bold">
                  Price:{" "}
                  <span className="text-green-500">{crypto.price_usd}</span>
                  <span className="text-white">$</span>
                </h2>
                <h2 className="text-white text-lg">
                  Date Start: {crypto.data_start}
                </h2>
                {/* Aggiungi qui ulteriori dettagli sulla criptovaluta */}
              </div>
            ))
          ) : (
            <p className="text-white">Loading...</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
