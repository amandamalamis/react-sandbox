import { useState } from 'react'
import Todo from './Todo'

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true)

  return (
    <div>
      
      {showTodo && <Todo />} 
      {/* //if show to do then show the to do component    */}
      <button
        className='btn btn-primary'
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle To do
      </button>
    </div>
  )
}

export default UseRefExample3
