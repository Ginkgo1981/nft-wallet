import { ListMeta } from './nft'

export interface Tx {
  from_address: string
  to_address: string
  token_class_name: string
  tx_hash: number
  tx_state: TransactionStatus
  tx_direction: TransactionDirection
}
export enum TransactionStatus {
  Pending = 'pending',
  Committed = 'committed',
}

export enum TransactionDirection {
  Send = 'send',
  Receive = 'receive',
}

export interface Transaction {
  meta: ListMeta
  transaction: Tx[]
}
