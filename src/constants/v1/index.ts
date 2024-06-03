import { Interface } from '@ethersproject/abi'
import { ChainId } from 'lib/@uniswap/uni-sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  [ChainId.BLAST]: '0x643dA4b01FED3B245BE37E756c131052337E178a',
  [ChainId.TAIKO]: '0x643dA4b01FED3B245BE37E756c131052337E178a',
  [ChainId.ARBITRUM_SEPOLIA]: '0x643dA4b01FED3B245BE37E756c131052337E178a'
}

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
