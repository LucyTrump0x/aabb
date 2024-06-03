import { ChainId } from 'lib/@uniswap/uni-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.BLAST]: '0xcA11bde05977b3631167028862bE2a173976CA11',
  [ChainId.TAIKO]: '0xcb2436774C3e191c85056d248EF4260ce5f27A9D',
  [ChainId.ARBITRUM_SEPOLIA]: '0xca11bde05977b3631167028862be2a173976ca11'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
