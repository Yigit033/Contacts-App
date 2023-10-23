import {useEffect, useState} from 'react';
import List from '../Contacts/List/List';
import Form from '..//Contacts/Form/Form';
import "./styles.css"


const Contacts = () => {
  const [contacts, setContacts] = useState([
      
    {
      fullname : "Ahmet Saygın",
      phone_nmber:"12161589"
    },
    {
      fullname : "Yiğit Tilaver",
      phone_nmber:"56458464"
    },
    {
      fullname : "Elif Eylül",
      phone_nmber:"84818"
    },
    {
      fullname : "Abdulhey Çoban",
      phone_nmber:"9584185158459874"
    },
  
  ]);

  useEffect(() => {
    console.log(contacts)
  }, [contacts])

  return (
    <div id='container'>
        <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact = {setContacts} contacts= {contacts}/> 

        
    </div>
  )
}

export default Contacts;