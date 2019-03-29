import {
  Flex,
  Box,
  Heading as BaseHeading,
  Text as BaseText
} from '@rebass/emotion'

import { node, string, bool } from 'prop-types'

const TextContainer = ({ children }) => (
  <Flex width={1} justifyContent='center' px={3}>
    <Box css={{ flexBasis: '800px' }}>{children}</Box>
  </Flex>
)

TextContainer.propTypes = {
  children: node
}

const Heading = ({ children, ...props }) => (
  <BaseHeading
    fontFamily='sans'
    color='black'
    fontSize={[4, 6]}
    fontWeight={900}
    py={3}
    {...props}
  >
    {children}
  </BaseHeading>
)

Heading.propTypes = {
  children: string
}

const Text = ({ children, alone, ...props }) => (
  <BaseText
    fontFamily='serif'
    color='black'
    fontSize='18px'
    css={{ lineHeight: 1.7 }}
    mb={alone ? 0 : 4}
    mx={alone ? 0 : 3}
    {...props}
  >
    {children}
  </BaseText>
)

Text.propTypes = {
  children: node,
  alone: bool
}

const Highlight = ({ children, ...props }) => (
  <Text
    color='white'
    bg='orange'
    alone
    px={1}
    css={{ display: 'inline' }}
    {...props}
  >
    {children}
  </Text>
)

Highlight.propTypes = { children: string }

export { TextContainer, Heading, Text, Highlight }
