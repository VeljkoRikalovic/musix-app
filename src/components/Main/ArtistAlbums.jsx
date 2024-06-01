import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getArtistAlbums } from "../../data/api";
import Loading from "../Loading";
import { truncateText } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ErrorMessage from "./ErrorMessage";

function ArtistAlbums({ id }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["artistAlbum"] });
  }, [queryClient, id]);

  const data = useQuery({
    queryKey: ["artistAlbum"],
    queryFn: () => getArtistAlbums(id),
  });

  if (data.status === "pending") return <Loading />;
  if (data.status === "error") return <ErrorMessage />;

  const albums = data?.data?.data?.artist?.discography?.albums?.items;

  return (
    <div className="mt-5 flex h-[80vh] flex-wrap justify-center gap-2 p-2 text-center">
      {albums.map((e) => (
        <button
          onClick={() => navigate(`/albumId/${e.releases?.items[0]?.id}`)}
          key={e.releases.items[0]?.id}
          className="card w-40 items-center justify-center bg-secondaryOne p-4 shadow-xl sm:w-60"
        >
          <img
            src={e.releases.items[0]?.coverArt.sources[0].url}
            alt="album logo"
          />
          <div className="card-body items-center justify-center">
            <h2 className="card-title">
              {truncateText(e.releases.items[0]?.name, 25)}
            </h2>
          </div>
        </button>
      ))}
    </div>
  );
}

export default ArtistAlbums;
