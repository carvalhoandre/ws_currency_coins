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
  onClick?: (event: any) => void
  isHover?: boolean
}

export const Typography = (props: IProps, isHover = false): JSX.Element => {
  return <StyledTypography isHover={isHover} {...props}>{props.children}</StyledTypography>
}