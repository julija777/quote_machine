import './App.scss';
import React, {useState} from 'react'



function App() {
    let quote = "bla bla bla dummy quote";
    let author = "Smart Dummy Author"; 
  return (
    <div className="App">
      <header className="App-header">
      <p>
          " {quote} "
        </p>
        <p>
            - {author}
        </p>
        </header>
    </div>
  );
}

export default App;