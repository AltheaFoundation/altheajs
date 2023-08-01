import { JSONObject } from './types'
import createDomain from './createDomain'
import createTypes from './createTypes/index'
import flattenPayload from './flattenPayload'

// TODO: Add integration tests against a network.

export const PRIMARY_TYPE = 'Tx'

// TODO: Replace with cosmjs StdSignDoc
const createTypedData = (chainId: number, stdSignDoc: JSONObject) => {
  const transformResponse = flattenPayload(stdSignDoc)
  const types = createTypes(transformResponse)
  const domain = createDomain(chainId)
  const message = transformResponse.payload

  return {
    types,
    primaryType: PRIMARY_TYPE,
    domain,
    message,
  }
}

export default createTypedData
