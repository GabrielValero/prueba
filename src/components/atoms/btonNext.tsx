import React, { useState } from 'react'
import { type } from 'os'

function Btnindex() {
  const [index, setIndex] = useState('true');

  const handleOnClick = ()=>{
  	console.log(index, localStorage.getItem('index'))
  	localStorage.setItem('index', 'false')
  	setIndex('false');
  }
  return (
    <a className="btn-medium-next indexPag" href="#" onClick={handleOnClick}>
		  Continuar
		</a>
  )
}

export default Btnindex

