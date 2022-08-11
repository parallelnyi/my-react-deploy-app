import React from 'react'

export default function ({changeSize}) {
  return (
    <div>
         <button onClick={changeSize.plus}> increase </button>
      <button onClick={changeSize.minus}> decrease</button>
    </div>
  )
}
