import { openDB } from "idb";

const DB_NAME = "notesDB";
const STORE_NAME = "notes";

export async function getDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
      }
    },
  });
}

export async function saveNote(encryptedText) {
  const db = await getDB();
  await db.add(STORE_NAME, { text: encryptedText });
}

export async function getNotes() {
  const db = await getDB();
  return db.getAll(STORE_NAME);
}

export async function deleteNote(id) {
  const db = await getDB();
  await db.delete(STORE_NAME, id);
}
