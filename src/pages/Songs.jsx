import { useQuery } from "@tanstack/react-query";
import { getSongs } from "../data/api";
import Loading from "../components/Loading";
import { msToMAndS } from "../hooks/hooks";
import { GoHeart, GoHeartFill } from "react-icons/go";
import ErrorMessage from "../components/Main/ErrorMessage";
import { useSongs } from "../data/Context";

function Songs() {
  const { favSongs, addFavSong, removeFavSong } = useSongs();

  const data = useQuery({
    queryKey: ["songs"],
    queryFn: getSongs,
  });

  if (data.status === "pending") return <Loading />;
  if (data.status === "error") return <ErrorMessage />;

  return (
    <div className="flex h-[90vh] flex-wrap items-center justify-center gap-3  overflow-y-auto text-center sm:p-3 ">
      {data.data.items.map((e) => {
        const info = e.track;
        const check = e.track.name;
        return (
          <div
            key={e.track.id}
            className="flex h-[12rem] w-[90%] flex-col justify-between rounded-2xl bg-background p-2 opacity-70 sm:gap-4 sm:p-5 md:h-[15rem] md:w-[30%] lg:h-[13rem]"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h2 className="text-xl font-medium">{e.track.name}</h2>
                <p className="text-accentOne">{e.track.artists[0].name}</p>
              </div>
              {favSongs.some((e) => e.name === check) ? (
                <button onClick={() => removeFavSong(info)} className="p-2">
                  <GoHeartFill />
                </button>
              ) : (
                <button
                  onClick={() =>
                    addFavSong({
                      name: e.track.name,
                      artist: e.track.artists[0].name,
                      preview: e.track.preview_url,
                      duration: e.track.duration_ms,
                    })
                  }
                  className="p-2"
                >
                  <GoHeart />
                </button>
              )}
            </div>
            <div className="flex items-center justify-between">
              <audio
                className="w-[7rem] sm:w-[9rem]"
                controls
                src={e.track.preview_url}
              />
              <p>{msToMAndS(e.track.duration_ms)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Songs;
