"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const LogoQuiz = () => {
  const logos = [
    { id: 1, name: 'spotify' },
    { id: 2, name: 'whatsapp' },
    { id: 3, name: 'youtube' },
    { id: 4, name: 'nike' },
    { id: 5, name: 'facebook' },
    { id: 6, name: 'adidas' },
    { id: 7, name: 'netflix' },
    { id: 8, name: 'mcdonald\'s' },
    { id: 9, name: 'jordan' },
    { id: 10, name: 'apple' },
    // Add more logos as needed
  ];

  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);

  const checkAnswer = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    if (userInput.toLowerCase() === logos[currentLogoIndex].name.toLowerCase()) {
      setScore(score + 1);
      setCurrentLogoIndex(currentLogoIndex + 1);
      setUserInput('');
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <main className='flex flex-col items-center justify-center h-screen bg-[#CFE8FC]'>
      <div className='flex items-center mb-4'>
        <Link href="/logoquiz">
          <img src="/logoquiz/icons/home.svg" alt="Home" className="h-6 w-6 mr-2" />
        </Link>
        <h1 className='inter-bold text-4xl text-[#0D47A1] font-bold'>Level 1</h1>
      </div>
      {currentLogoIndex < logos.length ? (
        <div className='p-6 bg-[#E3F2FD] rounded-xl shadow-md w-80'>
          <img className='mx-auto h-32 w-32 object-contain' src={`/logoquiz/lev1/${logos[currentLogoIndex].name}.png`} alt={`Logo ${logos[currentLogoIndex].name}`} />
          <form onSubmit={checkAnswer}>
            <input
              className='mt-4 w-full p-2 border border-[#1976D2] rounded-xl text-black'
              type="text"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
                setError(false);
              }}
              placeholder="Type the solution"
            />
            {error && <p className='text-red-500'>wrong answer, retry</p>}
            <button className='mt-4 w-full py-2 px-4 bg-[#2196F3] text-white rounded-xl hover:bg-[#1E88E5]' type="submit">Guess</button>
          </form>
        </div>
      ) : (
        <div className='p-6 bg-[#E3F2FD] rounded-xl shadow-md w-80 text-center'>
          <h2 className='text-2xl font-bold mb-4 text-[#2196F3]'>Completed!</h2>
          <Link href="/logoquiz">
            <img src="/logoquiz/icons/home.svg" alt="Home" className="h-6 w-6 mx-auto" />
          </Link>
        </div>
      )}
    </main>
  );
};

export default LogoQuiz;