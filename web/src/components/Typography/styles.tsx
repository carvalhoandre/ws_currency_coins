import styled from 'styled-components'
import { fontSize, grey } from '../../styles/theme'

interface Props {
  size?: 'xs' | 'sm' | 'md' | 'bg' | 'lg' | 'xl' | 'xxl'
  color?: string
  weight?: number
  textAlign?: string
  margin?: string
  line?: string
  capitalize?: boolean
}

const handleFontSize = (props: Props): string => {
  switch (props.size) {
    case 'xs':
      return fontSize.caption
    case 'sm':
      return fontSize.small
    case 'md':
      return fontSize.default
    case 'bg':
      return fontSize.heading
    case 'lg':
      return fontSize.heading2
    case 'xl':
      return fontSize.heading4
    case 'xxl':
      return fontSize.xl
    default:
      return fontSize.default
  }
}

export const StyledTypography = styled.p<Props>`
  font-size: ${handleFontSize};
  color: ${(p) => (p.color ? p.color : grey.dark)};
  line-height: ${(p) => (p.line ? p.line : '24px')};
  font-weight: ${(p) => p.weight};
  margin: ${(p) => p.margin || 'auto 0'};
  text-align: ${(p) => p.textAlign || 'center'};
  text-transform: ${(p) => p.capitalize ? 'capitalize' : ''};

  & u {
    border-bottom: 2px solid ${(p) => (p.color ? p.color : grey.dark)};
  }
`