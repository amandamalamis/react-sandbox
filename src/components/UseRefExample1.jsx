import { useRef } from 'react'
//useRef is a hook to create a reference to a DOM element in a functional component
//first ex ; get ref to some element in components that we want to do something, like: get value, change style, etc.

//useref will always  log an OBJECT with current: -check console
function UseRefExample1() {
  const inputRef = useRef()
  const paraRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
    inputRef.current.value = 'Hello'
    inputRef.current.style.backgroundColor = 'red'
    paraRef.current.innerText = 'Goodbye'
  }

  return (
    <div>
      <form onSubmit={onSubmit} > 
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          ref={inputRef} //variable from above
          id='name'
          className='form-control mb-2'
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello
        </p>
      </form>
    </div>
  )
}

export default UseRefExample1
