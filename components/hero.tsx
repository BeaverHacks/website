import { Flex, Text } from "rebass";
import { opacify } from "polished";
import styled from "../utils/styled";

export const Hero = styled(Flex)<{ image?: string }>`
  height: 70vh;
  background-image: url('${({ image }) => image}');
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
  background-color: ${({ theme }) => theme.colors.orange}

  @media (max-width: 40em) {
    height: 40vh;
  }
`;

export const HeroText = styled(Text)`
  background: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.sans};
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.black};
  width: fit-content;
  box-shadow: 5px 5px 12px 1px
    ${({ theme }) => opacify(-0.6, theme.colors.black)};
`;
