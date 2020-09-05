import React, { useState, useEffect } from 'react'

function EmailInput() {
  ////////CHANGE STATE////////

  const [email, setconfirmPass] = useState({
    email: ''
  })
  
  useEffect(()=>{
    if(localStorage.getItem('email')){
      setconfirmPass({
        email: localStorage.getItem('email')
      })
      console.log(localStorage.getItem('email'));
    }else console.log('No hay nada por aqui');
  }, [])


  const handleInputChange = (event) => {
    localStorage.setItem('email', event.target.value);
    console.log(event.target.value)

    setconfirmPass({
      ...email,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="content-email">
      <input
        type="email"
        name="email"
        onChange={handleInputChange}
        placeholder="* Ingresa tu Correo"
        value={email.email}
        className="input-email"
        id="password"
      />
      <i className="fas fa-envelope" id="password"></i>
    </div>
  )
}

export default EmailInput
