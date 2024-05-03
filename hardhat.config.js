require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    hardhat:{},
    sepolia:{
      url:"https://sepolia.infura.io/v3/aea752a9f0dd4907a33c8c197d15f3ff",
      accounts:[process.env.PRIVATE_KEY]
    }
  }
};
