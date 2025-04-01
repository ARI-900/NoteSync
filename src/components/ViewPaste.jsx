import { Copy } from 'lucide-react';
import React, { useState } from 'react';

import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { readPastes } from '../redux/pasteSlice';
import { useParams } from 'react-router-dom';



function Home() {

    const {id} = useParams();
   
    const paste = useSelector((state) => (
      state.paste.pastes.find((item) => item._id === id)
    )) 

    // console.log(paste);



    return (
        <div className="container min-h-screen mx-auto p-5 bg-white dark:bg-background mt-8">
            

            {/* Search Bar */}
            <div className="w-full flex flex-row justify-between mb-6">
                <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded dark:bg-surface dark:text-textPrimary p-3 font-semibold"
                    placeholder="Title"
                    value={paste?.title}
                    disabled
                />
                <button 
                className="bg-primary text-white rounded px-4 text-sm md:text-lg md:px-8 py-3 md:font-bold ml-3 hover:bg-secondary transition">
                    Create My Paste
                </button>
            </div>

            {/* Textarea Layout */}
            <div className="bg-surface dark:bg-surface shadow-md rounded-lg p-6">
                {/* 1st Row */}
                <div className="flex items-center justify-between mb-4 border-b pb-2">
                    <div className="flex space-x-2 ">
                        <div className="w-[13px] h-[13px] rounded-full bg-[rgb(255,95,87)]" />
                        <div className="w-[13px] h-[13px] rounded-full bg-[rgb(254,188,46)]" />
                        <div className="w-[13px] h-[13px] rounded-full bg-[rgb(45,200,66)]" />
                    </div>
                    <div>
                        <button className="text-gray-500 dark:text-textSecondary hover:text-accent transition cursor-pointer"
                          onClick={() => ( 
                            toast.success("Copied to clipboard"),
                            navigator.clipboard.writeText(paste?.content || "")
                          )}
                        >
                            <Copy className="group-hover:text-success-500" size={20} />
                        </button>
                    </div>
                </div>

                {/* 2nd Row */}
                <div>
                    <textarea
                        className="w-full border border-gray-300 rounded dark:bg-surface dark:text-textPrimary p-3 font-semibold min-h-screen resize-none"
                        placeholder="Enter your note here..."
                        value={paste?.content}
                        disabled
                    />
                </div>
            </div>

           
        </div>
    );
}

export default Home;