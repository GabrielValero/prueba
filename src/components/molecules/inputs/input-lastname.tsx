import React, { useState, useEffect } from 'react'

function LastnameInput() {
  ////////CHANGE STATE////////

  const [lastname, setconfirmPass] = useState({
    lastname: ''
  })

  useEffect(()=>{
    if(localStorage.getItem('lastname')){
      setconfirmPass({
        lastname: localStorage.getItem('lastname')
      })
      console.log(localStorage.getItem('lastname'));
    }else console.log('No hay nada por aqui');
  }, [])

  const handleInputChange = (event) => {
    localStorage.setItem('lastname', event.target.value);
    console.log(event.target.value)
    
    setconfirmPass({
      ...lastname,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="content-lastname">
      <input
        type="text"
        name="lastname"
        onChange={handleInputChange}
        value={lastname.lastname}
        placeholder="* Ingresa tu Apellido"
        className="input-lastname"
      />
      <i className="fas fa-user" id="user"></i>
    </div>
  )
}

export default LastnameInput
