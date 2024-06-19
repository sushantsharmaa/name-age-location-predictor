'use client';

import { useState, FormEvent } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState<string>();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Predict Data</button>
      </form>
    </div>
  );
}
