'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { push } = useRouter();
  const [inputValue, setInputValue] = useState<string>();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/pediction/${inputValue}`);
  };

  return (
    <div>
      <div>
        <h1>Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-black"
          placeholder="Enter your name"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Predict Data</button>
      </form>
    </div>
  );
}
