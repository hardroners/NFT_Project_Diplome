// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
contract Whitelist {

    address owner;

    mapping(address => bool) whitelistedAddresses;

    constructor() {
      owner = msg.sender;
    }

    modifier onlyOwner() {
      require(msg.sender == owner, "Ownable: caller is not the owner");
      _;
    }

    function isWhitelisted(address _address) public view returns(bool) {
      require(whitelistedAddresses[_address], "Whitelist: You need to be whitelisted");
      return true;
    }

    function addUser(address _addressToWhitelist) public onlyOwner {
      whitelistedAddresses[_addressToWhitelist] = true;
    }

    function verifyUser(address _whitelistedAddress) public view returns(bool) {
      bool userIsWhitelisted = whitelistedAddresses[_whitelistedAddress];
      return userIsWhitelisted;
    }


}