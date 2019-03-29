import { Box, Flex, Button } from '@rebass/emotion'

import { Hero, HeroText } from '../components/hero'
import { HalfAndHalf } from '../components/layouts'
import { Heading, Text, Highlight } from '../components/content'

export default () => (
  <Box as='main' width={[1]}>
    <Hero
      alignItems='center'
      justifyContent={['center', 'flex-start']}
      px={[0, 4]}
      image='/static/kelley.jpg'
    >
      <Flex flexDirection='column' alignItems={['center', 'flex-start']}>
        <HeroText
          fontSize={[6, 8]}
          py={1}
          px={3}
          mb={2}
          css={{ fontWeight: 900 }}
        >
          BeaverHacks
        </HeroText>
        <HeroText py={2} px={3} fontSize={[4, 5]} css={{ fontWeight: 100 }}>
          Make something cool in a weekend
        </HeroText>
      </Flex>
    </Hero>
    <HalfAndHalf alignItems='flex-start'>
      <Flex
        alignItems='center'
        flexDirection='column'
        width={1}
        // px={[2, 3]}
        css={{ textAlign: 'center' }}
      >
        <Flex flexDirection='column' width={[1, 2 / 3]}>
          <Heading>Join Us</Heading>
          <Text>
            BeaverHacks is a <Highlight>hackathon event</Highlight> for Oregon
            State University students, organized by the OSU Hackathon Club.
          </Text>
        </Flex>
      </Flex>
      <Flex width={1} alignItems='center' flexDirection='column'>
        <Heading>Next Event</Heading>
        <Highlight mt={0}>March 29th, 2019</Highlight>
        <Flex>
          <Button
            mt={3}
            color='black'
            bg='transparent'
            border='3px solid orange'
            borderColor='black'
          >
            Learn More
          </Button>
          <Button
            mt={3}
            ml={2}
            color='white'
            bg='orange'
            // border='3px solid orange'
            // borderColor='black'
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>
    </HalfAndHalf>
  </Box>
)
