// import { tokenURIABI,tokenContract,tokenId,contract} from "./variable.js"

const Web3 = require('web3');


const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/9f5a10bd11b74208a7aec4094ed91ca5'));

const tokenURIABI = [ { "inputs": [ { "internalType": "uint256", "name": "num", "type": "uint256" } ], "name": "store", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "retrieve", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ];

const tokenContract = "0xe1cD71919BD2Fc41dc74E178D53c290721D11096" // BAYC contract address
const tokenId = 3 // A token we'd like to retrieve its metadata of

const contract = new web3.eth.Contract(tokenURIABI, tokenContract)




async function getNFTMetadata() {
    const result = await contract.methods.tokenURI(tokenId).call()

    console.log(result); // ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/101
}

async function retrieveNFTMetadata() {
    const result = await contract.methods.retrieve().call()

    console.log(result); // ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/101
}


retrieveNFTMetadata();
