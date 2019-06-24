import { Flex } from '@rebass/emotion'
import { Text } from './content'

const Footer = () => {
  return (
    <Flex
      width={1}
      p={4}
      mt={5}
      bg='black'
      justifyContent='center'
      alignItems='center'
    >
      <Text color='white' alone>
        &copy; OSU Hackathon Club {new Date().getFullYear()}
      </Text>
    </Flex>
  )
}

export default Footer
