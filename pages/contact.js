import { Box, Flex } from '@rebass/emotion'
import { Hero, HeroText } from '../components/hero'
import { HalfAndHalf } from '../components/layouts'
import { Heading, Text, TextContainer } from '../components/content'

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
          Getting in touch
        </HeroText>
      </Flex>
    </Hero>
    <TextContainer>
      <Heading>Reach us through Slack</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </TextContainer>
  </Box>
)
