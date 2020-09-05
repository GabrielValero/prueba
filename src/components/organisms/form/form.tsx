import {useEffect, useState} from 'react';

import React from 'react'
import PageFormTwo from './page-two'
import TitleRpass from '../../atoms/titleRpass'
import ProgressBar from '../../molecules/various/progress-bar'
import PageFormOne from './page-one'

function Form({form}) {
  const [index, setIndex] = useState('true');

  useEffect(()=>{
    console.log('Hola')
    console.log(index, localStorage.getItem('index'))
    if(!localStorage.getItem('index')){
      localStorage.setItem('index', 'true');
    }else{
      setIndex(localStorage.getItem('index'));
    }

    const interval = setInterval(() => {
      if(localStorage.getItem('index') != index) setIndex(localStorage.getItem('index'));
    }, 1000);

    return () => {
      clearInterval(interval)
    };
  })
  return (
    <section className="principal-container">
      <div className="second-container">
        <header>
          <TitleRpass />
        </header>
        <ProgressBar />

        <form className="principal-form" action="">
          <div className="content-form movpag">
            {index == 'true' ? <PageFormOne/>: <PageFormTwo/>}
          </div> 
        </form>
      </div>
    </section>
  )
}

export default Form
