import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const NotificationSystem = () => {
  const [userData, updateUserData, notifications, removeNotification, isOnline] = useContext(AuthContext)

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return '✅'
      case 'warning':
        return '⚠️'
      case 'error':
        return '❌'
      case 'info':
        return 'ℹ️'
      default:
        return '📢'
    }
  }

  const getNotificationColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-500'
      case 'warning':
        return 'bg-yellow-500'
      case 'error':
        return 'bg-red-500'
      case 'info':
        return 'bg-blue-500'
      default:
        return 'bg-gray-500'
    }
  }

  if (notifications.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`${getNotificationColor(notification.type)} text-white p-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg">{getNotificationIcon(notification.type)}</span>
              <div>
                <p className="font-medium">{notification.message}</p>
                <p className="text-xs opacity-75">
                  {new Date(notification.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
      
      {/* Connection Status Indicator */}
      <div className={`${isOnline ? 'bg-green-500' : 'bg-red-500'} text-white px-3 py-2 rounded-lg text-sm font-medium`}>
        {isOnline ? '🟢 Online' : '🔴 Offline'}
      </div>
    </div>
  )
}

export default NotificationSystem 