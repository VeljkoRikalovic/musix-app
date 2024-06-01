import { getAlbumById } from "../../data/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Song from "./Song";
import Loading from "../Loading";
import { useEffect } from "react";
import ErrorMessage from "./ErrorMessage";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useSongs } from "../../data/Context";

function Album() {
  const { favAlbum, addFavAlbum, removeFavAlbum } = useSongs();
  const navigate = useNavigate();
  let id = useParams();

  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.removeQueries({ queryKey: ["albumId"] });
  }, [queryClient]);

  const data = useQuery({
    queryKey: ["albumId"],
    queryFn: () => getAlbumById(id),
  });

  if (data.status === "pending") return <Loading />;
  if (data.status === "error") return <ErrorMessage />;

  const info = data?.data?.albums[0];

  return (
    <div className="h-[80vh] overflow-y-auto p-1 sm:m-3 sm:p-3">
      <div className="flex w-[100%] flex-col items-center sm:h-[15rem] sm:flex-row">
        <img
          className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px]"
          src={info?.images[0]?.url}
        />
        <div className="m-3 p-3">
          <h1 className="flex justify-between text-4xl">
            {info.name}{" "}
            {favAlbum.some((e) => e.name === info.name) ? (
              <button onClick={() => removeFavAlbum(info)}>
                <GoHeartFill />
              </button>
            ) : (
              <button
                onClick={() =>
                  addFavAlbum({
                    name: info.name,
                    img: info.images[0]?.url,
                    artist: info.artists[0]?.name,
                    id,
                    songs: info.tracks.items,
                  })
                }
              >
                <GoHeart />
              </button>
            )}
          </h1>

          <p className="mt-[3rem]">
            <span
              onClick={() => navigate(`/artistsId/${info.artists[0]?.id}`)}
              className="cursor-pointer"
            >
              {" "}
              {info.artists[0]?.name}
            </span>{" "}
            / {info.release_date} / {info.total_tracks} songs
          </p>
        </div>
      </div>
      <div className="sm:p-3">
        {info.tracks.items.map((e) => (
          <Song key={e.id} info={e} />
        ))}
      </div>
    </div>
  );
}

export default Album;
