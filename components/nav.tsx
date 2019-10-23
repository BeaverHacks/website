import Link from "next/link";
import { Box, Flex, Text } from "rebass";

export default () => (
  <Flex
    as="nav"
    py={4}
    alignItems={["center"]}
    flexDirection={["column", "row"]}
  >
    <Flex width={[1, 1 / 3]} mb={[4, 0]}>
      <Box mx={4}>
        <Link href="/">
          <Text
            as="a"
            color="black"
            fontFamily="sans"
            sx={{
              transition: "0.1s ease-in-out",
              ":hover": { color: "orange" },
              fontWeight: 700
            }}
          >
            OSU Hackathon Club
          </Text>
        </Link>
      </Box>
    </Flex>
  </Flex>
);
