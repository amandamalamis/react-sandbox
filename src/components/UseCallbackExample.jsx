import React, { useState, useCallback } from 'react'

//react.memo -> high order component- HOC - comopnent that takes a componenet as a PROP and prevents the re-rendering if the values havent changed
function UseCallbackExample() {
  const [tasks, setTasks] = useState([])


  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task'])
  }, [setTasks])
  //dependency is setTasks
  //only do this if PERFORMANCE ISSUES - for Expensive functions only

  return (
    <div>
      <Button addTask={addTask} />
      {/* //array of strings */}
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  )
}

const Button = React.memo(({ addTask }) => {
  console.log('Button rendered')
  return (
    <div>
      <button className='btn btn-primary' onClick={addTask}>
        Add Task
      </button>
    </div>
  )
})

export default UseCallbackExample
