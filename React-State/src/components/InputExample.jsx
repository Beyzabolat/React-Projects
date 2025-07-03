import { useState } from 'react';

function InputExample() {
  // 1. Form elemanları için tek bir state objesi kullanalım.
  const [form, setForm] = useState({ name: '', surname: '' });

  // 2. Tüm input'lar için tek ve dinamik bir onChange fonksiyonu yazalım.
  const onChangeInput = (event) => {
    // [event.target.name] sayesinde hangi input değiştiyse
    // o input'un "name" attribute'una göre state'i güncelliyoruz.
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h3>Lütfen Adınızı Girin</h3>
      {/* 3. Input'lara "name" attribute'u ekliyoruz. Bu, state anahtarlarıyla eşleşmeli. */}
      <input
        name="name" // <-- Bu çok önemli!
        value={form.name}
        placeholder="Ad..."
        onChange={onChangeInput}
      />
      <p>Adınız: {form.name}</p>

      <br />

      <h3>Lütfen Soyadınızı Girin</h3>
      <input
        name="surname" // <-- Bu çok önemli!
        value={form.surname}
        placeholder="Soyad..."
        onChange={onChangeInput}
      />
      <p>Soyadınız: {form.surname}</p>

      <hr />

      <h4>
        Girilen Tam Ad: {form.name} {form.surname}
      </h4>
    </div>
  );
}

export default InputExample;