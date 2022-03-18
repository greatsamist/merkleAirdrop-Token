const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");

async function main() {
  const AccHolder = "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199";
  const AccSigner = await ethers.getSigner(AccHolder);

  const Contract = await ethers.getContractFactory("MerkleValid");
  const deployContract = await Contract.deploy();
  await deployContract.deployed();

  console.log("DeployedContractAt:", deployContract.address);

  await deployContract.connect(AccSigner).checkValid([], 1, 100);
  console.log("token sent successful");

  //0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0

  // console.log("Sleeping.....");
  // // Wait for etherscan to notice that the contract has been deployed
  // await sleep(50000);

  // // Verify the contract after deploying
  // await hre.run("verify:verify", {
  //   address: deployContract.address,
  //   constructorArguments: [],
  // });

  console.log("done");

  // function sleep(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
