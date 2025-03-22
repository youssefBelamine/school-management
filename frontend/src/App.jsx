// import { useState } from 'react'
import './App.css';
import MyRoutes from './router/MyRoutes';
function App() {
// const [val, setVal] = useState(0)
  return (
    <>
      {/* <h1>{val}</h1>
      <button onClick={()=> setVal(val + 1)}>+</button>
      <button onClick={()=> setVal(val - 1)}>-</button> */}
      <MyRoutes />
    </>
  )
}

export default App
