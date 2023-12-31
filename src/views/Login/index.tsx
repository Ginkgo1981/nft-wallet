import styled from 'styled-components'
import React, { useCallback, useState } from 'react'
import { ReactComponent as LogoSvg } from '../../assets/svg/logo.svg'
import { useWalletModel } from '../../hooks/useWallet'
import { useHistory } from 'react-router-dom'
import { RoutePath } from '../../routes'
import { Button } from '../../components/Button'

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: #fafafa;
  .logo {
    margin-top: 80px;
    margin-bottom: 56px;
  }
`

const Title = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  margin: 0;
`

export const Login: React.FC = () => {
  const { login } = useWalletModel()
  const history = useHistory()
  const [isLogining, setIsLoging] = useState(false)
  const loginBtnOnClick = useCallback(async () => {
    setIsLoging(true)
    await login()
    setIsLoging(false)
    history.push(RoutePath.NFTs)
  }, [login, history])

  return (
    <Container>
      <Title>Wallet</Title>
      <LogoSvg className="logo" />

      <Button
        onClick={loginBtnOnClick}
        type="primary"
        disabled={isLogining}
        isLoading={isLogining}
      >
        登录
      </Button>
    </Container>
  )
}
