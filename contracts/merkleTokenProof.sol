//SPDX-License-Identifier: Unlicense
pragma solidity >=0.8.0 <0.9.0;

// import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MerkleVerify is ERC20 {
    constructor() ERC20("merkleToken", "MKT") {}

    function mint() public {
        _mint(msg.sender, 100 * 10**18);
    }

    // function checkValid(
    //     bytes32[] calldata _merkleProof,
    //     uint256 _itemId,
    //     uint256 _amount 
    // ) public {
    //     require(!TokenClaimed[msg.sender], "Address has already claimed");
    //     bytes32 leaf = keccak256(
    //         abi.encodePacked(msg.sender, _itemId, _amount)
    //     );
    //     require(
    //         MerkleProof.verify(_merkleProof, root, leaf),
    //         "Incorrect proof"
    //     );
    //     // Mint token
    //     _mint(msg.sender, 100 * 10**18);

    //     // Mark address has claimed
    //     TokenClaimed[msg.sender] = true;
    // }
}
