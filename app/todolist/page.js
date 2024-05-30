"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { MdHomeFilled } from "react-icons/md";

export default function Home() {
    const [task, setTask] = useState(''); // Stato per l'input corrente
    const [tasks, setTasks] = useState([]); // Stato per l'elenco delle tasks

    const handleInputChange = (event) => {
        setTask(event.target.value); // Aggiorna lo stato quando l'input cambia
    };

    const handleAddClick = () => {
        setTasks([...tasks, task]); // Aggiungi la task corrente all'elenco delle tasks
        setTask(''); // Pulisci l'input
    };

    const [isDeleting, setIsDeleting] = useState([]);

    function handleDeleteClick(index) {
        const newIsDeleting = [...isDeleting];
        newIsDeleting[index] = true;
        setIsDeleting(newIsDeleting);

        setTimeout(() => {
            const newTasks = tasks.filter((task, i) => i !== index);
            setTasks(newTasks);
            setIsDeleting(newIsDeleting.filter((_, i) => i !== index));
        }, 200);
    }

    function handleFormSubmit(e) {
        e.preventDefault(); // Previene il comportamento di default del form
        handleAddClick(); // Chiama la funzione handleAddClick
    }


    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className="flex items-center">
                <Link href="/">
                    {/* <MdHomeFilled className="text-4xl" /> */}
                    <Image className='mr-2'
                        src="/icons/home.svg"
                        alt="Home"
                        width={30}
                        height={30}
                    />
                </Link>
                <h1 className="text-4xl font-bold">Todo List</h1>
            </div>
            <form
                className="flex items-center space-x-4"
                onSubmit={handleFormSubmit} // Gestisci l'evento onSubmit
            >
                <input
                    type="text"
                    placeholder="Add a task"
                    className="hover:bg-gray-200 border-2 border-gray-200 p-2 rounded-l text-black"
                    value={task}
                    onChange={handleInputChange}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg mt-5 mb-5"
                    type="submit" // Imposta il tipo del pulsante su "submit"
                >
                    Add
                </button>
            </form>
            {/* Stampa l'elenco delle tasks */}
            <div className="flex flex-col">
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-between space-x-4 mb-5 transition-all duration-500 ${isDeleting[index] ? 'scale-x-0' : ''}`}
                    >
                        <p>{task}</p>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white p-2 rounded-lg"
                            onClick={() => handleDeleteClick(index)} // Gestisci l'evento onClick
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}