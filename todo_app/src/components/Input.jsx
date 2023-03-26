import React from 'react'

const Input = () => {
  return (
    <div className='p-3 flex justify-between'>
    <input type="text" placeholder='Enter Data Here!' className='p-3 focus:outline-none w-[90%] border border-slate-400'/>
    <div>
      +
    </div>
    </div>
  )
}

export default Input
