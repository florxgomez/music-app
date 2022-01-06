import { Box, Flex, LinkBox, LinkOverlay, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import NextLink from "next/link";
import GradientLayout from "../components/gradientLayout";
import { useMe } from "../lib/hooks";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {
  const { user } = useMe();
  return (
    <GradientLayout
      roundImage={false}
      color="purple"
      subtitle="Profile"
      title={user ? `${user?.firstName} ${user?.lastName}` : ""}
      description={`${user?.playlistsCount} public playlists`}
      image="/avatar.png"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artists this month
          </Text>
          <Text fontSize="sm">Only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="30px" width="15%" key={artist.name}>
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src={artist.avatar}
                  width="120px"
                  height="120px"
                  borderRadius="100%"
                />

                <Box marginTop="20px">
                  <LinkBox>
                    <NextLink
                      href={{
                        pathname: "/artist/[id]",
                        query: { id: artist.id },
                      }}
                      passHref
                    >
                      <LinkOverlay>
                        <Text fontSize="lg">{artist.name}</Text>
                      </LinkOverlay>
                    </NextLink>
                  </LinkBox>

                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

// this function is going to be run when someone requests this page
export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});
  return {
    props: { artists },
  };
};

export default Home;
