import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState([]);
  const [value, setValue] = useState("");
  function addNewEmail(v) {
    setEmail(email => [...email, v]);
    setValue("");
  }
  function deleteEmail(v) {
    setEmail(email => email.filter(e => e !== v));
  }
  const history = useNavigate();
  /*function hii() {
    history.push('/UserDashboard')
  } */
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100vw", height: "100vh" }}>
      <div style={{ border: "1px solid grey", display: "flex", alignItems: "center" }}>
        {email.map((email, index) => (
          <div key={index} style={{ backgroundColor: "grey", marginRight: 2 }}>
            {email}
            <button onClick={() => deleteEmail(email)}>*</button>
          </div>
        ))}
        <input value={value} onChange={(e) => setValue(e.target.value)} style={{ outline: "none", border: "none" }} />
        <button onClick={() => addNewEmail(value)}>add</button>
      </div>
      {/* <button onClick={() => hii}>click</button> */}
    </div>
  );
}

export default App;
