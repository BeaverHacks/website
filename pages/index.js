import { Box, Flex, Heading, Text } from '@rebass/emotion'

export default () => (
  <Box as='main' width={[1]}>
    <Flex
      alignItems='center'
      justifyContent='flex-start'
      px={4}
      css={{
        height: '70vh',
        backgroundImage: `url('/static/kelley.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        clipPath: 'polygon(0 0, 1600px 15%, 1600px 100%, 0 85%)',
        verticalAlign: 'center'
      }}
    >
      <Flex flexDirection='column'>
        <Heading
          bg='white'
          fontFamily='sans'
          color='black'
          fontSize='8'
          p={1}
          m={1}
          width='fit-content'
          css={{ fontWeight: 900 }}
        >
          BeaverHacks
        </Heading>
        <Text
          bg='white'
          fontFamily='sans'
          color='black'
          p={1}
          m={1}
          fontSize='5'
          width='fit-content'
        >
          Make something cool in a weekend
        </Text>
      </Flex>
    </Flex>
  </Box>
)
