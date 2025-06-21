import CryptoJS from "crypto-js";

const SECRET_KEY = "my-secret-key"; // Use a stronger key in real apps

export function encryptText(text) {
  return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
}

export function decryptText(cipherText) {
  const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
}
