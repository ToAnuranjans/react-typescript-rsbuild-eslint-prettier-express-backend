import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild. {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
    </div>
  );
};

export default App;
