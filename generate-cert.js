const selfsigned = require('selfsigned');
const fs = require('fs');

const attrs = [{ name: 'commonName', value: 'localhost' }];
const pems = selfsigned.generate(attrs, { days: 365 });

fs.writeFileSync('cert.pem', pems.cert);
fs.writeFileSync('key.pem', pems.private);

console.log('Certificates generated successfully.');

/**
 * Ein lokaler HTTPS Server wird mit Node.js erstellt, um eigenen SSL Zertifikat zu verwenden.
 * 
 * http-server -S -C cert.pem -K key.pem -> Command um das Projekt über den lokalen Server laufen zu lassen, da die API Http Server aus Sicherheitsgründen nicht zulässt
 */