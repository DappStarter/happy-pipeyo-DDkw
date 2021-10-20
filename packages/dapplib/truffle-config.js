require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strike cruise screen quality hundred light army gentle'; 
let testAccounts = [
"0xde89422ed4e2030db1562b3164f661c2e9983128afd6d2f7ef07a358448715c2",
"0x9216f4c9efe507256b8028755be04beebae5b4078c540955f9c0cd788fd25c8d",
"0xc967c823d82bf45a161755c8c1df8a5a895e3800647573e6c03a1278ece230b6",
"0x61bf6f898fee7ac695e31921b1e972f7143d043e6b4d63ed9cf6e233ab83dcf0",
"0x952fcc88fe853e5ff4a092723ffb201b75c1e03e26876d9e18abd70ef3d74c7f",
"0x21f173cbf869eff778d2b9e9c41c2673f39f89a10f523ffb3b35ac4a0c682e94",
"0x665e55b2a34c92f6df4c35b4ad51e53c1c822e7f5683b9fca20fe631af31d99e",
"0x8f8bbce131bea5adaacda0d8cbd8cfc19cbd60f81315a7f43e7ea84c4996dd20",
"0x3174cb0948440be6bba1b913b5f0e84e802a31682ea300b67060ea1de8d090fc",
"0xf8451b19c6c3dcfa6340528f826fee7032742b07b0ce0d3c2dcec70115125830"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

