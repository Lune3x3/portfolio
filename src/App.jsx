import { useState } from 'react'

import './App.css'

function App() {
  const header = ""
  const [text, setText]  = useState([
    "Hello world", 
    "🟦",
    "fndjakflna \ndnfjkdaslfdsa"
  ]);

  return (
    <div>
      {text.map(e => {
        return (
          <div className='entry'>
            {e}
          </div>
        )
      })}

      <div>
        root@kali:~$ 
        <input
          type = "text"
          id = "textEnter"
          onKeyDown = {(e) => {
            if (e.key === "Enter") {
              console.log(document.getElementById("textEnter").value);
              setText([...text,"root@kali:~$ " + document.getElementById("textEnter").value]);
              document.getElementById("textEnter").value = "";
              document.getElementById("textEnter").scrollIntoView({behavior: "smooth"});
            }
          }}
        />
      </div>
    </div>
  )
}

export default App
