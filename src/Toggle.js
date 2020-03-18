import React, { useState } from 'react';

const Toggle = () => {
  const [isToggled, setToggle] = useState(true)

  return (
    <div>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
      {isToggled && <h2>Hello</h2>}
    </div>
  ) 
}

export default Toggle
