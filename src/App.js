import React, {useState} from 'react'
import './App.scss';



function App() {
  const [quote, setQuote] = useState("bla bla bla this is a quote")
  const [author, setAuthor] = useState("Smart Fake Author")

  const changeQuote = () => {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
      setQuote(data.content)
      setAuthor(data.author)
    })
  }
  


  return (
    <div className="App">
      <header className="App-header">
      <p>
          " {quote} "
        </p>
        <p>
            - {author}
        </p>
            <button onClick={() => changeQuote()}>Get Random Quote</button>
        </header>
    </div>
  );
}

export default App;