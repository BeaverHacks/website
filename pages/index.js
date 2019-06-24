import { Box, Flex, Button } from '@rebass/emotion'
import Head from 'next/head'
import ky from 'ky-universal'
import PropTypes from 'prop-types'
import { formatToTimeZone } from 'date-fns-timezone'

import { Hero, HeroText } from '../components/hero'
import { HalfAndHalf } from '../components/layouts'
import { Heading, Text, Highlight } from '../components/content'

const HomePage = ({ start, end, status }) => {
  let eventHeader
  switch (status) {
    case 'in progress':
      eventHeader = 'Event In Progress'
      break
    case 'past':
      eventHeader = 'Previous Event'
      break
    default:
      eventHeader = 'Next Event'
  }

  return (
    <Box as='main' width={[1]}>
      <Head>
        <title>Home | BeaverHacks</title>
      </Head>
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
      <HalfAndHalf alignItems='flex-start' mt={4}>
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
          <Heading>{eventHeader}</Heading>
          <Highlight>{start}</Highlight>
          <Text alone> to </Text>
          <Highlight>{end}</Highlight>
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
}

HomePage.getInitialProps = async ({ req, res }) => {
  let status = 'upcoming'
  const data = await ky(
    `${
      req
        ? `${req.headers['x-forwarded-proto']}://${
          req.headers['x-forwarded-host']
        }`
        : window.location.origin
    }/api/dates`
  ).json()
  console.log(data)
  const start = new Date(data.start)
  const end = new Date(data.end)
  if (start < Date.now() && end > Date.now()) {
    status = 'in progress'
  } else if (end < Date.now()) {
    status = 'past'
  }

  if (res) {
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')
  }

  return {
    start: formatToTimeZone(start, 'dddd, MMM Do [at] h A z', {
      timeZone: 'America/Los_Angeles'
    }),
    end: formatToTimeZone(end, 'dddd, MMM Do [at] h A z', {
      timeZone: 'America/Los_Angeles'
    }),
    status
  }
}

HomePage.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  status: PropTypes.oneOf(['upcoming', 'in progress', 'past'])
}

export default HomePage
