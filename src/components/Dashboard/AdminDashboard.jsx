import React from 'react'
import Header from '../../other/Header'
import CreateTask from '../../other/CreateTask'
import AllTask from '../../other/AllTask'

const AdminDashboard = ({ changeUser }) => {
    return (
        <div className='min-h-screen relative overflow-hidden'>
            {/* Animated gradient background */}
            <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-pulse'></div>
            
            {/* Animated mesh gradient overlay */}
            <div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-pink-600/20 animate-pulse'></div>
            
            {/* Subtle pattern overlay */}
            <div className='absolute inset-0 opacity-10'>
                <div className='absolute inset-0' style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>
            
            {/* Glowing orb effects */}
            <div className='absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
            
            {/* Bubble Effects */}
            <div className='absolute top-10 right-10 w-16 h-16 bg-purple-400/30 rounded-full animate-bounce delay-300'></div>
            <div className='absolute top-32 right-32 w-8 h-8 bg-pink-400/40 rounded-full animate-bounce delay-700'></div>
            <div className='absolute top-48 right-16 w-12 h-12 bg-purple-300/35 rounded-full animate-bounce delay-500'></div>
            <div className='absolute top-64 right-48 w-6 h-6 bg-pink-300/45 rounded-full animate-bounce delay-900'></div>
            
            <div className='absolute bottom-32 left-16 w-20 h-20 bg-purple-400/25 rounded-full animate-bounce delay-200'></div>
            <div className='absolute bottom-48 left-48 w-10 h-10 bg-pink-400/35 rounded-full animate-bounce delay-600'></div>
            <div className='absolute bottom-16 left-32 w-14 h-14 bg-purple-300/30 rounded-full animate-bounce delay-400'></div>
            
            <div className='absolute top-1/3 left-1/4 w-18 h-18 bg-pink-400/20 rounded-full animate-bounce delay-800'></div>
            <div className='absolute top-2/3 left-3/4 w-12 h-12 bg-purple-400/25 rounded-full animate-bounce delay-1000'></div>
            
            {/* Floating bubbles with different animations */}
            <div className='absolute top-1/4 left-1/2 w-6 h-6 bg-purple-300/40 rounded-full animate-pulse delay-300'></div>
            <div className='absolute top-3/4 left-1/3 w-8 h-8 bg-pink-300/35 rounded-full animate-pulse delay-600'></div>
            <div className='absolute top-1/2 left-2/3 w-10 h-10 bg-purple-400/30 rounded-full animate-pulse delay-900'></div>
            
            {/* Content */}
            <div className='relative z-10 p-6 md:p-10'>
                <Header changeUser={changeUser} />
                <CreateTask />
                <AllTask />
            </div>
        </div>
    )
}

export default AdminDashboard