import { useState } from "react"
import "./App.css"
import Input from "./Input"
import Message from "./Message"


export default () => {
  const [mensagens, setMensagem] = useState([
    { self: true, date: "04:20 2020/12/12", user: "Você", text: "lorem ipsum" },
    { self: false, date: "04:21 2020/12/12", user: "Carol", text: "lorem ipsum" },
    { self: false, date: "04:22 2020/12/12", user: "Carol", text: "lorem ipsum" },
    { self: true, date: "04:23 2020/12/12", user: "Você", text: "lorem ipsum" },
  ])

  return <>
    <header>
        <div className="icone">
          <img src="Imagens/pessoa_icone.png" />
        </div>
        <div className="icone_2">
          <img src="Imagens/telefone.png" />
          <img src="Imagens/pontinhos.png" />
        </div>
    </header>
    <main>
      {mensagens.map(({ self, date, user, text }, index) =>
        <Message self={self} date={date} user={user} text={text} key={index} />)
      }
    </main>
    <Input setMensagem={setMensagem} mensagens={mensagens} />
  </>
}