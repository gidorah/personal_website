"use client";

import Image from "next/image";
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
      <div className="flex items-center">
        <Image src="/Bender_Rodriguez.png" alt="bender" width={360} height={550} />
        <div className="flex flex-col">
          <strong className="basis">Bender Rodrigez</strong>
          <span>Evil Robot: flex: This class sets the display property of the div to flex. This enables flexbox layout for the div, making its direct children flex items. Flexbox is a powerful CSS layout module that provides an efficient way to distribute space among items in a container, even when their size is unknown or dynamic.</span>
        </div>
      </div>
    </div>
  );
}
