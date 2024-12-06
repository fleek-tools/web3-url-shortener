// // lib/contract.js

// import { ethers } from "ethers";
// import urlShortenerJson from "../abi/URLShortener.json"; // Ensure this path is correct

// export function getSignerContract(signer) {
//   const contract = new ethers.Contract(
//     process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
//     urlShortenerJson.abi,
//     signer
//   );
//   console.log("Signer Contract instantiated:", contract);
//   return contract;
// }

import { ethers } from "ethers";
import urlShortenerJson from "../abi/URLShortener.json";

export function getSignerContract(signer) {
  if (!process.env.NEXT_PUBLIC_CONTRACT_ADDRESS) {
    throw new Error("Contract address not configured");
  }

  const contract = new ethers.Contract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    urlShortenerJson.abi,
    signer
  );
  return contract;
}
