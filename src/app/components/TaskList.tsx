import { OctagonAlert, Menu, LayoutDashboard, Square, PenTool } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const TaskList = () => {
  return (
    <div className='w-full flex flex-col gap-y-5'>
        <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row items-center gap-x-3 text-white">
                <OctagonAlert />
                <span className='text-xl'>Important Task</span>
            </div>
            <div className="flex flex-row gap-x-2">
                <select name="category" id="" className='px-4 rounded-lg py-2 text-white bg-zinc-700'>
                    <option value="Newest">Newest</option>
                </select>
                <button className='px-4 py-2 rounded-lg text-white bg-zinc-700'>
                    <Menu />
                </button>
                <button className='px-4 py-2 rounded-lg text-white bg-zinc-700'>
                    <LayoutDashboard />
                </button>
            </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {[1,2,3,4,5,6].map((task, i) => (
                <div key={i} className="rounded-2xl bg-[#1e1e1e] p-4">
                    <div className="flex flex-row justify-start items-start gap-4 text-zinc-400">
                        <input type="checkbox" name="" id="" className='bg-gray-500 w-4 h-4'/>
                        <div className="flex flex-col gap-y-2">
                            <p className='text-zinc-500 text-sm'>January 24, 2024 04:45 PM</p>
                            <h3 className='text-[14px]'>Fix login & Register form design</h3>
                            <div className="flex flex-row items-center gap-x-2">
                                <div className="flex items-center gap-2 bg-black text-purple-500 px-4 py-2 rounded-xl">
                                    <PenTool size={20}/>
                                    <span className='text-[12px]'>Team</span>
                                </div>
                                <div className="flex items-center gap-2 bg-[#e5b76c]/20 text-[#f3c985] px-4 py-2 rounded-xl">
                                    <PenTool size={20}/>
                                    <span className='text-[12px]'>Team</span>
                                </div>
                            </div>
                            <div className="flex flex-row -space-x-4 mt-3 rounded-xl w-[max-content]" style={{ boxShadow: '5px 5px 15px #e5b76c' }}>
                                <Image src='/nft1.png' alt='nft' width={60} height={60} className='z-30 rounded-xl border-[4px] border-black'/>
                                <Image src='/nft2.png' alt='nft' width={60} height={60} className='z-20 rounded-xl border-[4px] border-black'/>
                                <Image src='/nft3.png' alt='nft' width={60} height={60} className='2-10 rounded-xl border-[4px] border-black'/>
                            </div>
                        </div> 
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TaskList