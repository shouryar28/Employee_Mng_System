export const getTaskStatus = (task) => {
  if (task.active) return 'active'
  if (task.newTask) return 'new'
  if (task.completed) return 'completed'
  if (task.failed) return 'failed'
  return 'unknown'
}

export const validateTask = (task) => {
  const requiredFields = ['taskTitle', 'taskDescription', 'taskDate', 'category']
  return requiredFields.every(field => task[field])
}

// Enhanced task status update with history tracking
export const updateTaskStatus = (userData, targetTask, newStatus, userId = null) => {
  return userData.map(employee => {
    const taskIndex = employee.tasks.findIndex(task => 
      task.taskTitle === targetTask.taskTitle && 
      task.taskDate === targetTask.taskDate
    )

    if (taskIndex === -1) return employee

    const updatedTasks = [...employee.tasks]
    const oldStatus = getTaskStatus(updatedTasks[taskIndex])
    const currentTime = new Date().toISOString()
    
    // Initialize status history if it doesn't exist
    if (!updatedTasks[taskIndex].statusHistory) {
      updatedTasks[taskIndex].statusHistory = []
    }

    // Add status change to history
    updatedTasks[taskIndex].statusHistory.push({
      status: oldStatus,
      timestamp: currentTime,
      changedBy: userId || 'system'
    })

    // Reset all status flags
    updatedTasks[taskIndex] = {
      ...updatedTasks[taskIndex],
      active: false,
      newTask: false,
      completed: false,
      failed: false,
      lastUpdated: currentTime
    }

    // Set new status
    switch (newStatus) {
      case 'active':
        updatedTasks[taskIndex].active = true
        updatedTasks[taskIndex].startedAt = currentTime
        break
      case 'completed':
        updatedTasks[taskIndex].completed = true
        updatedTasks[taskIndex].completedAt = currentTime
        break
      case 'failed':
        updatedTasks[taskIndex].failed = true
        updatedTasks[taskIndex].failedAt = currentTime
        break
      default:
        updatedTasks[taskIndex].newTask = true
        updatedTasks[taskIndex].createdAt = currentTime
    }

    // Update task counts
    const taskCounts = { ...employee.taskCounts }
    if (oldStatus !== 'unknown') {
      taskCounts[oldStatus] = Math.max(0, taskCounts[oldStatus] - 1)
    }
    taskCounts[newStatus] = (taskCounts[newStatus] || 0) + 1

    return {
      ...employee,
      tasks: updatedTasks,
      taskCounts
    }
  })
}

// Real-time task analytics
export const getTaskAnalytics = (userData) => {
  const analytics = {
    totalTasks: 0,
    activeTasks: 0,
    completedTasks: 0,
    failedTasks: 0,
    newTasks: 0,
    averageCompletionTime: 0,
    tasksByCategory: {},
    recentActivity: []
  }

  userData.forEach(employee => {
    employee.tasks.forEach(task => {
      analytics.totalTasks++
      
      if (task.active) analytics.activeTasks++
      if (task.completed) analytics.completedTasks++
      if (task.failed) analytics.failedTasks++
      if (task.newTask) analytics.newTasks++

      // Category tracking
      if (task.category) {
        analytics.tasksByCategory[task.category] = (analytics.tasksByCategory[task.category] || 0) + 1
      }

      // Recent activity tracking
      if (task.lastUpdated) {
        analytics.recentActivity.push({
          taskTitle: task.taskTitle,
          employee: employee.firstName,
          status: getTaskStatus(task),
          timestamp: task.lastUpdated,
          category: task.category
        })
      }
    })
  })

  // Sort recent activity by timestamp
  analytics.recentActivity.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))

  return analytics
}

// Task performance metrics
export const getTaskPerformance = (task) => {
  if (!task.createdAt) return null

  const created = new Date(task.createdAt)
  const now = new Date()
  const timeElapsed = now - created

  let performance = {
    timeElapsed: timeElapsed,
    timeElapsedFormatted: formatDuration(timeElapsed),
    isOverdue: false,
    efficiency: 0
  }

  if (task.completedAt) {
    const completed = new Date(task.completedAt)
    const completionTime = completed - created
    performance.completionTime = completionTime
    performance.completionTimeFormatted = formatDuration(completionTime)
    performance.efficiency = Math.min(100, (timeElapsed / completionTime) * 100)
  } else if (task.taskDate) {
    const dueDate = new Date(task.taskDate)
    performance.isOverdue = now > dueDate
    performance.daysUntilDue = Math.ceil((dueDate - now) / (1000 * 60 * 60 * 24))
  }

  return performance
}

// Format duration in human-readable format
export const formatDuration = (milliseconds) => {
  const seconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `${days}d ${hours % 24}h`
  if (hours > 0) return `${hours}h ${minutes % 60}m`
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`
  return `${seconds}s`
}

// Real-time task filtering and sorting
export const filterAndSortTasks = (tasks, filters = {}) => {
  let filteredTasks = [...tasks]

  // Apply filters
  if (filters.status) {
    filteredTasks = filteredTasks.filter(task => getTaskStatus(task) === filters.status)
  }

  if (filters.category) {
    filteredTasks = filteredTasks.filter(task => task.category === filters.category)
  }

  if (filters.search) {
    const searchTerm = filters.search.toLowerCase()
    filteredTasks = filteredTasks.filter(task => 
      task.taskTitle.toLowerCase().includes(searchTerm) ||
      task.taskDescription.toLowerCase().includes(searchTerm)
    )
  }

  // Apply sorting
  if (filters.sortBy) {
    filteredTasks.sort((a, b) => {
      switch (filters.sortBy) {
        case 'date':
          return new Date(b.taskDate) - new Date(a.taskDate)
        case 'priority':
          return (b.priority || 0) - (a.priority || 0)
        case 'status':
          return getTaskStatus(a).localeCompare(getTaskStatus(b))
        case 'title':
          return a.taskTitle.localeCompare(b.taskTitle)
        default:
          return 0
      }
    })
  }

  return filteredTasks
}