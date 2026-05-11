import { HashMap } from './script.js';

const map = new HashMap();

console.log('=== SET ===');

map.set('nombre', 'Juan');
map.set('edad', 25);
map.set('pais', 'Perú');

console.log(map);

console.log('=== GET ===');

console.log(map.get('nombre'));
console.log(map.get('edad'));
console.log(map.get('inexistente'));

console.log('=== HAS ===');

console.log(map.has('pais'));
console.log(map.has('ciudad'));

console.log('=== UPDATE ===');

map.set('nombre', 'Carlos');

console.log(map.get('nombre'));

console.log('=== REMOVE ===');

console.log(map.remove('edad'));
console.log(map.get('edad'));
console.log(map.remove('edad'));

console.log('=== LENGTH ===');

console.log(map.length());

console.log('=== KEYS ===');

console.log(map.keys());

console.log('=== VALUES ===');

console.log(map.values());

console.log('=== ENTRIES ===');

console.log(map.entries());

console.log('=== CLEAR ===');

map.clear();

console.log(map);

console.log(map.length());
