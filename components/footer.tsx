import { FC } from 'react'
import { Flex, Text } from 'rebass'

const Footer: FC = () => {
  return (
    <Flex
      width={1}
      p={4}
      mt={5}
      bg="black"
      justifyContent="center"
      alignItems="center"
    >
      <Text color="white">
        &copy; OSU Hackathon Club {new Date().getFullYear()}
      </Text>
    </Flex>
  )
}

export default Footer
