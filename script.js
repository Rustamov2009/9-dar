
let sozlar = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'gul'];

    
let n_harfi_ishtirok_etgan_sozlar = [];
let n_etmagan_sozlar = [];

for (let i = 0; i < sozlar.length; i++) {
    if (sozlar[i].includes('n')) {
        n_harfi_ishtirok_etgan_sozlar.push(sozlar[i]);
    } else {
        n_etmagan_sozlar.push(sozlar[i]);
    }
}

// Log the results to the console
console.log(n_harfi_ishtirok_etgan_sozlar.length + ' ta so\'z \'n\' harfi ishtirok etgan so\'zlar: ' + n_harfi_ishtirok_etgan_sozlar.join(', '));
console.log(n_etmagan_sozlar.length + ' ta so\'z \'n\' harfi ishtirok etmagan so\'zlar: ' + n_etmagan_sozlar.join(', '));