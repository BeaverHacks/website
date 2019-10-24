import { Flex, Text } from 'rebass'
import { opacify } from 'polished'
import styled from '../utils/styled'

export const Hero = styled(Flex)<{ image?: string }>`
  height: 70vh;
  background-image: url('${(props): string => props.image}');
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
  background-color: ${(props): string => props.theme.colors.orange}

  @media (max-width: 40em) {
    height: 40vh;
  }
`

export const HeroText = styled(Text)`
  background: ${(props): string => props.theme.colors.white};
  font-family: ${(props): string => props.theme.fonts.sans};
  line-height: 1.2;
  color: ${(props): string => props.theme.colors.black};
  width: fit-content;
  box-shadow: 5px 5px 12px 1px
    ${(props): string => opacify(-0.6, props.theme.colors.black)};
`
