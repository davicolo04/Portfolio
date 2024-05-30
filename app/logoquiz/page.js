import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  const levels = [
    { id: 1, previewImage: 'logoquiz/lev1/spotify.png', link: '/level1' },
    { id: 2, previewImage: 'logoquiz/lev2/bmw.png', link: '/level2' },
    // { id: 3, previewImage: 'lev3/android.png', link: '/level3' },
    // Add more levels as needed
  ];

  return (
    <main className='flex flex-col items-center justify-center h-screen bg-[#CFE8FC]'>
      <div className='flex items-center mb-4'>
        <Link href="/">
          <img src="/logoquiz/icons/home.svg" alt="Home" className="h-6 w-6 mr-2" />
        </Link>
        <h1 className='inter-bold text-4xl text-[#0D47A1] font-bold-700'>LOGO QUIZ</h1>
      </div>
      <div className='flex flex-col gap-4'>
        {levels.map((level) => (
          <Link href={`logoquiz/${level.link}`} key={level.id} className='flex justify-between items-center p-6 bg-[#E3F2FD] rounded-xl shadow-md w-80'>
            <h2 className='text-2xl text-[#1565C0] font-bold'>Level {level.id}</h2>
            <img className='h-16 w-16 object-contain' src={`/${level.previewImage}`} alt={`Level ${level.id}`} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default HomePage;