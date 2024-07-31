import React, { useState } from 'react'
import './App.css'

export default function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {

    }
  return (
    <div className='create_form'>
        <input type="text" placeholder='Enter Task' onChange={() => setTask(e.target.value)} />
        <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}
