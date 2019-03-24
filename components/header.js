import Link from 'next/link'
import { Box, Flex, Text, Button } from '@rebass/emotion'

export default () => (
  <Flex
    as='nav'
    py={4}
    alignItems={['center']}
    flexDirection={['column', 'row']}
  >
    <Flex width={[1, 1 / 3]} mb={[4, 0]}>
      <Box mx={4}>
        <Link href='/'>
          <Text
            as='a'
            color='black'
            fontFamily='sans'
            css={{ ':hover': { textDecoration: 'underline' }, fontWeight: 700 }}
          >
            OSU Hackathon Club
          </Text>
        </Link>
      </Box>
    </Flex>
    <Flex
      width={[1, 2 / 3]}
      justifyContent={['space-evenly', 'flex-end']}
      flexDirection='row'
      alignItems='center'
    >
      <Box mx={[0, 4]}>
        <Link href='/about'>
          <Text
            as='a'
            color='black'
            fontFamily='sans'
            css={{ ':hover': { textDecoration: 'underline' }, fontWeight: 700 }}
          >
            About
          </Text>
        </Link>
      </Box>
      <Box mx={[0, 4]}>
        <Link href='/contact'>
          <Text
            color='black'
            as='a'
            fontFamily='sans'
            css={{ ':hover': { textDecoration: 'underline' }, fontWeight: 700 }}
          >
            Contact
          </Text>
        </Link>
      </Box>
      <Box mx={[0, 4]}>
        <Link href='/participate'>
          <Button as='a' bg='orange'>
            <Text fontFamily='sans'>Participate</Text>
          </Button>
        </Link>
      </Box>
    </Flex>
  </Flex>
)
