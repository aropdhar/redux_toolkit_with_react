import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const About = () => {

  const reduxvalue = useSelector((state) => state.countervalue.value)

  return (
    <div>
      <h1>About Section</h1>
      <p>About counter value: {reduxvalue}</p>
    </div>
  )
}

export default About
