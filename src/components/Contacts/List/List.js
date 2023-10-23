import React, { useState } from 'react';



const List = ({contacts}) => {  
  const [filtertext, setFilterText] = useState("");
  
  const OnChangeFilter = (e) => {
    setFilterText(e.target.value);
  };

  const filtered = contacts.filter((item) => {
  
    return Object.keys(item).some((key) => 
      item[key]
      .toString()
      .toLowerCase()
      .includes(filtertext.toLocaleLowerCase())
    );
  });

  // yazılandan da anlayacağın gibi "keys" deki bazı "key" lerin stringe, lowercase çeviriyor.
  
  // console.log("filtered", filtered);


  return (
    <div>
      <input onChange={OnChangeFilter} 
      value={filtertext} 
      placeholder='Filter Contact'/>

      <h3> Principal Members: </h3>

      <ul className="list">
        {filtered.map((contact,i) => (
          <li key={i}> 
          <span> {contact.fullname} </span> 
          <span> {contact.phone_number} </span> 
          </li>
        ))}

      </ul>

      <p> Total Contacts ({filtered.length}) </p>
      
    </div>
  )
}

export default List;