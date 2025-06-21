# privacy-notes-app
# 🛡️ Privacy-Focused Notes App

A minimal, offline-first note-taking app built with React, IndexedDB, and CryptoJS. Your notes are encrypted on your device and never leave your browser.

## 🚀 Features

- ✍️ Create, edit, and delete notes
- 🔒 AES encryption for privacy using `crypto-js`
- 💾 Offline storage with IndexedDB
- 🔍 Search notes by title (content is encrypted)
- 🧩 Lightweight and no backend required

## 🛠️ Built With

- [React](https://reactjs.org/)
- [CryptoJS](https://www.npmjs.com/package/crypto-js)
- [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [Tailwind CSS](https://tailwindcss.com/)

## 📂 Project Structure

privacy-notes-app/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── NoteForm.jsx
│ │ └── NoteList.jsx
│ ├── utils/
│ │ ├── cryptoUtils.js
│ │ └── indexedDB.js
│ ├── App.jsx
│ ├── index.js
│ └── styles.css

🔐 Encryption Details
Notes are encrypted with AES (Advanced Encryption Standard) using CryptoJS.
Only the note title is stored in plaintext for searchability.
The app is fully client-side — your notes never leave your browser.

📦 Future Enhancements
Cloud sync (optional + encrypted)
Password-protected notes
Dark mode
Export/import notes

Visit http://localhost:3000 in your browser.
