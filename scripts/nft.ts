import { ethers } from "hardhat";

async function main() {
  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();

  await nft.deployed();

  console.log(`Your Contract is deployed to: ${nft.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// Contract Address =  0x086DEF9b8939367c2A5A0C0b979C849539aEF001
// Mint TxHash = 0x687584795a08d84f23ece01e157e7a9b6476b9773dda898b768bd0bcacbf6b81
