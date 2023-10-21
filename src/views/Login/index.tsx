import styled from "styled-components";
import React from "react";
import { ReactComponent as LogoSvg } from '../../assets/svg/logo.svg'
import { Button } from "@material-ui/core";


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
    return (
        <Container> 
            <Title>Wallet</Title>
            <LogoSvg className="logo"/>

            <Button> Login</Button>
        </Container>
    )
}

