import React, { useEffect, useState } from 'react'
import Contacts from '..'

const initalSetSormValues  = {fullname :"" , phone_number : ""}


const Form = ({addContact, contacts}) => {
  const [form, setForm] = useState(initalSetSormValues)

  useEffect(()=>{
    setForm(initalSetSormValues);
  }, [Contacts]);

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(form.fullname === "" || form.phone_number === "" ? false: true);

    addContact([...contacts, form]);  // Bana burada forma yazdıklarımı verecek.
    setForm(initalSetSormValues) // böylelikle clicke bastıktan sonra formun içi temizlenecek.

    console.log(form);

  }

  return (
    <form onSubmit={onSubmit}>

      <div>
        <input value={form.fullname} name="fullname" placeholder='Full Name' onChange={onChangeInput}></input>
      </div>
      <div>
        <input value={form.phone_number} name= "phone_number" placeholder='Phone Number' onChange={onChangeInput}></input>
      </div>

      <div className='btn'>
        <button >Click</button>
      </div>
    
    </form>
  )
}

export default Form;