import { Flex, Text } from '@rebass/emotion'
import styled from '@emotion/styled'

export const Hero = styled(Flex)`
  height: 70vh;
  background-image: url('/static/kelley.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
  clip-path: polygon(0 0, 1600px 15%, 1600px 100%, 0 85%);
`

export const HeroText = styled(Text)`
  background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  color: ${({ theme }) => theme.colors.black};
  width: fit-content;
  box-shadow: 5px 2px 2px 1px rgba(0, 0, 0, 0.2);
`
