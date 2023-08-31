import React, { useState } from 'react';
import './App.css';
import { json } from 'body-parser';

function App() {
  const [jsonData, setJsonData] = useState({});
  const postData = async () => {
    const response = await fetch('/gravar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Olá do frontend!' }),
    });

    const data = await response.json();
    setJsonData(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Exemplo de Requisição POST</h1>
        <button onClick={postData}>Enviar POST</button>
        <div>
          <h2>Resposta do Backend:</h2>
          <pre>{jsonData}</pre>
        </div>
      </header>
    </div>
  );
}

export default App;