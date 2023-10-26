import { useCallback, useMemo, useState } from 'react'
import { NFTWalletAPI } from '../models'
import { ServerWallerAPI } from '../apis/ServerWalletAPI'
import { MOCK_ADDRESS } from '../mock'
import { createModel } from 'hox'
import UnipassProvider from '../pw/UnipassProvider'
import PWCore, { IndexerCollector } from '@lay2/pw-core'
import { INDEXER_URL, NODE_URL, UNIPASS_URL } from '../constants'
import { unipassCache } from '../cache'

export interface UseWallet {
  api: NFTWalletAPI
  login: () => Promise<void>
  provider: UnipassProvider | undefined
  address: string
}

function useWallet(): UseWallet {
  const [provider, setProvider] = useState<UnipassProvider>()
  const login = useCallback(async () => {
    try {
      await new PWCore(NODE_URL).init(
        new UnipassProvider(UNIPASS_URL),
        new IndexerCollector(INDEXER_URL)
      )
      const p = PWCore.provider as UnipassProvider
      unipassCache.setUnipassAddress(p.address.toCKBAddress())
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      unipassCache.setUnipassEmail(p.email!)
      setProvider(p)
    } catch (error) {
      //
    }
    setProvider(PWCore.provider as UnipassProvider)
  }, [])

  const address = useMemo(() => {
    return provider?.address?.toCKBAddress() ?? MOCK_ADDRESS
  }, [provider])

  const api = useMemo(() => {
    return new ServerWallerAPI(address)
  }, [address])
  return {
    api,
    login,
    provider,
    address,
  }
}

export const useWalletModel = createModel(useWallet)
