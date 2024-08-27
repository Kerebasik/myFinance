import { Web3 } from 'web3';


class CryptoService {
    private web3Instance

    constructor() {
        this.web3Instance = new Web3('https://eth.llamarpc.com');
    }



}