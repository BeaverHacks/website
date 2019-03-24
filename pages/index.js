import { Box, Flex } from '@rebass/emotion'

import { Hero, HeroText } from '../components/hero'

export default () => (
  <Box as='main' width={[1]}>
    <Hero alignItems='center' justifyContent='flex-start' px={4}>
      <Flex flexDirection='column'>
        <HeroText fontSize={8} py={1} px={3} mb={2} css={{ fontWeight: 900 }}>
          BeaverHacks
        </HeroText>
        <HeroText py={2} px={3} fontSize={5} css={{ fontWeight: 100 }}>
          Make something cool in a weekend
        </HeroText>
      </Flex>
    </Hero>
  </Box>
)
