// import { tokenURIABI,tokenContract,tokenId,contract} from "./variable.js"

const Web3 = require('web3');


const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/9f5a10bd11b74208a7aec4094ed91ca5'));

const tokenURIABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const tokenContract = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d" // BAYC contract address
const tokenId = 101 // A token we'd like to retrieve its metadata of

const contract = new web3.eth.Contract(tokenURIABI, tokenContract)




async function getNFTMetadata() {
    const result = await contract.methods.tokenURI(tokenId).call()

    console.log(result); // ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/101
}

getNFTMetadata()
