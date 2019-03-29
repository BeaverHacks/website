import { Flex } from '@rebass/emotion'
import { Children } from 'react'
import { node, bool } from 'prop-types'

const HalfAndHalf = ({ children, reverse, ...props }) => {
  const [first, ...remaining] = Children.toArray(children)

  return (
    <Flex
      flexDirection={['column', reverse ? 'row-reverse' : 'row']}
      {...props}
    >
      <Flex px={3} width={[1, 1 / 2]} alignItems='center'>
        {first}
      </Flex>
      <Flex px={3} width={[1, 1 / 2]} alignItems='center'>
        {remaining}
      </Flex>
    </Flex>
  )
}

HalfAndHalf.propTypes = {
  children: node,
  reverse: bool
}

const Thirds = ({ children }) => {
  const [first, second, ...remaining] = Children.toArray(children)

  return (
    <Flex flexDirection={['column', 'row']}>
      <Flex px={3} width={[1, 1 / 3]} alignItems='center'>
        {first}
      </Flex>
      <Flex px={3} width={[1, 1 / 3]} alignItems='center'>
        {second}
      </Flex>
      <Flex px={3} width={[1, 1 / 3]} alignItems='center'>
        {remaining}
      </Flex>
    </Flex>
  )
}

Thirds.propTypes = {
  children: node
}

export { HalfAndHalf, Thirds }
