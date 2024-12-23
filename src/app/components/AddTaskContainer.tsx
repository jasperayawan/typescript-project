import { CircleAlert, Plus, CirclePlus, CheckCheck, Trash2, Ellipsis, PenTool, PlusCircle } from 'lucide-react'
import React from 'react'

const AddTaskContainer = () => {
  return (
    <div className='rounded-lg bg-[#1e1e1e] p-3 w-[240px]'>
        <div className="flex flex-col space-y-6">
            <button className='text-black bg-[#e5b76c] flex justify-center items-center gap-x-2 rounded-xl p-2'>
                <Plus />
                <span className='font-semibold'>New Task</span>
            </button>
            <div className="flex flex-col space-y-6 pl-4">
                <div className="flex justify-start items-center w-full text-zinc-400 gap-x-2">
                    <CircleAlert />
                    <span>Important</span>
                </div>
                <div className="flex justify-start items-center w-full text-zinc-400 gap-x-2">
                    <CheckCheck />
                    <span>Completed</span>
                </div>
                <div className="flex justify-start items-center w-full text-zinc-400 gap-x-2">
                    <Trash2 />
                    <span>Removed</span>
                </div>
                <div className="flex justify-start items-center w-full text-zinc-400 gap-x-2">
                    <Ellipsis />
                    <span>Due Soom</span>
                </div>
            </div>
            
            <div className="flex flex-row justify-between items-center">
                <h3 className='text-zinc-500 text-sm'>Labels</h3>
                <Ellipsis className='text-zinc-400'/>
            </div>

            <div className="flex flex-col space-y-6 pl-4">
                <div className="flex justify-start items-center w-full text-zinc-400 gap-x-2">
                    <PenTool className='text-purple-500'/>
                    <span>Team</span>
                </div>
                <div className="flex justify-start items-center w-full text-zinc-400 gap-x-2">
                    <PenTool className='text-green-500'/>
                    <span>Low</span>
                </div>
                <div className="flex justify-start items-center w-full text-zinc-400 gap-x-2">
                    <PenTool className='text-yellow-500'/>
                    <span>Medium</span>
                </div>
                <div className="flex justify-start items-center w-full text-zinc-400 gap-x-2">
                    <PenTool className='text-blue-500'/>
                    <span>High</span>
                </div>
                <button className="flex justify-start items-center w-full text-zinc-400 gap-x-2">
                    <PlusCircle />
                    Add table
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddTaskContainer