import { useMemo } from 'react'
import { NFTWalletAPI } from '../models'
import { ServerWallerAPI } from '../apis/ServerWalletAPI'
import { MOCK_ADDRESS } from '../mock'
import { createModel } from 'hox'

export interface UseWallet {
  api: NFTWalletAPI
}

function useWallet(): UseWallet {
  const address = MOCK_ADDRESS
  const api = useMemo(() => {
    return new ServerWallerAPI(address)
  }, [address])
  return { api }
}

export const useWalletModel = createModel(useWallet)
