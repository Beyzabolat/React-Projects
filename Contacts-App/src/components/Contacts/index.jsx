// Contacts.js

import { useState,useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );
  
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]); 

  return (
    <div id="container">
      {/* BAŞLIK EKLEDİK */}
      <h1 className="app-title">Rehber</h1>

      {/* BU SIRALAMAYI DEĞİŞTİRMİYORUZ */}
      <List contacts={contacts} />
      <Form setContacts={setContacts} />
    </div>
  );
}

export default Contacts;