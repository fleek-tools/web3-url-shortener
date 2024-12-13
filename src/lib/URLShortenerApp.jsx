"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useAccount, useWalletClient, useChainId } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { getSignerContract } from "./contract";

export default function URLShortenerApp() {
  const [shortCode, setShortCode] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [status, setStatus] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [copySuccess, setCopySuccess] = useState("");

  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const chainId = useChainId();

  const [signer, setSigner] = useState(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.ethereum &&
      isConnected &&
      walletClient
    ) {
      console.log("Setting up ethers provider...");
      const ethersProvider = new ethers.BrowserProvider(window.ethereum);
      ethersProvider
        .getSigner()
        .then((newSigner) => {
          console.log("Signer obtained:", newSigner);
          setSigner(newSigner);
        })
        .catch((error) => {
          console.error("Error getting signer:", error);
          setSigner(null);
        });
    } else {
      console.log("Conditions not met for signer setup:", {
        windowExists: typeof window !== "undefined",
        ethereumExists: !!window?.ethereum,
        isConnected,
        hasWalletClient: !!walletClient,
      });
      setSigner(null);
    }
  }, [isConnected, walletClient]);

  useEffect(() => {
    if (isConnected && chainId !== 421614) {
      setStatus(
        "Please switch to the Arbitrum Sepolia testnet in your wallet."
      );
      console.log("Wrong chain ID:", chainId);
    } else {
      setStatus("");
    }
  }, [isConnected, chainId]);

  async function shortenURL() {
    console.log("Starting shortenURL function...");
    setStatus("");

    if (!isConnected) {
      alert("Please connect your wallet first.");
      return;
    }

    if (chainId !== 421614) {
      alert("Please switch to the Arbitrum Sepolia testnet in your wallet.");
      return;
    }

    if (!shortCode || !longUrl) {
      alert("Please enter both a short code and a long URL.");
      return;
    }

    if (!signer) {
      console.error("No signer available");
      alert("No signer available. Please ensure your wallet is connected.");
      return;
    }

    try {
      setStatus("Transaction pending...");
      console.log("Getting contract instance...");
      const contract = getSignerContract(signer);
      console.log("Contract instance obtained:", contract.target);

      console.log("Sending transaction to set URL:", { shortCode, longUrl });
      const tx = await contract.setURL(shortCode, longUrl);
      console.log("Transaction sent. Hash:", tx.hash);
      setStatus(`Transaction sent. Hash: ${tx.hash}`);

      console.log("Waiting for transaction confirmation...");
      const receipt = await tx.wait();
      console.log("Transaction confirmed:", receipt);

      const newLink = `${window.location.origin}/${shortCode}`;
      setGeneratedLink(newLink);
      setStatus("Transaction successful!");

      console.log(`Shortened URL created: ${newLink}`);
    } catch (error) {
      console.error("Detailed error in shortenURL:", error);
      setStatus(`Error occurred: ${error.message || "Unknown error"}`);
    }
  }

  const copyToClipboard = () => {
    if (generatedLink) {
      navigator.clipboard.writeText(generatedLink);
      setCopySuccess("Copied!");
      setTimeout(() => setCopySuccess(""), 2000);
    }
  };

  return (
    <div className="w-full max-w-md space-y-8 bg-gray-dark-2 p-10 rounded-xl shadow-2xl border border-gray-dark-4">
      <h1 className="werey text-3xl text-center font-extrabold text-yellow-dark-9">
        Web3 URL Shortener
      </h1>
      <div className="flex sm:flex-row justify-center items-center gap-4">
        <ConnectButton />
      </div>
      <div className="mt-8 space-y-6">
        {isConnected && (
          <p className="text-center text-sm text-gray-dark-11">
            Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
          </p>
        )}
        <div className="space-y-4">
          <div>
            <label htmlFor="shortCode" className="sr-only">
              Short code
            </label>
            <input
              id="shortCode"
              type="text"
              placeholder="Short code (e.g. abc123)"
              value={shortCode}
              onChange={(e) => setShortCode(e.target.value)}
              className="w-full text-black px-3 py-2 bg-gray-dark-3 border border-gray-dark-6 rounded-md placeholder-gray-dark-8 text-gray-dark-12 focus:outline-none focus:ring-2 focus:ring-yellow-dark-9 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="longUrl" className="sr-only">
              Long URL
            </label>
            <input
              id="longUrl"
              type="text"
              placeholder="Long URL (e.g. https://example.com)"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              className="w-full px-3 text-black py-2 bg-gray-dark-3 border border-gray-dark-6 rounded-md placeholder-gray-dark-8 text-gray-dark-12 focus:outline-none focus:ring-2 focus:ring-yellow-dark-9 focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <button
            onClick={shortenURL}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium ${
              isConnected && !status.includes("Transaction pending")
                ? "bg-yellow-600 text-gray-dark-1 hover:bg-yellow-dark-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-dark-9"
                : "bg-yellow-900 text-gray-dark-8 cursor-not-allowed"
            }`}
            disabled={!isConnected || status.includes("Transaction pending")}
          >
            {status.includes("Transaction pending")
              ? "Processing..."
              : "Shorten"}
          </button>
        </div>
      </div>
      {status && (
        <div className="mt-4 text-center">
          <p
            className={`font-medium break-words ${
              status.includes("Error")
                ? "text-red-dark-11"
                : "text-yellow-dark-11"
            }`}
          >
            {status}
          </p>
        </div>
      )}
      {generatedLink && (
        <div className="mt-4 text-center">
          <p className="font-medium text-yellow-dark-9">
            Shortened URL:{" "}
            <a
              href={generatedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {generatedLink}
            </a>
            <button
              onClick={copyToClipboard}
              className="ml-2 text-sm text-yellow-400 hover:text-yellow-dark-10 focus:outline-none focus:ring-2 focus:ring-yellow-dark-9 focus:ring-offset-2 rounded"
            >
              Copy
            </button>
          </p>
          {copySuccess && (
            <p className="text-yellow-dark-11 mt-2">{copySuccess}</p>
          )}
        </div>
      )}
    </div>
  );
}
