# WavePortal 🌊

A decentralized message board built with Solidity and Hardhat where users can send "waves" with messages to the blockchain.

## Quick Start Commands

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Compile Smart Contracts

```bash
npx hardhat compile
```

### 3. Start Local Hardhat Node

```bash
npx hardhat node
```

Keep this terminal running.

### 4. Deploy Contract (in a new terminal)

```bash
npx hardhat run scripts/deploy.js --network localhost
```

### 5. Test the Contract

```bash
npx hardhat run scripts/test-contract.js --network localhost
```

### 6. Start Web Server (in a new terminal)

```bash
python3 -m http.server 8000
```

### 7. Open the UI

Open your browser and navigate to:

```
http://localhost:8000
```

## All npx Hardhat Commands

### Compile Contracts

```bash
npx hardhat compile
```

### Run Local Node

```bash
npx hardhat node
```

### Deploy to Localhost

```bash
npx hardhat run scripts/deploy.js --network localhost
```

### Run Tests

```bash
npx hardhat test
```

### Clean Build Artifacts

```bash
npx hardhat clean
```

### Get Hardhat Help

```bash
npx hardhat help
```

### Run Custom Script

```bash
npx hardhat run scripts/test-contract.js --network localhost
```

## Contract Information

- **Contract Name**: WavePortal
- **Deployed Address**: `0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9`
- **Network**: Localhost (Chain ID: 31337)
- **RPC URL**: `http://127.0.0.1:8545`

## Main Functions

- `wave(string _message)` - Send a wave with a message
- `getAllWaves()` - Get all waves sent to the contract
- `getTotalWaves()` - Get the total count of waves

## MetaMask Setup for Local Network

1. Open MetaMask
2. Add Network Manually:

   - **Network Name**: Hardhat Local
   - **RPC URL**: `http://127.0.0.1:8545`
   - **Chain ID**: `31337`
   - **Currency Symbol**: `ETH`

3. Import Test Account:
   - Private Key: `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`
   - Address: `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`

## Project Structure

```
hardhat-demo/
├── contracts/
│   └── WavePortal.sol          # Main smart contract
├── scripts/
│   ├── deploy.js               # Deployment script
│   └── test-contract.js        # Testing script
├── artifacts/                  # Compiled contracts
├── index.html                  # Web UI
├── hardhat.config.js           # Hardhat configuration
└── package.json                # Dependencies
```

## Tech Stack

- Solidity ^0.8.0
- Hardhat 2.26.5
- Ethers.js v6.13.0
- MetaMask Integration

## Development Workflow

1. **Start Node**: `npx hardhat node` (Terminal 1)
2. **Deploy**: `npx hardhat run scripts/deploy.js --network localhost` (Terminal 2)
3. **Start Server**: `python3 -m http.server 8000` (Terminal 3)
4. **Open Browser**: Navigate to `http://localhost:8000`
5. **Connect MetaMask**: Use the local network and test account
6. **Send Waves**: Interact with the contract through the UI

## Troubleshooting

### Contract Not Found

Make sure the Hardhat node is running and the contract is deployed.

### MetaMask Connection Issues

- Ensure you're on the correct network (Chain ID 31337)
- Try resetting your MetaMask account (Settings > Advanced > Reset Account)

### Transaction Failures

- Check if you have enough ETH in your test account
- Verify the contract address in `index.html` matches the deployed address

## License

MIT
