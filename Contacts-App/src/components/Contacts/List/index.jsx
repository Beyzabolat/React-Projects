import React from 'react'

function List({contacts}) {
  const [filter, setFilter] = React.useState("");
   const filteredContacts = contacts.filter((item) =>
     Object.keys(item).some((key) =>
       item[key]
         .toString()
         .toLowerCase()
         .includes(filter.toLowerCase())
     )
   );
  return (
    <div className="list-container">
        <input onChange={(e)=>setFilter(e.target.value)} value={filter} type="text" placeholder="Arama..." />
        <h2>Kişi Listesi</h2>
        <ul>
            {filteredContacts.map((contact) => (
                <li key={contact.id}>
                    <span>{contact.fullname} </span>
                    <span>{contact.phone}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default List