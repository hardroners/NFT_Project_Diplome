// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./Whitelist.sol";

contract ESMEDIPLOME is ERC721, ERC721URIStorage, Whitelist {

    //mapping(uint => string) public ipfsURLs; 

    using Counters for Counters.Counter;

    Counters.Counter public _tokenIdCounter;

    constructor()  ERC721("EsmeDiplome", "ESME") {}

    function create(string memory ipfsURLs) public onlyOwner  {
        //require(isWhitelisted(msg.sender)); // require the msg.sender to be whitelisted
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, ipfsURLs);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function update(uint256 _tokenId,string memory _uri) public onlyOwner {
        _setTokenURI(_tokenId,_uri);
    }


    function tokenURI(uint256 tokenId)
        public
        onlyOwner
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

}
