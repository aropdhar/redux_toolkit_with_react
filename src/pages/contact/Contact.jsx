import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Contact = () => {

  const reduxvalue = useSelector((state) => state.countervalue.value)

  return (
    <div>
      <h1>Contact Section</h1>
      <p>Home Increment & decrement value: {reduxvalue}</p>
    </div>
  )
}

export default Contact
