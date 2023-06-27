import { useState, useEffect, useRef, useMemo } from 'react'
//should only use usememo if experiencing performance issues, may be unnecessary otherwise


function useMemoExample() {
  const [number, setNumber] = useState(1)
  // eslint-disable-next-line
  const [inc, setInc] = useState(0)

  // const sqrt = getSqrt(number)
  //expensive function for show
  const sqrt = useMemo(() => getSqrt(number), [number])
  //use memo takes in function and dependency array - the number and number above
  const renders = useRef(1)

  //renders VS running the function, saving expensive function time
  
  useEffect(() => {
    renders.current = renders.current + 1
  })

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1)
      return prevState + 1
    })
  }

  return (
    <div>
      <input
        type='number'
        value={number} //the number state
        onChange={(e) => setNumber(e.target.value)}
        className='form-control w-25'
      />

      <h2 className='my-3'>
        The sqrt of {number} is {sqrt}
      </h2>

      <button onClick={onClick} className='btn btn-primary'>
        Re Render
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  )
}

function getSqrt(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i)
    //runs every time we have a render- goes 10000 times in console
  }

  console.log('Expensive Function Called!')
  return Math.sqrt(n)
}

export default useMemoExample
