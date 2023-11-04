interface Props {
    setMensagem: any
    mensagens: any
  }
  
  export default (props: Props) => {
    const { setMensagem, mensagens } = props;
  
    function onClick() {
      const novaListaDeMensagens = [
        ...mensagens,
        { self: false, date: "04:23 2020/12/12", user: "Dirce", text: "lorem ipsum 22" }
      ]
      setMensagem(novaListaDeMensagens)
    }
  
    return <>
      <div className="input-area">
        <textarea placeholder="Digite sua mensagem"></textarea>
        <button onClick={onClick} type="submit">Enviar</button>
      </div>
    </>
  }