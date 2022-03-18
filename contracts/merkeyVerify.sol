//SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract MerkleValid {
    bytes32 public root =
        0x44dcdccdfb9985a18f8c99f0d481e35452af09f86b319e4b14f9f8c066fe00f4;

    mapping(address => bool) TokenClaimed;

    function checkValid(
        bytes32[] calldata _merkleProof,
        uint256 _itemId,
        uint256 _amount
    ) public {
        require(!TokenClaimed[msg.sender], "Address has already claimed");
        bytes32 leaf = keccak256(
            abi.encodePacked(msg.sender, _itemId, _amount)
        );
        require(
            MerkleProof.verify(_merkleProof, root, leaf),
            "Incorrect proof"
        );
        // Mint token
        // _mint(msg.sender, 100 * 10**18);

        // Mark address has claimed
        TokenClaimed[msg.sender] = true;
    }
}
