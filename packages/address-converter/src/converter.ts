import {
  isValidChecksumAddress,
  stripHexPrefix,
  toChecksumAddress,
} from 'crypto-addr-codec'

import { bech32 } from 'bech32'

function makeChecksummedHexDecoder(chainId?: number) {
  return (data: string) => {
    const stripped = stripHexPrefix(data)
    if (
      !isValidChecksumAddress(data, chainId || null) &&
      stripped !== stripped.toLowerCase() &&
      stripped !== stripped.toUpperCase()
    ) {
      throw Error('Invalid address checksum')
    }
    return Buffer.from(stripHexPrefix(data), 'hex')
  }
}

function makeChecksummedHexEncoder(chainId?: number) {
  return (data: Buffer) =>
    toChecksumAddress(data.toString('hex'), chainId || null)
}

export const hexChecksumChain = (name: string, chainId?: number) => ({
  decoder: makeChecksummedHexDecoder(chainId),
  encoder: makeChecksummedHexEncoder(chainId),
  name,
})

export const ETH = hexChecksumChain('ETH')

export function makeBech32Encoder(prefix: string) {
  return (data: Buffer) => bech32.encode(prefix, bech32.toWords(data))
}

export function makeBech32Decoder(currentPrefix: string) {
  return (data: string) => {
    const { prefix, words } = bech32.decode(data)
    if (prefix !== currentPrefix) {
      throw Error('Unrecognised address format')
    }
    return Buffer.from(bech32.fromWords(words))
  }
}

export const bech32Chain = (name: string, prefix: string) => ({
  decoder: makeBech32Decoder(prefix),
  encoder: makeBech32Encoder(prefix),
  name,
})

export const ALTHEA = bech32Chain('ALTHEA', 'althea')

export const ethToAlthea = (ethAddress: string) => {
  const data = ETH.decoder(ethAddress)
  return ALTHEA.encoder(data)
}

export const altheaToEth = (altheaAddress: string) => {
  const data = ALTHEA.decoder(altheaAddress)
  return ETH.encoder(data)
}

export const GRAVITY = bech32Chain('GRAVITY', 'gravity')

export const ethToGravity = (ethAddress: string) => {
  const data = ETH.decoder(ethAddress)
  return GRAVITY.encoder(data)
}

export const gravityToEth = (gravityAddress: string) => {
  const data = GRAVITY.decoder(gravityAddress)
  return ETH.encoder(data)
}

export const gravityToAlthea = (gravityAddress: string) => {
  const data = GRAVITY.decoder(gravityAddress)
  return ALTHEA.encoder(data)
}

export const altheaToGravity = (altheaAddress: string) => {
  const data = ALTHEA.decoder(altheaAddress)
  return GRAVITY.encoder(data)
}

export const CANTO = bech32Chain('CANTO', 'canto')

export const ethToCanto = (ethAddress: string) => {
  const data = ETH.decoder(ethAddress)
  return CANTO.encoder(data)
}

export const cantoToEth = (cantoAddress: string) => {
  const data = CANTO.decoder(cantoAddress)
  return ETH.encoder(data)
}

export const ETHERMINT = bech32Chain('ETHERMINT', 'ethm')

export const ethToEthermint = (ethAddress: string) => {
  const data = ETH.decoder(ethAddress)
  return ETHERMINT.encoder(data)
}

export const ethermintToEth = (ethermintAddress: string) => {
  const data = ETHERMINT.decoder(ethermintAddress)
  return ETH.encoder(data)
}

export const EVMOS = bech32Chain('EVMOS', 'evmos')

export const ethToEvmos = (ethAddress: string) => {
  const data = ETH.decoder(ethAddress)
  return EVMOS.encoder(data)
}

export const evmosToEth = (evmosAddress: string) => {
  const data = EVMOS.decoder(evmosAddress)
  return ETH.encoder(data)
}

export const OSMOSIS = bech32Chain('OSMOSIS', 'osmo')

export const ethToOsmosis = (ethAddress: string) => {
  const data = ETH.decoder(ethAddress)
  return OSMOSIS.encoder(data)
}

export const osmosisToEth = (evmosAddress: string) => {
  const data = OSMOSIS.decoder(evmosAddress)
  return ETH.encoder(data)
}

export const COSMOS = bech32Chain('COSMOS', 'cosmos')

export const ethToCosmos = (ethAddress: string) => {
  const data = ETH.decoder(ethAddress)
  return COSMOS.encoder(data)
}

export const cosmosToEth = (evmosAddress: string) => {
  const data = COSMOS.decoder(evmosAddress)
  return ETH.encoder(data)
}

export const KYVE = bech32Chain('KORELLIA', 'kyve')

export const ethToKyve = (ethAddress: string) => {
  const data = ETH.decoder(ethAddress)
  return KYVE.encoder(data)
}

export const kyveToEth = (kyveAddress: string) => {
  const data = KYVE.decoder(kyveAddress)
  return ETH.encoder(data)
}

export const AKASH = bech32Chain('AKASH', 'akash')

export const ethToAkash = (ethAddress: string) => {
  const data = ETH.decoder(ethAddress)
  return AKASH.encoder(data)
}

export const akashToEth = (akashAddress: string) => {
  const data = AKASH.decoder(akashAddress)
  return ETH.encoder(data)
}

export const PLANQ = bech32Chain('PLANQ', 'plq')

export const ethToPlanq = (ethAddress: string) => {
  const data = ETH.decoder(ethAddress)
  return PLANQ.encoder(data)
}

export const planqToEth = (planqAddress: string) => {
  const data = PLANQ.decoder(planqAddress)
  return ETH.encoder(data)
}
