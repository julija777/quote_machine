import React, {useState} from 'react'
import './App.scss';



function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState();

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
        <div id="quote-box">
      <p id="text">
          " {quote} "
        </p>
        <p id="author">
            - {author}
        </p>
            <button id="new-quote" onClick={() => changeQuote()}>Get Random Quote</button>
            <a id="tweet-quote" href="https://twitter.com/intent/tweet">Tweet</a>
        </div>
        </header>
    </div>
  );
}

export default App;