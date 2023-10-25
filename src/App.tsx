import "./App.css"
import InputArea from "./InputArea"
import Message from "./Message"

export default () => {
  return <>
    <main>
      <Message self={true} date="16:42 2023/10/25" user="Dunha" text="lorem ipsun" />
      <Message self={false} date="17:43 2022/10/25" user="Dunha" text="lorem ipsun" />
      <Message self={false} date="18:44 2021/10/25" user="Dunha" text="lorem ipsun" />
      <Message self={true} date="19:45 2020/10/25" user="Dunha" text="lorem ipsun" />
    </main>
    <InputArea />
  </>
}