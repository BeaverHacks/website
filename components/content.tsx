import { FC } from 'react'
import { Flex, Box } from 'rebass'

export const TextContainer: FC = props => (
  <Flex width={1} justifyContent="center" px={3}>
    <Box sx={{ flexBasis: '800px' }}>{props.children}</Box>
  </Flex>
)
