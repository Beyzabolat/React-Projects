import { useState } from "react";

function Form({ setContacts }) {
  console.log("Form component rendered");
  const [form, setForm] = useState({
    fullname: "",phone: ""});
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullname || !form.phone) {
      return alert("Lütfen tüm alanları doldurun.");
    }
    setContacts((prevContacts) => [
      ...prevContacts,
      {
        fullname: form.fullname,
        phone: form.phone,
        id: Date.now(),
      },
    ]);
   
    console.log("Yeni kişi eklendi:", form); 
    setForm({ fullname: "", phone: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="fullname"
            placeholder="Tam İsim"
            value={form.fullname}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="phone"
            placeholder="Telefon Numarası"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Kaydet</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
