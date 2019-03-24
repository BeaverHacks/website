import { Box, Flex } from '@rebass/emotion'

import { Hero, HeroText } from '../components/hero'

export default () => (
  <Box as='main' width={[1]}>
    <Hero
      alignItems='center'
      justifyContent={['center', 'flex-start']}
      px={[0, 4]}
    >
      <Flex flexDirection='column' alignItems={['center', 'flex-start']}>
        <HeroText
          fontSize={[6, 8]}
          py={1}
          px={3}
          mb={2}
          css={{ fontWeight: 900 }}
        >
          BeaverHacks
        </HeroText>
        <HeroText py={2} px={3} fontSize={[4, 5]} css={{ fontWeight: 100 }}>
          Make something cool in a weekend
        </HeroText>
      </Flex>
    </Hero>
  </Box>
)
