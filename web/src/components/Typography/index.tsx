import React from 'react'
import { StyledTypography } from './styles'

interface IProps {
  children: React.ReactNode
  size?: 'xs' | 'sm' | 'md' | 'bg' | 'lg' | 'xl' | 'xxl'
  color?: string
  weight?: number
  id?: string
  textAlign?: string
  margin?: string
  line?: string
  capitalize?: boolean
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: any) => void
}

export const Typography = (props: IProps): JSX.Element => {
  return <StyledTypography {...props}>{props.children}</StyledTypography>
}