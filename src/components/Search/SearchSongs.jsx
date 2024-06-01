import { msToMAndS } from "../../hooks/hooks";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useSongs } from "../../data/Context";

function SearchSongs({ info }) {
  const { addFavSong, favSongs, removeFavSong } = useSongs();

  return (
    <div className="flex h-[55vh] flex-wrap items-center justify-center gap-3  overflow-y-auto text-center sm:h-[90vh] sm:p-3">
      {info.items.map((e) => {
        const info2 = e.data;
        const check = e.data.name;
        return (
          <div
            key={e.data.id}
            className="flex h-[12rem] w-[90%] flex-col justify-between rounded-2xl bg-background p-2 opacity-70 sm:gap-4 sm:p-5 md:h-[15rem] md:w-[30%] lg:h-[13rem]"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h2 className="text-xl font-medium">{e.data.name}</h2>
                <p className="text-accentOne">
                  {e.data.artists.items[0].profile.name}
                </p>
              </div>
              {favSongs.some((e) => e.name === check) ? (
                <button onClick={() => removeFavSong(info2)}>
                  <GoHeartFill />
                </button>
              ) : (
                <button
                  onClick={() =>
                    addFavSong({
                      name: e.data.name,
                      artist: e.data.artists.items[0].profile.name,
                      preview: "",
                      duration: e.data.duration.totalMilliseconds,
                    })
                  }
                >
                  <GoHeart />
                </button>
              )}
            </div>
            <div className="flex items-center justify-between">
              {/* <audio className="w-[7rem]" controls src={e.preview_url} /> */}
              <p>{msToMAndS(e.data.duration.totalMilliseconds)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchSongs;
