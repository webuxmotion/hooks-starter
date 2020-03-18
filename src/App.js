import React, { useState, useEffect, useRef, createContext } from 'react'
import Toggle from './Toggle'
import Counter from './Counter'
import { useTitleInput } from './hooks/useTitleInput'

export const UserContext = createContext()

const App = () => {
  const [name, setName] = useTitleInput('')

  return (
    <UserContext.Provider
      value={{
        user: true
      }}
    >
      <div className="main-wrapper">
        <h1>Level Up Dishes</h1>
        <Toggle/>
        <Counter/>
        <form onSubmit={(e) => {
          e.preventDefault() 
        }}>
          <input 
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <button>Submit</button>
        </form>
      </div>
    </UserContext.Provider>
  )
}

export default App
