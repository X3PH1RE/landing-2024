import React from 'react'

const Speaker = ({ color, name }) => {
  return (
    <div className={`panel2 w-[100vw] h-[100vh] bg-${color}-500 `}>{name}</div>
  )
}

export default Speaker