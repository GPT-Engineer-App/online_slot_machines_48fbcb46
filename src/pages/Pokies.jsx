import React, { useState, useEffect, useContext } from "react";
import { Badge, Box, Button, Flex, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, SimpleGrid, Stack, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

const pokieGames = [
  {
    name: "Sizzling Hot",
    description: "Feel the heat of the classic fruit machine with a fiery twist.",
    image: "https://via.placeholder.com/150?text=Sizzling+Hot",
  },
  {
    name: "Book of Ra",
    description: "Unlock the secrets of the ancient book to find hidden treasures.",
    image: "https://via.placeholder.com/150?text=Book+of+Ra",
  },
  {
    name: "Dazzling Diamonds",
    description: "Shine bright like a diamond and line up the jewels to win big.",
    image: "https://via.placeholder.com/150?text=Dazzling+Diamonds",
  },
  {
    name: "Arctic Empress",
    description: "Conquer the icy lands and the heart of the Empress to claim your rewards.",
    image: "https://via.placeholder.com/150?text=Arctic+Empress",
  },
  {
    name: "Dragon's Pearl",
    description: "Seek the pearl guarded by the dragon and earn your fortune.",
    image: "https://via.placeholder.com/150?text=Dragon's+Pearl",
  },
  {
    name: "Lucky Lady's Charm",
    description: "Let the Lucky Lady charm you with her spells and bring luck your way.",
    image: "https://via.placeholder.com/150?text=Lucky+Lady's+Charm",
  },
  {
    name: "Mermaid's Pearl",
    description: "Dive into the ocean with the mermaids to find the precious pearls.",
    image: "https://via.placeholder.com/150?text=Mermaid's+Pearl",
  },
  {
    name: "Quest for Gold",
    description: "Embark on a quest to find the lost city of gold and its treasures.",
    image: "https://via.placeholder.com/150?text=Quest+for+Gold",
  },
  {
    name: "Reel King",
    description: "Take the throne and be crowned the king of slots.",
    image: "https://via.placeholder.com/150?text=Reel+King",
  },
  {
    name: "Ultra Hot",
    description: "Turn up the heat and get those classic fruits sizzling for big wins.",
    image: "https://via.placeholder.com/150?text=Ultra+Hot",
  },
  // Games inspired by https://5gringos9.com
  {
    name: "Treasure Hunters",
    description: "Join the intrepid explorers as they search for ancient artifacts and hidden riches.",
    image: "https://via.placeholder.com/150?text=Treasure+Hunters",
  },
  {
    name: "Golden Amulet",
    description: "Chase the elusive Golden Amulet to unlock untold fortunes.",
    image: "https://via.placeholder.com/150?text=Golden+Amulet",
  },
  {
    name: "Pharaoh's Rebirth",
    description: "Witness the rebirth of a Pharaoh and spin the reels for eternal glory.",
    image: "https://via.placeholder.com/150?text=Pharaoh's+Rebirth",
  },
  {
    name: "Safari Dreams",
    description: "Embark on a safari adventure where wild wins await amidst the savanna.",
    image: "https://via.placeholder.com/150?text=Safari+Dreams",
  },
  {
    name: "Pirate's Bounty",
    description: "Set sail in search of the Pirate's Bounty and claim your treasure.",
    image: "https://via.placeholder.com/150?text=Pirate's+Bounty",
  },
  {
    name: "Sun of Egypt",
    description: "Discover the ancient treasures hidden within the pyramids.",
    image: "https://via.placeholder.com/150?text=Sun+of+Egypt",
  },
  {
    name: "Aztec Sun",
    description: "Unlock the secrets of the Aztecs and claim golden riches.",
    image: "https://via.placeholder.com/150?text=Aztec+Sun",
  },
  // New game entry copied as a placeholder
  {
    name: "Mystic Elements",
    description: "Harness the power of the elements to unlock the secrets of the mystic stones.",
    image: "https://via.placeholder.com/150?text=Mystic+Elements",
  },
  // Existing placeholder entries
  {
    name: "Jungle Adventure",
    description: "Join the quest through the wild jungle to find hidden treasures.",
    image: "https://via.placeholder.com/150?text=Jungle+Adventure",
  },
  // More cloned game entries can be added here following the same structure
  {
    name: "Desert Treasure",
    description: "Search the desert sands for hidden treasures and ancient artifacts.",
    image: "https://via.placeholder.com/150?text=Desert+Treasure",
  },
];

import { MockAPIContext } from "../contexts/MockAPIContext";

const PokieCard = ({ pokie, played, isNew, isPopular, isPlaying, onPlay }) => {
  const { playGame } = useContext(MockAPIContext);

  // ...

  // ... existing PokieCard component code

  // Update the onPlay function to also save the game to favorites and mark it as played
  // The handlePlay function is removed since it is redundant and the existing onPlay prop is used instead.
  const { name, description, image } = pokie;
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const hoverBgColor = useColorModeValue("orange.200", "orange.500");
  const boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg={bgColor} _hover={{ bg: hoverBgColor }}>
      <Image src={played ? "https://via.placeholder.com/150?text=Played" : image} alt={name} />
      <Box p="6" bg={bgColor} _hover={{ bg: hoverBgColor, boxShadow: boxShadow }} transition="background-color 0.3s, box-shadow 0.3s">
        {isNew && (
          <Badge colorScheme="green" variant="solid" mr={2}>
            New
          </Badge>
        )}
        {isPopular && (
          <Badge colorScheme="red" variant="solid">
            Popular
          </Badge>
        )}
        <Heading size="md" my="2" color="orange.400">
          {name}
        </Heading>
        <Text mb="4">{played ? "You have played this game." : description}</Text>
        <Button rightIcon={<FaPlay />} colorScheme="orange" variant="solid" onClick={onPlay} isLoading={isPlaying} isDisabled={played} boxShadow="0 0 12px 3px rgba(255, 165, 0, 0.8)" aria-label={`Play ${name}`}>
          Play Now
        </Button>
      </Box>
    </Box>
  );
};

const Pokies = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedGame, setSelectedGame] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [filter, setFilter] = useState("all");
  const { favoriteGames, addGameToFavorites, playedGames, markGameAsPlayed } = useContext(MockAPIContext);
  const [filteredGames, setFilteredGames] = useState(pokieGames);

  // Mock function to handle marking a game as played, replace with context method or backend API call
  // Removed redundant local markGameAsPlayed in favor of context function
  // Move the useContext import to the top with other imports

  // ... inside Pokies component

  useEffect(() => {
    const filtered = pokieGames.filter((pokie) => {
      let isNew = pokie.name.includes("New"); // Assume a game is new if its name includes "New"
      let isPopular = pokie.name.includes("Popular"); // Assume a game is popular if its name includes "Popular"
      switch (filter) {
        case "new":
          return isNew;
        case "popular":
          return isPopular;
        case "played":
          return playedGames.includes(pokie.name);
        default:
          return true;
      }
    });
    setFilteredGames(filtered);
  }, [filter, playedGames]); // Adding playedGames to the dependency array to ensure the list updates when games are played

  // ... inside Pokies component
  const handlePokiePlay = (pokie) => {
    setSelectedGame(pokie);
    setIsPlaying(true);
    onOpen();

    // Call the playGame method from context to handle game play
    const { playGame } = useContext(MockAPIContext);
    playGame(pokie.name);

    setTimeout(() => {
      setIsPlaying(false);
      onClose();
      // Update the played list of games using the context method
      markGameAsPlayed(pokie.name);
    }, 2000); // Simulated play time of 2 seconds
  };
  // ... rest of the Pokies component

  return (
    <>
      <Flex direction="column" align="center" justify="center" minH="100vh" p={4}>
        <Heading mb={4} size="2xl" color="brand.800">
          Pokies
        </Heading>
        <Box mb={4}>
          <Text fontSize="xl">Total Games: {filteredGames.length}</Text>
          <RadioGroup onChange={setFilter} value={filter}>
            <Stack direction="row">
              <Radio value="all">All</Radio>
              <Radio value="new">New</Radio>
              <Radio value="popular">Popular</Radio>
              <Radio value="played">Played</Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
          {filteredGames.map((pokie) => (
            <PokieCard key={pokie.name} pokie={pokie} played={playedGames.includes(pokie.name)} isNew={pokie.isNew} isPopular={pokie.isPopular} isPlaying={isPlaying && selectedGame?.name === pokie.name} onPlay={() => handlePokiePlay(pokie)} />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};
export default Pokies;
