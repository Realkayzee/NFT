import { ethers } from "hardhat";

async function main() {
  const NFT = await ethers.getContractAt("NFT", "0x086DEF9b8939367c2A5A0C0b979C849539aEF001");

  await NFT.safeMint("0x85f20a6924A61904AB44243C7e2c771B3bE46734");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});