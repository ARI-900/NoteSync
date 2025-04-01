import { Copy } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updatePastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

function Home() {

    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");

    const [searchParams, setSearchParams] = useSearchParams(); // For update case
    const pasteId = searchParams.get("pasteId"); // Get the pasteId from searchParams for update

    const dispatch = useDispatch();

    
    const paste = useSelector((state) =>
        state.paste.pastes.find((item) => item._id === pasteId)
    );

    // Update state when pasteId or paste changes
    useEffect(() => {
        if (paste && pasteId) {
            setValue(paste.content);
            setTitle(paste.title);
        }
    }, [pasteId,paste]);

    const createPaste = () => {
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36) + Math.random().toString(36).substring(2),
            createdAt: new Date().toISOString(),
        };

        if (pasteId) {
            // Update paste
            dispatch(updatePastes(paste));
        } 
        else {
            // Create paste
            dispatch(addToPastes(paste));
        }

        
        
        setTitle("");
        setValue("");
        navigate('/pastes');
    };

    return (
        <div className="container min-h-screen mx-auto p-5 bg-white dark:bg-background mt-8">
            {/* Search Bar */}
            <div className="w-full flex flex-row justify-between mb-6">
                <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded dark:bg-surface dark:text-textPrimary p-3 font-semibold"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    onClick={createPaste}
                    className="bg-primary text-white rounded px-4 text-sm md:text-lg md:px-8 py-3 md:font-bold ml-3 hover:bg-secondary transition"
                >
                    {pasteId ? "Update Paste" : "Create Paste"}
                </button>
            </div>

            {/* Textarea Layout */}
            <div className="bg-surface dark:bg-surface shadow-md rounded-lg p-6">
                {/* 1st Row */}
                <div className="flex items-center justify-between mb-4 border-b pb-2">
                    <div className="flex space-x-2">
                        <div className="w-[13px] h-[13px] rounded-full bg-[rgb(255,95,87)]" />
                        <div className="w-[13px] h-[13px] rounded-full bg-[rgb(254,188,46)]" />
                        <div className="w-[13px] h-[13px] rounded-full bg-[rgb(45,200,66)]" />
                    </div>
                    <div>
                        <button
                            className="text-gray-500 dark:text-textSecondary transition"
                            onClick={() => {
                                toast.success("Copied to clipboard");
                                navigator.clipboard.writeText(value);
                            }}
                        >
                            <Copy
                                className="group-hover:text-success-500 hover:text-accent transition-all duration-300"
                                size={20}
                            />
                        </button>
                    </div>
                </div>

                {/* 2nd Row */}
                <div>
                    <textarea
                        className="w-full border border-gray-300 rounded dark:bg-surface dark:text-textPrimary p-3 font-semibold min-h-screen resize-none"
                        placeholder="Enter your note here..."
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;