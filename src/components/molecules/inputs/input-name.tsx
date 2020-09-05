import React, { useState, useEffect } from 'react'

function nameInput() {
  ////////CHANGE STATE////////

  const [name, setconfirmPass] = useState({
    name: ''
  })

  useEffect(()=>{
    if(sessionStorage.getItem('name')){
      setconfirmPass({
        name: sessionStorage.getItem('name')
      })
      console.log(sessionStorage.getItem('name'));
    }else console.log('No hay nada por aqui');
  }, [])

  const handleInputChange = (event) => {
    sessionStorage.setItem('name', event.target.value);
    console.log(event.target.value)
    
    setconfirmPass({
      ...name,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="content-name">
      <input
        type="text"
        name="name"
        onChange={handleInputChange}
        value={name.name}
        placeholder="* Ingresa tu Nombre"
        className="input-name"
      />
      <i className="fas fa-user" id="user"></i>
    </div>
  )
}

export default nameInput
