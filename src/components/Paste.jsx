import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Calendar, Copy, Eye, PencilLine, Trash2 } from "lucide-react";
import { formatDate } from '../utils/formatDate';
import { removeFromPastes } from '../redux/pasteSlice'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Paste() {

  const pastes = useSelector((state) => state.paste.pastes);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [search, setSearch] = useState(""); // use for searching functionality



  const filteredPastes = pastes.filter((item) => (
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.content.toLowerCase().includes(search.toLowerCase())
  ))


  function deleteHandler(id) {
    dispatch(removeFromPastes(id));
  }
  function copyClipboard(content) {
    navigator.clipboard.writeText(content || "Empty Content");
    toast.success("Copied to clipboard");
  }
  function viewContent(id) {
    toast.success("Review Mode");
    navigate('/pastes/'+id);
  }
  function editHandler(paste) {
    toast.success("Edit Mode");
    navigate(`/?pasteId=${paste._id}`);
  }



  return (
    <div className='dark:bg-background container mt-5 mx-auto rounded-lg'>
      <div className='max-w-[1200px] mx-auto px-4 py-20 '>

        {/* search option */}
        <div className=''>
          <input
            type="search"
            placeholder="Search paste here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full px-4 py-3 rounded-lg focus:outline-none dark:text-textPrimary dark:bg-surface border border-gray-300 mb-5'
          />
        </div>

        {/* show all pastes */}
        <div className='w-full border border-gray-300 rounded-lg p-4 bg-white dark:bg-surface'>

          {/* 1st row */}
          <h2 className='border-b-2 pb-4 font-bold text-xl sm:text-2xl md:text-5xl lg:7xl'>All Pastes</h2>

          {/* 2nd row */}
          <div className='mt-5 flex flex-col gap-3 w-full'>
            {
              filteredPastes.length > 0 ?
                (
                  filteredPastes.map((item, index) => (

                    <div key={index}
                      className='flex justify-between items-center border border-blue-400 rounded-lg p-4 flex-wrap'
                    >

                      {/* col1 */}
                      <div className='w-full md:w-10/12 border-1 flex flex-col gap-3'>
                        <h2 className='font-bold text-3xl md:text-4xl'>
                          {item.title}
                        </h2>
                        <p className='text-justify text-sm font-light opacity-80'>
                          {item.content.length < 400 ? (item.content) : (item.content.substring(0, 400) + '...')}
                        </p>
                      </div>


                      {/* col2 */}

                      <div className='w-full lg:w-auto flex lg:flex-col flex-wrap justify-between items-center gap-4 text-white mt-5 md:mt-1'>

                        <div className='flex gap-1'>
                          <button className="rounded-full p-2 bg-accent relative group"
                            onClick={() => editHandler(item)}
                          >
                            <PencilLine />
                            <div className="absolute -top-8 left-1 p-1 rounded-md text-center dark:text-white bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Edit
                            </div>
                          </button>
                          
                          <button className='rounded-full p-2 bg-red-500 relative group'
                            onClick={() => deleteHandler(item?._id)}
                          >
                            {/* delete button */}
                            <Trash2 />
                            <div className="absolute -top-8 left-1 p-1 rounded-md text-center dark:text-white bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Delete
                            </div>
                          </button>
                          <button className='rounded-full p-2 bg-yellow-500 relative group'
                            onClick={() => viewContent(item?._id)}
                          >
                            <Eye />
                            <div className="absolute -top-8 left-1 p-1 rounded-md text-center dark:text-white bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Read
                            </div>
                          </button>
                          <button className='rounded-full p-2 bg-violet-500 relative group'
                            onClick={() => copyClipboard(item?.content)}
                          >
                            <Copy />
                            <div className="absolute -top-8 left-1 p-1 rounded-md text-center dark:text-white bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Copy
                            </div>
                          </button>
                        </div>

                        <div className='flex gap-3'>
                          <Calendar />
                          <p>{formatDate(item.createdAt)}</p>
                        </div>

                      </div>

                    </div>
                  ))
                )
                :
                (
                  <div>
                    <p>No pastes found</p>
                  </div>
                )
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Paste

