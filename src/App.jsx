import { useState } from 'react'

import './App.css'

const handelFunction = (t) => {
  const lex = t.split(" ");
  console.log(t);
  if (lex[0] == "clear") {
    return (-1);
  }
  else if (lex[0] == "help") {
    return ([
      "[cat] - concatinates files and prints into shell",
      "[ls] - lists files and directories",
      "[clear] - clears shell of all previous lines",

    ])
  }
  else {
    return ([
      "root@kali:~$ " + t, 
      lex[0] + " is not a function",
      "type [help] for a list of all functions"
    ]);
  }
}

function App() {
  const [text, setText]  = useState([
`
. . . . . . . . . . . . . . 
                        . . , ; : c c c , . 
                    . . . . . . ' ' ' ; l x O . 
. . . . . ' ' ' ' . . . . . . . . . . , : l d ; 
                      . ' ; ; ; : : : ; , , . x , 
            . . ' ' ' .                         0 X x o c : , .     . . . 
    . . . .                                 , O N k c ; , ; c o k O d c ' , . 
  .                                       O M o                       ' : d d o . 
                                          d M c                               : O O ; 
                                          0 M .                                   . : o . 
                                          ; W d 
                                            ; X O , 
                                                , d 0 O d l c ; , . . 
                                                        . . ' , ; : c d O O d : : , . 
                                                                          . : d ; . ' : ; . 
                                                                                ' d ,     . ' 
                                                                                    ; l       . . 
                                                                                      . o 
                                                                                          c 
                                                                                          . ' 
                                                                                            . 
`,
"============================================",
"Enter [help] to see a list of commands",
"============================================"
  ]);

  return (
    <div>
      {text.map(e => {
        return (
          <div className = "entry">
            {e}
          </div>
        )
      })}

      <div className = "input">
        root@kali:~$ 
        <input
          className = "input"
          type = "text"
          id = "textEnter"
          onKeyDown = {(e) => {
            if (e.key === "Enter") {
              let ret = document.getElementById("textEnter").value;

              document.getElementById("textEnter").value = "";

              let render = handelFunction(ret);
              console.log(render);
              if (render == -1) {
                text = setText([]);
              }
              else {
                setText([...text, ...render]);
              }


              document.getElementById("textEnter").scrollIntoView({behavior: "smooth", block: "end"});
            }
          }}
        />
      </div>
    </div>
  )
}

export default App
