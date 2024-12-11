const hre = require("hardhat");

async function main() {
  const UrlShortener = await hre.ethers.getContractFactory("UrlShortener");
  const urlShortener = await UrlShortener.deploy();
  await urlShortener.deployed();
  console.log("UrlShortener deployed to:", urlShortener.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
