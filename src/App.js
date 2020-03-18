import React, { useState, useEffect, useRef, createContext, useMemo } from 'react'
import useAbortableFetch from 'use-abortable-fetch'
import { useSpring, animated } from 'react-spring'
import Toggle from './Toggle'
import Counter from './Counter'
import { useTitleInput } from './hooks/useTitleInput'

export const UserContext = createContext()

const App = () => {
  const [name, setName] = useTitleInput('')
  const [dishes, setDishes] = useState([])
  const { data, loading } = useAbortableFetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes')

  const props = useSpring({opacity: 1, from: { opacity: 0 }})

  const reverseWord = word => {
    return word
      .split("")
      .reverse()
      .join("")
  }
  const title = 'Level Up Dishes'

  return (
    <UserContext.Provider
      value={{
        user: true
      }}
    >
      <div className="main-wrapper">
        <animated.h1 style={props}>React Hooks</animated.h1>
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

        {data && data.map(dish => (
          <article className="dish-card dish-card--withImage">
            <h3>{dish.name}</h3>
            <p>{dish.desc}</p>
            <div className="ingredients">
              {dish.ingredients.map(ingredient => (
                <span>{ingredient}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </UserContext.Provider>
  )
}

export default App
