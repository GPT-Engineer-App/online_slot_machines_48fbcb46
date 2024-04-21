import React from "react";
import { Flex, Box, Text, Link, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem" bg="brand.900" color="white" boxShadow="sm">
      <Flex align="center" mr={5}>
        <Text fontSize="xl" fontWeight="bold" letterSpacing="wider">
          Double Diamond Casino
        </Text>
      </Flex>

      <HStack spacing={8} alignItems="center">
        <Link as={NavLink} to="/" style={({ isActive }) => ({ textDecoration: "none", fontWeight: isActive ? "bold" : "normal" })} aria-label="Home">
          Home
        </Link>
        <Link as={NavLink} to="/real-pokies" aria-label="Real Pokies">
          Real Pokies
        </Link>
        <Link as={NavLink} to="/favorites" aria-label="Favorites">
          Favorites
        </Link>
        <Link as={NavLink} to="/pokies" aria-label="Pokies">
          Pokies
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navigation;
