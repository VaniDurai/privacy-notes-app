// src/components/NoteList.jsx
import { useEffect, useState } from "react";
import { getAllNotes, deleteNote } from "../utils/db";
import { decryptText } from "../utils/CryptoUtils";

export default function NoteList() {
  const [notes, setNotes] = useState([]);

  const loadNotes = async () => {
    const data = await getAllNotes();
    setNotes(data);
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    loadNotes();
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div>
      <h2>Your Notes</h2>
      {notes.map((note) => (
        <div key={note.id}>
          <p>{decryptText(note.content)}</p>
          <button onClick={() => handleDelete(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
