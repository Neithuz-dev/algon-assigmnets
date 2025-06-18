const crypto = require('crypto');

function block(prefix) {
    const data ='neith ->bis=>200';
  for (let nonce = 0; nonce < 10000; nonce++) {
    let hash = crypto.createHash('sha256').update("data" + nonce).digest('hex');
    if (hash.startsWith(prefix)) {
      console.log( hash);
      console.log(nonce);
      return { data,hash, nonce };
    } 
  }
  return null;
}
const res = block('000');
console.log(res);