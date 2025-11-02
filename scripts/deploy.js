const hre = require("hardhat");

async function main() {
  const WavePortal = await hre.ethers.getContractFactory("WavePortal");
  const wavePortal = await WavePortal.deploy();

  await wavePortal.waitForDeployment();

  const address = await wavePortal.getAddress();
  console.log(`WavePortal deployed to: ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
