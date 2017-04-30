const rl = require('readline-sync')

const UNICODE_LENGTH = 65536

function encode (key, msg) {
  const enc = []
  let c

  for (let i = 0; i < msg.length; i++) {
    c = String.fromCharCode((msg.charCodeAt(i) + key) % UNICODE_LENGTH)
    enc.push(c)
  }

  return enc.join('')
}

function decode (key, msg) {
  const dec = []
  let aux

  for (let i = 0; i < msg.length; i++) {
    aux = msg.charCodeAt(i) - key
    if (aux < 0) aux = UNICODE_LENGTH + aux
    c  = String.fromCharCode(aux)
    dec.push(c)
  }

  return dec.join('')
}

let key = Number(rl.question('Llave: '))
let msg = rl.question('Mensaje: ')

let enc  = encode(key, msg)
console.log('Mensaje encriptado: ' + enc)

let dec = decode(key, enc)
console.log('Mensaje desenciptado: ' + dec)
