import { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8 text-gray-800">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight">
          Hello, Rsbuild + React! 🚀
        </h1>

        <p className="text-lg text-gray-700 max-w-md mx-auto">
          Start building <span className="font-semibold text-blue-500">amazing things</span> with Rsbuild.
        </p>

        <p className="text-xl">
          You’ve clicked <span className="font-semibold">{count}</span> times.
        </p>

        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Increment Count
        </button>
      </section>
    </main>
  );
};

export default App;
