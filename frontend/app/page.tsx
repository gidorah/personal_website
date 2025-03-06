"use client";

import { useState } from "react";

function Header({ title, text, hidden = false }: { title: string, text?: string, hidden?: boolean }) {
  if (hidden) return null

  return <h1>{title} {text}</h1>
}

export default function HomePage() {
  const names = ["onur", "dilruba", "mercimek"];

  const [likes, setLikes] = useState(0);
  const [doubleLikes, setDoubleLikes] = useState(likes);

  function handleClick() {
    setLikes(likes + 1);
    setDoubleLikes(likes * 2)
  }

  return (
    <div id="app">
      <div>
        <Header title="Next.js" text="dude, where is my react?" />
        <ul>
          {names.map(name => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <button onClick={handleClick}>Like({likes})</button>
        <button onClick={handleClick}>Like({doubleLikes})</button>
      </div>
    </div>
  );
}
