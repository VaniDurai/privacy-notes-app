import React, { useState, useEffect } from "react";
import { saveNote, getNotes, deleteNote } from "./utils/db";
import { encryptText, decryptText } from "./utils/CryptoUtils";

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    async function fetchNotes() {
      const savedNotes = await getNotes();
      const decrypted = savedNotes.map((note) => ({
        ...note,
        text: decryptText(note.text),
      }));
      setNotes(decrypted);
    }
    fetchNotes();
  }, []);

  const handleSave = async () => {
    const encrypted = encryptText(text);
    await saveNote(encrypted);
    setText("");
    const savedNotes = await getNotes();
    const decrypted = savedNotes.map((note) => ({
      ...note,
      text: decryptText(note.text),
    }));
    setNotes(decrypted);
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    const savedNotes = await getNotes();
    const decrypted = savedNotes.map((note) => ({
      ...note,
      text: decryptText(note.text),
    }));
    setNotes(decrypted);
  };

  return (
    <div>
      <h1>📝 Privacy Notes</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="5"
        placeholder="Write your secure note here..."
      />
      <br />
      <button onClick={handleSave}>Save Note</button>
      <h2>Your Notes:</h2>
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <p>{note.text}</p>
          <button onClick={() => handleDelete(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
