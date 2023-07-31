import {
  createDefaultAminoConverters as createDefaultCosmosAminoConverters,
  AminoTypes as AminoTypesClass,
} from '@cosmjs/stargate'
import {
  createMicrotxAminoConverters,
  createERC20AminoConverters,
} from '../messages/index.js'

// TODO: Add missing Amino types (see x/**/codec.go)

export function createDefaultAminoConverters() {
  return {
    ...createDefaultCosmosAminoConverters(),

    ...createMicrotxAminoConverters(),
    ...createERC20AminoConverters(),
  }
}

export const AminoTypes = new AminoTypesClass(createDefaultAminoConverters())
