import React from 'react';
import Sidebar from '../components/frontend_components/Sidebar';
import Dashboard from './Dashboard';

const HomePage = () => {
  return (
    <div className='flex flex-row w-screen min-h-screen'>
      <div className="w-2/12 h-full"><Sidebar /></div>
      <div className='w-10/12 h-full'> <Dashboard/></div>
     
    </div>
  )
}

export default HomePage