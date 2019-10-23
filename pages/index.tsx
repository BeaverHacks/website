import Head from "next/head";
import ky from "ky-universal";
import { NextPage } from "next";
import { Box, Flex, Text, Heading } from "rebass";
import { formatToTimeZone } from "date-fns-timezone";

import { DatesResponse } from "../models/dates";
import { Hero, HeroText } from "../components/hero";
import { HalfAndHalf } from "../components/layouts";

interface HomePageProps {
  start: string;
  end: string;
  status: "upcoming" | "in progress" | "past";
}

const HomePage: NextPage<HomePageProps> = ({ start, end, status }) => {
  let eventHeader: string;
  switch (status) {
    case "in progress":
      eventHeader = "Event In Progress";
      break;
    case "past":
      eventHeader = "Last Event";
      break;
    default:
      eventHeader = "Next Event";
  }

  return (
    <Box as="main" width={[1]}>
      <Head>
        <title>Home | BeaverHacks</title>
      </Head>
      <Hero
        alignItems="center"
        justifyContent={["center", "flex-start"]}
        px={[0, 4]}
        image="/kelley.jpg"
      >
        <Flex flexDirection="column" alignItems={["center", "flex-start"]}>
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
      <HalfAndHalf alignItems="flex-start" mt={4}>
        <Flex
          alignItems="center"
          flexDirection="column"
          width={1}
          css={{ textAlign: "center" }}
        >
          <Flex flexDirection="column" width={[1, 2 / 3]}>
            <Heading variant="heading">Join Us</Heading>
            <Text>
              BeaverHacks is a <Text variant="highlight">hackathon event</Text>{" "}
              for Oregon State University students, organized by the OSU
              Hackathon Club.
            </Text>
          </Flex>
        </Flex>
        <Flex width={1} alignItems="center" flexDirection="column">
          <Heading variant="heading">{eventHeader}</Heading>
          <Text variant="highlight">{start}</Text>
          <Text> to </Text>
          <Text variant="highlight">{end}</Text>
        </Flex>
      </HalfAndHalf>
    </Box>
  );
};

HomePage.getInitialProps = async ({ req, res }): Promise<HomePageProps> => {
  let status: "upcoming" | "in progress" | "past" = "upcoming";
  const data: DatesResponse = await ky(
    `${
      req
        ? `${req.headers["x-forwarded-proto"]}://${req.headers["x-forwarded-host"]}`
        : window.location.origin
    }/api/dates`
  ).json();
  const start = new Date(data.start);
  const end = new Date(data.end);
  if (start.getTime() < Date.now() && end.getTime() > Date.now()) {
    status = "in progress";
  } else if (end.getTime() < Date.now()) {
    status = "past";
  }

  if (res) {
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  }

  return {
    start: formatToTimeZone(start, "dddd, MMM Do [at] h A z", {
      timeZone: "America/Los_Angeles"
    }),
    end: formatToTimeZone(end, "dddd, MMM Do [at] h A z", {
      timeZone: "America/Los_Angeles"
    }),
    status
  };
};

export default HomePage;
