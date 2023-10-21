import React from 'react'
import styled from 'styled-components'
import { AppBar } from '../../components/Appbar'
import { Empty } from './empty'
import { nfts } from '../../mock'
import { Card } from '../../components/Card'

const Container = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: column;
`

export const NFTs: React.FC = () => {
  console.log(nfts)
  return (
    <Container>
      <AppBar title='My Tokens' />
      <Empty />
      {
        nfts.map((nft) => (
          <Card token={nft} key={nft.token_id} />
        ))
      }
    </Container>
  )
}
