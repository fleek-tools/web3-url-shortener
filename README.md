# Web3 URL Shortener

A fully decentralized URL-shortening service built with Next.js, Ethereum smart contracts, and Fleek’s edge-optimized hosting. This project demonstrates how to create a censorship-resistant, transparent, and trustless URL shortener on the blockchain, ensuring your shortened links remain accessible and verifiable by anyone.

## Table of Contents

- [Why a Web3 URL Shortener?](#why-a-web3-url-shortener)
- [Key Benefits](#key-benefits)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
  - [1. Clone and Install](#1-clone-and-install)
  - [2. Configure Environment](#2-configure-environment)
  - [3. Run Local Development Server](#3-run-local-development-server)
  - [4. Deploy Smart Contract](#4-deploy-smart-contract)
  - [5. Integration and Edge Deployment (Fleek)](#5-integration-and-edge-deployment-fleek)
- [Project Structure](#project-structure)
- [Smart Contract](#smart-contract)
- [Next.js Integration](#nextjs-integration)
- [Redirection Flow](#redirection-flow)
- [Deployment with Fleek](#deployment-with-fleek)
- [Extending the Project](#extending-the-project)
- [License](#license)

## Why a Web3 URL Shortener?

Traditional URL shorteners rely on centralized servers, making them vulnerable to censorship, control, and single points of failure. A Web3-driven URL shortener ensures that once you store a link mapping on the blockchain, it’s there permanently and can be accessed without any central authority overriding or censoring the data.

## Key Benefits

- **Decentralization:** URLs are stored on a blockchain, ensuring that no single entity can remove or alter your content.
- **Censorship Resistance:** Without a central authority, arbitrary censorship becomes impossible.
- **Transparency:** Anyone can verify link mappings on-chain, ensuring trust and credibility.

## Prerequisites

You’ll need the following tools and knowledge:

- **Frontend Skills:** Familiarity with React or Next.js.
- **Node.js & npm:** Make sure they’re installed on your system.
- **Fleek Account & CLI:** Sign up at [Fleek](https://app.fleek.xyz/) and install the [Fleek CLI](https://fleek.xyz/docs/cli/).
- **Reown Project:** Create a project at [Reown](https://reown.com/).
- **Test Crypto Wallet:** For contract interactions (e.g. MetaMask).
- **Web3 Basics:** Understanding of Ethereum smart contracts and blockchain fundamentals.

## Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/tobySolutions/shortener.git
cd shortener
npm install
```

### 2. Configure Environment

Create a `.env` file in the root directory and populate it with your contract address and RPC URL:

```bash
NEXT_PUBLIC_CONTRACT_ADDRESS=0x2729D62B3cde6fd2263dF5e3c6509F87C6C05892
NEXT_PUBLIC_RPC_URL={{YOUR-ARBITRUM-SEPOLIA-RPC-URL}}
```

Be sure to replace `{{YOUR-ARBITRUM-SEPOLIA-RPC-URL}}` with your actual RPC endpoint.

### 3. Run Local Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

### 4. Deploy Smart Contract

The included `UrlShortener` contract is deployed on the Arbitrum Sepolia testnet. If you need to deploy your own:

- Compile and deploy using Hardhat or Foundry.
- Update `NEXT_PUBLIC_CONTRACT_ADDRESS` with your newly deployed contract address.
- Ensure you have test ETH from the [Arbitrum Sepolia Faucet](https://www.alchemy.com/faucets/arbitrum-sepolia).

### 5. Integration and Edge Deployment (Fleek)

- Log into Fleek:  
  ```bash
  fleek login
  ```
- Build the project for Fleek:
  ```bash
  npx fleek-next build
  ```
- Deploy with Fleek:
  ```bash
  fleek functions deploy --noBundle --name web3-url-shortener-next-js --path .fleek/dist/index.js --envFile .env
  ```

After deployment, Fleek will provide a URL to access your live, edge-optimized application.

## Project Structure

```
shortener/
  ├─ src/
  │  ├─ pages/
  │  │  ├─ index.js          # Home page with UI for shortening URLs
  │  │  ├─ [shortCode].js    # Dynamic route for retrieving/redirecting
  │  │  └─ _app.js           # Custom app configuration
  │  ├─ lib/
  │  │  ├─ contract.js       # Contract instance and helpers
  │  │  ├─ providers.js      # Web3/Wagmi/RainbowKit providers
  │  │  ├─ Web3Providers.jsx # Actual provider components (client-only)
  │  │  └─ URLShortenerApp.jsx # Main client-side logic component
  │  ├─ abi/
  │  │  └─ URLShortener.json # Contract ABI
  │  ├─ styles/
  │  │  └─ globals.css
  │  └─ ...
  ├─ smart-contract/
  │  ├─ UrlShortener.sol
  │  └─ ...
  ├─ .env
  ├─ tailwind.config.js
  └─ package.json
```

## Smart Contract

**UrlShortener.sol**:

```solidity
pragma solidity ^0.8.17;

contract UrlShortener {
    mapping(string => string) private shortToLong;
    event URLShortened(string indexed shortCode, string longUrl);

    function setURL(string calldata shortCode, string calldata longUrl) external {
        require(bytes(shortCode).length > 0, "Short code cannot be empty");
        require(bytes(longUrl).length > 0, "Long URL cannot be empty");
        
        shortToLong[shortCode] = longUrl;
        emit URLShortened(shortCode, longUrl);
    }

    function getURL(string calldata shortCode) external view returns (string memory) {
        return shortToLong[shortCode];
    }
}
```

This contract maps a short code to a long URL, allowing secure on-chain storage and retrieval.

## Next.js Integration

- **`pages/index.js`**: A UI for users to connect their wallet, provide a short code and a long URL, and submit it to the smart contract.
- **`[shortCode].js`**: Dynamic Next.js route that resolves the short code by querying the smart contract and then redirects users to the target URL.

## Redirection Flow

When a user visits `https://yourdomain.com/abc123`, the `[shortCode].js` page:

1. Fetches the long URL from the contract.
2. If found, redirects the user to the long URL.
3. If not found, shows an error page.

## Deployment with Fleek

Fleek handles edge deployment, CDN, and serverless functions. Ensure you have the Fleek CLI and run:

```bash
npx fleek-next build
fleek functions deploy --noBundle --name web3-url-shortener-next-js --path .fleek/dist/index.js --envFile .env
```

This provides you with a live, immutable URL for your decentralized app.

## Extending the Project

- **Analytics:** Integrate contract events or subgraphs to track usage.
- **Custom UI/UX:** Enhance design, allow custom short codes, and track click counts.
- **Multiple Chains:** Expand to multiple EVM-compatible blockchains.
- **Storage Variations:** Store metadata on IPFS or integrate other decentralized storage solutions.

## License

This project is provided under the [MIT License](LICENSE).

---

**Original Article:** [Building a Web3 URL Shortener with Next.js on Fleek](https://dev.to/fleek/building-a-web3-url-shortener-with-nextjs-on-fleek-hbb)  
**Author:** [@tobySolutions](https://github.com/tobySolutions)  

## Learn More

- [Fleek CLI Docs](https://fleek.xyz/docs/cli/)
- [Fleek Function Docs](https://fleek.xyz/docs/cli/functions/)
- [Fleek Next Docs](https://fleek.xyz/docs/cli/functions/)
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.