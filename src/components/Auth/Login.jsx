import React, { useState } from 'react'
import { showSuccessToast, showErrorToast } from '../../utils/toastConfig'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        
        try {
            const loginSuccess = handleLogin(email, password)
            
            if (loginSuccess) {
                const isAdmin = email === "admin@example.com"
                showSuccessToast(isAdmin ? 'Welcome back, Admin! 👋' : 'Successfully logged in!')
                setEmail("")
                setPassword("")
            } else {
                showErrorToast('Invalid credentials. Please try again.')
            }
        } catch (error) {
            showErrorToast('Login failed. Please check your credentials.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
            {/* Animated Background Elements */}
            <div className='absolute inset-0'>
                {/* Gradient Mesh */}
                <div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-pink-600/20 animate-pulse'></div>
                
                {/* Animated Orbs */}
                <div className='absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl animate-pulse delay-700'></div>
                
                {/* Floating Bubbles */}
                <div className='absolute top-16 right-16 w-14 h-14 bg-purple-400/35 rounded-full animate-bounce delay-200'></div>
                <div className='absolute top-40 right-40 w-6 h-6 bg-pink-400/45 rounded-full animate-bounce delay-800'></div>
                <div className='absolute top-56 right-20 w-10 h-10 bg-purple-300/40 rounded-full animate-bounce delay-400'></div>
                <div className='absolute top-72 right-56 w-8 h-8 bg-pink-300/50 rounded-full animate-bounce delay-1000'></div>
                
                <div className='absolute bottom-40 left-20 w-16 h-16 bg-purple-400/30 rounded-full animate-bounce delay-300'></div>
                <div className='absolute bottom-56 left-56 w-12 h-12 bg-pink-400/40 rounded-full animate-bounce delay-700'></div>
                <div className='absolute bottom-24 left-40 w-18 h-18 bg-purple-300/35 rounded-full animate-bounce delay-500'></div>
                
                {/* Pattern Overlay */}
                <div className='absolute inset-0 opacity-10'>
                    <div className='absolute inset-0' style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>
            </div>

            {/* Login Container */}
            <div className='relative z-10 flex min-h-screen items-center justify-center p-6'>
                <div className='w-full max-w-md'>
                    {/* Logo/Brand Section */}
                    <div className='text-center mb-8'>
                        <div className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg'>
                            <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                            </svg>
                        </div>
                        <h1 className='text-4xl font-bold text-white mb-2'>Welcome Back</h1>
                        <p className='text-gray-400 text-lg'>Sign in to your account</p>
                    </div>

                    {/* Login Form */}
                    <div className='bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl'>
                        <form onSubmit={submitHandler} className='space-y-6'>
                            {/* Email Input */}
                            <div className='space-y-2'>
                                <label className='text-sm font-medium text-gray-300'>Email Address</label>
                                <div className='relative'>
                                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                        <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207' />
                                        </svg>
                                    </div>
                                    <input
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className='w-full pl-10 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-200'
                                        type="email"
                                        placeholder='Enter your email'
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className='space-y-2'>
                                <label className='text-sm font-medium text-gray-300'>Password</label>
                                <div className='relative'>
                                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                        <svg className='h-5 w-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                                        </svg>
                                    </div>
                                    <input
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className='w-full pl-10 pr-12 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-200'
                                        type={showPassword ? "text" : "password"}
                                        placeholder='Enter your password'
                                    />
                                    <button
                                        type='button'
                                        onClick={() => setShowPassword(!showPassword)}
                                        className='absolute inset-y-0 right-0 pr-3 flex items-center'
                                    >
                                        {showPassword ? (
                                            <svg className='h-5 w-5 text-gray-400 hover:text-gray-300 transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21' />
                                            </svg>
                                        ) : (
                                            <svg className='h-5 w-5 text-gray-400 hover:text-gray-300 transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Login Button */}
                            <button 
                                type='submit'
                                disabled={isLoading}
                                className='w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500/50 shadow-lg'
                            >
                                {isLoading ? (
                                    <div className='flex items-center justify-center'>
                                        <svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                                            <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                                            <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                                        </svg>
                                        Signing in...
                                    </div>
                                ) : (
                                    'Sign In'
                                )}
                            </button>
                        </form>

                        {/* Demo Credentials */}
                        <div className='mt-8 p-4 bg-white/5 rounded-xl border border-white/10'>
                            <h3 className='text-sm font-medium text-gray-300 mb-3'>Demo Credentials</h3>
                            <div className='space-y-2 text-xs text-gray-400'>
                                <div className='flex justify-between'>
                                    <span>Admin:</span>
                                    <span>admin@example.com / 123</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>Employee:</span>
                                    <span>e@e.com / 123</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className='text-center mt-8'>
                        <p className='text-gray-400 text-sm'>
                            © 2024 Employee Management System. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

