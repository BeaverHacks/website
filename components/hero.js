import { Flex, Text } from '@rebass/emotion'
import { opacify } from 'polished'
import styled from '@emotion/styled'

export const Hero = styled(Flex)`
  height: 70vh;

  @media (max-width: 40em) {
    height: 40vh;
  }
  background-image: url('${({ image }) => image}');
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
  clip-path: polygon(0 0, 1600px 15%, 1600px 100%, 0 85%);
  background-color: ${({ theme }) => theme.colors.orange}
`

export const HeroText = styled(Text)`
  background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  color: ${({ theme }) => theme.colors.black};
  width: fit-content;
  box-shadow: 5px 5px 12px 1px
    ${({ theme }) => opacify(-0.6, theme.colors.black)};
`
