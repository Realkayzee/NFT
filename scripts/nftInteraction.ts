import { ethers } from "hardhat";

async function main() {
  const NFT = await ethers.getContractAt("NFT", "0x086DEF9b8939367c2A5A0C0b979C849539aEF001");

  await NFT.safeMint("0x924843c0c1105b542c7e637605f95F40FD07b4B0");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});