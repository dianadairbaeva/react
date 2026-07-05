"use client";

import { useState } from "react";
import useToggle from "../hooks/useToggle";
import useLocalStorage from "../hooks/useLocalStorage";
import useDebounce from "../hooks/useDebounce";
import useFetch from "../hooks/useFetch";
import useWindowSize from "../hooks/useWindowSize";

export default function NotesApp() {
  const [dark, toggleTheme] = useToggle(false);
  const [notes, setNotes] = useLocalStorage("notes", []);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);
  const { width, height } = useWindowSize();
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  const addNote = () => {
    setNotes([...notes, text]);
    setText("");
  };

  const filtered = notes.filter(n =>
    n.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div style={{
      background: dark ? "#111" : "#fff",
      color: dark ? "#fff" : "#000",
      padding: 20,
      borderRadius: 10
    }}>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <h3>Notes</h3>

      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addNote}>Add</button>

      <h4>Search</h4>
      <input value={search} onChange={e => setSearch(e.target.value)} />

      <ul>
        {filtered.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>

      <h3>Posts</h3>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {data.map(p => (
        <p key={p.id}>{p.title}</p>
      ))}

      <h3>Window</h3>
      <p>{width} x {height}</p>
      <p>{width < 600 ? "Mobile" : "Desktop/Tablet"}</p>
    </div>
  );
}