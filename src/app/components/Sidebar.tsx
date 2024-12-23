import React from 'react'
import { Home, Mail, User, Pen } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='flex justify-center items-center m-4 h-dvh text-white'>
        <div className="flex flex-col justify-start items-center gap-y-10 px-4 py-5 rounded-lg h-full bg-[#1e1e1e]">
            <div className="bg-[#e5b76c] rounded-full h-10 w-10" style={{ boxShadow: '5px 5px' }}></div>
            <ul className='flex flex-col space-y-7'>
                <li className="text-zinc-500">
                    <Home />
                </li>
                <li className="text-zinc-500">
                    <Mail />
                </li>
                <li className="text-zinc-500">
                    <User />
                </li>
                <li className="text-zinc-500">
                    <Home />
                </li>
                <li className="text-zinc-500">
                    <Home />
                </li>
                <li className="text-zinc-500">
                    <Home />
                </li>
                <li className="text-zinc-500">
                    <Home />
                </li>
                <li className="text-zinc-500">
                    <Pen />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar