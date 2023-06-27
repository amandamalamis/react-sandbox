import { useState } from 'react'

//hooks should always start with "use"
//a hook is just a function

function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  )

  const setValue = (value) => {
    // Check if function, if not then set to  value
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value
    // Set to state
    setLocalStorageValue(value)
    // Set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore))

    //stringify in case it's an array 

  }

  return [localStorageValue, setValue]
}

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key)
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default useLocalStorage
