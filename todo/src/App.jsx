import { useState } from 'react'

import './index.css'
import Todo from './pages/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo></Todo>
    </>
  )
}

export default App
