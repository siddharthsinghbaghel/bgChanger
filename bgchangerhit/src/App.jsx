import React, { useState } from 'react'

function App() {
 const [color , setColor] = useState('red')

  return (
    <div className="w-full h-screen duration-200 
    "
    style={{backgroundColor:color}}>
      <div className='text-green-500'>hellojii</div>
    </div>
  )
}

export default App
