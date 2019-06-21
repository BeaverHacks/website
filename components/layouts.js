import { Flex } from '@rebass/emotion'
import { Children } from 'react'
import { node, bool } from 'prop-types'

const wideWidth = `1140px`
const narrowWidth = `940px`

const HalfAndHalf = ({ children, reverse, ...props }) => {
  const [first, ...remaining] = Children.toArray(children)

  return (
    <Flex justifyContent='center'>
      <Flex
        flexDirection={['column', reverse ? 'row-reverse' : 'row']}
        width={wideWidth}
        {...props}
      >
        <Flex px={3} width={[1, 1 / 2]}>
          {first}
        </Flex>
        <Flex px={3} width={[1, 1 / 2]}>
          {remaining}
        </Flex>
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
    <Flex justifyContent='center'>
      <Flex flexDirection={['column', 'row']} width={narrowWidth}>
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
    </Flex>
  )
}

Thirds.propTypes = {
  children: node
}

export { HalfAndHalf, Thirds }
