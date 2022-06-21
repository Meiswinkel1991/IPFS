require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    mumbai: {
      url: ALCHEMY_API_KEY_URL,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [""],
    },
  },
  solidity: "0.8.4",
};
