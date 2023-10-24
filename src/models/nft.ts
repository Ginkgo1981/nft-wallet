export interface NFTToken {
  token_class_name: string
  token_class_image: string
  token_class_uuid: string
  token_class_description: string
  token_class_total: number
  token_id: number
}

export interface NFT {
  holder_info: ListMeta
  token_list: NFTToken
}

export interface NFTDetail {
  name: string
  description: string
  renderer: string
  issuer_info: {
    name: string
    uuid: string
    avatar_url: string
  }

  total: number
  issued: number
}

export interface ListMeta {
  current_page: number
  token_count: number
}
