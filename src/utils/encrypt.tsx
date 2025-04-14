import crypto from 'node:crypto'

// Encryption
export default function encrypt(plaintext:string, key:string) {
  //const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));
  // create a random initialization vector
  const iv = crypto.randomBytes(12).toString('base64');

  // create a cipher object
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);

  // update the cipher object with the plaintext to encrypt
  let ciphertext = cipher.update(plaintext, 'utf8', 'base64');

  // finalize the encryption process 
  ciphertext += cipher.final('base64');
  
  // retrieve the authentication tag for the encryption
  const tag = cipher.getAuthTag();
  
  return { ciphertext, iv, tag };
}