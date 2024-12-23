import React from 'react'
import Topbar from './Topbar'
import AddTaskContainer from './AddTaskContainer'
import TaskList from './TaskList'

const MainContent = () => {
  return (
    <div className='flex flex-col gap-y-8 my-4 flex-1 px-4'>
        <Topbar />
        <div className="flex h-full flex-row gap-6">
            <AddTaskContainer />
            <TaskList />
        </div>
    </div>
  )
}

export default MainContent