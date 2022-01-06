import GradientLayout from "../../components/gradientLayout";
import SongsTable from "../../components/songsTable";
import prisma from "../../lib/prisma";

const Artist = ({ artist }) => {
  return (
    <GradientLayout
      color="gray"
      roundImage={false}
      title={artist.name}
      subtitle="TOP ARTIST"
      description={`${Math.floor(Math.random() * 1000000)} monthly listeners`}
      image={artist.avatar}
      isArtist={true}
    >
      <SongsTable songs={artist.songs} />
    </GradientLayout>
  );
};

export const getServerSideProps = async ({ query }) => {
  const [artist] = await prisma.artist.findMany({
    where: {
      id: +query.id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });
  return {
    props: { artist },
  };
};

export default Artist;
