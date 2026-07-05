"use client";

import { useEffect, useState } from "react";

export default function HistoryClient() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(saved);
  }, []);

  return (
    <ul>
      {notes.length === 0 ? (
        <p>No notes</p>
      ) : (
        notes.map((n, i) => <li key={i}>{n}</li>)
      )}
    </ul>
  );
}