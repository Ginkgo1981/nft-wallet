import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { NFT, NFTDetail, NFTWalletAPI, Transaction } from '../models'
import { PER_ITEM_LIMIT, SERVER_URL } from '../constants'

export class ServerWallerAPI implements NFTWalletAPI {
  private readonly address: string
  private readonly axios: AxiosInstance

  constructor(address: string) {
    this.address = address
    this.axios = axios.create({ baseURL: SERVER_URL })
  }

  async getTransactions(page: number): Promise<AxiosResponse<Transaction>> {
    return await this.axios.get(`/holder_transactions/${this.address}`, {
      params: {
        page,
        limit: PER_ITEM_LIMIT,
      },
    })
  }

  async getNFTs(page: number): Promise<AxiosResponse<NFT[]>> {
    return await this.axios.get(`/holder_tokens/${this.address}`, {
      params: {
        page,
        limit: PER_ITEM_LIMIT,
      },
    })
  }

  async getNFTDetail(uuid: string): Promise<AxiosResponse<NFTDetail>> {
    return await this.axios.get(`/token_class/${uuid}`)
  }
}
