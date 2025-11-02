const hre = require("hardhat");

async function main() {
  // The deployed contract address
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  // Get the contract factory and attach to deployed instance
  const WavePortal = await hre.ethers.getContractFactory("WavePortal");
  const wavePortal = WavePortal.attach(contractAddress);

  console.log("Testing WavePortal at:", contractAddress);
  console.log("----------------------------------------");

  // Test 1: Get initial total waves
  const initialTotal = await wavePortal.getTotalWaves();
  console.log("✓ Initial total waves:", initialTotal.toString());

  // Test 2: Send a wave
  console.log("\nSending a wave...");
  const tx = await wavePortal.wave("Hello from test script!");
  await tx.wait();
  console.log("✓ Transaction mined:", tx.hash);

  // Test 3: Get updated total
  const newTotal = await wavePortal.getTotalWaves();
  console.log("✓ New total waves:", newTotal.toString());

  // Test 4: Get all waves
  const allWaves = await wavePortal.getAllWaves();
  console.log("✓ Total waves stored:", allWaves.length);

  if (allWaves.length > 0) {
    console.log("\nLatest wave:");
    const latest = allWaves[allWaves.length - 1];
    console.log("  - From:", latest.waver);
    console.log("  - Message:", latest.message);
    console.log(
      "  - Timestamp:",
      new Date(Number(latest.timestamp) * 1000).toLocaleString()
    );
  }

  console.log("\n----------------------------------------");
  console.log("All tests passed! ✅");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
