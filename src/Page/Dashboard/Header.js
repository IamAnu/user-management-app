import React from 'react'

function Header({setIsAdding}) {
  return (
    <header>
        <h1> User ManageMent App </h1>
        <div>
            <button onClick={()=> setIsAdding(true)} className='round-button'> Add Users </button>
        </div>
    </header>
  )
}

export default Header
