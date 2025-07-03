import {useState} from 'react';

function App() {
const [name, setName] = useState('Beyza');
const [age, setAge] = useState(25);
const [friends, setFriends] = useState(["tayfur", "selmoş", "senoş", "umut", "kayaci"]);
const [adres, setAdres] = useState({
  city: "İstanbul",
  district: "Kadıköy",
  street: "Bağdat Caddesi",
  number: "123"});
  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>Yaşın: {age}</h2>
      <p>This is a simple example of how to manage state in a React application.</p>
      <button onClick={()=>setName("Beyzoş")}>Tıkla</button> 
      <button onClick={()=>setAge("18")}>Beni gençleştirmek için Tıkla</button>
      <hr/>
      <h3>Arkadaşların:</h3>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
      <button onClick={() => setFriends([...friends, "Yeni Arkadaş"])}>Yeni Arkadaş Ekle</button>
      <button onClick={() => setFriends(friends.filter((friend, index) => index !== 0))}>İlk Arkadaşı Sil</button>
      <button onClick={() => setFriends([])}>Tüm Arkadaşları Sil</button>
      <hr/>
     <br></br>
      <h3>Adres Bilgileri:</h3>
      <p>Şehir: {adres.city}</p>
      <p>İlçe: {adres.district}</p>
      <p>Sokak: {adres.street}</p>
      <p>Numara: {adres.number}</p>
      <button onClick={() => setAdres({...adres, city: "Ankara"})}>Şehri Değiştir</button>
      <button onClick={() => setAdres({...adres, district: "Çankaya"})}>İlçeyi Değiştir</button>
      <button onClick={() => setAdres({...adres, street: "Atatürk Bulvarı"})}>Sokak Değiştir</button>
      <button onClick={() => setAdres({...adres, number: "456"})}>Numarayı Değiştir</button>
      <button onClick={() => setAdres({city: "İstanbul", district: "Kadıköy", street: "Bağdat Caddesi", number: "123"})}>Adres Bilgilerini Sıfırla</button>
      <hr/>
      <h3>Adres Bilgilerini Güncelle</h3>
      <input
        type="text"
        placeholder="Şehir"
        value={adres.city}
        onChange={(e) => setAdres({...adres, city: e.target.value})}
      />
    </div>
  );
}

export default App;
