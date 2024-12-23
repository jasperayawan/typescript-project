'use client'

import React from 'react'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

const Home = () => {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default Home