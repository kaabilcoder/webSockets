import { useEffect, useRef, useState } from "react"

const App = () => {

  const [socket, setSocket] = useState();
  const inputRef = useRef<HTMLInputElement>(null);

  function sendMessage() {
    if (!socket) return;
    //@ts-ignore
    socket.send(inputRef.current.value)
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000");
    setSocket(ws)

    ws.onmessage = (ev) => {
      alert(ev.data)
    }

  }, [])

  return (
    <div>
      <input type="text" placeholder="message..." ref={inputRef} />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
