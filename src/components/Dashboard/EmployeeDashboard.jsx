import React, { useContext, useEffect } from 'react'
import Header from '../../other/Header'
import TaskListNumbers from '../../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = ({ data, changeUser }) => {
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    if (userData) {
      const updatedEmployee = userData.find(emp => emp.id === data.id)
      if (updatedEmployee) {
        const updatedData = { role: "employee", data: updatedEmployee }
        localStorage.setItem('loggedInUser', JSON.stringify(updatedData))
      }
    }
  }, [userData, data.id])

  const currentEmployeeData = userData?.find(emp => emp.id === data.id) || data

  return (
    <div className='min-h-screen relative overflow-hidden'>
      {/* Animated gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900 animate-pulse'></div>
      
      {/* Animated mesh gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-cyan-600/20 animate-pulse'></div>
      
      {/* Subtle pattern overlay */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-0' style={{
          backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Glowing orb effects */}
      <div className='absolute top-32 left-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute bottom-32 right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1500'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-700'></div>
      
      {/* Bubble Effects */}
      <div className='absolute top-16 right-16 w-14 h-14 bg-blue-400/35 rounded-full animate-bounce delay-200'></div>
      <div className='absolute top-40 right-40 w-6 h-6 bg-cyan-400/45 rounded-full animate-bounce delay-800'></div>
      <div className='absolute top-56 right-20 w-10 h-10 bg-blue-300/40 rounded-full animate-bounce delay-400'></div>
      <div className='absolute top-72 right-56 w-8 h-8 bg-cyan-300/50 rounded-full animate-bounce delay-1000'></div>
      
      <div className='absolute bottom-40 left-20 w-16 h-16 bg-blue-400/30 rounded-full animate-bounce delay-300'></div>
      <div className='absolute bottom-56 left-56 w-12 h-12 bg-cyan-400/40 rounded-full animate-bounce delay-700'></div>
      <div className='absolute bottom-24 left-40 w-18 h-18 bg-blue-300/35 rounded-full animate-bounce delay-500'></div>
      
      <div className='absolute top-1/4 left-1/3 w-20 h-20 bg-cyan-400/25 rounded-full animate-bounce delay-600'></div>
      <div className='absolute top-3/4 left-2/3 w-14 h-14 bg-blue-400/30 rounded-full animate-bounce delay-900'></div>
      
      {/* Floating bubbles with different animations */}
      <div className='absolute top-1/3 left-1/2 w-8 h-8 bg-blue-300/45 rounded-full animate-pulse delay-400'></div>
      <div className='absolute top-2/3 left-1/4 w-12 h-12 bg-cyan-300/40 rounded-full animate-pulse delay-800'></div>
      <div className='absolute top-1/2 left-3/4 w-6 h-6 bg-blue-400/35 rounded-full animate-pulse delay-1200'></div>
      
      {/* Additional small bubbles */}
      <div className='absolute top-24 left-1/4 w-4 h-4 bg-cyan-300/50 rounded-full animate-bounce delay-1500'></div>
      <div className='absolute top-80 left-3/4 w-6 h-6 bg-blue-300/40 rounded-full animate-bounce delay-1100'></div>
      <div className='absolute bottom-80 left-1/2 w-8 h-8 bg-cyan-400/30 rounded-full animate-bounce delay-1300'></div>
      
      {/* Content */}
      <div className='relative z-10 p-6 md:p-10'>
        <Header data={currentEmployeeData} changeUser={changeUser} />
        <TaskListNumbers data={currentEmployeeData} />
        <TaskList data={currentEmployeeData} />
      </div>
    </div>
  )
}

export default EmployeeDashboard