// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./Whitelist.sol";

contract NFT is ERC721,Whitelist {
    struct Collection {
        string name;
        address owner;
    }
    struct Metadata {
        string name;
        string firstName;
        string speciality;
    }
    mapping(uint256 => Metadata) public metadatas;
    mapping(string => Collection) public collections;

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor()  ERC721("EsmeDiplome", "ESME") {}

    function createCollection(string memory collection) public {
        require(collections[collection].owner == address(0) || msg.sender == owner);
        collections[collection].owner = msg.sender;
    }

    function create(string memory collection, string memory name, string memory firstName, string memory speciality) public onlyOwner  {
        require(collections[collection].owner == msg.sender);
        //require(isWhitelisted(msg.sender)); // require the msg.sender to be whitelisted
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _mint(msg.sender, tokenId);
        metadatas[tokenId].name = name;
        metadatas[tokenId].firstName = firstName;
        metadatas[tokenId].speciality = speciality;
    }

    function deleteNFT(uint256 tokenId) public onlyOwner {
        //require(isWhitelisted(msg.sender)); // require the msg.sender to be whitelisted
        require(msg.sender == ownerOf(tokenId));
        _burn(tokenId);
        delete metadatas[tokenId];
    }

}
