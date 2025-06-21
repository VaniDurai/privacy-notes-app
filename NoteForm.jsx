// src/components/NoteForm.jsx
import { useState } from "react";
import { encryptText } from "../utils/CryptoUtils";
import { saveNote } from "../utils/db";

export default function NoteForm({ onSave }) {
  const [text, setText] = useState("");

  const handleSave = async () => {
    const encrypted = encryptText(text);
    await saveNote({ content: encrypted });
    setText("");
    onSave();
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
