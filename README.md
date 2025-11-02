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

```bash
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Wave Portal</title>
    <script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/ethers@5.7.2/dist/ethers.umd.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"></script>
  </head>
  <body class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div id="root"></div>
    <script type="text/babel">
      const { useState, useEffect } = React;

      const App = () => {
        const [currentAccount, setCurrentAccount] = useState("");
        const [message, setMessage] = useState("");
        const [waves, setWaves] = useState([]);
        const [contract, setContract] = useState(null);

        const contractABI = [
          {
            anonymous: false,
            inputs: [
              {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: false,
                internalType: "string",
                name: "message",
                type: "string",
              },
              {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
              },
            ],
            name: "NewWave",
            type: "event",
          },
          {
            inputs: [
              {
                internalType: "string",
                name: "_message",
                type: "string",
              },
            ],
            name: "wave",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [],
            name: "getAllWaves",
            outputs: [
              {
                components: [
                  {
                    internalType: "address",
                    name: "waver",
                    type: "address",
                  },
                  {
                    internalType: "string",
                    name: "message",
                    type: "string",
                  },
                  {
                    internalType: "uint256",
                    name: "timestamp",
                    type: "uint256",
                  },
                ],
                internalType: "struct WavePortal.Wave[]",
                name: "",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "getTotalWaves",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalWaves",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            name: "waves",
            outputs: [
              {
                internalType: "address",
                name: "waver",
                type: "address",
              },
              {
                internalType: "string",
                name: "message",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ];

        const contractAddress = "0xa1549763cf55814a942a6212f2b89365e9cefe3e"; // Replace with Hardhat-deployed address

        const connectWallet = async () => {
          try {
            const { ethereum } = window;
            if (!ethereum) {
              alert("Please install MetaMask!");
              return;
            }
            const accounts = await ethereum.request({
              method: "eth_requestAccounts",
            });
            setCurrentAccount(accounts[0]);
          } catch (error) {
            console.error("Error connecting wallet:", error);
            alert("Failed to connect wallet.");
          }
        };

        const initContract = async () => {
          try {
            const { ethereum } = window;
            if (!ethereum) {
              alert("Please install MetaMask!");
              return;
            }
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const waveContract = new ethers.Contract(
              contractAddress,
              contractABI,
              signer
            );
            setContract(waveContract);
            await fetchWaves(waveContract);
          } catch (error) {
            console.error("Error initializing contract:", error);
            alert("Failed to initialize contract.");
          }
        };

        const fetchWaves = async (waveContract) => {
          try {
            const wavesData = await waveContract.getAllWaves();
            const formattedWaves = wavesData.map((wave) => ({
              address: wave.waver,
              message: wave.message,
              timestamp: new Date(
                wave.timestamp.toNumber() * 1000
              ).toLocaleString(),
            }));
            setWaves(formattedWaves);
          } catch (error) {
            console.error("Error fetching waves:", error);
          }
        };

        const sendWave = async () => {
          if (!contract || !message) {
            alert("Contract not initialized or message empty!");
            return;
          }
          try {
            const tx = await contract.wave(message);
            await tx.wait();
            alert("Wave sent!");
            setMessage("");
            await fetchWaves(contract);
          } catch (error) {
            console.error("Error sending wave:", error);
            alert("Failed to send wave.");
          }
        };

        useEffect(() => {
          const initialize = async () => {
            if (window.ethereum) {
              try {
                const accounts = await window.ethereum.request({
                  method: "eth_accounts",
                });
                if (accounts.length > 0) {
                  setCurrentAccount(accounts[0]);
                }
                window.ethereum.on("accountsChanged", (accounts) => {
                  setCurrentAccount(accounts[0] || "");
                });
              } catch (error) {
                console.error("Error checking accounts:", error);
              }
            }
            initContract();
          };
          initialize();
        }, []);

        return (
          <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Wave Portal</h1>
            {!currentAccount ? (
              <button
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            ) : (
              <div>
                <p className="text-sm text-gray-600 mb-4">
                  Connected: {currentAccount.slice(0, 6)}...
                  {currentAccount.slice(-4)}
                </p>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  className="w-full p-2 mb-4 border rounded"
                />
                <button
                  className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                  onClick={sendWave}
                >
                  Send Wave
                </button>
                <h2 className="text-xl font-semibold mt-6 mb-2">Waves</h2>
                <ul className="space-y-2">
                  {waves.map((wave, index) => (
                    <li key={index} className="p-2 bg-gray-100 rounded">
                      <p>
                        <strong>From:</strong> {wave.address.slice(0, 6)}...
                        {wave.address.slice(-4)}
                      </p>
                      <p>
                        <strong>Message:</strong> {wave.message}
                      </p>
                      <p>
                        <strong>Time:</strong> {wave.timestamp}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      };

      ReactDOM.render(<App />, document.getElementById("root"));
    </script>

  </body>
</html>

```

practicle 4 commands

```bash
npm init -y
```

```bash
npm install --save-dev hardhat@2.22.15
```

```bash
npx hardhat init
```

```bash
npx hardhat node
```
