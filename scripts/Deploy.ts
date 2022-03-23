import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");

async function main() {
  const Contract = await ethers.getContractFactory("MerkleVerify");
  const deployContract = await Contract.deploy();
  await deployContract.deployed();

  console.log("DeployedContractAt:", deployContract.address);

  await deployContract.checkValid([], 1, 100);
  console.log("token sent successful");

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(50000);

  // Verify the contract after deploying
  //@ts-ignore
  await hre.run("verify:verify", {
    address: deployContract.address,
    constructorArguments: [],
  });

  console.log("done");

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
