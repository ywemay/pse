# Crypto

Encrypt to file

```js
const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'aes-256-ctr'; // Encryption algorithm
const password = 'your_password'; // Replace with a strong password
const inputFilePath = 'input.txt'; // Path to the file to encrypt
const outputFilePath = 'output.enc'; // Path to save the encrypted file

// Derive a key and initialization vector (IV) from the password
function deriveKeyAndIV(password, salt) {
  const key = crypto.scryptSync(password, salt, 32); // 256-bit key
  const iv = crypto.scryptSync(password, salt, 16); // 128-bit IV
  return { key, iv };
}

// Encrypt the file
function encryptFile(inputFilePath, outputFilePath, password) {
  const salt = crypto.randomBytes(16); // Generate a random salt
  const { key, iv } = deriveKeyAndIV(password, salt);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const input = fs.createReadStream(inputFilePath);
  const output = fs.createWriteStream(outputFilePath);

  output.write(salt); // Write the salt to the beginning of the output file
  input.pipe(cipher).pipe(output);

  output.on('finish', () => {
    console.log('File encrypted successfully.');
  });
}

encryptFile(inputFilePath, outputFilePath, password);
```

## Decrypt from file

```js
// Decrypt the file
function decryptFile(inputFilePath, outputFilePath, password) {
  const input = fs.createReadStream(inputFilePath);
  const salt = Buffer.alloc(16);
  input.read(salt.length); // Read the salt from the beginning of the input file
  const { key, iv } = deriveKeyAndIV(password, salt);
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  const output = fs.createWriteStream(outputFilePath);

  input.pipe(decipher).pipe(output);

  output.on('finish', ()success);
}

decryptFile(outputFilePath, 'decrypted.txt', password);

```

## Encrypt decrypt string

```js
const crypto = require('crypto');

// Encryption
function encrypt(text, key, iv) {
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Decryption
function decrypt(encryptedText, key, iv) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Generate a secure random key and IV
const key = crypto.randomBytes(32).toString('hex'); // 256-bit key
const iv = crypto.randomBytes(16).toString('hex'); // 128-bit IV

// Example usage
const text = 'This is a secret message.';
const encryptedText = encrypt(text, key, iv);
const decryptedText = decrypt(encryptedText, key, iv);

console.log('Original text:', text);
console.log('Encrypted text:', encryptedText);
console.log('Decrypted text:', decryptedText);
console.log('Key:', key);
console.log('IV:', iv);
```