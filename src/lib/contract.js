import { ethers } from "ethers";
import urlShortenerJson from "../abi/URLShortener.json";

export function getSignerContract(signer) {
  if (!signer) {
    console.error("No signer provided to getSignerContract");
    throw new Error("No signer available");
  }

  const address = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
  console.log("Contract configuration:", {
    address,
    hasABI: !!urlShortenerJson.abi,
    signer: !!signer,
  });

  if (!address) {
    throw new Error("Contract address not configured");
  }

  return new ethers.Contract(address, urlShortenerJson.abi, signer);
}
