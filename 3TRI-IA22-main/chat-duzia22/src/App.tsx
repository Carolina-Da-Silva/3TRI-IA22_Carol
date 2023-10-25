import "./App.css"

export default () => {
  return <>
    <main>
      <div className="message">
        <div className="user">Dunha, aquele!</div>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto dolores, molestiae consequuntur nulla similique et itaque saepe ab enim nemo quae modi rerum sapiente quasi voluptatum assumenda aliquid voluptatem placeat.
        </div>
      </div>
      <div className="message self">
        <div className="user">Dirce, aquela!</div>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto dolores, molestiae consequuntur nulla similique et itaque saepe ab enim nemo quae modi rerum sapiente quasi voluptatum assumenda aliquid voluptatem placeat.
        </div>
      </div>
    </main>
    <div className="input-area">
      <input type="text" placeholder="Digite sua mensagem" />
      <button type="submit">Enviar</button>
    </div>
  </>
}