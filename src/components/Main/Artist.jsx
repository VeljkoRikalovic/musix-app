import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getArtistById } from "../../data/api";
import Loading from "../Loading";
import { useEffect } from "react";
import ArtistAlbums from "./ArtistAlbums";
import ErrorMessage from "./ErrorMessage";
import { useSongs } from "../../data/Context";
import { GoHeart, GoHeartFill } from "react-icons/go";

function Artist() {
  let id = useParams();
  const { favArtist, addFavArtist, removeFavArtist } = useSongs();

  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.removeQueries({ queryKey: ["artist"] });
  }, [queryClient, id]);

  const data = useQuery({
    queryKey: ["artist"],
    queryFn: () => getArtistById(id),
  });

  if (data.status === "pending") return <Loading />;
  if (data.status === "error") return <ErrorMessage />;

  const artist = data?.data?.artists[0];

  return (
    <div className="h-[80vh] overflow-y-auto p-2 sm:m-3 sm:p-3">
      <div className="flex h-[25rem] w-[100%] flex-col  items-center sm:h-[15rem] sm:flex-row">
        <img
          className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px]"
          src={artist?.images[0]?.url}
        />
        <div className="m-3 p-3">
          <h1 className="flex items-center gap-5 text-2xl md:text-4xl">
            {artist.name}
            {favArtist.some((e) => e.name === artist.name) ? (
              <button onClick={() => removeFavArtist(artist)}>
                <GoHeartFill />
              </button>
            ) : (
              <button
                onClick={() =>
                  addFavArtist({
                    name: artist.name,
                    img: artist?.images[0]?.url,
                    id: artist.id,
                  })
                }
              >
                <GoHeart />
              </button>
            )}
          </h1>

          <p className="mt-[3rem]">
            {artist.type} / {artist.genres.join(", ")} /{" "}
            {artist.followers.total.toLocaleString(undefined, {
              minimumFractionDigits: 0,
            })}{" "}
            follwers
          </p>
        </div>
      </div>
      <ArtistAlbums id={id} />
    </div>
  );
}

export default Artist;
