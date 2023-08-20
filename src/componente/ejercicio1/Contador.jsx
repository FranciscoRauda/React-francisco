import React, { useRef } from 'react';


function App() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    updateUI();
  };

  const decrement = () => {
    countRef.current -= 1;
    updateUI();
  };

  const updateUI = () => {
    document.getElementById('count-value').textContent = countRef.current;
  };

  return (
    <div className="App">
      <h1>Contador</h1>
      <p>Valor: <span id="count-value">{countRef.current}</span></p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default App;
