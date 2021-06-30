require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe stomach razor noise horse gesture merry fog gentle'; 
let testAccounts = [
"0x7d305cb92395dcbd7c6dfeedfe43fcb9a860a7f9112b17c4becfd0bd50f24e14",
"0x43a5735664322d2a1ea62560d9f478bb8bd9b57940c4c6df1826a53de7f5773f",
"0xb99e0932e65e177f4df2f3e406cf7db053724a83c66016833101da7ee983ae63",
"0x0a1cdaeab92fdf127d5f37c05326d03cb188ddc260c0edf5547c40abc3e1734e",
"0x23451e4f91dccb41f938f1b916017f15063f782f00dd3c7cc8c3437f99668b3d",
"0xea0d7b838c256e83827914cfc7e7a9cf45c88f7cf5dfd6457f7be14181dae0ee",
"0x9d662d89867abb331310bcedca82f25db192bfa0ecf60831208812dbc0007c90",
"0xbab3bd40bd89e01a80f6ef422ae4c6408ef3893bde9611d4d6e91156ec0bdda0",
"0xfca17a027d02f6acd6090bb1f7ba35ec174c853acb5779937b5167cf73caa283",
"0x5155c93b9e1c245164a2c59ebaf655ddf3172e3efe74e9ea932b559fa43e91a0"
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

