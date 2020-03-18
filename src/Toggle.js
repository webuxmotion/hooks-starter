import React, { useState, useContext } from 'react';
import { UserContext } from './App'
import DishForm from './DishForm'

const Toggle = () => {
  const [isToggled, setToggle] = useState(false)
  const userInfo = useContext(UserContext)
  if (!userInfo.user) return null

  return (
    <div>
      
      {isToggled && <h2>Hello</h2>}
      {isToggled ? 
        <DishForm setToggle={setToggle} /> : 
        <button onClick={() => setToggle(!isToggled)}>Toggle</button>}
    </div>
  ) 
}

export default Toggle
