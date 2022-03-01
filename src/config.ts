// import { ChainId } from '@pancakeswap-libs/sdk';
import { ChainId } from '@spookyswap/sdk';
import { Configuration } from './tomb-finance/config';
import { BankInfo } from './tomb-finance';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: ChainId.MAINNET,
    networkName: 'Fantom Opera Mainnet',
    ftmscanUrl: 'https://ftmscan.com',
    defaultProvider: 'https://rpc.ftm.tools/',
    deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WFTM: ['0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', 18],
      USDC: ['0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', 6], // This is actually usdc on mainnet not fusdt
      '2OMB': ['0x7a6e4e3cc2ac9924605dca4ba31d1831c84b44ae', 18], //2OMB
      ETH: ['0x74b23882a30290451A17c44f4F05243b6b58C76d', 18],
      'USDT-FTM-LP': ['0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c', 18],
      'COMET-FTM-LP': ['0x06378DFab4d97ba1f67EbE68c94893e7fDDf9169', 18],
      'METEOR-FTM-LP': ['0x6F5CA58FBd1B2f335d1B9489216490fBEDcAda7e', 18],
    },
    baseLaunchDate: new Date('2022-02-21 14:00:00Z'),
    bondLaunchesAt: new Date('2022-02-21T14:00:00Z'),
    masonryLaunchesAt: new Date('2022-02-21T14:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: ChainId.MAINNET,
    networkName: 'Fantom Opera Mainnet',
    ftmscanUrl: 'https://ftmscan.com',
    defaultProvider: 'https://rpc.ftm.tools/',
    deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WFTM: ['0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', 18],
      USDC: ['0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', 6], // This is actually usdc on mainnet not fusdt
      '2OMB': ['0x7a6e4e3cc2ac9924605dca4ba31d1831c84b44ae', 18], //2OMB
      ETH: ['0x74b23882a30290451A17c44f4F05243b6b58C76d', 18],
      'USDT-FTM-LP': ['0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c', 18],
      'COMET-FTM-LP': ['0x06378DFab4d97ba1f67EbE68c94893e7fDDf9169', 18],
      'METEOR-FTM-LP': ['0x6F5CA58FBd1B2f335d1B9489216490fBEDcAda7e', 18],
    },
    baseLaunchDate: new Date('2022-02-21 14:00:00Z'),
    bondLaunchesAt: new Date('2022-02-21T14:00:00Z'),
    masonryLaunchesAt: new Date('2022-02-21T14:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding COMET
        - 2 = LP asset staking rewarding METEOR
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  CometFtmRewardPool: {
    name: 'Earn COMET by FTM',
    poolId: 0,
    sectionInUI: 0,
    contract: 'CometFtmRewardPool',
    depositTokenName: 'WFTM',
    earnTokenName: 'COMET',
    finished: false,
    sort: 1,
    closedForStaking: false,
  },
  CometUsdcRewardPool: {
    name: 'Earn COMET by USDC',
    poolId: 3,
    sectionInUI: 0,
    contract: 'CometUsdcGenesisRewardPool',
    depositTokenName: 'USDC',
    earnTokenName: 'COMET',
    finished: false,
    sort: 2,
    closedForStaking: false,
  },
  Comet2OmbRewardPool: {
    name: 'Earn COMET by 2OMB',
    poolId: 1,
    sectionInUI: 0,
    contract: 'Comet2OmbGenesisRewardPool',
    depositTokenName: '2OMB',
    earnTokenName: 'COMET',
    finished: false,
    sort: 3,
    closedForStaking: false,
  },
  CometethRewardPool: {
    name: 'Earn COMET by ETH',
    poolId: 2,
    sectionInUI: 0,
    contract: 'CometethGenesisRewardPool',
    depositTokenName: 'ETH',
    earnTokenName: 'COMET',
    finished: false,
    sort: 4,
    closedForStaking: false,
  },
  CometFtmLPMeteorRewardPool: {
    name: 'Earn METEOR by COMET-FTM LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'CometFtmLPMeteorRewardPool',
    depositTokenName: 'COMET-FTM-LP',
    earnTokenName: 'METEOR',
    finished: false,
    sort: 5,
    closedForStaking: false,
  },
  MeteorFtmLPMeteorRewardPool: {
    name: 'Earn METEOR by METEOR-FTM LP',
    poolId: 1,
    sectionInUI: 2,
    contract: 'MeteorFtmLPMeteorRewardPool',
    depositTokenName: 'METEOR-FTM-LP',
    earnTokenName: 'METEOR',
    finished: false,
    sort: 6,
    closedForStaking: false,
  },
};

export default configurations[process.env.NODE_ENV || 'development'];
