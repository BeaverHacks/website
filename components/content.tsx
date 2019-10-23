import { Flex, Box } from "rebass";

import PropTypes from "prop-types";

export const TextContainer = ({ children }) => (
  <Flex width={1} justifyContent="center" px={3}>
    <Box sx={{ flexBasis: "800px" }}>{children}</Box>
  </Flex>
);

TextContainer.propTypes = {
  children: PropTypes.node
};
