import React from 'react'

const Speaker = ({ name, para1, para2, designation }) => {
  return (
    <div className={`panel2 w-[100vw] h-[100vh] bg-zinc-500 `}>
      <h1>{name}</h1>
      <p>{para1}</p>
      <p>{para2}</p>
      <p>{designation}</p>
    </div>
  )
}

export default Speaker