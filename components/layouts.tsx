import { Flex, FlexProps } from 'rebass'
import { FC, ReactNode, Children } from 'react'

const wideWidth = '1280px'
const narrowWidth = '940px'

interface HalfAndHalfProps extends FlexProps {
  children: ReactNode;
  reverse?: boolean;
}

const HalfAndHalf: FC<HalfAndHalfProps> = props => {
  const [first, ...remaining] = Children.toArray(props.children)

  return (
    <Flex justifyContent="center">
      <Flex
        flexDirection={['column', props.reverse ? 'row-reverse' : 'row']}
        width={wideWidth}
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

interface ThirdsProps {
  children: ReactNode;
}

const Thirds: FC<ThirdsProps> = props => {
  const [first, second, ...remaining] = Children.toArray(props.children)

  return (
    <Flex justifyContent="center">
      <Flex flexDirection={['column', 'row']} width={narrowWidth}>
        <Flex px={3} width={[1, 1 / 3]} alignItems="center">
          {first}
        </Flex>
        <Flex px={3} width={[1, 1 / 3]} alignItems="center">
          {second}
        </Flex>
        <Flex px={3} width={[1, 1 / 3]} alignItems="center">
          {remaining}
        </Flex>
      </Flex>
    </Flex>
  )
}

export { HalfAndHalf, Thirds }
