import React, { useState, useEffect, useRef, createContext, useMemo } from 'react'
import Toggle from './Toggle'
import Counter from './Counter'
import { useTitleInput } from './hooks/useTitleInput'

export const UserContext = createContext()

const App = () => {
  const [name, setName] = useTitleInput('')
  const [dishes, setDishes] = useState([])

  const reverseWord = word => {
    return word
      .split("")
      .reverse()
      .join("")
  }
  const title = 'Level Up Dishes'

  const TitleReversed = useMemo(() => reverseWord(title), [title])

  const fetchDishes = async () => {
    console.log('run')
    const res = await fetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes')
    const data = await res.json()
    setDishes(data)
  }

  useEffect(() => {
    fetchDishes()
  }, [name])

  return (
    <UserContext.Provider
      value={{
        user: true
      }}
    >
      <div className="main-wrapper">
        <h1>{TitleReversed}</h1>
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

        {dishes.map(dish => (
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
