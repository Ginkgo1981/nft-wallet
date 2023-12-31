import React from 'react'
import styled from 'styled-components'
import { CircularProgress } from '@material-ui/core'

export interface ButtonProps {
  isLoading?: boolean
  type?: 'default' | 'primary'
  onClick?: () => void
  disabled?: boolean
}

export const ButtonContainer = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 40px;
  background-color: rgba(221, 221, 221, 0.5);

  /* Black/0.80 - Primary */
  color: rgba(0, 0, 0, 0.8);

  .loading {
    margin-left: 10px;
  }
`

export const Button: React.FC<ButtonProps> = (props) => {
  let bgColor = 'rgba(221, 221, 221, 0.5)'
  console.log(props)
  if (props.type === 'primary') {
    bgColor = 'rgba(251, 207, 164, 0.5)'
  }
  if (props.disabled === true) {
    bgColor = '#ccc'
  }
  return (
    <ButtonContainer
      disabled={props.disabled}
      onClick={props?.disabled === true ? undefined : props.onClick}
      style={{ background: bgColor }}
    >
      {props.children}
      {props.isLoading === true ? (
        <CircularProgress className="loading" size="1em" />
      ) : null}
    </ButtonContainer>
  )
}
