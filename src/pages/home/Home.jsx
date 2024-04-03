import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment , decrement } from '../../slices/counterSlice';


const Home = () => {

  const reduxvalue = useSelector((state) => state.countervalue.value)

  let [count , setCount] = useState(reduxvalue);
    
  const dispatch = useDispatch()




  let handleincrement = () =>{

    count++
    setCount(count);
    dispatch(increment(count))
  }

  let handledecrement = () =>{

    count--
    setCount(count);
    dispatch(decrement(count))

  }

  return (
    <>
      <div className="home_text">
        <h1>Home Section</h1>
      </div>

      {
        count > 10 
        
        ?

        console.log("please 10 boro hobe na")

        :

        <button onClick={handleincrement}>Increment</button>
      }

      <p>{reduxvalue}</p>

      {
        count < 0 
        ?

        console.log("please 0 niche jawa jabe na")
        :
        
        <button onClick={handledecrement}>Decrement</button>

      }
    </>
  )
}

export default Home
